/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
}

module.exports = nextConfig
