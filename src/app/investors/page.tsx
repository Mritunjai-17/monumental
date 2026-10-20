import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { statsData } from '@/data/stats';
import { siteConfig } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import {
  FileText,
  Users,
  Download,
  ExternalLink,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  BarChart3,
  Calendar,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Investor Centre',
  description: 'Official shareholder portal for Monumental Energy Corp. (TSX-V: MNRG). Access corporate presentations, SEDAR filings, and AGM documents.',
  path: '/investors',
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Investor Centre"
        eyebrow="Shareholder Hub"
        description="Transparent financial reporting, corporate governance, presentation materials, and regulatory disclosure archive."
        breadcrumbs={[{ label: 'Investors' }]}
      />

      {/* Market Snapshot & Capital Structure (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            {/* Left 8 Cols: Market Listing & Stats */}
            <div data-reveal="card" className="lg:col-span-8 bg-white rounded-[16px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DDE3E3]">
                <div>
                  <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-1">Stock Listing</span>
                  <h2 className="text-2xl font-bold font-heading text-[#0B1F2A]">
                    {siteConfig.exchange}: {siteConfig.ticker}
                  </h2>
                </div>
                <a
                  href="https://money.tmx.com/en/quote/MNRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#162F3F] text-white hover:text-[#B7E34A] text-xs font-medium transition-colors"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#B7E34A]" />
                  <span>View TMX Real-Time Quote</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#1F6F78]" />
                </a>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                {statsData.map((stat, idx) => (
                  <div
                    key={stat.id}
                    data-reveal="fast"
                    style={{ '--reveal-delay': `${idx * 80}ms` } as React.CSSProperties}
                  >
                    <span className="text-xs text-[#5B6B73] block mb-1">{stat.label}</span>
                    <span className="font-heading font-bold text-xl text-[#0B1F2A] block leading-tight">
                      {stat.value}
                    </span>
                    {stat.subtext && (
                      <span className="text-[11px] text-[#5B6B73]">{stat.subtext}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#DDE3E3] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5B6B73]">
                <span>Exchange: TSX Venture Exchange (Tier 2 Resource)</span>
                <span>CUSIP: [CUSIP_PLACEHOLDER] | ISIN: [ISIN_PLACEHOLDER]</span>
              </div>
            </div>

            {/* Right 4 Cols: Quick Actions */}
            <div data-reveal="card" className="lg:col-span-4 bg-[#0B1F2A] rounded-[16px] overflow-hidden text-white border border-[#1D3B4C] flex flex-col justify-between shadow-sm">
              <div className="relative w-full aspect-[16/10] bg-[#07151D]">
                <Image
                  src="/images/investor-deck-preview.jpg"
                  alt="Monumental Energy 2026 Corporate Presentation cover preview"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <span className="eyebrow text-[#B7E34A] text-xs font-semibold block mb-2">Key Materials</span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 leading-[1.18]">
                    Investor Presentation
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    Get full corporate and technical insight into the Taranaki Basin workovers and Chile lithium royalty.
                  </p>
                </div>

                <Button href="/investors/presentation" variant="primary" size="md" className="w-full">
                  Download 2026 Deck
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-reveal="card" className="overflow-hidden bg-white p-0 flex flex-col">
              <div className="relative w-full aspect-[16/10] bg-[#0B1F2A]">
                <Image
                  src="/images/investor-deck-preview.jpg"
                  alt="Corporate Presentation booklet"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Technical Deck</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2 leading-[1.18]">
                  Corporate Presentation
                </h3>
                <p className="text-sm text-[#5B6B73] mb-6 font-normal leading-relaxed">
                  Current corporate overview, financial breakdown, reserve upside, and operational calendar.
                </p>
                <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60">
                  <Link href="/investors/presentation" className="text-link text-sm font-semibold">
                    <span>View presentation page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card data-reveal="card" className="overflow-hidden bg-white p-0 flex flex-col">
              <div className="relative w-full aspect-[16/10] bg-[#0B1F2A]">
                <Image
                  src="/images/agm-hall.jpg"
                  alt="Annual General Meeting boardroom setting in Vancouver"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Governance</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2 leading-[1.18]">
                  Annual General Meeting
                </h3>
                <p className="text-sm text-[#5B6B73] mb-6 font-normal leading-relaxed">
                  Access formal notice of meeting, management information circular, and proxy voting instructions.
                </p>
                <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60">
                  <Link href="/investors/agm" className="text-link text-sm font-semibold">
                    <span>Access AGM materials</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card data-reveal="card" className="overflow-hidden bg-white p-0 flex flex-col">
              <div className="relative w-full aspect-[16/10] bg-[#0B1F2A]">
                <Image
                  src="/images/news-investor-deck.jpg"
                  alt="Regulatory filings and market disclosures overview"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3 text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider">
                  <BarChart3 className="w-4 h-4" />
                  <span>Regulatory Disclosures</span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2 leading-[1.18]">
                  Regulatory Filings (SEDAR+)
                </h3>
                <p className="text-sm text-[#5B6B73] mb-6 font-normal leading-relaxed">
                  Official regulatory depository for quarterly financial statements, MD&amp;As, and technical reports.
                </p>
                <div className="mt-auto pt-3 border-t border-[#DDE3E3]/60">
                  <a
                    href="https://www.sedarplus.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-sm font-semibold"
                  >
                    <span>Visit SEDAR+ Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Shareholder FAQ & Governance (White) */}
      <section className="py-14 lg:py-24 bg-white border-t border-[#DDE3E3]">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Transparency</span>
            <h2 className="text-3xl font-bold font-heading text-[#0B1F2A] leading-[1.18]">
              Corporate Governance &amp; Transfer Agent
            </h2>
          </div>

          <div className="bg-[#F5F6F1] rounded-[16px] p-6 sm:p-8 border border-[#DDE3E3] space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#DDE3E3]">
              <span className="text-[#5B6B73]">Transfer Agent &amp; Registrar:</span>
              <span className="font-semibold text-[#0B1F2A]">[TRANSFER_AGENT_PLACEHOLDER]</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#DDE3E3]">
              <span className="text-[#5B6B73]">Auditors:</span>
              <span className="font-semibold text-[#0B1F2A]">[AUDITOR_PLACEHOLDER]</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-[#DDE3E3]">
              <span className="text-[#5B6B73]">Legal Counsel:</span>
              <span className="font-semibold text-[#0B1F2A]">[LEGAL_COUNSEL_PLACEHOLDER]</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-2">
              <span className="text-[#5B6B73]">Fiscal Year End:</span>
              <span className="font-semibold text-[#0B1F2A]">December 31</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
