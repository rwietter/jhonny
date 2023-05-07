/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  env: {
    GITHUB_KEY: process.env.GITHUB_KEY,
  },
}

module.exports = nextConfig
