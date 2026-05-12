import { Lock, Download, Mail, ShieldCheck } from 'lucide-react'

const COPY: Record<
  string,
  { stripe: string; instant: string; email: string; satisfaction: string }
> = {
  en: {
    stripe: 'Stripe secured',
    instant: 'Instant download',
    email: 'Emailed too',
    satisfaction: '256-bit SSL',
  },
  es: {
    stripe: 'Pago seguro Stripe',
    instant: 'Descarga inmediata',
    email: 'También por email',
    satisfaction: 'SSL 256-bit',
  },
  it: {
    stripe: 'Pagamento Stripe sicuro',
    instant: 'Download immediato',
    email: 'Anche via email',
    satisfaction: 'SSL 256-bit',
  },
  fr: {
    stripe: 'Paiement Stripe sécurisé',
    instant: 'Téléchargement immédiat',
    email: 'Aussi par email',
    satisfaction: 'SSL 256-bit',
  },
  pt: {
    stripe: 'Pagamento Stripe seguro',
    instant: 'Download imediato',
    email: 'Também por email',
    satisfaction: 'SSL 256-bit',
  },
  ru: {
    stripe: 'Безопасная оплата Stripe',
    instant: 'Мгновенная загрузка',
    email: 'Также на email',
    satisfaction: 'SSL 256-bit',
  },
}

export function TrustBadges({ lang }: { lang: string }) {
  const t = COPY[lang] || COPY.en
  return (
    <div className="mx-auto mt-4 grid w-full max-w-xl grid-cols-2 gap-3 text-xs text-white/70 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 sm:text-sm">
      <span className="flex items-center gap-1.5">
        <Lock className="h-4 w-4 text-[var(--w2w-cyan)]" />
        {t.stripe}
      </span>
      <span className="flex items-center gap-1.5">
        <Download className="h-4 w-4 text-[var(--w2w-cyan)]" />
        {t.instant}
      </span>
      <span className="flex items-center gap-1.5">
        <Mail className="h-4 w-4 text-[var(--w2w-cyan)]" />
        {t.email}
      </span>
      <span className="flex items-center gap-1.5">
        <ShieldCheck className="h-4 w-4 text-[var(--w2w-cyan)]" />
        {t.satisfaction}
      </span>
    </div>
  )
}
