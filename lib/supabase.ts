import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const URL = process.env.SUPABASE_URL || ''
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

let cached: SupabaseClient | null = null

/**
 * Server-only admin client. Bypasses Row Level Security.
 * Never expose this client (or the service_role key) to browsers.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached
  if (!URL || !SERVICE_KEY) {
    throw new Error(
      'Supabase admin not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.',
    )
  }
  cached = createClient(URL, SERVICE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { 'X-Client-Info': 'wallet2wealth-server' } },
  })
  return cached
}

export type SupportedLang = 'en' | 'es' | 'it' | 'fr' | 'pt' | 'ru'
export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'es', 'it', 'fr', 'pt', 'ru']

/** Database row types */
export type OrderRow = {
  id: string
  stripe_session_id: string
  stripe_payment_intent: string | null
  email: string
  amount_cents: number
  currency: string | null
  lang: SupportedLang | null
  status: 'pending' | 'paid' | 'refunded' | 'failed'
  country: string | null
  raw: Record<string, unknown> | null
  created_at: string
  updated_at: string
}

export type DownloadRow = {
  id: string
  order_id: string
  token: string
  lang: SupportedLang
  expires_at: string
  used_count: number | null
  last_used_at: string | null
  last_ip: string | null
  created_at: string
}

export type SubscriberRow = {
  id: string
  email: string
  lang: SupportedLang | null
  source: string | null
  ip: string | null
  user_agent: string | null
  consent: boolean | null
  confirmed: boolean | null
  created_at: string
  updated_at: string
}

const TOKEN_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function generateToken(length = 48): string {
  // crypto.getRandomValues is available in Node 19+ and the Next runtime.
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  let out = ''
  for (let i = 0; i < length; i++) {
    out += TOKEN_ALPHABET[bytes[i] % TOKEN_ALPHABET.length]
  }
  return out
}
