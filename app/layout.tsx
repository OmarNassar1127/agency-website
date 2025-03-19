import '../styles/globals.css';
import '../styles/animations.css';
import { Inter } from 'next/font/google';
import { Providers } from '../contexts/Providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Digital Agency - Custom Software Solutions',
  description: 'We create custom software solutions tailored to your business needs.',
  verification: {
    google: 'pBZLxv_mBZJc-RT2QfvVrFKHf754_YlU2pflrUX9uDE',
  },
  openGraph: {
    title: 'Dominium Labs - Custom Software Solutions',
    description: 'We create custom software solutions tailored to your business needs.',
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
    title: 'Dominium Labs - Custom Software Solutions',
    description: 'We create custom software solutions tailored to your business needs.',
    images: ['/images/logo/DominiumLabs.png'],
    creator: '@dominiumlabs',
  },
  icons: {
    icon: '/images/logo/DominiumLabs.png',
    shortcut: '/images/logo/DominiumLabs.png',
    apple: '/images/logo/DominiumLabs.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
