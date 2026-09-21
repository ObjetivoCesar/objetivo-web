/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    '/server-sitemap.xml',
    '/admin/*',
    '/nueva-home',
    '/nueva-home/*',
    '/home-test',
    '/home-test/*',
    '/home-test-backup',
    '/home-test-backup/*',
    '/test-header',
    '/test-header/*',
    '/descubre-loja',
    '/descubre-loja/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api',
          '/nueva-home',
          '/home-test',
          '/home-test-backup',
          '/test-header'
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com'}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://cesarreyesjaramillo.com'}/server-sitemap.xml`,
    ],
  },
  outDir: 'public',
};
