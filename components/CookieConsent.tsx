'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const CONSENT_KEY = 'w2w_consent'

const COPY: Record<string, { body: string; accept: string; decline: string; learn: string }> = {
  en: {
    body: 'We use cookies for analytics and ad measurement. Decline keeps essential cookies only.',
    accept: 'Accept',
    decline: 'Decline',
    learn: 'Privacy',
  },
  es: {
    body: 'Usamos cookies para analítica y medición de anuncios. Rechazar deja solo cookies esenciales.',
    accept: 'Aceptar',
    decline: 'Rechazar',
    learn: 'Privacidad',
  },
  it: {
    body: 'Usiamo cookie per analisi e misurazione annunci. Rifiuta lascia solo i cookie essenziali.',
    accept: 'Accetta',
    decline: 'Rifiuta',
    learn: 'Privacy',
  },
  fr: {
    body: 'Nous utilisons des cookies pour l’analyse et la mesure publicitaire. Refuser ne garde que les cookies essentiels.',
    accept: 'Accepter',
    decline: 'Refuser',
    learn: 'Confidentialité',
  },
  pt: {
    body: 'Usamos cookies para analítica e medição de anúncios. Recusar mantém apenas cookies essenciais.',
    accept: 'Aceitar',
    decline: 'Recusar',
    learn: 'Privacidade',
  },
  ru: {
    body: 'Мы используем cookies для аналитики и измерения рекламы. Отклонить — только обязательные.',
    accept: 'Принять',
    decline: 'Отклонить',
    learn: 'Конфиденциальность',
  },
}

function setConsentCookie(value: 'granted' | 'denied') {
  document.cookie = `${CONSENT_KEY}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
  // Google Consent Mode v2 — defaults to denied via gtag('consent', 'default') in Pixels.tsx
  // Update consent state once user picks.
  if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
    ;(window as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      analytics_storage: value,
    })
  }
}

export function CookieConsent({ lang = 'en' }: { lang?: string }) {
  const [open, setOpen] = useState(false)
  const t = COPY[lang] || COPY.en

  useEffect(() => {
    const has = document.cookie.split('; ').some((c) => c.startsWith(`${CONSENT_KEY}=`))
    if (!has) setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-20 z-[60] mx-auto w2w-glass max-w-2xl border border-white/15 px-4 py-3 shadow-2xl sm:bottom-4 sm:px-5 sm:py-4"
      style={{ marginLeft: '1rem', marginRight: '1rem' }}
    >
      <button
        aria-label="Close"
        onClick={() => {
          setConsentCookie('denied')
          setOpen(false)
        }}
        className="absolute right-2 top-2 rounded p-1 text-white/55 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-sm text-white/85">{t.body}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          onClick={() => {
            setConsentCookie('granted')
            setOpen(false)
          }}
          className="w2w-cta inline-flex h-10 items-center rounded-lg px-4 text-sm font-bold"
        >
          {t.accept}
        </button>
        <button
          onClick={() => {
            setConsentCookie('denied')
            setOpen(false)
          }}
          className="inline-flex h-10 items-center rounded-lg border border-white/15 bg-white/5 px-4 text-sm font-medium text-white/85 hover:border-white/30"
        >
          {t.decline}
        </button>
        <a
          href="/privacy"
          className="ml-auto text-xs text-white/55 underline-offset-4 hover:text-white hover:underline"
        >
          {t.learn}
        </a>
      </div>
    </div>
  )
}
