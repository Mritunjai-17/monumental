import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/site';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} (${siteConfig.exchange}: ${siteConfig.ticker}) | ${siteConfig.tagline}`,
  description: siteConfig.positioning,
  metadataBase: new URL('https://monumental.energy'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: `${siteConfig.name} (${siteConfig.exchange}: ${siteConfig.ticker})`,
    description: siteConfig.positioning,
    url: 'https://monumental.energy',
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F5F6F1] text-[#16232B] font-body selection:bg-[#B7E34A] selection:text-[#0B1F2A]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
