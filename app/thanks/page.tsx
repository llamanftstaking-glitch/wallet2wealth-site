import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Download } from 'lucide-react'
import { stripe } from '@/lib/stripe'
import { getPocketBaseAdmin, type SupportedLang } from '@/lib/pocketbase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function getDownloadInfo(sessionId: string | undefined) {
  if (!sessionId) return null

  let email = ''
  let lang: SupportedLang = 'en'
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    email = session.customer_details?.email || session.customer_email || ''
    lang = ((session.metadata?.lang as SupportedLang) || 'en') as SupportedLang
  } catch {
    return null
  }

  try {
    const pb = await getPocketBaseAdmin()
    const order = await pb.collection('orders').getFirstListItem(`stripe_session_id = "${sessionId}"`)
    const dl = await pb
      .collection('downloads')
      .getFirstListItem(`order = "${order.id}" && lang = "${order.lang}"`, { sort: '-created' })
    return { email: order.email || email, lang: order.lang as SupportedLang, token: dl.token }
  } catch {
    return { email, lang, token: undefined }
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const params = await searchParams
  const info = await getDownloadInfo(params.session_id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
      <Link href="/" className="mb-8 flex items-center gap-2 text-sm text-white/65 hover:text-white">
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
        <h1 className="text-3xl font-bold">You&rsquo;re in.</h1>
        <p className="mt-2 text-sm text-white/65">
          Payment received. {info?.email ? <>A copy has been emailed to <strong className="text-white">{info.email}</strong>.</> : 'A copy has been emailed to you.'}
        </p>

        {info?.token ? (
          <a
            href={`/api/download/${info.token}`}
            className="w2w-cta mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-base font-bold"
          >
            <Download className="h-4 w-4" />
            Download your PDF
          </a>
        ) : (
          <p className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/65">
            Your PDF will arrive in your inbox within a minute. Check your spam folder if you don&rsquo;t see it.
          </p>
        )}

        <p className="mt-6 text-xs text-white/45">
          The download link is good for 14 days. Save the PDF once you have it.
        </p>
      </div>
    </main>
  )
}
