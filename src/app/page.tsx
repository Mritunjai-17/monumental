import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { StrategyVideo } from '@/components/sections/StrategyVideo';
import { LatestNews } from '@/components/sections/LatestNews';
import { InvestorHub } from '@/components/sections/InvestorHub';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Home',
  description: 'Monumental Energy (TSX-V: MNRG) is a junior resource company with near-term oil & gas production in New Zealand and a strategic 2% NSR lithium royalty in Chile.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* B. Hero Section (Navy) */}
      <Hero />

      {/* C. Stats Strip (White card overlapping hero bottom edge) */}
      <StatsStrip />

      {/* D. Projects & Investments Section (Off-white) */}
      <ProjectsGrid />

      {/* E. Strategy Section (Navy) */}
      <StrategyVideo />

      {/* F. Latest News Section (White) */}
      <LatestNews />

      {/* G. Investor Hub Section (Off-white) */}
      <InvestorHub />

      {/* H. Investor Relations Contact Section (Navy) */}
      <ContactCTA />
    </>
  );
}
