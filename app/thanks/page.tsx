import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Download } from 'lucide-react'
import { stripe } from '@/lib/stripe'
import {
  getSupabaseAdmin,
  type SupportedLang,
  type OrderRow,
  type DownloadRow,
} from '@/lib/supabase'
import { getDict, pickLang } from '@/lib/i18n'
import { PurchaseTracker } from '@/components/PurchaseTracker'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function getDownloadInfo(sessionId: string | undefined) {
  if (!sessionId) return null
  let email = ''
  let lang: SupportedLang = 'en'
  let amount = 299
  let currency = 'usd'
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    email = session.customer_details?.email || session.customer_email || ''
    lang = ((session.metadata?.lang as SupportedLang) || 'en') as SupportedLang
    amount = session.amount_total ?? 299
    currency = session.currency || 'usd'
  } catch {
    return null
  }
  try {
    const sb = getSupabaseAdmin()
    const { data: order } = await sb
      .from('orders')
      .select('*')
      .eq('stripe_session_id', sessionId)
      .maybeSingle<OrderRow>()
    if (!order) {
      return { email, lang, token: undefined, orderId: undefined, amount, currency }
    }
    const { data: dl } = await sb
      .from('downloads')
      .select('*')
      .eq('order_id', order.id)
      .eq('lang', order.lang || lang)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle<DownloadRow>()
    return {
      email: order.email || email,
      lang: (order.lang || lang) as SupportedLang,
      token: dl?.token,
      orderId: order.id,
      amount: order.amount_cents || amount,
      currency: order.currency || currency,
    }
  } catch {
    return {
      email,
      lang,
      token: undefined as string | undefined,
      orderId: undefined as string | undefined,
      amount,
      currency,
    }
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; lang?: string }>
}) {
  const params = await searchParams
  const info = await getDownloadInfo(params.session_id)
  const lang = pickLang(info?.lang || params.lang)
  const t = getDict(lang).thanks

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <PurchaseTracker
        orderId={info?.orderId}
        value={info?.amount}
        currency={info?.currency}
        lang={lang}
      />
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 text-sm text-white/65 hover:text-white"
      >
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
        <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-[var(--w2w-cyan)] drop-shadow-[0_0_18px_rgba(91,200,255,0.6)]" />
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="mt-2 text-sm text-white/65">
          {t.bodyEmailed}{' '}
          {info?.email ? <strong className="text-white">{info.email}</strong> : 'you'}.
        </p>

        {info?.token ? (
          <a
            href={`/api/download/${info.token}`}
            className="w2w-cta mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold"
          >
            <Download className="h-4 w-4" />
            {t.download}
          </a>
        ) : (
          <p className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/65">
            {t.fallback}
          </p>
        )}

        <p className="mt-6 text-xs text-white/45">{t.note}</p>
      </div>
    </main>
  )
}
