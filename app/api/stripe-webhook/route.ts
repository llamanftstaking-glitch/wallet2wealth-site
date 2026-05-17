import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { stripe, STRIPE_WEBHOOK_SECRET } from '@/lib/stripe'
import { getSupabaseAdmin, generateToken, type SupportedLang, type OrderRow } from '@/lib/supabase'
import { sendPdfReceiptEmail } from '@/lib/email'

export const runtime = 'nodejs'
// Stripe requires the raw body for signature verification.
export const dynamic = 'force-dynamic'

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3333'
}

export async function POST(req: Request) {
  if (!STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
  }
  const signature = req.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  const raw = await req.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(raw, signature, STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Bad signature'
    return NextResponse.json({ error: `Invalid signature: ${msg}` }, { status: 400 })
  }

  if (event.type !== 'checkout.session.completed') {
    return NextResponse.json({ received: true, ignored: event.type })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const email = (session.customer_details?.email || session.customer_email || '').toLowerCase()
  const lang = ((session.metadata?.lang as SupportedLang) || 'en') as SupportedLang
  if (!email) {
    return NextResponse.json({ error: 'No email on session' }, { status: 400 })
  }

  const sb = getSupabaseAdmin()

  // Idempotency: orders.stripe_session_id is UNIQUE in the schema.
  // Use upsert to handle Stripe webhook retries cleanly.
  const orderPayload = {
    stripe_session_id: session.id,
    stripe_payment_intent:
      typeof session.payment_intent === 'string' ? session.payment_intent : null,
    email,
    amount_cents: session.amount_total ?? 299,
    currency: session.currency || 'usd',
    lang,
    status: 'paid' as const,
    country: session.customer_details?.address?.country || null,
    raw: session as unknown as Record<string, unknown>,
  }

  const { data: upserted, error: upsertErr } = await sb
    .from('orders')
    .upsert(orderPayload, { onConflict: 'stripe_session_id' })
    .select()
    .single<OrderRow>()

  if (upsertErr || !upserted) {
    return NextResponse.json(
      { error: `Order upsert failed: ${upsertErr?.message ?? 'unknown'}` },
      { status: 500 },
    )
  }

  const order = upserted

  // Mint a 14-day download token (idempotency: skip if one already exists for this order+lang).
  let token: string | undefined
  const { data: existingDl } = await sb
    .from('downloads')
    .select('token')
    .eq('order_id', order.id)
    .eq('lang', lang)
    .order('created_at', { ascending: false })
    .limit(1)

  if (existingDl && existingDl.length > 0) {
    token = existingDl[0].token
  } else {
    const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
    const newToken = generateToken(48)
    const { data: created, error: dlErr } = await sb
      .from('downloads')
      .insert({
        order_id: order.id,
        lang,
        token: newToken,
        expires_at: expiresAt,
        used_count: 0,
      })
      .select('token')
      .single<{ token: string }>()
    if (dlErr || !created) {
      return NextResponse.json(
        { error: `Download mint failed: ${dlErr?.message ?? 'unknown'}` },
        { status: 500 },
      )
    }
    token = created.token
  }

  const downloadUrl = `${siteUrl()}/api/download/${token}`
  await sendPdfReceiptEmail({ to: email, lang, downloadUrl })

  try {
    const tgToken = process.env.TELEGRAM_BOT_TOKEN
    const tgChat = process.env.TELEGRAM_ADMIN_CHAT_ID
    if (tgToken && tgChat) {
      const amount = ((session.amount_total ?? 299) / 100).toFixed(2)
      const country = session.customer_details?.address?.country || '?'
      const text = `New W2W order\n${email}\nLang: ${lang.toUpperCase()} | Country: ${country}\nAmount: $${amount} ${(session.currency || 'usd').toUpperCase()}`
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChat, text }),
      })
    }
  } catch {}

  // Auto-subscribe buyer + start the 3-touch nurture sequence.
  // First nurture email fires ~24h after purchase (the immediate PDF
  // email above is touch zero and is not part of the sequence).
  await sb.from('subscribers').upsert(
    {
      email,
      lang,
      source: 'purchase',
      consent: true,
      confirmed: true,
      seq_step: 0,
      seq_next_at: new Date(Date.now() + 24 * 3600_000).toISOString(),
    },
    { onConflict: 'email' },
  )

  return NextResponse.json({ received: true })
}
