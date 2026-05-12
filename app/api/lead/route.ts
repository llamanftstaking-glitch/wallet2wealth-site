import { NextResponse } from 'next/server'
import { getSupabaseAdmin, SUPPORTED_LANGS, type SupportedLang } from '@/lib/supabase'
import { sendSampleChapterEmail } from '@/lib/email'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3333'
}

export async function POST(req: Request) {
  let body: { email?: string; lang?: string; source?: string } = {}
  try {
    body = (await req.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()
  const lang = (body.lang || 'en') as SupportedLang
  const source = (body.source || 'lead-magnet').slice(0, 64)

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email' }, { status: 400 })
  }
  if (!SUPPORTED_LANGS.includes(lang)) {
    return NextResponse.json({ error: 'Unsupported language' }, { status: 400 })
  }

  const sb = getSupabaseAdmin()
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
  const ua = req.headers.get('user-agent')?.slice(0, 500) || ''

  // Upsert by unique email — keeps latest lang/source/metadata.
  const { error } = await sb.from('subscribers').upsert(
    {
      email,
      lang,
      source,
      ip,
      user_agent: ua,
      consent: true,
      confirmed: false,
    },
    { onConflict: 'email' },
  )

  if (error) {
    return NextResponse.json({ error: `Subscribe failed: ${error.message}` }, { status: 500 })
  }

  const sampleUrl = `${siteUrl()}/api/sample/${lang}`
  const buyUrl = `${siteUrl()}/buy?lang=${lang}`
  await sendSampleChapterEmail({ to: email, lang, sampleUrl, buyUrl })

  return NextResponse.json({ ok: true })
}
