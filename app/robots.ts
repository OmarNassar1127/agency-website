import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Uncomment and modify if you need to disallow specific paths
      // disallow: '/admin/',
    },
    sitemap: 'https://dominiumlabs.com/sitemap.xml',
  };
}