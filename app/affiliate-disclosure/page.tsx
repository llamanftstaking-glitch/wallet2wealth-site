import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'How Wallet to Wealth uses affiliate links — what counts, what does not, and the standard we use to recommend tools.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white/85">
      <Link href="/" className="text-sm text-white/55 hover:text-white">
        ← Wallet to Wealth
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Affiliate Disclosure</h1>
      <p className="mt-2 text-sm text-white/55">Last updated: 2026</p>

      <section className="mt-8 space-y-6 text-sm leading-relaxed">
        <p>
          Some of the outbound links on wallet2wealth.com and inside the Wallet to Wealth PDF are
          affiliate links. That means if you click through and sign up or buy, we may receive a
          small commission. You pay nothing extra — pricing on the partner site is the same as if
          you had landed there directly.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Our standard for recommending a tool</h2>
        <p className="text-white/80">
          We only list tools we would hand to a beginner family member. That is the standard. If a
          product is not safe for a complete beginner — for example, leveraged trading platforms,
          unregulated offshore exchanges, or meme-coin launchpads — it does not get featured here,
          affiliate program or not.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Categories we currently feature</h2>
        <ul className="list-disc space-y-1 pl-6 text-white/80">
          <li>Beginner-friendly exchanges (Coinbase, Kraken)</li>
          <li>Self-custody wallets (Trust Wallet, MetaMask)</li>
          <li>Hardware wallets (Ledger)</li>
          <li>Market data and portfolio trackers (CoinMarketCap)</li>
          <li>Crypto tax tools (Koinly, CoinTracker)</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-white">What this means in practice</h2>
        <p className="text-white/80">
          Affiliate revenue helps fund the cost of writing, translating, and updating Wallet to
          Wealth so we can keep the PDF accessible at a low price. It does not change which tools we
          recommend or where we rank them. We will tell you which option we prefer for beginners,
          and why, regardless of the commission.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Not financial advice</h2>
        <p className="text-white/80">
          Recommendations here are about onboarding tools, not investment guidance. Cryptocurrency
          carries real risk. Always do your own research and consult a licensed professional before
          making financial decisions.
        </p>

        <h2 className="mt-8 text-xl font-bold text-white">Contact</h2>
        <p className="text-white/80">
          Questions, broken links, or suggestions for tools we should evaluate?{' '}
          <a className="text-[var(--w2w-cyan)]" href="mailto:hello@wallet2wealth.com">
            hello@wallet2wealth.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
