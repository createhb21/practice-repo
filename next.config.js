/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
