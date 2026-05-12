'use client'

import { useEffect } from 'react'
import { trackPurchase } from '@/lib/track'

export function PurchaseTracker({
  orderId,
  value,
  currency,
  lang,
}: {
  orderId?: string
  value?: number
  currency?: string
  lang?: string
}) {
  useEffect(() => {
    if (!orderId) return
    trackPurchase({ orderId, value, currency, lang })
  }, [orderId, value, currency, lang])
  return null
}
