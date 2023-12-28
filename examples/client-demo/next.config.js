/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'open.api.nexon.com' }],
  },
};

module.exports = nextConfig;
