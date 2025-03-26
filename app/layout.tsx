import '../styles/globals.css';
import '../styles/animations.css';
import { Inter } from 'next/font/google';
import { Providers } from '../contexts/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import CookieConsent to avoid SSR issues with localStorage
const CookieConsent = dynamic(() => import('../components/CookieConsent'), { ssr: false });

export const metadata = {
  manifest: '/manifest.json',
  title: 'Dominium Labs - Custom Software Solutions & Digital Innovation Agency',
  description: 'Dominium Labs is a premier digital agency specializing in custom software solutions, web development, and digital innovation tailored to your business needs.',
  keywords: 'digital agency, custom software, web development, mobile apps, digital innovation, software solutions, Netherlands, Dominium Labs',
  verification: {
    google: 'pBZLxv_mBZJc-RT2QfvVrFKHf754_YlU2pflrUX9uDE',
  },
  openGraph: {
    title: 'Dominium Labs - Custom Software Solutions & Digital Innovation',
    description: 'We create cutting-edge software solutions and digital experiences that transform businesses. Explore how Dominium Labs can elevate your digital presence.',
    url: 'https://dominiumlabs.com',
    siteName: 'Dominium Labs',
    images: [
      {
        url: '/images/logo/DominiumLabs.png',
        width: 800,
        height: 800,
        alt: 'Dominium Labs Logo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dominium Labs - Custom Software Solutions & Digital Innovation',
    description: 'We create cutting-edge software solutions and digital experiences that transform businesses. Explore how Dominium Labs can elevate your digital presence.',
    images: ['/images/logo/DominiumLabs.png'],
    creator: '@dominiumlabs',
  },
  alternates: {
    canonical: 'https://dominiumlabs.com',
  },
  // Additional OpenGraph properties for sections
  other: {
    'og:section:about': 'https://dominiumlabs.com/#about',
    'og:section:services': 'https://dominiumlabs.com/#services',
    'og:section:work': 'https://dominiumlabs.com/#work',
    'og:section:process': 'https://dominiumlabs.com/#process',
    'og:section:contact': 'https://dominiumlabs.com/#contact'
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32' }
    ],
    apple: {
      url: '/favicon/apple-touch-icon.png',
      sizes: '180x180'
    },
    shortcut: '/favicon/favicon.ico'
  },
  metadataBase: new URL('https://dominiumlabs.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Handle anchor links smoothly for one-page site
              document.addEventListener('DOMContentLoaded', function() {
                // Check if URL has hash on load
                if (window.location.hash) {
                  const targetId = window.location.hash.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    setTimeout(() => {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
