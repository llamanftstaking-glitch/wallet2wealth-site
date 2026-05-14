import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { sendEmail } from '@/lib/resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Body = {
  email?: string
  lang?: string
  utm?: { source?: string; medium?: string; campaign?: string }
}

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://wallet2wealth.com'

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

  const sb = getSupabaseAdmin()
  const headers = req.headers
  const ip =
    headers.get('x-forwarded-for')?.split(',')[0].trim() || headers.get('x-real-ip') || null
  const ua = headers.get('user-agent') || null

  const { error } = await sb.from('chapter_leads').upsert(
    {
      email,
      lang: body.lang || null,
      source: 'exit-intent',
      ip,
      user_agent: ua,
      utm_source: body.utm?.source || null,
      utm_medium: body.utm?.medium || null,
      utm_campaign: body.utm?.campaign || null,
    },
    { onConflict: 'email' },
  )
  if (error) {
    console.error('chapter_lead_upsert_error', error)
    return NextResponse.json({ error: 'db_error' }, { status: 500 })
  }

  let delivered = false
  try {
    await sendEmail({
      to: email,
      subject: 'Your free chapter — How to spot a crypto scam in 30 seconds',
      tag: 'chapter-excerpt',
      html: chapterHtml(),
      text: chapterText(),
    })
    delivered = true
    await sb
      .from('chapter_leads')
      .update({ delivered: true, delivered_at: new Date().toISOString() })
      .eq('email', email)
  } catch (e) {
    console.warn('chapter_email_failed', e)
  }

  return NextResponse.json({ ok: true, delivered })
}

function chapterHtml() {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0A0E1A">
      <h1 style="font-size:22px;margin:0 0 12px">Your free chapter is here.</h1>
      <p style="line-height:1.55;color:#333">
        This is one chapter from the full <strong>Wallet to Wealth</strong> guide — the one most
        beginners need first. It's the difference between losing your first $100 and not.
      </p>
      <h2 style="font-size:18px;margin:24px 0 8px">5 Red Flags Every Crypto Beginner Should Know</h2>
      <ol style="line-height:1.7;color:#333;padding-left:18px">
        <li><strong>"Guaranteed returns."</strong> No real investment guarantees returns. None.</li>
        <li><strong>Urgency + DM.</strong> If someone pressures you to "buy now" in a DM, leave.</li>
        <li><strong>Wallet-drain links.</strong> Never "verify your wallet" from a link in chat.</li>
        <li><strong>Celebrity giveaways.</strong> No real celebrity sends free crypto.</li>
        <li><strong>Unaudited tokens with massive APYs.</strong> Math doesn't lie — yields that high mean someone is selling, not earning.</li>
      </ol>
      <p style="line-height:1.55;color:#333;margin-top:24px">
        Want the rest? The full guide covers wallets, your first buy, market cycles, and a
        7-day action plan. <strong>$2.99 — instant delivery.</strong>
      </p>
      <p style="margin:24px 0">
        <a href="${SITE}/buy"
           style="display:inline-block;background:#0A0E1A;color:#fff;text-decoration:none;
                  padding:12px 22px;border-radius:8px;font-weight:600">
          Get the full guide — $2.99
        </a>
      </p>
      <p style="line-height:1.55;color:#999;font-size:12px;margin-top:16px">
        Wallet to Wealth · You're receiving this because you requested the free chapter.
      </p>
    </div>
  `
}

function chapterText() {
  return [
    'Your free chapter is here.',
    '',
    '5 Red Flags Every Crypto Beginner Should Know',
    '',
    '1. "Guaranteed returns." No real investment guarantees returns. None.',
    '2. Urgency + DM. If someone pressures you to "buy now" in a DM, leave.',
    '3. Wallet-drain links. Never "verify your wallet" from a link in chat.',
    '4. Celebrity giveaways. No real celebrity sends free crypto.',
    '5. Unaudited tokens with massive APYs. Yields that high = someone is selling.',
    '',
    `Want the rest? Full guide — $2.99 — ${SITE}/buy`,
  ].join('\n')
}
