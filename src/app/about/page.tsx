import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import { ShieldCheck, Target, Compass, Users2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'About Us',
  description: 'Monumental Energy (TSX-V: MNRG) is a junior resource company headquartered in Vancouver, BC, combining near-term conventional production with long-term critical mineral royalties.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Monumental Energy"
        eyebrow="Corporate Profile"
        description="Headquartered in Vancouver, BC, Monumental Energy is engineered for the modern energy transition with a disciplined, low-capex approach to resource development."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="/images/about-hero.jpg"
      />

      {/* Corporate Philosophy (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Our Positioning</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0B1F2A] mb-6 leading-[1.18]">
                Better energy for the future and today.
              </h2>
              <div className="space-y-4 text-base text-[#5B6B73] leading-relaxed">
                <p>
                  The global transition toward lower-carbon energy is a multi-decade process requiring both immediate energy security and scalable critical mineral supplies. Monumental Energy was built to operate at the exact intersection of these two realities.
                </p>
                <p>
                  Rather than taking on high-risk, dilutive exploration debt, we deploy capital into near-term conventional oil &amp; gas recompletion opportunities in established basins like Taranaki, New Zealand, while holding high-conviction royalty exposure to prime lithium brine acreage in Chile.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/projects" variant="primary" size="md">
                  Explore Our Assets
                </Button>
                <Button href="/investors" variant="secondary" size="md">
                  Investor Centre
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[5/6] rounded-[16px] overflow-hidden border border-[#DDE3E3] shadow-md bg-[#0B1F2A]">
                <Image
                  src="/images/corporate-office.jpg"
                  alt="Monumental Energy corporate office in Vancouver, BC"
                  fill
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            <Card data-reveal="card" hoverEffect className="bg-white h-full flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A] overflow-hidden">
                <Image
                  src="/images/about-value-creation.jpg"
                  alt="Taranaki Basin production wellhead infrastructure and Mount Taranaki"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Taranaki Basin, NZ
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1F6F78] shrink-0" />
                  <span>Pragmatic Value Creation</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Focusing on low-entry-cost assets with existing infrastructure to maximize cash flow deliverability per share.
                </p>
              </div>
            </Card>

            <Card data-reveal="card" hoverEffect className="bg-white h-full flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A] overflow-hidden">
                <Image
                  src="/images/project-salar-de-turi.jpg"
                  alt="Salar de Turi lithium brine flats and volcanic ridges in Chile"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Atacama Region, Chile
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1F6F78] shrink-0" />
                  <span>Capital Protection</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Structuring critical mineral holdings into a 2% Net Smelter Return (NSR) royalty that eliminates ongoing cash call liabilities.
                </p>
              </div>
            </Card>

            <Card data-reveal="card" hoverEffect className="bg-white h-full flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A] overflow-hidden">
                <Image
                  src="/images/news-lithium-survey.jpg"
                  alt="Technical geological survey team in premier mining jurisdictions"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Tier-1 Jurisdictions
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#1F6F78] shrink-0" />
                  <span>Jurisdictional Integrity</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  All holdings situated in premier, established mining and resource frameworks in New Zealand and Chile.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Governance & Leadership (White) */}
      <section className="py-14 lg:py-24 bg-white border-t border-[#DDE3E3]">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Management</span>
            <h2 className="text-3xl font-bold font-heading text-[#0B1F2A] leading-[1.18]">
              Corporate Leadership &amp; Board of Directors
            </h2>
            <p className="text-base text-[#5B6B73] mt-2">
              Our seasoned leadership team brings extensive expertise across Canadian public markets, international resource financing, geology, and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div data-reveal="card" className="rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3] overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                <Image
                  src="/images/investor-deck-preview.jpg"
                  alt="Executive leadership briefing materials and corporate deck"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Executive Office
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-sm mb-3">
                  CEO
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-1">
                  Executive Leadership
                </h3>
                <span className="text-xs font-semibold text-[#1F6F78] uppercase tracking-wider block mb-3">
                  Chief Executive Officer &amp; Director
                </span>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Extensive resource capital market experience leading corporate strategy, M&amp;A, joint venture structuring, and public company operations.
                </p>
              </div>
            </div>

            <div data-reveal="card" className="rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3] overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                <Image
                  src="/images/news-corporate-agm.jpg"
                  alt="Financial governance, audit, and capital markets compliance"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Fiscal Oversight
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-sm mb-3">
                  CFO
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-1">
                  Financial Governance
                </h3>
                <span className="text-xs font-semibold text-[#1F6F78] uppercase tracking-wider block mb-3">
                  Chief Financial Officer
                </span>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Chartered professional accountant with oversight of financial reporting, TSX Venture compliance, fiscal auditing, and internal controls.
                </p>
              </div>
            </div>

            <div data-reveal="card" className="rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3] overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                <Image
                  src="/images/agm-hall.jpg"
                  alt="Vancouver corporate boardroom and independent governance advisory"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#0B1F2A]/85 backdrop-blur-md px-2.5 py-1 rounded-[6px] border border-white/10 text-[11px] font-semibold text-[#B7E34A]">
                  Boardroom
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-sm mb-3">
                  BOD
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-1">
                  Independent Board
                </h3>
                <span className="text-xs font-semibold text-[#1F6F78] uppercase tracking-wider block mb-3">
                  Board of Directors
                </span>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Independent directors with specialized backgrounds spanning petroleum engineering, South American mineral titles, and TSX-V compliance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
