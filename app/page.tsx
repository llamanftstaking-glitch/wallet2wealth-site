import Image from 'next/image'
import Link from 'next/link'
import { cookies, headers } from 'next/headers'
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
import { LangSwitcher } from '@/components/LangSwitcher'
import { LeadMagnet } from '@/components/LeadMagnet'
import { getDict, pickLang, type Lang, type Dict } from '@/lib/i18n'

const CHAPTER_ICONS = [Wallet, Coins, ShieldCheck, TrendingUp, BookOpen, Zap]

async function resolveLang(searchParams: Promise<{ lang?: string }>): Promise<Lang> {
  const sp = await searchParams
  if (sp.lang) return pickLang(sp.lang)
  const cookieStore = await cookies()
  const fromCookie = cookieStore.get('w2w_lang')?.value
  if (fromCookie) return pickLang(fromCookie)
  const accept = (await headers()).get('accept-language') || ''
  return pickLang(accept.split(',')[0])
}

function NavBar({ lang, t, buyHref }: { lang: Lang; t: Dict; buyHref: string }) {
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
        <div className="flex items-center gap-3">
          <LangSwitcher current={lang} />
          <Link
            href={buyHref}
            className="w2w-cta inline-flex h-9 items-center rounded-lg px-4 text-sm font-bold"
          >
            {t.nav.buy}
          </Link>
        </div>
      </div>
    </nav>
  )
}

function HeroSection({ t, buyHref }: { t: Dict; buyHref: string }) {
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
          {t.hero.badge}
        </span>

        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          {t.hero.h1Line1}
          <br />
          <span className="w2w-gradient-text">{t.hero.h1Line2}</span>
        </h1>

        <p className="max-w-2xl text-lg text-white/75 md:text-xl">{t.hero.sub}</p>

        <div className="flex flex-col items-center gap-2">
          <div className="text-6xl font-bold text-[var(--w2w-cyan)] md:text-7xl">$2.99</div>
          <div className="text-sm text-white/60">{t.hero.priceCaption}</div>
        </div>

        <Link
          href={buyHref}
          className="w2w-cta inline-flex h-14 items-center justify-center rounded-xl px-8 text-lg font-bold"
        >
          {t.hero.cta}
        </Link>

        <div className="flex items-center gap-2 text-sm text-white/55">
          <Download className="h-4 w-4" />
          {t.hero.delivery}
        </div>
      </div>
    </section>
  )
}

function SocialProofBar({ t }: { t: Dict }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-sm text-white/80 md:flex-row md:gap-8">
        <span className="flex items-center gap-2">
          <Download className="h-4 w-4 text-[var(--w2w-cyan)]" />
          <strong className="text-white">{t.socialBar.downloads}</strong>
        </span>
        <span className="hidden h-4 w-px bg-white/15 md:block" />
        <span className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-[var(--w2w-lavender)] text-[var(--w2w-lavender)]"
            />
          ))}
          <span className="ml-2">{t.socialBar.rated}</span>
        </span>
      </div>
    </section>
  )
}

function ChaptersSection({ t }: { t: Dict }) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.chaptersHeader.title}</h2>
          <p className="mt-3 text-white/65">{t.chaptersHeader.sub}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.chapters.map((c, i) => {
            const Icon = CHAPTER_ICONS[i] ?? Wallet
            return (
              <div
                key={c.title}
                className="w2w-glass p-6 transition hover:border-white/20 hover:shadow-[0_0_24px_rgba(91,200,255,0.25)]"
              >
                <Icon className="mb-4 h-8 w-8 text-[var(--w2w-lavender)]" />
                <h3 className="mb-2 text-lg font-bold">{c.title}</h3>
                <p className="text-sm text-white/65">{c.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AudienceSection({ t }: { t: Dict }) {
  return (
    <section className="bg-white/[0.02] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.audienceHeader}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.audience.map((a) => (
            <div key={a.profile} className="w2w-glass p-6">
              <p className="mb-3 text-base font-semibold text-[var(--w2w-cyan)]">{a.profile}</p>
              <p className="text-sm text-white/65">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewsSection({ t }: { t: Dict }) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.reviewsHeader}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.reviews.map((r) => (
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

function FaqSection({ t }: { t: Dict }) {
  return (
    <section className="bg-white/[0.02] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t.faqHeader}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.map((f) => (
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

function FinalCTA({ t, buyHref }: { t: Dict; buyHref: string }) {
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
          {t.finalCta.headPrefix}
          <span className="text-[var(--w2w-cyan)]">{t.finalCta.headPrice}</span>
        </h2>
        <p className="text-lg text-white/75">{t.finalCta.body}</p>
        <Link
          href={buyHref}
          className="w2w-cta inline-flex h-14 items-center justify-center rounded-xl px-10 text-lg font-bold"
        >
          {t.finalCta.cta}
        </Link>
        <div className="flex items-center gap-2 text-sm text-white/55">
          <CheckCircle2 className="h-4 w-4 text-[var(--w2w-cyan)]" />
          {t.finalCta.delivery}
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-white/10 px-6 py-6 text-xs text-white/45">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center md:flex-row md:justify-between">
        <span>{t.footer.copy}</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-white/80">
            {t.footer.privacy}
          </Link>
          <Link href="/tos" className="hover:text-white/80">
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const lang = await resolveLang(searchParams)
  const t = getDict(lang)
  const buyHref = lang === 'en' ? '/buy' : `/buy?lang=${lang}`

  return (
    <>
      <NavBar lang={lang} t={t} buyHref={buyHref} />
      <main className="flex-1">
        <HeroSection t={t} buyHref={buyHref} />
        <SocialProofBar t={t} />
        <ChaptersSection t={t} />
        <AudienceSection t={t} />
        <ReviewsSection t={t} />
        <LeadMagnet lang={lang} />
        <FaqSection t={t} />
        <FinalCTA t={t} buyHref={buyHref} />
        <Footer t={t} />
      </main>
    </>
  )
}
