/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Custom domain - no basePath needed with custom domain
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Ensure proper static exports
  distDir: 'out',
  // Improved settings for Next.js 14
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig