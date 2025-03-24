/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use output: 'export' during build, not during development
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  // Custom domain - no basePath needed with custom domain
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Only use distDir during production builds
  ...(process.env.NODE_ENV === 'production' ? { distDir: 'out' } : {}),
  // Improved settings for Next.js 14
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig