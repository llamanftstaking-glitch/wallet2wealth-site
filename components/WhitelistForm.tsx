'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShieldCheck, Loader2, CheckCircle2, Send } from 'lucide-react'

type Props = {
  defaultEmail?: string
  orderId?: string
  lang?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const TELEGRAM_INVITE = 'https://t.me/+srZIaodHoDZiMjA5'

export function WhitelistForm({ defaultEmail = '', orderId, lang }: Props) {
  const [email, setEmail] = useState(defaultEmail)
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email) return setError('Email required.')
    if (!agreed) return setError('Please accept the presale terms.')
    setStatus('submitting')
    try {
      const res = await fetch('/api/whitelist/join', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          orderId,
          lang,
          agreedTerms: true,
          joinedTelegram: true,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setError(humanizeError(data.error))
        return
      }
      setStatus('success')
      window.open(TELEGRAM_INVITE, '_blank', 'noopener,noreferrer')
    } catch {
      setStatus('error')
      setError('Network error. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-6 rounded-2xl border border-[var(--w2w-cyan)]/30 bg-[var(--w2w-cyan)]/5 p-6 text-left">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-[var(--w2w-cyan)]" />
          <h3 className="text-lg font-bold">Your Phase 1 spot is locked.</h3>
        </div>
        <p className="mt-2 text-sm text-white/70">
          Confirmation sent to <strong className="text-white">{email}</strong>. Final step — join
          the private Telegram to keep your guaranteed whitelist spot. Allocation windows and chain
          details drop there first.
        </p>
        <a
          href={TELEGRAM_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="w2w-cta mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold"
        >
          <Send className="h-4 w-4" /> Open the private Telegram
        </a>
        <p className="mt-3 text-xs text-white/45">
          Didn&apos;t open?{' '}
          <a
            href={TELEGRAM_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Tap here to join
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
      <div className="mb-4 flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-[var(--w2w-cyan)]" />
        <h3 className="text-lg font-bold">You qualify for the GIZER presale</h3>
      </div>
      <p className="text-sm text-white/65">
        Every paid reader gets early-access to <strong className="text-white">$GZR</strong> — our
        token, our ecosystem. Stealth launch.{' '}
        <strong className="text-white">
          Joining the private community guarantees your Phase 1 presale whitelist spot.
        </strong>
      </p>

      <ol className="mt-4 space-y-1.5 text-sm text-white/65">
        <li>
          <span className="font-bold text-[var(--w2w-cyan)]">1.</span> Confirm your email below
        </li>
        <li>
          <span className="font-bold text-[var(--w2w-cyan)]">2.</span> Join the private Telegram
        </li>
        <li>
          <span className="font-bold text-[var(--w2w-cyan)]">3.</span> Phase 1 whitelist locked —
          allocation details drop in-channel
        </li>
      </ol>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <Field
          label="Email"
          required
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
        />

        <label className="flex cursor-pointer items-start gap-2 text-xs text-white/70">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 cursor-pointer accent-[var(--w2w-cyan)]"
          />
          <span>
            I have read and accept the{' '}
            <Link href="/presale-terms" target="_blank" className="underline hover:text-white">
              presale terms
            </Link>
            . I understand whitelist enrollment is not a guarantee of allocation.
          </span>
        </label>

        {error ? (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-200">
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
              <Loader2 className="h-4 w-4 animate-spin" /> Locking your spot…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Join Telegram &amp; lock my Phase 1 spot
            </>
          )}
        </button>
        <p className="text-center text-xs text-white/45">
          Private channel. Whitelist confirmed on join.
        </p>
      </form>
    </div>
  )
}

function Field(props: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  autoComplete?: string
  mono?: boolean
}) {
  return (
    <label className="block text-xs">
      <span className="mb-1 block text-white/65">
        {props.label}
        {props.required ? ' *' : ''}
      </span>
      <input
        type={props.type || 'text'}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        required={props.required}
        autoComplete={props.autoComplete}
        spellCheck={false}
        className={`h-11 w-full rounded-lg border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[var(--w2w-cyan)] ${
          props.mono ? 'font-mono' : ''
        }`}
      />
    </label>
  )
}

function humanizeError(code: string): string {
  switch (code) {
    case 'invalid_email':
      return 'Email looks off — check the format.'
    case 'terms_required':
      return 'You must accept the presale terms.'
    case 'db_error':
      return 'Server error. Please try again in a moment.'
    default:
      return 'Something went wrong. Try again.'
  }
}
