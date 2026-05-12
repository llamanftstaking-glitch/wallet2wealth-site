import { NextResponse } from 'next/server'
import { stripe, STRIPE_PRICE_ID } from '@/lib/stripe'
import { SUPPORTED_LANGS, type SupportedLang } from '@/lib/pocketbase'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3333'
}

export async function POST(req: Request) {
  let body: { email?: string; lang?: string } = {}
  try {
    body = (await req.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()
  const lang = (body.lang || 'en') as SupportedLang

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email' }, { status: 400 })
  }
  if (!SUPPORTED_LANGS.includes(lang)) {
    return NextResponse.json({ error: 'Unsupported language' }, { status: 400 })
  }
  if (!STRIPE_PRICE_ID) {
    return NextResponse.json(
      { error: 'Stripe price not configured. Set STRIPE_PRICE_ID.' },
      { status: 500 },
    )
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      customer_email: email,
      allow_promotion_codes: true,
      metadata: { lang, email },
      success_url: `${siteUrl()}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl()}/buy?canceled=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Stripe error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
