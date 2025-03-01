/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Custom domain - no basePath needed with custom domain
  basePath: '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig