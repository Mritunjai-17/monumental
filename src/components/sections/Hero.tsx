import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { FileText, Compass } from 'lucide-react';

const HEADLINE = 'Two assets. One strategy for the energy transition.';
const headlineWords = HEADLINE.split(' ');

// Line grouping for the entrance is done by heroLineIndexScript (lib/motion.ts).

export const Hero: React.FC = () => {
  return (
    // Bottom padding leaves room for the stats card, which overlaps by 60px.
    <section className="relative bg-[#0B1F2A] text-white pt-14 pb-[136px] sm:pt-20 sm:pb-[156px] lg:pt-24 lg:pb-[172px] overflow-hidden">
      {/* Background photo (decorative) with navy gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/90 via-[#0B1F2A]/80 to-[#0B1F2A]" />
        <div className="hero-glow absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#1F6F78]/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="hero-eyebrow eyebrow block text-[#B7E34A] text-xs font-heading font-semibold tracking-[0.12em] uppercase mb-4">
              {siteConfig.exchange}: {siteConfig.ticker}
            </span>

            <h1
              id="hero-title"
              aria-label={HEADLINE}
              className="text-3xl sm:text-5xl lg:text-[58px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.18] mb-6"
            >
              {headlineWords.map((word, i) => (
                <React.Fragment key={i}>
                  <span
                    aria-hidden="true"
                    className="hero-word inline-block"
                    style={{ animationDelay: `calc(var(--hw${i}, 0) * 120ms + 100ms)` }}
                  >
                    {word}
                  </span>
                  {i < headlineWords.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>

            <p className="hero-copy text-base sm:text-lg text-[#DDE3E3]/90 font-normal leading-[1.6] max-w-xl mb-8">
              Monumental Energy pairs near-term oil &amp; gas production in New Zealand’s established Taranaki Basin with an unencumbered 2% Net Smelter Return (NSR) royalty in Chile’s Lithium Triangle.
            </p>

            {/* Equal-height buttons (fixed 52px), icons inline with the label */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="/investors/presentation"
                variant="primary"
                size="md"
                className="hero-cta-1 h-[52px] py-0 px-6 text-sm sm:text-base shadow-lg shadow-[#B7E34A]/10"
              >
                <FileText className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                View Investor Presentation
              </Button>

              <Button
                href="/projects"
                variant="secondary-dark"
                size="md"
                className="hero-cta-2 h-[52px] py-0 px-6 text-sm sm:text-base"
              >
                <Compass className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                Explore Projects
              </Button>
            </div>
          </div>

          {/* Asset map: 2 labelled pins + connector (SVG, served unoptimised) */}
          <div className="lg:col-span-5">
            <div className="hero-map relative w-full aspect-[5/4] rounded-[20px] overflow-hidden border border-[#1D3B4C] shadow-2xl bg-[#081A24]">
              <Image
                src="/images/hero-map.svg"
                alt="Map showing Monumental Energy's two assets: oil and gas in the Taranaki Basin, New Zealand, and a lithium royalty at Salar de Turi, Chile"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
