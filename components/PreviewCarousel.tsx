import { BookOpen, Wallet, ShieldCheck, ListChecks, TrendingUp } from 'lucide-react'
import type { Lang } from '@/lib/i18n'

type Card = {
  icon: 'wallet' | 'shield' | 'list' | 'trend' | 'book'
  page: string
  title: string
  body: string
}

const ICON: Record<Card['icon'], React.ComponentType<{ className?: string }>> = {
  wallet: Wallet,
  shield: ShieldCheck,
  list: ListChecks,
  trend: TrendingUp,
  book: BookOpen,
}

const COPY: Record<Lang, { title: string; sub: string; cards: Card[] }> = {
  en: {
    title: 'See exactly what is inside',
    sub: 'A peek at five of the most-loved pages from early readers.',
    cards: [
      {
        icon: 'wallet',
        page: 'Page 6',
        title: 'Hot wallet vs cold wallet — explained',
        body: 'Side-by-side diagram of how each works. When to use one, when to upgrade.',
      },
      {
        icon: 'shield',
        page: 'Page 14',
        title: 'The 5 scam patterns that catch beginners',
        body: 'Fake support DMs, seed-phrase phishing, copycat token contracts, address poisoning, "double-your-deposit" airdrops.',
      },
      {
        icon: 'list',
        page: 'Page 19',
        title: 'Your first $100 — step-by-step',
        body: 'Open exchange, verify ID, fund the account, place the buy, send to your wallet. No skipped steps.',
      },
      {
        icon: 'trend',
        page: 'Page 27',
        title: 'Why prices crash 80% (and why that is normal)',
        body: 'How crypto market cycles actually run, plain-English version. The chart that calms your nerves.',
      },
      {
        icon: 'book',
        page: 'Page 33',
        title: 'The 7-day starter plan',
        body: 'Day-by-day to-do list. Read the page, do the step, check the box. By Sunday you are no longer a beginner.',
      },
    ],
  },
  es: {
    title: 'Mira exactamente lo que hay dentro',
    sub: 'Cinco de las páginas favoritas de los primeros lectores.',
    cards: [
      {
        icon: 'wallet',
        page: 'Página 6',
        title: 'Hot wallet vs cold wallet',
        body: 'Diagrama lado a lado. Cuándo usar cada una.',
      },
      {
        icon: 'shield',
        page: 'Página 14',
        title: 'Los 5 patrones de estafa',
        body: 'DMs falsos, phishing de seed, contratos clonados, envenenamiento de address, airdrops "duplica tu depósito".',
      },
      {
        icon: 'list',
        page: 'Página 19',
        title: 'Tus primeros $100 — paso a paso',
        body: 'Abrir exchange, verificar, fondear, comprar, enviar a tu wallet.',
      },
      {
        icon: 'trend',
        page: 'Página 27',
        title: '¿Por qué los precios caen 80%?',
        body: 'Cómo funcionan los ciclos del mercado cripto.',
      },
      {
        icon: 'book',
        page: 'Página 33',
        title: 'Plan de 7 días',
        body: 'Tarea diaria. Lees, haces, marcas. El domingo ya no eres principiante.',
      },
    ],
  },
  it: {
    title: 'Guarda esattamente cosa c’è dentro',
    sub: 'Cinque pagine preferite dai primi lettori.',
    cards: [
      {
        icon: 'wallet',
        page: 'Pag. 6',
        title: 'Hot wallet vs cold wallet',
        body: 'Diagramma fianco a fianco. Quando usare cosa.',
      },
      {
        icon: 'shield',
        page: 'Pag. 14',
        title: 'I 5 schemi di truffa',
        body: 'DM falsi, phishing seed, contratti clonati, address poisoning, airdrop "raddoppia il deposito".',
      },
      {
        icon: 'list',
        page: 'Pag. 19',
        title: 'I tuoi primi $100 — passo passo',
        body: 'Apri exchange, verifica, deposita, compra, invia al wallet.',
      },
      {
        icon: 'trend',
        page: 'Pag. 27',
        title: 'Perché i prezzi crollano dell’80%?',
        body: 'Come funzionano i cicli crypto.',
      },
      {
        icon: 'book',
        page: 'Pag. 33',
        title: 'Piano di 7 giorni',
        body: 'Un compito al giorno. Domenica non sei più principiante.',
      },
    ],
  },
  fr: {
    title: 'Voyez exactement ce qu’il y a dedans',
    sub: 'Cinq pages préférées des premiers lecteurs.',
    cards: [
      {
        icon: 'wallet',
        page: 'Page 6',
        title: 'Hot wallet vs cold wallet',
        body: 'Schéma côte à côte. Quand utiliser quoi.',
      },
      {
        icon: 'shield',
        page: 'Page 14',
        title: 'Les 5 arnaques classiques',
        body: 'Faux DM, phishing de seed, contrats copiés, address poisoning, airdrop "double ton dépôt".',
      },
      {
        icon: 'list',
        page: 'Page 19',
        title: 'Vos premiers 100 $ — pas à pas',
        body: 'Ouverture exchange, vérif, dépôt, achat, envoi vers wallet.',
      },
      {
        icon: 'trend',
        page: 'Page 27',
        title: 'Pourquoi les prix chutent de 80% ?',
        body: 'Cycles de marché crypto expliqués.',
      },
      {
        icon: 'book',
        page: 'Page 33',
        title: 'Plan de 7 jours',
        body: 'Une tâche par jour. Dimanche, vous n’êtes plus débutant.',
      },
    ],
  },
  pt: {
    title: 'Veja exatamente o que tem dentro',
    sub: 'Cinco páginas favoritas dos primeiros leitores.',
    cards: [
      {
        icon: 'wallet',
        page: 'Página 6',
        title: 'Hot wallet vs cold wallet',
        body: 'Diagrama lado a lado. Quando usar cada.',
      },
      {
        icon: 'shield',
        page: 'Página 14',
        title: 'Os 5 padrões de golpe',
        body: 'DMs falsos, phishing de seed, contratos clonados, envenenamento de address, airdrops "dobre seu depósito".',
      },
      {
        icon: 'list',
        page: 'Página 19',
        title: 'Seus primeiros $100 — passo a passo',
        body: 'Abrir exchange, verificar, depositar, comprar, enviar para wallet.',
      },
      {
        icon: 'trend',
        page: 'Página 27',
        title: 'Por que os preços caem 80%?',
        body: 'Como os ciclos do mercado cripto funcionam.',
      },
      {
        icon: 'book',
        page: 'Página 33',
        title: 'Plano de 7 dias',
        body: 'Uma tarefa por dia. Domingo você não é mais iniciante.',
      },
    ],
  },
  ru: {
    title: 'Загляните внутрь',
    sub: 'Пять любимых страниц первых читателей.',
    cards: [
      {
        icon: 'wallet',
        page: 'Стр. 6',
        title: 'Hot wallet vs cold wallet',
        body: 'Сравнение бок о бок. Что когда использовать.',
      },
      {
        icon: 'shield',
        page: 'Стр. 14',
        title: '5 шаблонов скама',
        body: 'Фейковые DM, фишинг seed, клон-контракты, address poisoning, "удвоим депозит".',
      },
      {
        icon: 'list',
        page: 'Стр. 19',
        title: 'Первые $100 — пошагово',
        body: 'Биржа, верификация, депозит, покупка, отправка на кошелёк.',
      },
      {
        icon: 'trend',
        page: 'Стр. 27',
        title: 'Почему цены падают на 80%?',
        body: 'Циклы крипто-рынка простым языком.',
      },
      {
        icon: 'book',
        page: 'Стр. 33',
        title: 'План на 7 дней',
        body: 'По задаче в день. В воскресенье вы уже не новичок.',
      },
    ],
  },
}

export function PreviewCarousel({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-white/65">{t.sub}</p>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-4 sm:grid sm:min-w-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {t.cards.map((c, i) => {
              const Icon = ICON[c.icon]
              return (
                <article
                  key={i}
                  className="w2w-glass relative w-72 shrink-0 overflow-hidden p-5 sm:w-auto sm:p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--w2w-lavender)]/15 to-transparent" />
                  <div className="relative">
                    <Icon className="mb-3 h-7 w-7 text-[var(--w2w-cyan)]" />
                    <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-white/45">
                      {c.page}
                    </div>
                    <h3 className="mb-2 text-base font-bold leading-snug sm:text-lg">{c.title}</h3>
                    <p className="text-sm text-white/65">{c.body}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/45">
          Layouts are stylized previews. Final pages use the same content.
        </p>
      </div>
    </section>
  )
}
