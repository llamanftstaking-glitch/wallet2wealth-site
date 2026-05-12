'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { LANG_LABELS, SUPPORTED, type Lang } from '@/lib/i18n'

export function LangSwitcher({ current }: { current: Lang }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pending, startTransition] = useTransition()

  function onPick(next: Lang) {
    const params = new URLSearchParams(searchParams?.toString())
    if (next === 'en') {
      params.delete('lang')
    } else {
      params.set('lang', next)
    }
    const qs = params.toString()
    document.cookie = `w2w_lang=${next}; path=/; max-age=${60 * 60 * 24 * 365}`
    startTransition(() => {
      router.replace(qs ? `${pathname}?${qs}` : pathname)
      router.refresh()
    })
  }

  return (
    <div className="relative">
      <select
        aria-label="Language"
        value={current}
        onChange={(e) => onPick(e.target.value as Lang)}
        disabled={pending}
        className="h-10 cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/5 px-2 pr-6 text-xs text-white outline-none focus:border-[var(--w2w-cyan)] sm:h-9 sm:px-3 sm:pr-7 sm:text-sm"
      >
        {SUPPORTED.map((l) => (
          <option key={l} value={l} className="bg-[#0A0E1A] text-white">
            {LANG_LABELS[l].native}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-xs text-white/55 sm:right-2">
        ▾
      </span>
    </div>
  )
}
