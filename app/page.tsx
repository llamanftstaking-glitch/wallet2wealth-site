import Image from 'next/image'
import Link from 'next/link'
import {
  Wallet,
  Coins,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  Zap,
  Star,
  Download,
  CheckCircle2,
} from 'lucide-react'

const chapters = [
  {
    icon: Wallet,
    title: 'What Is a Crypto Wallet?',
    body: 'Hot wallets vs cold wallets — explained without the tech overwhelm.',
  },
  {
    icon: Coins,
    title: 'Bitcoin, Ethereum & Beyond',
    body: "The coins that actually matter for beginners (and why most don't).",
  },
  {
    icon: ShieldCheck,
    title: 'Staying Safe from Scams',
    body: 'The 5 red flags every beginner must know before sending a single dollar.',
  },
  {
    icon: TrendingUp,
    title: 'How to Buy Your First Coin',
    body: 'Step-by-step exchange walkthrough — Coinbase, Kraken, and Binance covered.',
  },
  {
    icon: BookOpen,
    title: 'Understanding Market Cycles',
    body: 'Bull markets, bear markets — what history tells us and how to stay calm.',
  },
  {
    icon: Zap,
    title: 'Your First Action Plan',
    body: 'A simple 7-day plan to go from zero to your first crypto holding.',
  },
]

const audience = [
  {
    profile: '"I keep hearing about crypto but have no idea where to start."',
    body: "You've watched the headlines for years. This guide is your on-ramp.",
  },
  {
    profile: '"I tried learning but got lost in technical jargon."',
    body: 'Plain English only. Zero assumed knowledge.',
  },
  {
    profile: '"I don\'t want to risk much — is $2.99 really worth it?"',
    body: 'At this price, the real risk is staying on the sideline.',
  },
]

const faqs = [
  {
    q: 'What exactly do I get for $2.99?',
    a: 'A beginner-friendly PDF (instant download + emailed copy) covering wallets, coins, scams, your first purchase, market cycles, and a 7-day action plan.',
  },
  {
    q: 'Why so cheap?',
    a: 'The goal is to help you start, not gatekeep. If $2.99 helps you avoid one scam, the guide already paid for itself many times over.',
  },
  {
    q: 'How do I receive it?',
    a: 'Two ways. You get an instant download link on the thank-you page, plus a copy emailed to you immediately after checkout.',
  },
  {
    q: 'Is this financial advice?',
    a: 'No. This is education — the basics nobody bothered to explain to you. Always do your own research before investing.',
  },
  {
    q: 'Will this work for someone who is completely non-technical?',
    a: 'Yes. That is exactly who it is written for. If you can use email, you can follow this guide.',
  },
]

const reviews = [
  {
    name: 'Mia R.',
    role: 'First-time buyer',
    body: 'I bought my first Bitcoin the same day. The wallet section alone was worth way more than $2.99.',
  },
  {
    name: 'Daniel K.',
    role: 'Self-taught',
    body: 'Finally a guide that does not assume I already know what gas fees are. Highlighter dry by chapter 3.',
  },
  {
    name: 'Sofia A.',
    role: 'Skeptic',
    body: 'I almost did not buy it because of the price. Turns out cheap does not mean low value.',
  },
]

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="w2w-blob"
          style={{ width: 520, height: 520, top: -120, left: -100, background: '#4DEEEA' }}
        />
        <div
          className="w2w-blob"
          style={{
            width: 480,
            height: 480,
            top: 60,
            right: -120,
            background: '#5BC8FF',
            animationDelay: '2s',
          }}
        />
        <div
          className="w2w-blob"
          style={{
            width: 420,
            height: 420,
            bottom: -160,
            left: '40%',
            background: '#B8A9FF',
            animationDelay: '4s',
          }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <Image
          src="/brand/logo-no-bg.png"
          alt="Wallet to Wealth"
          width={180}
          height={180}
          priority
          className="drop-shadow-[0_0_36px_rgba(91,200,255,0.45)]"
        />

        <span className="w2w-glass inline-flex items-center gap-2 px-3 py-1 text-sm text-white/80">
          <Star className="h-4 w-4 text-[var(--w2w-lavender)]" />
          Crypto Beginner Guide · 2026 Edition
        </span>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          From Zero to Crypto.
          <br />
          <span className="w2w-gradient-text">Finally, a Guide That Makes Sense.</span>
        </h1>

        <p className="max-w-2xl text-lg text-white/75 md:text-xl">
          Skip the YouTube rabbit holes. Get a clear, beginner-friendly PDF that walks you through
          wallets, coins, and your first real crypto move.
        </p>

        <div className="flex flex-col items-center gap-2">
          <div className="text-6xl font-bold text-[var(--w2w-cyan)] md:text-7xl">$2.99</div>
          <div className="text-sm text-white/60">Less than a coffee. Yours instantly.</div>
        </div>

        <Link
          href="/buy"
          className="w2w-cta inline-flex h-14 items-center justify-center rounded-xl px-8 text-lg font-bold"
        >
          Get Instant Access — $2.99
        </Link>

        <div className="flex items-center gap-2 text-sm text-white/55">
          <Download className="h-4 w-4" />
          Instant PDF download · Emailed too
        </div>
      </div>
    </section>
  )
}

function SocialProofBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-sm text-white/80 md:flex-row md:gap-8">
        <span className="flex items-center gap-2">
          <Download className="h-4 w-4 text-[var(--w2w-cyan)]" />
          <strong className="text-white">1,200+ downloads</strong>
        </span>
        <span className="hidden h-4 w-px bg-white/15 md:block" />
        <span className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[var(--w2w-lavender)] text-[var(--w2w-lavender)]"
            />
          ))}
          <span className="ml-2">Rated 5 stars by beginners</span>
        </span>
      </div>
    </section>
  )
}

function ChaptersSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Everything You Need to Start</h2>
          <p className="mt-3 text-white/65">
            Focused chapters, zero jargon. Each one builds on the last.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="w2w-glass p-6 transition hover:border-white/20 hover:shadow-[0_0_24px_rgba(91,200,255,0.25)]"
            >
              <Icon className="mb-4 h-8 w-8 text-[var(--w2w-lavender)]" />
              <h3 className="mb-2 text-lg font-bold">{title}</h3>
              <p className="text-sm text-white/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  return (
    <section className="bg-white/[0.02] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">This Guide Is For You If...</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {audience.map(({ profile, body }) => (
            <div key={profile} className="w2w-glass p-6">
              <p className="mb-3 text-base font-semibold text-[var(--w2w-cyan)]">{profile}</p>
              <p className="text-sm text-white/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Beginners Are Already Winning</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="w2w-glass p-6">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[var(--w2w-lavender)] text-[var(--w2w-lavender)]"
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-white/80">&ldquo;{r.body}&rdquo;</p>
              <div className="text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-white/55">{r.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="bg-white/[0.02] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Got Questions?</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="w2w-glass group cursor-pointer p-5 transition hover:border-white/20"
            >
              <summary className="flex items-center justify-between text-base font-semibold text-white">
                {f.q}
                <span className="ml-4 text-[var(--w2w-cyan)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        <div
          className="w2w-blob"
          style={{
            width: 600,
            height: 600,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            background: '#5BC8FF',
          }}
        />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Your Crypto Journey Starts for <span className="text-[var(--w2w-cyan)]">$2.99</span>
        </h2>
        <p className="text-lg text-white/75">
          Stop waiting. The best time to start was yesterday. The next best time is right now.
        </p>
        <Link
          href="/buy"
          className="w2w-cta inline-flex h-14 items-center justify-center rounded-xl px-10 text-lg font-bold"
        >
          Get My Copy Now
        </Link>
        <div className="flex items-center gap-2 text-sm text-white/55">
          <CheckCircle2 className="h-4 w-4 text-[var(--w2w-cyan)]" />
          Instant PDF delivery after purchase
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-6 text-xs text-white/45">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center md:flex-row md:justify-between">
        <span>© 2026 Wallet to Wealth. Instant PDF delivery after purchase.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/80">
            Privacy
          </Link>
          <Link href="/tos" className="hover:text-white/80">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0E1A]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo-no-bg.png"
            alt="Wallet to Wealth"
            width={32}
            height={32}
            className="drop-shadow-[0_0_12px_rgba(91,200,255,0.6)]"
          />
          <span className="text-sm font-bold tracking-tight">Wallet to Wealth</span>
        </Link>
        <Link
          href="/buy"
          className="w2w-cta inline-flex h-9 items-center rounded-lg px-4 text-sm font-bold"
        >
          Buy Now
        </Link>
      </div>
    </nav>
  )
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <HeroSection />
        <SocialProofBar />
        <ChaptersSection />
        <AudienceSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
