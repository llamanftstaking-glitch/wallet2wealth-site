import { NextResponse } from 'next/server'

const SITE = 'https://wallet2wealth.com'

type Src = {
  source: string
  medium: string
}

const MAP: Record<string, Src> = {
  tt: { source: 'tiktok', medium: 'social' },
  ig: { source: 'instagram', medium: 'social' },
  yt: { source: 'youtube', medium: 'social' },
  x: { source: 'twitter', medium: 'social' },
}

// Redirect a short marketing link to the homepage, stamping UTM params
// and a 30-day attribution cookie so a later purchase can be traced
// back to the platform (and the specific post via ?c=).
export function shortRedirect(key: string, req: Request): NextResponse {
  const src = MAP[key]
  if (!src) return NextResponse.redirect(SITE, 302)

  const url = new URL(req.url)
  const campaign = url.searchParams.get('c') || 'organic'

  const dest = new URL(SITE)
  dest.searchParams.set('utm_source', src.source)
  dest.searchParams.set('utm_medium', src.medium)
  dest.searchParams.set('utm_campaign', campaign)

  const res = NextResponse.redirect(dest.toString(), 302)
  res.cookies.set('w2w_src', `${src.source}|${src.medium}|${campaign}`, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
  })
  return res
}
