import React from 'react';
import Link from 'next/link';
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
            <div data-reveal="card" className="lg:col-span-4 bg-[#0B1F2A] rounded-[16px] p-8 text-white border border-[#1D3B4C] flex flex-col justify-between">
              <div>
                <span className="eyebrow text-[#B7E34A] text-xs font-semibold block mb-2">Key Materials</span>
                <h3 className="text-xl font-bold font-heading text-white mb-3">
                  Investor Presentation
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  Get full corporate and technical insight into the Taranaki Basin workovers and Chile lithium royalty.
                </p>
              </div>

              <Button href="/investors/presentation" variant="primary" size="md" className="w-full">
                Download 2026 Deck
              </Button>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card data-reveal="card" className="p-7 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2">
                Corporate Presentation
              </h3>
              <p className="text-sm text-[#5B6B73] mb-6">
                Current corporate overview, financial breakdown, reserve upside, and operational calendar.
              </p>
              <Link href="/investors/presentation" className="text-link text-sm font-semibold">
                <span>View presentation page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card data-reveal="card" className="p-7 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2">
                Annual General Meeting
              </h3>
              <p className="text-sm text-[#5B6B73] mb-6">
                Access formal notice of meeting, management information circular, and proxy voting instructions.
              </p>
              <Link href="/investors/agm" className="text-link text-sm font-semibold">
                <span>Access AGM materials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>

            <Card data-reveal="card" className="p-7 bg-white">
              <div className="w-10 h-10 rounded-lg bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-2">
                Regulatory Filings (SEDAR+)
              </h3>
              <p className="text-sm text-[#5B6B73] mb-6">
                Official regulatory depository for quarterly financial statements, MD&amp;As, and technical reports.
              </p>
              <a
                href="https://www.sedarplus.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-sm font-semibold"
              >
                <span>Visit SEDAR+ Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
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
