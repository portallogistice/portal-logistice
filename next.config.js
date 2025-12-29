/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'www.toyou.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thechefz.com',
      },
      {
        protocol: 'https',
        hostname: 'www.noon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.careem.com',
      },
      {
        protocol: 'https',
        hostname: 'www.uber.com',
      },
      {
        protocol: 'https',
        hostname: 'www.jahez.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hungerstation.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mrsool.com',
      },
    ],
  },
}

module.exports = nextConfig

