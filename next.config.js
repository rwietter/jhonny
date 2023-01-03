/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  env: {
    EMAIL_TO: process.env.EMAIL_TO,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
    EMAIL_AUTH: process.env.EMAIL_AUTH,
  },
}

module.exports = nextConfig
