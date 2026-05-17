import { NextResponse } from 'next/server'
import crypto from 'node:crypto'
import { getSupabaseAdmin, type SupportedLang } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Whop webhook handler.
 *
 * Whop signs webhooks with HMAC SHA256 in header `whop-signature`.
 * Set WHOP_WEBHOOK_SECRET in env. The secret is shown in Whop dev portal
 * after creating the webhook.
 *
 * Events we care about:
 *   - `membership.went_valid` (new paid member / one-time purchase)
 *   - `payment.succeeded`     (renewal — keep subscriber active)
 *
 * Docs: https://dev.whop.com/webhooks
 */
export async function POST(req: Request) {
  const raw = await req.text()
  const secret = process.env.WHOP_WEBHOOK_SECRET || ''
  const sig = req.headers.get('whop-signature') || ''

  if (!secret) {
    return NextResponse.json({ error: 'secret_not_configured' }, { status: 500 })
  }

  // HMAC verify
  try {
    const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex')
    // Whop signatures may come as `sha256=<hex>` or plain hex — support both
    const provided = sig.startsWith('sha256=') ? sig.slice(7) : sig
    const a = Buffer.from(expected, 'hex')
    const b = Buffer.from(provided, 'hex')
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return NextResponse.json({ error: 'bad_signature' }, { status: 401 })
    }
  } catch {
    return NextResponse.json({ error: 'bad_signature' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'bad_json' }, { status: 400 })
  }

  const event = String(body.event || body.type || '')
  if (!['membership.went_valid', 'payment.succeeded'].includes(event)) {
    return NextResponse.json({ received: true, ignored: event })
  }

  const data = (body.data as Record<string, unknown>) || {}
  const email = String((data.email as string) || (data.user_email as string) || '').toLowerCase()
  if (!email) {
    return NextResponse.json({ error: 'no_email' }, { status: 400 })
  }

  const membershipId = String(data.id || data.membership_id || '')
  const productId = String(data.product_id || data.product || '')
  const priceCents = Number((data.final_amount as number) || (data.amount as number) || 0)
  const currency = String((data.currency as string) || 'usd').toLowerCase()
  const country = String((data.country as string) || '') || null
  const lang: SupportedLang = 'en' // Whop doesn't pass lang — buyer picks on site after delivery

  const sb = getSupabaseAdmin()

  const stripeSessionId = `whop_${membershipId || `${email}_${Date.now()}`}`
  await sb.from('orders').upsert(
    {
      stripe_session_id: stripeSessionId,
      stripe_payment_intent: null,
      email,
      amount_cents: priceCents,
      currency,
      lang,
      status: 'paid' as const,
      country,
      raw: { source: 'whop', event, product_id: productId, ...data } as unknown as Record<
        string,
        unknown
      >,
    },
    { onConflict: 'stripe_session_id' },
  )

  // Only seed the nurture on first valid membership — don't reset on renewals
  if (event === 'membership.went_valid') {
    await sb.from('subscribers').upsert(
      {
        email,
        lang,
        source: 'whop',
        consent: true,
        confirmed: true,
        seq_step: 0,
        seq_next_at: new Date(Date.now() + 24 * 3600_000).toISOString(),
      },
      { onConflict: 'email' },
    )
  }

  try {
    const tgToken = process.env.TELEGRAM_BOT_TOKEN
    const tgChat = process.env.TELEGRAM_ADMIN_CHAT_ID
    if (tgToken && tgChat) {
      const amount = (priceCents / 100).toFixed(2)
      const text = `New W2W order (WHOP — ${event})\n${email}\nCountry: ${country ?? '?'}\nAmount: $${amount} ${currency.toUpperCase()}`
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChat, text }),
      })
    }
  } catch {}

  return NextResponse.json({ received: true, source: 'whop', event })
}
