import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

export const metadata: Metadata = {
  title: 'Darren Murphy | Portfolio',
  description: 'Polished, responsive portfolio showcasing projects and mountain expeditions of Darren Murphy.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}