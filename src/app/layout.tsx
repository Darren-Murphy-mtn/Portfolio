import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Darren Murphy | Portfolio',
  description:
    'Polished, responsive portfolio showcasing projects and mountain expeditions of Darren Murphy.',
  openGraph: {
    title: 'Darren Murphy | Portfolio',
    description:
      'Polished, responsive portfolio showcasing projects and mountain expeditions of Darren Murphy.',
    images: ['/og-image.png'],
    url: 'https://portfolio-gray-rho-15.vercel.app'
  },
  icons: { icon: '/favicon.ico' }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} bg-background text-foreground`}> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}