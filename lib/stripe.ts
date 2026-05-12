import 'server-only'
import Stripe from 'stripe'

const KEY = process.env.STRIPE_SECRET_KEY || ''

export const stripe = new Stripe(KEY || 'sk_test_placeholder', {
  typescript: true,
})

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || ''
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || ''

export function assertStripeConfigured() {
  if (!KEY) throw new Error('STRIPE_SECRET_KEY is not configured')
  if (!STRIPE_PRICE_ID) throw new Error('STRIPE_PRICE_ID is not configured')
}
