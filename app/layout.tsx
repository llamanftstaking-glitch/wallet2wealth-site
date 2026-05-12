import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Provider } from '@/components/provider'
import { Pixels, GtmNoscript } from '@/components/analytics/Pixels'
import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'Wallet to Wealth — Crypto for Beginners, $2.99',
    template: '%s | Wallet to Wealth',
  },
  description:
    'From Zero to Crypto. A clear, beginner-friendly PDF that walks you through wallets, coins, and your first real crypto move. Instant download for $2.99.',
  metadataBase: new URL('https://wallet2wealth.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Wallet to Wealth',
    title: 'Wallet to Wealth — Crypto for Beginners, $2.99',
    description:
      'A clear, beginner-friendly PDF that walks you through wallets, coins, and your first real crypto move.',
    images: ['/brand/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wallet to Wealth — Crypto for Beginners',
    description: 'Instant crypto-beginner PDF for $2.99. Skip the YouTube rabbit holes.',
    images: ['/brand/og.png'],
  },
  icons: {
    icon: '/brand/logo-no-bg.png',
    apple: '/brand/logo-no-bg.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-[#0A0E1A] text-white antialiased">
        <GtmNoscript />
        <Pixels />
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
