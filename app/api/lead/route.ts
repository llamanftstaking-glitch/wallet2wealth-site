import { NextResponse } from 'next/server'
import { getPocketBaseAdmin, SUPPORTED_LANGS, type SupportedLang } from '@/lib/pocketbase'
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

  const pb = await getPocketBaseAdmin()
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
  const ua = req.headers.get('user-agent')?.slice(0, 500) || ''

  try {
    await pb.collection('subscribers').create({
      email,
      lang,
      source,
      ip,
      user_agent: ua,
      consent: true,
      confirmed: false,
    })
  } catch (err) {
    // Likely duplicate — that is fine. Update language preference and continue.
    try {
      const existing = await pb.collection('subscribers').getFirstListItem(`email = "${email}"`)
      await pb.collection('subscribers').update(existing.id, { lang, source })
    } catch {
      const msg = err instanceof Error ? err.message : 'Subscriber save failed'
      return NextResponse.json({ error: msg }, { status: 500 })
    }
  }

  const sampleUrl = `${siteUrl()}/api/sample/${lang}`
  const buyUrl = `${siteUrl()}/buy?lang=${lang}`
  await sendSampleChapterEmail({ to: email, lang, sampleUrl, buyUrl })

  return NextResponse.json({ ok: true })
}
