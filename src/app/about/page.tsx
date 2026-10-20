import React from 'react';
import Link from 'next/link';
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

            <div className="lg:col-span-5 space-y-4">
              <Card className="p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1F6F78]" />
                  <span>Pragmatic Value Creation</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Focusing on low-entry-cost assets with existing infrastructure to maximize cash flow deliverability per share.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1F6F78]" />
                  <span>Capital Protection</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  Structuring critical mineral holdings into a 2% Net Smelter Return (NSR) royalty that eliminates ongoing cash call liabilities.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="font-heading font-bold text-lg text-[#0B1F2A] mb-2 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#1F6F78]" />
                  <span>Jurisdictional Integrity</span>
                </h3>
                <p className="text-xs text-[#5B6B73] leading-relaxed">
                  All holdings situated in premier, established mining and resource frameworks in New Zealand and Chile.
                </p>
              </Card>
            </div>
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
            <div className="p-6 rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3]">
              <div className="w-12 h-12 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-lg mb-4">
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

            <div className="p-6 rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3]">
              <div className="w-12 h-12 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-lg mb-4">
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

            <div className="p-6 rounded-[16px] bg-[#F5F6F1] border border-[#DDE3E3]">
              <div className="w-12 h-12 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center font-heading font-bold text-lg mb-4">
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
        </Container>
      </section>
    </>
  );
}
