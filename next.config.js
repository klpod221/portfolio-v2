/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org"],
    unoptimized: true,
  },
}

module.exports = nextConfig
