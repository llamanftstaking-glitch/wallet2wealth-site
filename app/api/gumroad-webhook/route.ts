import { NextResponse } from 'next/server'
import { getSupabaseAdmin, type SupportedLang } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Gumroad "Sale" ping webhook.
 *
 * Gumroad sends a POST as application/x-www-form-urlencoded.
 * Required fields we care about: email, product_id, sale_id, price (cents), permalink.
 * Optional: variants, full_name, ip_country, custom_fields[lang].
 *
 * Auth: Gumroad does NOT sign requests. We use a shared secret in a query param:
 *   https://wallet2wealth.com/api/gumroad-webhook?secret=<GUMROAD_WEBHOOK_SECRET>
 *
 * Docs: https://help.gumroad.com/article/40-ping
 */
export async function POST(req: Request) {
  const url = new URL(req.url)
  const expected = process.env.GUMROAD_WEBHOOK_SECRET || ''
  const provided = url.searchParams.get('secret') || ''
  if (!expected || provided !== expected) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const ct = req.headers.get('content-type') || ''
  const form: Record<string, string> = {}
  try {
    if (ct.includes('application/json')) {
      const j = (await req.json()) as Record<string, unknown>
      for (const [k, v] of Object.entries(j)) form[k] = String(v ?? '')
    } else {
      const text = await req.text()
      const params = new URLSearchParams(text)
      for (const [k, v] of params.entries()) form[k] = v
    }
  } catch (e) {
    return NextResponse.json({ error: 'parse_failed' }, { status: 400 })
  }

  const email = (form.email || '').toLowerCase().trim()
  if (!email) {
    return NextResponse.json({ error: 'no_email' }, { status: 400 })
  }

  const saleId = form.sale_id || form.order_number || ''
  const productId = form.product_id || form.permalink || ''
  const priceCents = Number(form.price || form.sale_price || 0) || 0
  const currency = (form.currency || 'usd').toLowerCase()
  const country = form.ip_country || null
  // Lang preference: explicit custom field, then variant, fallback en
  const lang = (form['custom_fields[lang]'] || form.variants || 'en')
    .toLowerCase()
    .slice(0, 2) as SupportedLang
  const safeLang: SupportedLang = (
    ['en', 'es', 'it', 'fr', 'pt', 'ru'] as SupportedLang[]
  ).includes(lang)
    ? lang
    : 'en'

  const sb = getSupabaseAdmin()

  // Record the order (idempotent on stripe_session_id field — reused as marketplace sale id w/ prefix).
  const stripeSessionId = `gumroad_${saleId || `${email}_${Date.now()}`}`
  await sb.from('orders').upsert(
    {
      stripe_session_id: stripeSessionId,
      stripe_payment_intent: null,
      email,
      amount_cents: priceCents,
      currency,
      lang: safeLang,
      status: 'paid' as const,
      country,
      raw: { source: 'gumroad', product_id: productId, ...form } as unknown as Record<
        string,
        unknown
      >,
    },
    { onConflict: 'stripe_session_id' },
  )

  // Seed subscriber + nurture (24h delay, same as Stripe path)
  await sb.from('subscribers').upsert(
    {
      email,
      lang: safeLang,
      source: 'gumroad',
      consent: true,
      confirmed: true,
      seq_step: 0,
      seq_next_at: new Date(Date.now() + 24 * 3600_000).toISOString(),
    },
    { onConflict: 'email' },
  )

  // Telegram admin ping
  try {
    const tgToken = process.env.TELEGRAM_BOT_TOKEN
    const tgChat = process.env.TELEGRAM_ADMIN_CHAT_ID
    if (tgToken && tgChat) {
      const amount = (priceCents / 100).toFixed(2)
      const text = `New W2W order (GUMROAD)\n${email}\nLang: ${safeLang.toUpperCase()} | Country: ${country ?? '?'}\nAmount: $${amount} ${currency.toUpperCase()}`
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: tgChat, text }),
      })
    }
  } catch {}

  return NextResponse.json({ received: true, source: 'gumroad' })
}
