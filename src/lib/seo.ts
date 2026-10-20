import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
}

export function constructMetadata({
  title,
  description = siteConfig.positioning,
  path = '',
  image = '/images/og-image.svg',
  type = 'website',
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name} (${siteConfig.exchange}: ${siteConfig.ticker})`;
  const url = `https://monumental.energy${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL('https://monumental.energy'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
      type,
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@MonumentalMNRG',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
