/**
 * Affiliate link registry.
 *
 * Each entry resolves to its env-driven referral URL when set, otherwise
 * falls back to the public homepage. Swap `process.env.*` values without
 * code changes when new affiliate IDs are issued.
 */

export type AffiliateKey =
  | 'coinbase'
  | 'kraken'
  | 'ledger'
  | 'trustwallet'
  | 'metamask'
  | 'coinmarketcap'
  | 'tradingview'
  | 'koinly'
  | 'cointracker'

export type AffiliateEntry = {
  key: AffiliateKey
  name: string
  category: 'exchange' | 'wallet' | 'tracker' | 'tax' | 'analytics'
  blurb: string
  url: string
}

const FALLBACK: Record<AffiliateKey, string> = {
  coinbase: 'https://www.coinbase.com',
  kraken: 'https://www.kraken.com',
  ledger: 'https://www.ledger.com',
  trustwallet: 'https://trustwallet.com',
  metamask: 'https://metamask.io',
  coinmarketcap: 'https://coinmarketcap.com',
  tradingview: 'https://www.tradingview.com',
  koinly: 'https://koinly.io',
  cointracker: 'https://www.cointracker.io',
}

function ref(key: AffiliateKey): string {
  const envKey = `${key.toUpperCase()}_REF`
  return process.env[envKey] || FALLBACK[key]
}

export const AFFILIATES: AffiliateEntry[] = [
  {
    key: 'coinbase',
    name: 'Coinbase',
    category: 'exchange',
    blurb: 'Easy beginner exchange. Regulated, simple UI.',
    url: ref('coinbase'),
  },
  {
    key: 'kraken',
    name: 'Kraken',
    category: 'exchange',
    blurb: 'Trusted alternative with strong security history.',
    url: ref('kraken'),
  },
  {
    key: 'ledger',
    name: 'Ledger',
    category: 'wallet',
    blurb: 'Hardware wallet. Keeps your keys offline.',
    url: ref('ledger'),
  },
  {
    key: 'trustwallet',
    name: 'Trust Wallet',
    category: 'wallet',
    blurb: 'Mobile self-custody wallet for everyday use.',
    url: ref('trustwallet'),
  },
  {
    key: 'metamask',
    name: 'MetaMask',
    category: 'wallet',
    blurb: 'Browser wallet for ETH and EVM chains.',
    url: ref('metamask'),
  },
  {
    key: 'coinmarketcap',
    name: 'CoinMarketCap',
    category: 'tracker',
    blurb: 'Track prices and watch the market.',
    url: ref('coinmarketcap'),
  },
  {
    key: 'tradingview',
    name: 'TradingView',
    category: 'analytics',
    blurb: 'Charts and indicators when you are ready to dig in.',
    url: ref('tradingview'),
  },
  {
    key: 'koinly',
    name: 'Koinly',
    category: 'tax',
    blurb: 'Crypto tax reports for your country.',
    url: ref('koinly'),
  },
  {
    key: 'cointracker',
    name: 'CoinTracker',
    category: 'tax',
    blurb: 'Portfolio and tax tracking in one place.',
    url: ref('cointracker'),
  },
]

export function getAffiliate(key: AffiliateKey): AffiliateEntry {
  const entry = AFFILIATES.find((a) => a.key === key)
  if (!entry) throw new Error(`Unknown affiliate: ${key}`)
  return entry
}

export const FOOTER_PICKS: AffiliateKey[] = [
  'coinbase',
  'kraken',
  'ledger',
  'trustwallet',
  'metamask',
  'coinmarketcap',
  'koinly',
]

export const STARTER_STACK: {
  step: number
  title: string
  blurb: string
  picks: AffiliateKey[]
}[] = [
  {
    step: 2,
    title: 'Open a beginner-safe exchange',
    blurb: 'Where you turn dollars into crypto. Both options are regulated and easy to use.',
    picks: ['coinbase', 'kraken'],
  },
  {
    step: 3,
    title: 'Set up a wallet you control',
    blurb:
      'Self-custody means YOU own the keys. Start with a hot wallet, upgrade to hardware when balances grow.',
    picks: ['trustwallet', 'metamask', 'ledger'],
  },
  {
    step: 4,
    title: 'Track your portfolio',
    blurb: 'See prices and your positions in one place.',
    picks: ['coinmarketcap'],
  },
  {
    step: 5,
    title: 'Handle taxes early',
    blurb: 'Crypto is taxable in most countries. Start tracking from day one.',
    picks: ['koinly', 'cointracker'],
  },
]
