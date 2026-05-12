/** @type {import('next-sitemap').IConfig} */
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://wallet2wealth.com'
const LANGS = ['en', 'es', 'it', 'fr', 'pt', 'ru']

function langAlternates(path) {
  const cleanPath = path === '/' ? '' : path
  return LANGS.map((lang) => ({
    hreflang: lang,
    href: `${SITE}${cleanPath}${lang === 'en' ? '' : `?lang=${lang}`}`,
  })).concat({ hreflang: 'x-default', href: `${SITE}${cleanPath}` })
}

const now = new Date().toISOString()

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  changefreq: 'daily',
  exclude: ['/api/*', '/thanks'],
  additionalPaths: async () => [
    {
      loc: '/',
      priority: 1,
      changefreq: 'daily',
      lastmod: now,
      alternateRefs: langAlternates('/'),
    },
    {
      loc: '/buy',
      priority: 0.9,
      changefreq: 'weekly',
      lastmod: now,
      alternateRefs: langAlternates('/buy'),
    },
    { loc: '/privacy', priority: 0.3, changefreq: 'monthly' },
    { loc: '/tos', priority: 0.3, changefreq: 'monthly' },
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api', '/thanks'] }],
    additionalSitemaps: [`${SITE}/sitemap.xml`],
  },
}
