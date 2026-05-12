import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { stripe, STRIPE_WEBHOOK_SECRET } from '@/lib/stripe'
import { getPocketBaseAdmin, type SupportedLang } from '@/lib/pocketbase'
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

  const pb = await getPocketBaseAdmin()

  // Idempotency: do nothing if order already exists.
  let order
  try {
    order = await pb.collection('orders').getFirstListItem(`stripe_session_id = "${session.id}"`)
  } catch {
    // not found → create
  }

  if (!order) {
    order = await pb.collection('orders').create({
      stripe_session_id: session.id,
      stripe_payment_intent:
        typeof session.payment_intent === 'string' ? session.payment_intent : '',
      email,
      amount_cents: session.amount_total ?? 299,
      currency: session.currency || 'usd',
      lang,
      status: 'paid',
      country: session.customer_details?.address?.country || '',
      raw: session as unknown as Record<string, unknown>,
    })
  } else if (order.status !== 'paid') {
    order = await pb.collection('orders').update(order.id, { status: 'paid' })
  }

  // Look up the download row the PB hook minted.
  let token: string | undefined
  for (let i = 0; i < 5 && !token; i++) {
    try {
      const dl = await pb
        .collection('downloads')
        .getFirstListItem(`order = "${order.id}" && lang = "${lang}"`, { sort: '-created' })
      token = dl.token
    } catch {
      await new Promise((r) => setTimeout(r, 200))
    }
  }

  // Fallback: create the download here if the hook did not run in time.
  if (!token) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let t = ''
    for (let i = 0; i < 48; i++) t += chars[Math.floor(Math.random() * chars.length)]
    const expires = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
    const dl = await pb.collection('downloads').create({
      order: order.id,
      lang,
      token: t,
      expires_at: expires,
      used_count: 0,
    })
    token = dl.token
  }

  const downloadUrl = `${siteUrl()}/api/download/${token}`
  await sendPdfReceiptEmail({ to: email, lang, downloadUrl })

  // Also auto-subscribe the buyer to the upsell list.
  try {
    await pb.collection('subscribers').create({
      email,
      lang,
      source: 'purchase',
      consent: true,
      confirmed: true,
    })
  } catch {
    // already a subscriber — ignore
  }

  return NextResponse.json({ received: true })
}
