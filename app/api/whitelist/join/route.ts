import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { sendEmail } from '@/lib/resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TELEGRAM_INVITE = 'https://t.me/+srZIaodHoDZiMjA5'

type Body = {
  email?: string
  orderId?: string
  lang?: string
  agreedTerms?: boolean
  joinedTelegram?: boolean
  utm?: {
    source?: string
    medium?: string
    campaign?: string
  }
}

const TERMS_VERSION = 'v1-2026-05-13'

export async function POST(req: Request) {
  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }
  if (!body.agreedTerms) {
    return NextResponse.json({ error: 'terms_required' }, { status: 400 })
  }

  const sb = getSupabaseAdmin()

  const headers = req.headers
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0].trim() || headers.get('x-real-ip') || null
  const ua = headers.get('user-agent') || null

  const row = {
    email,
    order_id: body.orderId || null,
    lang: body.lang || null,
    agreed_terms: true,
    agreed_terms_version: TERMS_VERSION,
    ip,
    user_agent: ua,
    utm_source: body.utm?.source || null,
    utm_medium: body.utm?.medium || (body.joinedTelegram ? 'telegram' : null),
    utm_campaign: body.utm?.campaign || 'presale-phase1',
  }

  const { error } = await sb.from('whitelist').upsert(row, { onConflict: 'email' })

  if (error) {
    console.error('whitelist_upsert_error', error)
    return NextResponse.json({ error: 'db_error' }, { status: 500 })
  }

  // Confirmation email (best-effort; don't fail the request if it errors)
  try {
    await sendEmail({
      to: email,
      subject: 'Phase 1 whitelist confirmed — join the private Telegram',
      tag: 'whitelist-confirm',
      html: confirmationHtml(),
      text: confirmationText(),
    })
  } catch (e) {
    console.warn('whitelist_email_failed', e)
  }

  return NextResponse.json({ ok: true })
}

function confirmationHtml() {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0A0E1A">
      <h1 style="font-size:22px;margin:0 0 12px">Your Phase 1 spot is locked.</h1>
      <p style="line-height:1.55;color:#333">
        You qualify for the GIZER ($GZR) Phase 1 presale whitelist. One step left —
        join the private Telegram. Allocation windows, chain selection, and KYC
        instructions drop in-channel first, before any public announcement.
      </p>
      <p style="text-align:center;margin:24px 0">
        <a href="${TELEGRAM_INVITE}"
           style="display:inline-block;background:#229ED9;color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:10px;font-size:15px">
          Join the private Telegram →
        </a>
      </p>
      <p style="line-height:1.55;color:#666;font-size:13px;margin-top:24px">
        Reminder: whitelist enrollment is not an allocation guarantee. Final allocations are
        subject to jurisdiction, KYC verification, and the presale terms you accepted.
      </p>
      <p style="line-height:1.55;color:#999;font-size:12px;margin-top:16px">
        Wallet to Wealth — keep this email for your records.
      </p>
    </div>
  `
}

function confirmationText() {
  return [
    'Your Phase 1 spot is locked.',
    '',
    'You qualify for the GIZER ($GZR) Phase 1 presale whitelist.',
    'One step left — join the private Telegram. Allocation windows, chain',
    'selection, and KYC instructions drop in-channel first.',
    '',
    `Join: ${TELEGRAM_INVITE}`,
    '',
    'Reminder: whitelist enrollment is not an allocation guarantee.',
    'Final allocations are subject to jurisdiction, KYC, and the presale terms you accepted.',
  ].join('\n')
}
