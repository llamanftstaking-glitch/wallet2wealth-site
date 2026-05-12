import 'server-only'
import Stripe from 'stripe'

const KEY = process.env.STRIPE_SECRET_KEY
if (!KEY && process.env.NODE_ENV === 'production') {
  throw new Error('STRIPE_SECRET_KEY is required in production')
}

export const stripe = new Stripe(KEY || 'sk_test_placeholder', {
  apiVersion: '2024-12-18.acacia' as Stripe.LatestApiVersion,
  typescript: true,
})

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || ''
export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || ''
