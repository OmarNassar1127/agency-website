/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/agency-site' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig