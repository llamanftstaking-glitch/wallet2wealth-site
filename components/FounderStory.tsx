import { ShieldAlert, BookOpen, Compass } from 'lucide-react'
import type { Lang } from '@/lib/i18n'

const COPY: Record<Lang, { kicker: string; title: string; body: string[]; signoff: string }> = {
  en: {
    kicker: 'Why Wallet to Wealth exists',
    title: 'Built for the people the crypto world keeps ignoring.',
    body: [
      'Most beginners get wrecked before they even understand what a wallet is. Fake links. Confusing exchanges. Influencers pushing tokens that vanish a week later.',
      'Wallet to Wealth was built to fix that. One plain-English guide. No hype. No leverage. No "to the moon." Just the on-ramp we wish we had when we started.',
      'If you have ever felt locked out of crypto because everyone else seemed to already get it — this is your way in.',
    ],
    signoff: '— The Wallet to Wealth team',
  },
  es: {
    kicker: 'Por qué existe Wallet to Wealth',
    title: 'Hecho para quienes el mundo cripto suele ignorar.',
    body: [
      'La mayoría de principiantes pierde dinero antes de entender qué es una wallet. Enlaces falsos. Exchanges confusos. Influencers empujando tokens que desaparecen una semana después.',
      'Wallet to Wealth nació para arreglar eso. Una guía en lenguaje claro. Sin hype. Sin apalancamiento. Sin promesas vacías. Solo la entrada que nos hubiera gustado tener.',
      'Si alguna vez sentiste que cripto no era para ti — esta es tu puerta.',
    ],
    signoff: '— El equipo de Wallet to Wealth',
  },
  it: {
    kicker: 'Perché esiste Wallet to Wealth',
    title: 'Costruito per chi il mondo crypto continua a ignorare.',
    body: [
      'La maggior parte dei principianti perde soldi prima ancora di capire cosa sia un wallet. Link falsi. Exchange confusi. Influencer che spingono token che svaniscono una settimana dopo.',
      'Wallet to Wealth nasce per risolvere questo. Una guida in italiano semplice. Niente hype. Niente leva. Niente promesse vuote. Solo l’ingresso che avremmo voluto avere noi.',
      'Se ti sei mai sentito tagliato fuori da crypto — questa è la tua porta d’ingresso.',
    ],
    signoff: '— Il team Wallet to Wealth',
  },
  fr: {
    kicker: 'Pourquoi Wallet to Wealth existe',
    title: 'Pensé pour ceux que la crypto laisse souvent de côté.',
    body: [
      'La plupart des débutants perdent de l’argent avant même de comprendre ce qu’est un wallet. Liens piégés. Exchanges confus. Influenceurs poussant des tokens qui disparaissent une semaine plus tard.',
      'Wallet to Wealth est né pour changer ça. Un guide en français clair. Sans hype. Sans levier. Sans promesses creuses. Juste la porte d’entrée que nous aurions aimé avoir.',
      'Si vous vous êtes déjà senti exclu de la crypto — c’est votre chemin.',
    ],
    signoff: '— L’équipe Wallet to Wealth',
  },
  pt: {
    kicker: 'Por que Wallet to Wealth existe',
    title: 'Criado para quem o mundo cripto costuma ignorar.',
    body: [
      'A maioria dos iniciantes perde dinheiro antes mesmo de entender o que é uma wallet. Links falsos. Exchanges confusas. Influenciadores empurrando tokens que somem uma semana depois.',
      'Wallet to Wealth nasceu para resolver isso. Um guia em português claro. Sem hype. Sem alavancagem. Sem promessas vazias. Só a porta de entrada que gostaríamos de ter tido.',
      'Se você já sentiu que cripto não era para você — esta é a sua entrada.',
    ],
    signoff: '— A equipe Wallet to Wealth',
  },
  ru: {
    kicker: 'Зачем существует Wallet to Wealth',
    title: 'Создано для тех, кого крипто-мир обычно игнорирует.',
    body: [
      'Большинство новичков теряют деньги ещё до того, как поймут, что такое кошелёк. Фишинговые ссылки. Запутанные биржи. Инфлюенсеры с токенами, которые исчезают через неделю.',
      'Wallet to Wealth появился, чтобы это исправить. Одно руководство простым языком. Без шума. Без плеча. Без пустых обещаний. Просто та точка входа, которую мы хотели бы иметь сами.',
      'Если вы когда-нибудь чувствовали, что крипта «не для вас» — это ваш вход.',
    ],
    signoff: '— Команда Wallet to Wealth',
  },
}

export function FounderStory({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="w2w-glass p-6 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--w2w-cyan)]/15 text-[var(--w2w-cyan)]">
              <Compass className="h-5 w-5" />
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--w2w-cyan)]">
              {t.kicker}
            </span>
          </div>
          <h2 className="text-balance text-2xl font-bold sm:text-3xl md:text-4xl">{t.title}</h2>
          <div className="mt-5 space-y-4 text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
            {t.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[var(--w2w-lavender)]" />
              <p className="text-sm text-white/75">
                Safety-first onboarding. We will never push leveraged trading, meme tokens, or
                anything we would not hand to a beginner family member.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[var(--w2w-lavender)]" />
              <p className="text-sm text-white/75">
                Education-first. Every chapter is something you can use the same day — not a lecture
                that ends on a sales pitch.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs uppercase tracking-wide text-white/45">{t.signoff}</p>
        </div>
      </div>
    </section>
  )
}
