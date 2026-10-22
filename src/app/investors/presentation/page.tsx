import React from 'react';
import { CorporatePresentationView } from '@/components/sections/CorporatePresentationView';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Corporate Presentation',
  description:
    'Explore the latest Monumental Energy (TSX-V: MNRG) corporate investor presentation for an overview of our assets, strategy, and long-term opportunities.',
  path: '/investors/presentation',
});

export default function PresentationPage() {
  return <CorporatePresentationView />;
}
