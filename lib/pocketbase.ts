import 'server-only'
import PocketBase from 'pocketbase'

const POCKETBASE_URL = process.env.POCKETBASE_URL || 'http://127.0.0.1:8090'
const ADMIN_EMAIL = process.env.POCKETBASE_ADMIN_EMAIL || ''
const ADMIN_PASSWORD = process.env.POCKETBASE_ADMIN_PASSWORD || ''

let cached: { client: PocketBase; authedAt: number } | null = null
const ADMIN_TTL_MS = 1000 * 60 * 30

async function ensureAdmin(pb: PocketBase): Promise<void> {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('PocketBase admin credentials are not configured')
  }
  await pb.collection('_superusers').authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD)
}

export async function getPocketBaseAdmin(): Promise<PocketBase> {
  const now = Date.now()
  if (cached && cached.client.authStore.isValid && now - cached.authedAt < ADMIN_TTL_MS) {
    return cached.client
  }
  const client = new PocketBase(POCKETBASE_URL)
  await ensureAdmin(client)
  cached = { client, authedAt: now }
  return client
}

export function getPocketBasePublic(): PocketBase {
  return new PocketBase(POCKETBASE_URL)
}

export type SupportedLang = 'en' | 'es' | 'it' | 'fr' | 'pt' | 'ru'

export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'es', 'it', 'fr', 'pt', 'ru']
