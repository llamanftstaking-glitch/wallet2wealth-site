import Image from 'next/image'
import type { Lang } from '@/lib/i18n'

type Card = {
  src: string
  page: string
  title: string
  body: string
}

const IMAGES = [
  '/brand/preview/page-14.png',
  '/brand/preview/page-19.png',
  '/brand/preview/page-27.png',
  '/brand/preview/page-30.png',
  '/brand/preview/page-35.png',
]

const COPY: Record<Lang, { title: string; sub: string; cards: Card[] }> = {
  en: {
    title: 'See exactly what is inside',
    sub: 'Five real pages from the PDF — no mockups.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Page 14',
        title: 'Seed phrase rules — non-negotiable',
        body: 'The 8-step setup checklist that keeps your seed phrase out of phishing reach.',
      },
      {
        src: IMAGES[1],
        page: 'Page 19',
        title: 'How phishing attacks happen',
        body: 'The fake-site → fake-popup → drained-wallet flow, with the 7-item security checklist.',
      },
      {
        src: IMAGES[2],
        page: 'Page 27',
        title: 'Why prices crash 80% — and why it is normal',
        body: 'The crypto market-cycle chart, plain-English. Plus the DCA setup that stops emotional buys.',
      },
      {
        src: IMAGES[3],
        page: 'Page 30',
        title: 'What is a blockchain, really',
        body: 'Wallets, nodes, and how transactions get confirmed — the only fundamentals you actually need.',
      },
      {
        src: IMAGES[4],
        page: 'Page 35',
        title: 'The emotions you will feel',
        body: 'FOMO, panic, greed, regret — the chart most beginners only recognize after they lose money.',
      },
    ],
  },
  es: {
    title: 'Mira exactamente lo que hay dentro',
    sub: 'Cinco páginas reales del PDF — sin maquetas.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Página 14',
        title: 'Reglas de seed phrase — no negociables',
        body: 'Checklist de 8 pasos que mantiene tu seed lejos del phishing.',
      },
      {
        src: IMAGES[1],
        page: 'Página 19',
        title: 'Cómo ocurren los ataques de phishing',
        body: 'El flujo sitio falso → pop-up falso → wallet vaciada + checklist de seguridad.',
      },
      {
        src: IMAGES[2],
        page: 'Página 27',
        title: 'Por qué los precios caen 80%',
        body: 'El ciclo del mercado cripto en lenguaje claro. Más la estrategia DCA contra compras emocionales.',
      },
      {
        src: IMAGES[3],
        page: 'Página 30',
        title: 'Qué es realmente una blockchain',
        body: 'Wallets, nodos y cómo se confirman las transacciones — lo único que necesitas saber.',
      },
      {
        src: IMAGES[4],
        page: 'Página 35',
        title: 'Las emociones que sentirás',
        body: 'FOMO, pánico, codicia, arrepentimiento — el gráfico que los principiantes reconocen tarde.',
      },
    ],
  },
  it: {
    title: 'Guarda esattamente cosa c’è dentro',
    sub: 'Cinque pagine vere del PDF — niente mockup.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Pag. 14',
        title: 'Regole della seed phrase',
        body: 'Checklist in 8 passi che tiene la tua seed fuori dalla portata del phishing.',
      },
      {
        src: IMAGES[1],
        page: 'Pag. 19',
        title: 'Come funzionano gli attacchi phishing',
        body: 'Sito falso → pop-up falso → wallet svuotato. Più checklist sicurezza.',
      },
      {
        src: IMAGES[2],
        page: 'Pag. 27',
        title: 'Perché i prezzi crollano dell’80%',
        body: 'Il ciclo del mercato crypto spiegato. Più la strategia DCA contro gli acquisti emotivi.',
      },
      {
        src: IMAGES[3],
        page: 'Pag. 30',
        title: 'Cos’è davvero una blockchain',
        body: 'Wallet, nodi, conferme delle transazioni — i fondamentali essenziali.',
      },
      {
        src: IMAGES[4],
        page: 'Pag. 35',
        title: 'Le emozioni che proverai',
        body: 'FOMO, panico, avidità, rimpianto — il grafico che i principianti riconoscono tardi.',
      },
    ],
  },
  fr: {
    title: 'Voyez exactement ce qu’il y a dedans',
    sub: 'Cinq vraies pages du PDF — pas de maquette.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Page 14',
        title: 'Règles de seed phrase',
        body: 'Checklist en 8 étapes pour mettre votre seed hors de portée du phishing.',
      },
      {
        src: IMAGES[1],
        page: 'Page 19',
        title: 'Comment se passent les attaques phishing',
        body: 'Faux site → faux pop-up → wallet vidé. Plus la checklist sécurité.',
      },
      {
        src: IMAGES[2],
        page: 'Page 27',
        title: 'Pourquoi les prix chutent de 80%',
        body: 'Le cycle du marché crypto expliqué. Plus la stratégie DCA anti-achat émotionnel.',
      },
      {
        src: IMAGES[3],
        page: 'Page 30',
        title: 'Qu’est-ce qu’une blockchain, vraiment',
        body: 'Wallets, nœuds, confirmations — les fondamentaux qui comptent.',
      },
      {
        src: IMAGES[4],
        page: 'Page 35',
        title: 'Les émotions que vous ressentirez',
        body: 'FOMO, panique, avidité, regret — le graphique que les débutants reconnaissent trop tard.',
      },
    ],
  },
  pt: {
    title: 'Veja exatamente o que tem dentro',
    sub: 'Cinco páginas reais do PDF — sem mockups.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Página 14',
        title: 'Regras da seed phrase',
        body: 'Checklist de 8 passos que mantém sua seed longe do phishing.',
      },
      {
        src: IMAGES[1],
        page: 'Página 19',
        title: 'Como acontecem os ataques de phishing',
        body: 'Site falso → pop-up falso → wallet drenada + checklist de segurança.',
      },
      {
        src: IMAGES[2],
        page: 'Página 27',
        title: 'Por que os preços caem 80%',
        body: 'O ciclo do mercado cripto explicado. Mais a estratégia DCA contra compras emocionais.',
      },
      {
        src: IMAGES[3],
        page: 'Página 30',
        title: 'O que é uma blockchain de verdade',
        body: 'Wallets, nós, confirmações — os fundamentais que importam.',
      },
      {
        src: IMAGES[4],
        page: 'Página 35',
        title: 'As emoções que você vai sentir',
        body: 'FOMO, pânico, ganância, arrependimento — o gráfico que iniciantes reconhecem tarde.',
      },
    ],
  },
  ru: {
    title: 'Загляните внутрь',
    sub: 'Пять настоящих страниц PDF — без макетов.',
    cards: [
      {
        src: IMAGES[0],
        page: 'Стр. 14',
        title: 'Правила seed-фразы',
        body: 'Чек-лист из 8 шагов, чтобы seed не попал в фишинг.',
      },
      {
        src: IMAGES[1],
        page: 'Стр. 19',
        title: 'Как происходят фишинг-атаки',
        body: 'Фейк-сайт → фейк-попап → опустошённый кошелёк + чек-лист безопасности.',
      },
      {
        src: IMAGES[2],
        page: 'Стр. 27',
        title: 'Почему цены падают на 80%',
        body: 'Цикл крипто-рынка простым языком. Плюс DCA против эмоциональных покупок.',
      },
      {
        src: IMAGES[3],
        page: 'Стр. 30',
        title: 'Что такое блокчейн на самом деле',
        body: 'Кошельки, ноды, подтверждения — только нужные основы.',
      },
      {
        src: IMAGES[4],
        page: 'Стр. 35',
        title: 'Эмоции, которые вы почувствуете',
        body: 'FOMO, паника, жадность, сожаление — график, который новички узнают поздно.',
      },
    ],
  },
}

export function PreviewCarousel({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{t.title}</h2>
          <p className="mt-3 text-white/65">{t.sub}</p>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-4 sm:grid sm:min-w-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {t.cards.map((c, i) => (
              <article
                key={i}
                className="w2w-glass relative w-72 shrink-0 overflow-hidden p-0 sm:w-auto"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0A0E1A]">
                  <Image
                    src={c.src}
                    alt={`${c.title} — ${c.page}`}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 288px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/80 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                    {c.page}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-base font-bold leading-snug sm:text-lg">{c.title}</h3>
                  <p className="text-sm text-white/65">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-white/45">
          Real pages from the PDF. Cropped to top of each page.
        </p>
      </div>
    </section>
  )
}
