import { getSupabaseAdmin, type OrderRow } from '@/lib/supabase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const FLAG: Record<string, string> = {
  US: '🇺🇸',
  CA: '🇨🇦',
  GB: '🇬🇧',
  AU: '🇦🇺',
  DE: '🇩🇪',
  FR: '🇫🇷',
  ES: '🇪🇸',
  IT: '🇮🇹',
  PT: '🇵🇹',
  BR: '🇧🇷',
  MX: '🇲🇽',
  AR: '🇦🇷',
  NL: '🇳🇱',
  BE: '🇧🇪',
  CH: '🇨🇭',
  AT: '🇦🇹',
  IE: '🇮🇪',
  SE: '🇸🇪',
  NO: '🇳🇴',
  DK: '🇩🇰',
  FI: '🇫🇮',
  JP: '🇯🇵',
  RU: '🇷🇺',
  UA: '🇺🇦',
  IN: '🇮🇳',
  CN: '🇨🇳',
  ZA: '🇿🇦',
  AE: '🇦🇪',
}

function fmtMoney(cents: number, currency: string | null) {
  const cur = (currency || 'usd').toUpperCase()
  return `${(cents / 100).toFixed(2)} ${cur}`
}

function fmtDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export default async function AdminOrdersPage() {
  const sb = getSupabaseAdmin()

  const { data: orders, error } = await sb
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500)
    .returns<OrderRow[]>()

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-zinc-100">
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="mt-4 text-red-400">Error loading orders: {error.message}</p>
      </main>
    )
  }

  const list = orders ?? []
  const paid = list.filter((o) => o.status === 'paid')
  const totalCents = paid.reduce((sum, o) => sum + (o.amount_cents || 0), 0)
  const uniqueCountries = new Set(paid.map((o) => o.country).filter(Boolean))
  const byLang = paid.reduce<Record<string, number>>((acc, o) => {
    const k = (o.lang || 'en').toUpperCase()
    acc[k] = (acc[k] || 0) + 1
    return acc
  }, {})

  return (
    <main className="min-h-screen bg-zinc-950 p-6 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="mt-1 text-sm text-zinc-400">
              Wallet to Wealth — last {list.length} orders
            </p>
          </div>
          <a
            href="/"
            className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm hover:bg-zinc-800"
          >
            ← Site
          </a>
        </header>

        <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Paid orders" value={String(paid.length)} />
          <Stat label="Revenue" value={fmtMoney(totalCents, 'usd')} />
          <Stat label="Countries" value={String(uniqueCountries.size)} />
          <Stat
            label="By language"
            value={
              Object.entries(byLang)
                .sort((a, b) => b[1] - a[1])
                .map(([k, v]) => `${k}:${v}`)
                .join(' ') || '—'
            }
          />
        </section>

        <section className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-800 bg-zinc-900/80 text-left">
                <tr>
                  <Th>Date</Th>
                  <Th>Email</Th>
                  <Th>Lang</Th>
                  <Th>Country</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                  <Th>Session</Th>
                </tr>
              </thead>
              <tbody>
                {list.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-zinc-500">
                      No orders yet.
                    </td>
                  </tr>
                )}
                {list.map((o) => (
                  <tr key={o.id} className="border-b border-zinc-800/60 hover:bg-zinc-800/30">
                    <Td className="whitespace-nowrap text-zinc-400">{fmtDate(o.created_at)}</Td>
                    <Td className="font-medium">{o.email}</Td>
                    <Td>{(o.lang || 'en').toUpperCase()}</Td>
                    <Td>{o.country ? `${FLAG[o.country] || ''} ${o.country}` : '—'}</Td>
                    <Td className="whitespace-nowrap">{fmtMoney(o.amount_cents, o.currency)}</Td>
                    <Td>
                      <StatusBadge status={o.status} />
                    </Td>
                    <Td className="font-mono text-xs text-zinc-500">
                      <a
                        href={`https://dashboard.stripe.com/payments/${o.stripe_payment_intent || ''}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        {o.stripe_session_id.slice(0, 14)}…
                      </a>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="mt-1 truncate text-xl font-semibold">{value}</div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
      {children}
    </th>
  )
}

function Td({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>
}

function StatusBadge({ status }: { status: OrderRow['status'] }) {
  const styles: Record<OrderRow['status'], string> = {
    paid: 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30',
    pending: 'bg-amber-500/15 text-amber-300 ring-amber-500/30',
    refunded: 'bg-blue-500/15 text-blue-300 ring-blue-500/30',
    failed: 'bg-red-500/15 text-red-300 ring-red-500/30',
  }
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {status}
    </span>
  )
}
