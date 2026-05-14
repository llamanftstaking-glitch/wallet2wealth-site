import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { isValidEthAddress, isValidSolAddress, normalizeEth, normalizeSol } from '@/lib/wallets'
import { sendEmail } from '@/lib/resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Body = {
  email?: string
  ethAddress?: string
  solAddress?: string
  orderId?: string
  lang?: string
  agreedTerms?: boolean
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
  const eth = (body.ethAddress || '').trim()
  const sol = (body.solAddress || '').trim()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 })
  }
  if (!body.agreedTerms) {
    return NextResponse.json({ error: 'terms_required' }, { status: 400 })
  }
  if (!eth && !sol) {
    return NextResponse.json({ error: 'wallet_required' }, { status: 400 })
  }
  if (eth && !isValidEthAddress(eth)) {
    return NextResponse.json({ error: 'invalid_eth_address' }, { status: 400 })
  }
  if (sol && !isValidSolAddress(sol)) {
    return NextResponse.json({ error: 'invalid_sol_address' }, { status: 400 })
  }

  const sb = getSupabaseAdmin()

  const headers = req.headers
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0].trim() || headers.get('x-real-ip') || null
  const ua = headers.get('user-agent') || null

  const row = {
    email,
    eth_address: eth ? normalizeEth(eth) : null,
    sol_address: sol ? normalizeSol(sol) : null,
    order_id: body.orderId || null,
    lang: body.lang || null,
    agreed_terms: true,
    agreed_terms_version: TERMS_VERSION,
    ip,
    user_agent: ua,
    utm_source: body.utm?.source || null,
    utm_medium: body.utm?.medium || null,
    utm_campaign: body.utm?.campaign || null,
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
      subject: 'Whitelist confirmed — early access secured',
      tag: 'whitelist-confirm',
      html: confirmationHtml({ eth: row.eth_address, sol: row.sol_address }),
      text: confirmationText({ eth: row.eth_address, sol: row.sol_address }),
    })
  } catch (e) {
    console.warn('whitelist_email_failed', e)
  }

  return NextResponse.json({ ok: true })
}

function confirmationHtml({ eth, sol }: { eth: string | null; sol: string | null }) {
  const wallets = [
    eth ? `<li><strong>ETH</strong>: <code>${eth}</code></li>` : '',
    sol ? `<li><strong>SOL</strong>: <code>${sol}</code></li>` : '',
  ]
    .filter(Boolean)
    .join('')
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0A0E1A">
      <h1 style="font-size:22px;margin:0 0 12px">You're on the list.</h1>
      <p style="line-height:1.55;color:#333">
        Your spot on the GIZER ($GZR) presale whitelist is confirmed. We'll email you
        with allocation windows, KYC instructions, and chain selection before the
        public round opens.
      </p>
      <p style="line-height:1.55;color:#333">Registered wallets:</p>
      <ul style="line-height:1.7;color:#333;background:#f6f7fb;border-radius:8px;padding:14px 18px;list-style:disc inside">
        ${wallets}
      </ul>
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

function confirmationText({ eth, sol }: { eth: string | null; sol: string | null }) {
  return [
    "You're on the list.",
    '',
    'Your spot on the GIZER ($GZR) presale whitelist is confirmed.',
    "We'll email you with allocation windows, KYC instructions, and chain selection",
    'before the public round opens.',
    '',
    'Registered wallets:',
    eth ? `  ETH: ${eth}` : null,
    sol ? `  SOL: ${sol}` : null,
    '',
    'Reminder: whitelist enrollment is not an allocation guarantee.',
    'Final allocations are subject to jurisdiction, KYC, and the presale terms you accepted.',
  ]
    .filter((s) => s !== null)
    .join('\n')
}
