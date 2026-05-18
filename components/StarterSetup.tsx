import Link from 'next/link'
import { Download, ExternalLink, Sparkles } from 'lucide-react'
import { STARTER_STACK, getAffiliate } from '@/lib/affiliates'
import type { Lang } from '@/lib/i18n'

const COPY: Record<
  Lang,
  {
    kicker: string
    title: string
    sub: string
    step1Title: string
    step1Body: string
    approved: string
    visit: string
    disclosure: string
  }
> = {
  en: {
    kicker: 'Your Crypto Starter Setup',
    title: 'Next moves while the PDF is fresh.',
    sub: 'Step-by-step. Skip what you already have. Every recommendation passes the "give-to-a-family-member" test.',
    step1Title: 'Download the PDF',
    step1Body: 'Save it locally. You can also re-download anytime from the link in your email.',
    approved: 'Wallet to Wealth Approved',
    visit: 'Visit',
    disclosure:
      'Some links are affiliate links. We earn a small commission at no extra cost to you.',
  },
  es: {
    kicker: 'Tu Setup Cripto Inicial',
    title: 'Próximos pasos mientras el PDF está fresco.',
    sub: 'Paso a paso. Salta lo que ya tienes. Cada herramienta pasa la prueba de "se lo daría a mi familia".',
    step1Title: 'Descarga el PDF',
    step1Body: 'Guárdalo. También puedes volver a descargarlo desde el enlace en tu email.',
    approved: 'Aprobado por Wallet to Wealth',
    visit: 'Visitar',
    disclosure:
      'Algunos enlaces son de afiliados. Ganamos una pequeña comisión sin costo extra para ti.',
  },
  it: {
    kicker: 'Il tuo Setup Crypto Iniziale',
    title: 'Prossimi passi mentre il PDF è fresco.',
    sub: 'Passo passo. Salta ciò che hai già. Ogni strumento supera il test "lo darei a un parente".',
    step1Title: 'Scarica il PDF',
    step1Body: 'Salvalo. Puoi anche riscaricarlo dal link nella tua email.',
    approved: 'Approvato da Wallet to Wealth',
    visit: 'Visita',
    disclosure:
      'Alcuni link sono di affiliazione. Riceviamo una piccola commissione senza costi aggiuntivi per te.',
  },
  fr: {
    kicker: 'Votre Setup Crypto Initial',
    title: 'Les prochaines étapes tant que le PDF est frais.',
    sub: 'Étape par étape. Sautez ce que vous avez déjà. Chaque outil passe le test "je le donnerais à un proche".',
    step1Title: 'Téléchargez le PDF',
    step1Body:
      'Sauvegardez-le. Vous pouvez aussi le retélécharger depuis le lien dans votre email.',
    approved: 'Approuvé par Wallet to Wealth',
    visit: 'Visiter',
    disclosure:
      'Certains liens sont affiliés. Nous touchons une petite commission sans coût supplémentaire.',
  },
  pt: {
    kicker: 'Seu Setup Cripto Inicial',
    title: 'Próximos passos enquanto o PDF está fresco.',
    sub: 'Passo a passo. Pule o que já tem. Cada ferramenta passa no teste "eu daria para um familiar".',
    step1Title: 'Baixe o PDF',
    step1Body: 'Salve localmente. Você também pode rebaixar pelo link no seu email.',
    approved: 'Aprovado pela Wallet to Wealth',
    visit: 'Visitar',
    disclosure:
      'Alguns links são de afiliados. Ganhamos uma pequena comissão sem custo extra para você.',
  },
  ru: {
    kicker: 'Ваш стартовый крипто-сет',
    title: 'Что делать, пока PDF свеж в памяти.',
    sub: 'Пошагово. Пропускайте то, что у вас уже есть. Каждый инструмент проходит тест «дал бы родственнику».',
    step1Title: 'Скачайте PDF',
    step1Body: 'Сохраните локально. Можете перекачать по ссылке из email.',
    approved: 'Одобрено Wallet to Wealth',
    visit: 'Открыть',
    disclosure:
      'Часть ссылок партнёрские. Мы получаем небольшую комиссию без доплат с вашей стороны.',
  },
}

export function StarterSetup({ lang, downloadHref }: { lang: Lang; downloadHref?: string }) {
  const t = COPY[lang]
  return (
    <section className="mt-12 w-full max-w-3xl">
      <div className="mb-2 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--w2w-cyan)]">
        <Sparkles className="h-3.5 w-3.5" />
        {t.kicker}
      </div>
      <h2 className="text-center text-2xl font-bold sm:text-3xl">{t.title}</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-white/65">{t.sub}</p>

      <ol className="mt-8 space-y-5">
        <li className="w2w-glass p-5">
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--w2w-cyan)]/15 text-sm font-bold text-[var(--w2w-cyan)]">
              1
            </span>
            <div className="flex-1">
              <h3 className="text-base font-bold">{t.step1Title}</h3>
              <p className="mt-1 text-sm text-white/65">{t.step1Body}</p>
              {downloadHref ? (
                <a
                  href={downloadHref}
                  className="w2w-cta mt-3 inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-bold"
                >
                  <Download className="h-4 w-4" />
                  {t.step1Title}
                </a>
              ) : null}
            </div>
          </div>
        </li>

        {STARTER_STACK.map((s) => (
          <li key={s.step} className="w2w-glass p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--w2w-cyan)]/15 text-sm font-bold text-[var(--w2w-cyan)]">
                {s.step}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/65">{s.blurb}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.picks.map((key) => {
                    const a = getAffiliate(key)
                    return (
                      <a
                        key={a.key}
                        href={a.url}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="group flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3 transition hover:border-[var(--w2w-cyan)]/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm font-semibold">
                            {a.name}
                            <span className="rounded-full border border-[var(--w2w-cyan)]/30 bg-[var(--w2w-cyan)]/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--w2w-cyan)]">
                              {t.approved}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-white/60">{a.blurb}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 shrink-0 text-white/40 transition group-hover:text-white/80" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-center text-xs text-white/45">
        {t.disclosure}{' '}
        <Link href="/affiliate-disclosure" className="underline hover:text-white/80">
          More
        </Link>
      </p>
    </section>
  )
}
