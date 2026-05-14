// Lightweight wallet-address validators. Server-side use.
// ETH: 0x + 40 hex chars (EIP-55 checksum optional). SOL: base58, 32-44 chars.

export function isValidEthAddress(addr: string): boolean {
  if (!addr) return false
  return /^0x[a-fA-F0-9]{40}$/.test(addr.trim())
}

const BASE58_ALPHABET = /^[1-9A-HJ-NP-Za-km-z]+$/

export function isValidSolAddress(addr: string): boolean {
  if (!addr) return false
  const t = addr.trim()
  if (t.length < 32 || t.length > 44) return false
  return BASE58_ALPHABET.test(t)
}

export function normalizeEth(addr: string): string {
  return addr.trim().toLowerCase()
}

export function normalizeSol(addr: string): string {
  return addr.trim()
}
