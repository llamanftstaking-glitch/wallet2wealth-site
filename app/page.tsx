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
import { TrustBadges } from '@/components/TrustBadges'
import { ProductJsonLd } from '@/components/ProductJsonLd'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'
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
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0E1A]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo-no-bg.png"
            alt="Wallet to Wealth"
            width={32}
            height={32}
            className="drop-shadow-[0_0_12px_rgba(91,200,255,0.6)]"
          />
          <span className="hidden text-sm font-bold tracking-tight sm:inline">
            Wallet to Wealth
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitcher current={lang} />
          <Link
            href={buyHref}
            className="w2w-cta inline-flex h-10 items-center rounded-lg px-3 text-sm font-bold sm:h-9 sm:px-4"
          >
            {t.nav.buy}
          </Link>
        </div>
      </div>
    </nav>
  )
}

function HeroSection({ t, buyHref, lang }: { t: Dict; buyHref: string; lang: Lang }) {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-16 md:pb-24 md:pt-24">
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

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:gap-7 md:gap-8">
        <Image
          src="/brand/logo-no-bg.png"
          alt="Wallet to Wealth"
          width={180}
          height={180}
          priority
          sizes="(max-width: 640px) 72px, 180px"
          className="h-[72px] w-[72px] drop-shadow-[0_0_36px_rgba(91,200,255,0.45)] sm:h-[150px] sm:w-[150px] md:h-[180px] md:w-[180px]"
        />

        <span className="w2w-glass inline-flex items-center gap-2 px-3 py-1 text-xs text-white/80 sm:text-sm">
          <Star className="h-4 w-4 text-[var(--w2w-lavender)]" />
          {t.hero.badge}
        </span>

        <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl">
          <span className="block">{t.hero.h1Line1}</span>
          <span className="w2w-gradient-text mt-1 block">{t.hero.h1Line2}</span>
        </h1>

        <p className="max-w-2xl text-pretty text-base text-white/75 sm:text-lg md:text-xl">
          {t.hero.sub}
        </p>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="text-5xl font-bold text-[var(--w2w-cyan)] sm:text-6xl md:text-7xl">
            $2.99
          </div>
          <div className="text-sm text-white/60">{t.hero.priceCaption}</div>
        </div>

        <Link
          href={buyHref}
          className="w2w-cta inline-flex h-14 w-full max-w-sm items-center justify-center rounded-xl px-6 text-base font-bold sm:w-auto sm:px-8 sm:text-lg"
        >
          {t.hero.cta}
        </Link>

        <TrustBadges lang={lang} />

        <div className="flex items-center gap-2 text-xs text-white/55 sm:text-sm">
          <Download className="h-4 w-4" />
          {t.hero.delivery}
        </div>
      </div>
    </section>
  )
}

function SocialProofBar({ t }: { t: Dict }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-4 py-4 sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-xs text-white/80 sm:text-sm md:flex-row md:gap-8">
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
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
            {t.chaptersHeader.title}
          </h2>
          <p className="mt-3 text-white/65">{t.chaptersHeader.sub}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.chapters.map((c, i) => {
            const Icon = CHAPTER_ICONS[i] ?? Wallet
            return (
              <div
                key={c.title}
                className="w2w-glass p-5 transition hover:border-white/20 hover:shadow-[0_0_24px_rgba(91,200,255,0.25)] sm:p-6"
              >
                <Icon className="mb-3 h-7 w-7 text-[var(--w2w-lavender)] sm:mb-4 sm:h-8 sm:w-8" />
                <h3 className="mb-2 text-base font-bold sm:text-lg">{c.title}</h3>
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
    <section className="bg-white/[0.02] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
            {t.audienceHeader}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.audience.map((a) => (
            <div key={a.profile} className="w2w-glass p-5 sm:p-6">
              <p className="mb-3 text-sm font-semibold text-[var(--w2w-cyan)] sm:text-base">
                {a.profile}
              </p>
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
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
            {t.reviewsHeader}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {t.reviews.map((r) => (
            <div key={r.name} className="w2w-glass p-5 sm:p-6">
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
    <section className="bg-white/[0.02] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{t.faqHeader}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.map((f) => (
            <details
              key={f.q}
              className="w2w-glass group cursor-pointer p-4 transition hover:border-white/20 sm:p-5"
            >
              <summary className="flex items-start justify-between gap-3 text-sm font-semibold text-white sm:text-base">
                <span className="flex-1">{f.q}</span>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center text-lg text-[var(--w2w-cyan)] transition group-open:rotate-45">
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
    <section className="relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:py-32">
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
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center sm:gap-6">
        <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
          {t.finalCta.headPrefix}
          <span className="text-[var(--w2w-cyan)]">{t.finalCta.headPrice}</span>
        </h2>
        <p className="text-pretty text-base text-white/75 sm:text-lg">{t.finalCta.body}</p>
        <Link
          href={buyHref}
          className="w2w-cta inline-flex h-14 w-full max-w-sm items-center justify-center rounded-xl px-6 text-base font-bold sm:w-auto sm:px-10 sm:text-lg"
        >
          {t.finalCta.cta}
        </Link>
        <div className="flex items-center gap-2 text-xs text-white/55 sm:text-sm">
          <CheckCircle2 className="h-4 w-4 text-[var(--w2w-cyan)]" />
          {t.finalCta.delivery}
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-white/10 px-4 py-6 pb-28 text-xs text-white/45 sm:px-6 sm:pb-6">
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

function StickyMobileCTA({ t, buyHref }: { t: Dict; buyHref: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0A0E1A]/95 px-4 pb-[env(safe-area-inset-bottom,0px)] pt-3 backdrop-blur-lg md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 pb-3">
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-wide text-white/55">
            {t.hero.priceCaption}
          </span>
          <span className="text-xl font-bold text-[var(--w2w-cyan)]">$2.99</span>
        </div>
        <Link
          href={buyHref}
          className="w2w-cta inline-flex h-12 flex-1 items-center justify-center rounded-xl px-4 text-sm font-bold"
        >
          {t.nav.buy}
        </Link>
      </div>
    </div>
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
      <ProductJsonLd lang={lang} />
      <NavBar lang={lang} t={t} buyHref={buyHref} />
      <main className="flex-1">
        <HeroSection t={t} buyHref={buyHref} lang={lang} />
        <SocialProofBar t={t} />
        <ChaptersSection t={t} />
        <AudienceSection t={t} />
        <ReviewsSection t={t} />
        <LeadMagnet lang={lang} />
        <FaqSection t={t} />
        <FinalCTA t={t} buyHref={buyHref} />
        <Footer t={t} />
      </main>
      <StickyMobileCTA t={t} buyHref={buyHref} />
      <ExitIntentPopup lang={lang} />
    </>
  )
}
