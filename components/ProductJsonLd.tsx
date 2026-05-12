// Server component — renders schema.org Product JSON-LD for Google rich results.
// Improves CTR in search by showing price, rating, availability inline.

const SITE = 'https://wallet2wealth.com'

export function ProductJsonLd({ lang = 'en' }: { lang?: string }) {
  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Wallet to Wealth — Crypto for Beginners PDF',
    description:
      'A clear, beginner-friendly PDF that walks you through wallets, coins, scams, and your first real crypto move. Instant download.',
    image: [`${SITE}/brand/og.webp`, `${SITE}/brand/og.png`],
    brand: { '@type': 'Brand', name: 'Wallet to Wealth' },
    sku: `W2W-PDF-${lang.toUpperCase()}`,
    inLanguage: lang,
    offers: {
      '@type': 'Offer',
      url: `${SITE}/buy${lang === 'en' ? '' : `?lang=${lang}`}`,
      price: '2.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'Wallet to Wealth' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '1200',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Buy', item: `${SITE}/buy` },
    ],
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wallet to Wealth',
    url: SITE,
    logo: `${SITE}/brand/logo-no-bg.png`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
    </>
  )
}
