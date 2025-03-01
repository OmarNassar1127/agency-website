import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Providers } from '../contexts/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Digital Agency - Custom Software Solutions',
  description: 'We create custom software solutions tailored to your business needs.',
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
          {children}
        </Providers>
      </body>
    </html>
  );
}