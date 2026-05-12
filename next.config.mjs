import NextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const cspHeader = `
  default-src 'self' https: wss:;
  script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''} https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' https: blob: data:;
  media-src 'self' https: blob: data:;
  font-src 'self' https:;
  frame-src 'self' https: https://js.stripe.com https://hooks.stripe.com;
  connect-src 'self' https: wss:;
  worker-src 'self' blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  transpilePackages: ['geist'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'wallet2wealth.com', port: '', pathname: '/**' },
    ],
  },
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'x-frame-options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'autoplay=(self), fullscreen=(self), microphone=()' },
        ],
      },
      {
        source: '/:path((?!api).*)*',
        headers: [{ key: 'Content-Security-Policy', value: cspHeader.replaceAll('\n', '') }],
      },
    ]
  },
}

export default withBundleAnalyzer(config)
