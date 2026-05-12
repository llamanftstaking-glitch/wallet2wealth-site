/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://wallet2wealth.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  exclude: ['/api/*', '/thanks'],
  additionalPaths: async () => [
    { loc: '/', priority: 1, changefreq: 'daily', lastmod: new Date().toISOString() },
    { loc: '/buy', priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() },
    { loc: '/privacy', priority: 0.3, changefreq: 'monthly' },
    { loc: '/tos', priority: 0.3, changefreq: 'monthly' },
  ],
}
