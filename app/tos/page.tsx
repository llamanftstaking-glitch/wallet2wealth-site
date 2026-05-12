import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms that govern access to and use of wallet2wealth.com and the PDF product.',
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white/85">
      <Link href="/" className="text-sm text-white/55 hover:text-white">
        ← Wallet to Wealth
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-white/55">Last updated: 2026</p>

      <section className="mt-8 space-y-6 text-sm leading-relaxed">
        <p>
          By accessing wallet2wealth.com or purchasing the Wallet to Wealth PDF, you agree to these
          terms. If you do not agree, do not use the site or product.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Product</h2>
        <p className="text-white/80">
          The Wallet to Wealth PDF is an educational guide. It is not financial, legal, tax, or
          investment advice. Cryptocurrency carries real risk — never invest more than you can
          afford to lose, and always do your own research.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">License</h2>
        <p className="text-white/80">
          On purchase we grant you a personal, non-transferable license to read and store the PDF
          for your own use. Redistribution, resale, or public re-hosting is not permitted.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Refunds</h2>
        <p className="text-white/80">
          Because the product is a digital file delivered instantly, all sales are final. If your
          download fails or the file is corrupted, email{' '}
          <a className="text-[var(--w2w-cyan)]" href="mailto:hello@wallet2wealth.com">
            hello@wallet2wealth.com
          </a>{' '}
          and we will resend it.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Acceptable use</h2>
        <ul className="list-disc pl-6 text-white/80">
          <li>No scraping, mass-downloading, or automated abuse of the site or download links.</li>
          <li>No reverse engineering or DRM circumvention attempts.</li>
          <li>No use of the brand, logo, or copy without our written permission.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-white">Disclaimer</h2>
        <p className="text-white/80">
          The site and product are provided &quot;as is&quot;. To the maximum extent allowed by
          law, we disclaim all warranties and our total liability is limited to the amount you
          paid us in the past 12 months.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Contact</h2>
        <p className="text-white/80">
          Questions? Email{' '}
          <a className="text-[var(--w2w-cyan)]" href="mailto:hello@wallet2wealth.com">
            hello@wallet2wealth.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
