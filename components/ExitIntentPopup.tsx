'use client'

import { useEffect, useState } from 'react'
import { Mail, Loader2, CheckCircle2, X } from 'lucide-react'

const STORAGE_KEY = 'w2w_chapter_seen_v1'
const STORAGE_OK_KEY = 'w2w_chapter_ok_v1'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ExitIntentPopup({ lang }: { lang: string }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (localStorage.getItem(STORAGE_OK_KEY) === '1') return
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return
    } catch {}

    let armed = false
    const armTimer = window.setTimeout(() => {
      armed = true
    }, 8000)

    function onMouseLeave(e: MouseEvent) {
      if (!armed) return
      if (e.clientY <= 0) {
        trigger()
      }
    }

    function onVisibility() {
      if (!armed) return
      if (document.visibilityState === 'hidden') {
        trigger()
      }
    }

    function trigger() {
      try {
        sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {}
      setOpen(true)
      cleanup()
    }

    function cleanup() {
      window.clearTimeout(armTimer)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }

    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibility)
    return cleanup
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.includes('@')) return setError('Enter a valid email.')
    setStatus('submitting')
    try {
      const res = await fetch('/api/leads/chapter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setError(data.error === 'invalid_email' ? 'Email looks off.' : 'Try again.')
        return
      }
      setStatus('success')
      try {
        localStorage.setItem(STORAGE_OK_KEY, '1')
      } catch {}
    } catch {
      setStatus('error')
      setError('Network error. Try again.')
    }
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0A0E1A] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded p-1 text-white/55 hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {status === 'success' ? (
          <div className="text-center">
            <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-[var(--w2w-cyan)]" />
            <h3 className="text-xl font-bold">Check your inbox.</h3>
            <p className="mt-2 text-sm text-white/70">
              Free chapter sent to <strong className="text-white">{email}</strong>. (Check spam if
              you don't see it in 60 seconds.)
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex h-10 items-center rounded-lg border border-white/15 px-4 text-sm font-semibold hover:bg-white/5"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/65">
              <Mail className="h-3 w-3" /> Free chapter · No charge
            </div>
            <h3 className="mt-2 text-xl font-bold leading-tight">
              Before you go — grab the chapter that saves you $100.
            </h3>
            <p className="mt-2 text-sm text-white/65">
              <strong className="text-white">5 Red Flags Every Crypto Beginner Should Know</strong>{' '}
              — free to your inbox. The rest of the guide is $2.99.
            </p>

            <form onSubmit={onSubmit} className="mt-5 space-y-3">
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 w-full rounded-lg border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--w2w-cyan)]"
              />
              {error ? (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-2 text-xs text-red-200">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w2w-cta flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>Send me the chapter</>
                )}
              </button>
              <p className="text-center text-[11px] text-white/45">
                One email. Unsubscribe anytime. No spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
