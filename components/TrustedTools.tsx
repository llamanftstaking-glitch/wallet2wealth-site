import Link from 'next/link'
import { FOOTER_PICKS, getAffiliate } from '@/lib/affiliates'
import type { Lang } from '@/lib/i18n'

const COPY: Record<Lang, { title: string; disclosure: string; more: string }> = {
  en: {
    title: 'Tools we trust for beginners',
    disclosure:
      'Some links may be affiliate links. We only list tools we would hand to a beginner family member.',
    more: 'Full disclosure',
  },
  es: {
    title: 'Herramientas que confiamos para principiantes',
    disclosure:
      'Algunos enlaces pueden ser de afiliados. Solo listamos herramientas que daríamos a un familiar principiante.',
    more: 'Aviso completo',
  },
  it: {
    title: 'Strumenti che consigliamo ai principianti',
    disclosure:
      'Alcuni link possono essere di affiliazione. Includiamo solo strumenti che daremmo a un parente principiante.',
    more: 'Informativa completa',
  },
  fr: {
    title: 'Outils que nous recommandons aux débutants',
    disclosure:
      'Certains liens peuvent être affiliés. Nous ne listons que des outils que nous donnerions à un proche débutant.',
    more: 'Mention complète',
  },
  pt: {
    title: 'Ferramentas que confiamos para iniciantes',
    disclosure:
      'Alguns links podem ser de afiliados. Listamos apenas ferramentas que daríamos a um familiar iniciante.',
    more: 'Divulgação completa',
  },
  ru: {
    title: 'Инструменты для новичков',
    disclosure:
      'Часть ссылок может быть партнёрскими. Мы рекомендуем только то, что дали бы новичку из семьи.',
    more: 'Полное раскрытие',
  },
}

export function TrustedTools({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const picks = FOOTER_PICKS.map((k) => getAffiliate(k))
  return (
    <section className="border-t border-white/10 bg-white/[0.02] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-1 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
          {t.title}
        </h3>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/70">
          {picks.map((p) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="rounded-md px-2 py-1 transition hover:bg-white/5 hover:text-white"
            >
              {p.name}
            </a>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-white/45">
          {t.disclosure}{' '}
          <Link href="/affiliate-disclosure" className="underline hover:text-white/80">
            {t.more}
          </Link>
        </p>
      </div>
    </section>
  )
}
