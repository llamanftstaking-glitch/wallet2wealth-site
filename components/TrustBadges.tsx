import { Lock, Download, Mail, ShieldCheck } from 'lucide-react'

const COPY: Record<
  string,
  { stripe: string; instant: string; email: string; satisfaction: string }
> = {
  en: {
    stripe: 'Stripe secured',
    instant: 'Instant download',
    email: 'Also emailed to you',
    satisfaction: '7-day refund',
  },
  es: {
    stripe: 'Pago seguro Stripe',
    instant: 'Descarga inmediata',
    email: 'También enviado por email',
    satisfaction: 'Reembolso 7 días',
  },
  it: {
    stripe: 'Pagamento Stripe sicuro',
    instant: 'Download immediato',
    email: 'Anche via email',
    satisfaction: 'Rimborso 7 giorni',
  },
  fr: {
    stripe: 'Paiement Stripe sécurisé',
    instant: 'Téléchargement immédiat',
    email: 'Aussi par email',
    satisfaction: 'Remboursement 7 jours',
  },
  pt: {
    stripe: 'Pagamento Stripe seguro',
    instant: 'Download imediato',
    email: 'Também por email',
    satisfaction: 'Reembolso 7 dias',
  },
  ru: {
    stripe: 'Безопасная оплата Stripe',
    instant: 'Мгновенная загрузка',
    email: 'Также на email',
    satisfaction: 'Возврат 7 дней',
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
