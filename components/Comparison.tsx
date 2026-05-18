import { X, Check } from 'lucide-react'
import type { Lang } from '@/lib/i18n'

type Row = { without: string; with: string }

const COPY: Record<
  Lang,
  { title: string; sub: string; withoutLabel: string; withLabel: string; rows: Row[] }
> = {
  en: {
    title: 'With Wallet to Wealth vs without',
    sub: 'The hard part is not crypto. The hard part is starting without a map.',
    withoutLabel: 'Going in blind',
    withLabel: 'With Wallet to Wealth',
    rows: [
      {
        without: 'YouTube rabbit hole, 8 hours of conflicting hype',
        with: 'One PDF, one afternoon, one clear plan',
      },
      {
        without: 'Click a fake link, lose your first $100',
        with: 'Spot the 5 scam patterns before they hit',
      },
      { without: 'Confused about wallets vs exchanges', with: 'Know which to use, when, and why' },
      { without: 'Panic-sell at the first dip', with: 'Understand market cycles before you start' },
      {
        without: 'Surprise tax bill nobody warned you about',
        with: 'Track from day one with the right tools',
      },
    ],
  },
  es: {
    title: 'Con Wallet to Wealth vs sin',
    sub: 'Lo difícil no es cripto. Lo difícil es empezar sin un mapa.',
    withoutLabel: 'Sin guía',
    withLabel: 'Con Wallet to Wealth',
    rows: [
      {
        without: 'Madriguera de YouTube, 8 horas de hype contradictorio',
        with: 'Un PDF, una tarde, un plan claro',
      },
      {
        without: 'Clic en un enlace falso, pierdes tus primeros $100',
        with: 'Reconoces 5 patrones de estafa antes de caer',
      },
      {
        without: 'Te confundes entre wallets y exchanges',
        with: 'Sabes cuál usar, cuándo y por qué',
      },
      {
        without: 'Vendes en pánico en la primera caída',
        with: 'Entiendes los ciclos de mercado antes de empezar',
      },
      {
        without: 'Sorpresa con impuestos que nadie te advirtió',
        with: 'Llevas el seguimiento desde el día uno',
      },
    ],
  },
  it: {
    title: 'Con Wallet to Wealth vs senza',
    sub: 'La parte difficile non è crypto. La parte difficile è iniziare senza una mappa.',
    withoutLabel: 'Senza guida',
    withLabel: 'Con Wallet to Wealth',
    rows: [
      {
        without: 'Tana di YouTube, 8 ore di hype contraddittorio',
        with: 'Un PDF, un pomeriggio, un piano chiaro',
      },
      {
        without: 'Clicchi un link falso, perdi i primi $100',
        with: 'Riconosci 5 schemi di truffa prima che colpiscano',
      },
      { without: 'Confusione tra wallet ed exchange', with: 'Sai quale usare, quando e perché' },
      {
        without: 'Vendita di panico al primo calo',
        with: 'Capisci i cicli di mercato prima di iniziare',
      },
      {
        without: 'Sorpresa fiscale di cui nessuno ti ha avvisato',
        with: 'Tracci tutto dal primo giorno',
      },
    ],
  },
  fr: {
    title: 'Avec Wallet to Wealth vs sans',
    sub: 'Le plus dur n’est pas la crypto. Le plus dur, c’est de commencer sans plan.',
    withoutLabel: 'Sans guide',
    withLabel: 'Avec Wallet to Wealth',
    rows: [
      {
        without: 'Spirale YouTube, 8 heures de hype contradictoire',
        with: 'Un PDF, un après-midi, un plan clair',
      },
      {
        without: 'Clic sur un faux lien, perte des 100 premiers dollars',
        with: 'Vous repérez les 5 arnaques avant qu’elles ne frappent',
      },
      {
        without: 'Confusion entre wallets et exchanges',
        with: 'Vous savez lequel utiliser, quand et pourquoi',
      },
      {
        without: 'Panique-vente à la première baisse',
        with: 'Vous comprenez les cycles avant de commencer',
      },
      { without: 'Mauvaise surprise fiscale', with: 'Vous suivez tout dès le premier jour' },
    ],
  },
  pt: {
    title: 'Com Wallet to Wealth vs sem',
    sub: 'A parte difícil não é cripto. A parte difícil é começar sem um mapa.',
    withoutLabel: 'Sem guia',
    withLabel: 'Com Wallet to Wealth',
    rows: [
      {
        without: 'Toca de coelho no YouTube, 8 horas de hype contraditório',
        with: 'Um PDF, uma tarde, um plano claro',
      },
      {
        without: 'Clica num link falso, perde seus primeiros $100',
        with: 'Reconhece 5 padrões de golpe antes que aconteçam',
      },
      { without: 'Confusão entre wallets e exchanges', with: 'Sabe qual usar, quando e por quê' },
      {
        without: 'Venda em pânico na primeira queda',
        with: 'Entende os ciclos de mercado antes de começar',
      },
      { without: 'Imposto surpresa que ninguém avisou', with: 'Acompanha desde o primeiro dia' },
    ],
  },
  ru: {
    title: 'С Wallet to Wealth и без',
    sub: 'Сложная часть — не крипта. Сложно начать без карты.',
    withoutLabel: 'Без гида',
    withLabel: 'С Wallet to Wealth',
    rows: [
      {
        without: 'Кроличья нора YouTube, 8 часов противоречивого хайпа',
        with: 'Один PDF, один вечер, один план',
      },
      {
        without: 'Клик по фишингу — теряете первые $100',
        with: 'Узнаёте 5 шаблонов скама заранее',
      },
      {
        without: 'Путаница между кошельками и биржами',
        with: 'Знаете, что использовать, когда и почему',
      },
      { without: 'Паника-продажа на первой просадке', with: 'Понимаете рыночные циклы до старта' },
      {
        without: 'Сюрприз с налогами, о котором не предупредили',
        with: 'Учёт ведётся с первого дня',
      },
    ],
  },
}

export function Comparison({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-white/65">{t.sub}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="w2w-glass p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-rose-300/90">
              <X className="h-4 w-4" />
              {t.withoutLabel}
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              {t.rows.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-300/70" />
                  <span>{r.without}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w2w-glass border-[var(--w2w-cyan)]/35 p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--w2w-cyan)]">
              <Check className="h-4 w-4" />
              {t.withLabel}
            </div>
            <ul className="space-y-3 text-sm text-white/85">
              {t.rows.map((r, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--w2w-cyan)]" />
                  <span>{r.with}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
