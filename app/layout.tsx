import '../styles/globals.css';
import '../styles/animations.css';
import { Inter } from 'next/font/google';
import { Providers } from '../contexts/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import CookieConsent to avoid SSR issues with localStorage
const CookieConsent = dynamic(() => import('../components/CookieConsent'), { ssr: false });

export const metadata = {
  manifest: '/manifest.json',
  title: 'Dominium Labs - ZZP Software Ontwikkelaars & Freelance Developers Nederland',
  description: 'Ervaren ZZP software ontwikkelaars en freelance developers in Nederland. Maatwerk webapplicaties, mobile apps, cloud oplossingen en AI development voor bedrijven.',
  keywords: 'ZZP software ontwikkelaar, freelance developer Nederland, ZZP programmeur, maatwerk software, webapplicatie ontwikkeling, mobile app ontwikkeling, app ontwikkelaar, iOS app ontwikkeling, Android app ontwikkeling, React Native developer, freelance app developer, mobile applicatie ontwikkeling, ZZP app ontwikkelaar, freelance React developer, ZZP Laravel specialist, software ontwikkeling Amsterdam, freelance web developer, cross-platform app ontwikkeling',
  verification: {
    google: 'pBZLxv_mBZJc-RT2QfvVrFKHf754_YlU2pflrUX9uDE',
  },
  openGraph: {
    title: 'Dominium Labs - ZZP Software Ontwikkelaars & Freelance Developers Nederland',
    description: 'Ervaren ZZP software ontwikkelaars en freelance developers. Maatwerk webapplicaties, mobile apps en cloud oplossingen voor Nederlandse bedrijven.',
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
        {/* Google Analytics Tracking */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-H6Q0RT2S3R" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H6Q0RT2S3R');
          `}
        </Script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dominium Labs",
              "url": "https://dominiumlabs.com",
              "logo": "https://dominiumlabs.com/images/logo/DominiumLabs.png",
              "description": "ZZP Software Ontwikkelaars & Freelance Developers Nederland. Maatwerk webapplicaties, mobile apps en cloud oplossingen voor bedrijven.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL",
                "addressLocality": "Amsterdam",
                "addressRegion": "Noord-Holland"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31-20-123-4567",
                "contactType": "customer service",
                "email": "dominiumlabs@gmail.com",
                "availableLanguage": ["Dutch", "English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/dominium-labs"
              ],
              "foundingDate": "2020",
              "numberOfEmployees": "2-10",
              "serviceArea": {
                "@type": "Country",
                "name": "Netherlands"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Maatwerk Software Ontwikkeling",
                      "description": "Op maat gemaakte softwareoplossingen door ervaren ZZP developers",
                      "serviceType": "Software Development",
                      "provider": {
                        "@type": "Organization",
                        "name": "Dominium Labs"
                      },
                      "areaServed": "Netherlands",
                      "availableLanguage": "Dutch"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Webapplicatie Ontwikkeling",
                      "description": "Moderne, responsieve webapplicaties met React, Node.js en TypeScript",
                      "serviceType": "Web Development",
                      "provider": {
                        "@type": "Organization",
                        "name": "Dominium Labs"
                      },
                      "areaServed": "Netherlands",
                      "availableLanguage": "Dutch"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mobile App Ontwikkeling",
                      "description": "Native en cross-platform mobile applicaties voor iOS en Android",
                      "serviceType": "Mobile Development",
                      "provider": {
                        "@type": "Organization",
                        "name": "Dominium Labs"
                      },
                      "areaServed": "Netherlands",
                      "availableLanguage": "Dutch"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "47"
              }
            })
          }}
        />
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
