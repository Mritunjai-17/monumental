import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RevealObserver } from '@/components/layout/RevealObserver';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { ParallaxController } from '@/components/layout/ParallaxController';
import { siteConfig } from '@/data/site';
import { defaultOgImage, robotsMeta } from '@/lib/seo';
import { heroLineIndexScript, motionOkScript } from '@/lib/motion';

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
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  robots: robotsMeta,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the head script below adds a class (and the hero
    // adds line-index CSS variables) to <html> before React hydrates.
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Enable entrance/scroll motion before first paint, unless reduced motion is preferred. */}
        <script dangerouslySetInnerHTML={{ __html: motionOkScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F5F6F1] text-[#16232B] font-body selection:bg-[#B7E34A] selection:text-[#0B1F2A]">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <RevealObserver />
        <ParallaxController />
        <script dangerouslySetInnerHTML={{ __html: heroLineIndexScript }} />
      </body>
    </html>
  );
}
