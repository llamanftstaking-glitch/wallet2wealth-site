// Lightweight client-side event helpers. Each fn no-ops when the
// corresponding pixel script has not loaded — useful for ad creatives
// that point at the same site without all networks configured.

type EventPayload = {
  value?: number
  currency?: string
  email?: string
  lang?: string
  orderId?: string
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    ttq?: { track: (event: string, params?: Record<string, unknown>) => void }
    gtag?: (...args: unknown[]) => void
    dataLayer?: Array<Record<string, unknown>>
    posthog?: { capture: (name: string, props?: Record<string, unknown>) => void }
  }
}

function safe<T extends (...args: never[]) => unknown>(fn: T | undefined, ...args: Parameters<T>) {
  if (typeof window === 'undefined') return
  try {
    fn?.(...args)
  } catch {
    // pixel errors must never crash the user flow
  }
}

export function trackLead(p: EventPayload = {}) {
  safe(window.fbq, 'track', 'Lead', { content_name: 'free-chapter', currency: p.currency || 'USD' })
  safe(window.ttq?.track.bind(window.ttq), 'CompleteRegistration', {
    content_id: 'free-chapter',
    description: p.lang,
  })
  safe(window.gtag, 'event', 'generate_lead', { lang: p.lang, method: 'lead-magnet' })
  window.dataLayer?.push({ event: 'lead', lang: p.lang })
  safe(window.posthog?.capture.bind(window.posthog), 'lead_captured', { lang: p.lang })
}

export function trackInitiateCheckout(p: EventPayload = {}) {
  safe(window.fbq, 'track', 'InitiateCheckout', { value: 2.99, currency: p.currency || 'USD' })
  safe(window.ttq?.track.bind(window.ttq), 'InitiateCheckout', { value: 2.99, currency: 'USD' })
  safe(window.gtag, 'event', 'begin_checkout', { value: 2.99, currency: 'USD', lang: p.lang })
  window.dataLayer?.push({ event: 'begin_checkout', value: 2.99, currency: 'USD' })
  safe(window.posthog?.capture.bind(window.posthog), 'begin_checkout', { lang: p.lang })
}

export function trackPurchase(p: EventPayload = {}) {
  const value = (p.value ?? 299) / 100
  const currency = p.currency?.toUpperCase() || 'USD'

  safe(window.fbq, 'track', 'Purchase', { value, currency })
  safe(window.ttq?.track.bind(window.ttq), 'CompletePayment', { value, currency, content_id: p.orderId })
  safe(window.gtag, 'event', 'purchase', {
    transaction_id: p.orderId,
    value,
    currency,
    items: [{ item_id: 'w2w-pdf', item_name: 'Wallet to Wealth PDF', price: value, quantity: 1 }],
  })
  window.dataLayer?.push({
    event: 'purchase',
    transaction_id: p.orderId,
    value,
    currency,
  })
  safe(window.posthog?.capture.bind(window.posthog), 'purchase', { value, currency, lang: p.lang })
}
