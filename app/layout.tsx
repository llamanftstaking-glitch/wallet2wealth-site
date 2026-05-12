import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { cookies, headers } from 'next/headers'
import { Provider } from '@/components/provider'
import { Pixels, GtmNoscript } from '@/components/analytics/Pixels'
import { CookieConsent } from '@/components/CookieConsent'
import { pickLang, SUPPORTED } from '@/lib/i18n'
import './global.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0E1A',
}

const SITE = 'https://wallet2wealth.com'

export const metadata: Metadata = {
  title: {
    default: 'Wallet to Wealth — Crypto for Beginners, $2.99',
    template: '%s | Wallet to Wealth',
  },
  description:
    'From Zero to Crypto. A clear, beginner-friendly PDF that walks you through wallets, coins, and your first real crypto move. Instant download for $2.99.',
  metadataBase: new URL(SITE),
  alternates: {
    canonical: SITE,
    languages: Object.fromEntries(SUPPORTED.map((l) => [l, l === 'en' ? SITE : `${SITE}/?lang=${l}`])),
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Wallet to Wealth',
    title: 'Wallet to Wealth — Crypto for Beginners, $2.99',
    description:
      'A clear, beginner-friendly PDF that walks you through wallets, coins, and your first real crypto move.',
    images: [
      { url: '/brand/og.webp', width: 1200, height: 1200, type: 'image/webp' },
      { url: '/brand/og.png', width: 1200, height: 1200, type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallet to Wealth — Crypto for Beginners',
    description: 'Instant crypto-beginner PDF for $2.99. Skip the YouTube rabbit holes.',
    images: ['/brand/og.webp'],
  },
  icons: {
    icon: [
      { url: '/brand/logo-no-bg.png', type: 'image/png' },
      { url: '/brand/logo-no-bg.webp', type: 'image/webp' },
    ],
    apple: '/brand/logo-no-bg.png',
  },
}

async function resolveLang(): Promise<string> {
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get('w2w_lang')?.value
  if (fromCookie) return pickLang(fromCookie)
  const accept = (await headers()).get('accept-language') || ''
  return pickLang(accept.split(',')[0])
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = await resolveLang()
  return (
    <html
      lang={lang}
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-[#0A0E1A] text-white antialiased">
        <GtmNoscript />
        <Pixels />
        <Provider>{children}</Provider>
        <CookieConsent lang={lang} />
      </body>
    </html>
  )
}
