/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    largePageDataBytes: 512 * 100000,
  },
}

module.exports = nextConfig
