'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Lock, Loader2 } from 'lucide-react'

const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'ru', label: 'Русский' },
] as const

export default function BuyPage() {
  const [email, setEmail] = useState('')
  const [lang, setLang] = useState<(typeof LANGS)[number]['code']>('en')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, lang }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Checkout failed')
      }
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <Link href="/" className="mb-10 flex items-center gap-2 text-sm text-white/65 hover:text-white">
        <Image
          src="/brand/logo-no-bg.png"
          alt="Wallet to Wealth"
          width={28}
          height={28}
          className="drop-shadow-[0_0_10px_rgba(91,200,255,0.6)]"
        />
        Wallet to Wealth
      </Link>

      <div className="w2w-glass w-full max-w-md p-8">
        <h1 className="text-2xl font-bold">Get the PDF</h1>
        <p className="mt-1 text-sm text-white/65">
          Pick your language, enter your email, and check out for{' '}
          <span className="text-[var(--w2w-cyan)] font-semibold">$2.99</span>.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wide text-white/55">
              Language
            </label>
            <div className="grid grid-cols-3 gap-2">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    lang === l.code
                      ? 'border-[var(--w2w-cyan)] bg-[var(--w2w-cyan)]/15 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wide text-white/55">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-11 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[var(--w2w-cyan)]"
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="w2w-cta inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {loading ? 'Redirecting…' : 'Pay $2.99 with Stripe'}
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-white/45">
            <Lock className="h-3 w-3" />
            Secure checkout · Cards, Apple Pay, Google Pay
          </div>
        </form>
      </div>
    </main>
  )
}
