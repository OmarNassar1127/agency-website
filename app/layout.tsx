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
