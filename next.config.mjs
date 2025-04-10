/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Ignore ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Production optimizations
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize output
  output: 'standalone',
};

export default nextConfig; 