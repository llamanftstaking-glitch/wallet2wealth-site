'use client'

import { useState } from 'react'
import { Gift, Loader2, CheckCircle2 } from 'lucide-react'
import type { Lang } from '@/lib/i18n'

const COPY: Record<Lang, {
  title: string
  body: string
  placeholder: string
  cta: string
  sending: string
  success: string
  successBody: string
}> = {
  en: {
    title: 'Want the first chapter free?',
    body: 'Drop your email and we’ll send the opening chapter — no credit card.',
    placeholder: 'you@example.com',
    cta: 'Send me the free chapter',
    sending: 'Sending…',
    success: 'Check your inbox',
    successBody: 'The free chapter is on its way. If you don’t see it in 2 minutes, check the spam folder.',
  },
  es: {
    title: '¿Quieres el primer capítulo gratis?',
    body: 'Deja tu email y te enviamos el capítulo de apertura — sin tarjeta.',
    placeholder: 'tu@correo.com',
    cta: 'Quiero el capítulo gratis',
    sending: 'Enviando…',
    success: 'Revisa tu bandeja',
    successBody: 'El capítulo gratis va en camino. Si no lo ves en 2 minutos, revisa el spam.',
  },
  it: {
    title: 'Vuoi il primo capitolo gratis?',
    body: 'Lascia la tua email e ti mandiamo il capitolo iniziale — niente carta.',
    placeholder: 'tu@email.com',
    cta: 'Voglio il capitolo gratuito',
    sending: 'Invio in corso…',
    success: 'Controlla la posta',
    successBody: 'Il capitolo gratuito sta arrivando. Se non lo vedi entro 2 minuti, controlla lo spam.',
  },
  fr: {
    title: 'Le premier chapitre gratuit ?',
    body: 'Laissez votre email et on vous envoie le chapitre d’ouverture — sans carte.',
    placeholder: 'vous@exemple.com',
    cta: 'Recevoir le chapitre gratuit',
    sending: 'Envoi…',
    success: 'Vérifiez votre boîte mail',
    successBody: 'Le chapitre gratuit est en route. S’il ne s’affiche pas dans 2 minutes, regardez les spams.',
  },
  pt: {
    title: 'Quer o primeiro capítulo grátis?',
    body: 'Deixe seu email e enviamos o capítulo de abertura — sem cartão.',
    placeholder: 'voce@exemplo.com',
    cta: 'Quero o capítulo grátis',
    sending: 'Enviando…',
    success: 'Confira seu email',
    successBody: 'O capítulo gratuito está a caminho. Se não chegar em 2 minutos, olhe o spam.',
  },
  ru: {
    title: 'Хотите первую главу бесплатно?',
    body: 'Оставьте email — отправим открывающую главу. Карта не нужна.',
    placeholder: 'you@example.com',
    cta: 'Прислать бесплатную главу',
    sending: 'Отправляем…',
    success: 'Проверьте почту',
    successBody: 'Бесплатная глава уже в пути. Если её нет в течение 2 минут — проверьте «Спам».',
  },
}

export function LeadMagnet({ lang }: { lang: Lang }) {
  const t = COPY[lang]
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, lang, source: 'landing-lead-magnet' }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || 'Subscribe failed')
      setDone(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto w2w-glass max-w-2xl p-8 text-center">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--w2w-cyan)]/15 text-[var(--w2w-cyan)]">
          {done ? <CheckCircle2 className="h-5 w-5" /> : <Gift className="h-5 w-5" />}
        </div>
        {done ? (
          <>
            <h3 className="text-2xl font-bold">{t.success}</h3>
            <p className="mt-2 text-sm text-white/70">{t.successBody}</p>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-white/70">{t.body}</p>
            <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--w2w-cyan)]"
              />
              <button
                type="submit"
                disabled={loading || !email}
                className="w2w-cta inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {loading ? t.sending : t.cta}
              </button>
            </form>
            {error && (
              <p className="mt-3 text-sm text-red-300">{error}</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}
