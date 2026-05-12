import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Wallet to Wealth handles personal information from buyers, subscribers, and visitors.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white/85">
      <Link href="/" className="text-sm text-white/55 hover:text-white">
        ← Wallet to Wealth
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-white/55">Last updated: 2026</p>

      <section className="mt-8 space-y-6 text-sm leading-relaxed">
        <p>
          Wallet to Wealth (&quot;we&quot;, &quot;us&quot;) operates wallet2wealth.com. This page
          explains what we collect, why, and how to remove your data.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Information we collect</h2>
        <ul className="list-disc pl-6 text-white/80">
          <li>
            <strong>Email address</strong> — when you buy the PDF or claim the free chapter.
          </li>
          <li>
            <strong>Payment details</strong> — processed by Stripe. We never see or store full card
            numbers.
          </li>
          <li>
            <strong>Order metadata</strong> — language, amount, country, timestamps.
          </li>
          <li>
            <strong>Technical data</strong> — IP and user agent, used for fraud detection only.
          </li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-white">How we use it</h2>
        <ul className="list-disc pl-6 text-white/80">
          <li>To deliver the product you purchased and the free preview you requested.</li>
          <li>To send occasional product updates (you can unsubscribe anytime).</li>
          <li>To run anti-fraud checks and meet tax / legal obligations.</li>
          <li>To measure ad performance via Meta, TikTok, Google, and PostHog pixels.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-white">Subprocessors</h2>
        <p className="text-white/80">
          Stripe, Resend, PocketBase, Meta, TikTok, Google Analytics, Google Tag Manager, PostHog.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Your rights</h2>
        <p className="text-white/80">
          Email{' '}
          <a className="text-[var(--w2w-cyan)]" href="mailto:privacy@wallet2wealth.com">
            privacy@wallet2wealth.com
          </a>{' '}
          to access, correct, export, or delete data. GDPR and CCPA requests handled within 30 days.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Children</h2>
        <p className="text-white/80">
          Not directed to children under 16. We do not knowingly collect data from them.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Changes</h2>
        <p className="text-white/80">
          Updates posted on this page. Material changes are also emailed to active subscribers.
        </p>
      </section>
    </main>
  )
}
