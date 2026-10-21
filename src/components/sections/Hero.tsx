import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MediaReveal } from '@/components/ui/MediaReveal';
import { siteConfig } from '@/data/site';
import { FileText, Compass } from 'lucide-react';

const HEADLINE = 'Two assets. One strategy for the energy transition.';
const headlineWords = HEADLINE.split(' ');

export const Hero: React.FC = () => {
  return (
    // Bottom padding leaves room for the stats card, which overlaps by 60px.
    <section className="relative bg-[#0B1F2A] text-white pt-14 pb-[136px] sm:pt-20 sm:pb-[156px] lg:pt-24 lg:pb-[172px] overflow-hidden">
      {/* Background photo (decorative) with navy gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <MediaReveal parallax={0.15} reveal={false}>
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-bg object-cover object-center"
          />
        </MediaReveal>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F2A]/90 via-[#0B1F2A]/80 to-[#0B1F2A]" />
        <div className="hero-glow absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#1F6F78]/15 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
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
                <span className="hero-word-mask inline-block overflow-hidden align-top">
                  <span
                    aria-hidden="true"
                    className="hero-word inline-block"
                    style={{ animationDelay: `calc(var(--hw${i}, 0) * 110ms + 120ms)` }}
                  >
                    {word}
                  </span>
                </span>
                {i < headlineWords.length - 1 && ' '}
              </React.Fragment>
            ))}
          </h1>

          <p className="hero-copy text-base sm:text-lg text-[#DDE3E3]/90 font-normal leading-[1.6] max-w-2xl mb-8">
            Monumental Energy pairs near-term oil &amp; gas production in New Zealand’s established Taranaki Basin with an unencumbered 2% Net Smelter Return (NSR) royalty in Chile’s Lithium Triangle.
          </p>

          {/* Equal-height buttons (fixed 52px), icons inline with the label */}
          <div className="hero-cta-group flex flex-col sm:flex-row gap-4">
            <Button
              href="/investors/presentation"
              variant="primary"
              size="md"
              className="hero-cta-1 h-[52px] py-0 px-6 text-sm sm:text-base shadow-lg shadow-[#B7E34A]/10"
            >
              <FileText className="w-[18px] h-[18px] shrink-0 transition-transform duration-200 group-hover:-translate-y-px" aria-hidden="true" />
              View Investor Presentation
            </Button>

            <Button
              href="/projects"
              variant="secondary-dark"
              size="md"
              className="hero-cta-2 h-[52px] py-0 px-6 text-sm sm:text-base"
            >
              <Compass className="w-[18px] h-[18px] shrink-0 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
              Explore Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
