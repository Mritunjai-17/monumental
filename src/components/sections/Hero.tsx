import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { FileText, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0B1F2A] text-white pt-14 pb-28 sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-40 overflow-hidden">
      {/* Background with subtle topography pattern & Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bg.svg"
          alt="Geological terrain topography"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/90 via-[#0B1F2A]/80 to-[#0B1F2A]" />
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#1F6F78]/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtext, Equal-Height Buttons with Inline Icons */}
          <div className="lg:col-span-7">
            {/* Eyebrow - Space Grotesk, uppercase */}
            <span className="eyebrow block text-[#B7E34A] text-xs font-heading font-semibold tracking-[0.12em] uppercase mb-4">
              {siteConfig.exchange}: {siteConfig.ticker}
            </span>

            {/* H1 with line-height >= 1.15 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6">
              Two assets. One strategy for the energy transition.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#DDE3E3]/90 font-normal leading-[1.6] max-w-xl mb-8">
              Monumental Energy pairs near-term oil &amp; gas production in New Zealand’s established Taranaki Basin with an unencumbered 2% Net Smelter Return (NSR) royalty in Chile’s Lithium Triangle.
            </p>

            {/* Equal-Height Action Buttons with Inline Icons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/investors/presentation"
                variant="primary"
                size="md"
                className="h-[52px] font-semibold text-sm sm:text-base px-6 shadow-lg shadow-[#B7E34A]/10"
              >
                <FileText className="w-4 h-4 shrink-0 mr-2" />
                <span>View Investor Presentation</span>
              </Button>

              <Button
                href="/projects"
                variant="secondary-dark"
                size="md"
                className="h-[52px] font-medium text-sm sm:text-base px-6"
              >
                <Compass className="w-4 h-4 shrink-0 mr-2" />
                <span>Explore Projects</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Hero Visual (NZ / Chile Strategic Asset Map) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] rounded-[20px] overflow-hidden border border-[#1D3B4C] shadow-2xl bg-[#081A24]">
              <Image
                src="/images/hero-map.svg"
                alt="Monumental Energy dual asset locations in New Zealand and Chile"
                fill
                priority
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
