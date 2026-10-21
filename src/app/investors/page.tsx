import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ResourceTile } from '@/components/ui/ResourceTile';
import { statsData } from '@/data/stats';
import { siteConfig } from '@/data/site';
import { constructMetadata } from '@/lib/seo';
import {
  FileText,
  Users,
  Download,
  ExternalLink,
  TrendingUp,
  ArrowRight,
  BarChart3,
  Calendar,
  Building,
  Mail,
  Phone,
  ShieldCheck,
  Clock,
  FileCheck,
} from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Investor Centre',
  description: 'Official shareholder hub for Monumental Energy Corp. (TSX-V: MNRG). Verified corporate presentations, SEDAR+ filings, AGM materials, and market information.',
  path: '/investors',
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Investor Centre"
        eyebrow="Shareholder Hub"
        description="Transparent financial reporting, corporate governance, verified presentation materials, and regulatory disclosure archive."
        breadcrumbs={[{ label: 'Investors' }]}
        backgroundImage="/images/agm-hall.jpg"
      />

      {/* Main Section */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          {/* CATEGORY 1: Corporate Presentation (Featured / Priority) */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F6F78]" />
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold uppercase tracking-wider">
                Category 1: Corporate Presentation
              </span>
            </div>

            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F6F78]/10 text-[#1F6F78] text-xs font-semibold mb-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Latest Verified Corporate Deck • Q1 2026</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                  Monumental Energy Investor Presentation
                </h2>

                <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-6">
                  Comprehensive strategic briefing detailing the dual-pillar corporate model: low-capex conventional production workovers in New Zealand’s Taranaki Basin and capital-light 2% NSR royalty exposure across 8,500 hectares in Chile’s Lithium Triangle.
                </p>

                {/* Document Metadata Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-xs text-[#5B6B73] mb-6">
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Format</span>
                    <span className="font-semibold text-[#0B1F2A]">Adobe PDF</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Release Date</span>
                    <span className="font-semibold text-[#0B1F2A]">January 2026</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Status</span>
                    <span className="font-semibold text-[#1F6F78]">Verified Deck</span>
                  </div>
                  <div>
                    <span className="text-[#87969F] block text-[11px]">Jurisdiction</span>
                    <span className="font-semibold text-[#0B1F2A]">TSX-V Disclosures</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/documents/investor-presentation.pdf"
                    download="Monumental-Energy-Presentation-2026.pdf"
                    className="inline-flex items-center"
                  >
                    <Button variant="primary" size="md">
                      <Download className="w-4 h-4 mr-2" />
                      <span>Download 2026 Presentation (PDF)</span>
                    </Button>
                  </a>

                  <Button href="/investors/presentation" variant="secondary" size="md">
                    <span>View Deck Overview</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>

                  <Link
                    href="/contact"
                    className="text-link text-xs font-semibold text-[#1F6F78] hover:text-[#0B1F2A] py-2"
                  >
                    Request IR Briefing Call →
                  </Link>
                </div>
              </div>

              {/* Visual Cover Preview */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-[#DDE3E3] shadow-md bg-[#0B1F2A] group">
                  <Image
                    src="/images/investor-deck-preview.jpg"
                    alt="Cover preview of Monumental Energy 2026 Corporate Investor Presentation"
                    fill
                    sizes="(min-width: 1024px) 450px, 100vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/70 via-transparent to-transparent flex items-end p-5">
                    <span className="text-xs font-semibold text-white tracking-wide">
                      Official 2026 Corporate Investor Deck
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: Market Information (Exchange Quotations & Capital Structure) */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1F6F78]" />
              <span className="eyebrow text-[#1F6F78] text-xs font-semibold uppercase tracking-wider">
                Category 2: Market Information
              </span>
            </div>

            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DDE3E3]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B1F2A] text-white text-[11px] font-bold">
                      TSX-V: MNRG
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0B1F2A] text-[11px] font-semibold">
                      OTCQB: MNMRF
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0B1F2A] text-[11px] font-semibold">
                      Frankfurt: ZA6
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1F2A]">
                    Trading Symbols &amp; Capital Structure
                  </h3>
                </div>

                <a
                  href="https://money.tmx.com/en/quote/MNRG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#162F3F] text-white hover:text-[#B7E34A] text-xs font-semibold transition-colors shadow-sm"
                >
                  <TrendingUp className="w-4 h-4 text-[#B7E34A]" />
                  <span>View TSX-V: MNRG Quote on TMX Money</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 text-[#1F6F78]" />
                </a>
              </div>

              {/* Capital Structure Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm mb-6">
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

              {/* Mandatory Market Data Attribution & Timing Disclosure */}
              <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] text-xs text-[#5B6B73] space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 font-medium">
                  <span className="flex items-center gap-1.5 text-[#0B1F2A]">
                    <Clock className="w-3.5 h-3.5 text-[#1F6F78]" />
                    Data Source: TMX Group (TSX Venture Exchange)
                  </span>
                  <span>Securities Identifiers: CUSIP 61534D108 • ISIN CA61534D1087</span>
                </div>
                <p className="text-[11px] text-[#87969F] leading-relaxed">
                  Market quotes and trading volume data accessed via external links to TMX Money are delayed by at least 15 minutes in compliance with exchange regulatory standards. Financial metrics and share counts reflect reported corporate regulatory filings as of Q1 2026.
                </p>
              </div>
            </div>
          </div>

          {/* CATEGORIES 3, 4, 5: Standardized Resource Tiles & Governance Registry */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F6F78]" />
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold uppercase tracking-wider">
                  Category 3: Regulatory &amp; Shareholder Resources
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
                <ResourceTile
                  variant="ice-icon"
                  icon={FileCheck}
                  eyebrow="Continuous Disclosures"
                  title="SEDAR+ Filings Profile"
                  description="Audited annual financials, quarterly MD&As, and material statutory change reports."
                  href="https://www.sedarplus.ca"
                  isExternal
                />

                <ResourceTile
                  variant="teal-panel"
                  icon={Calendar}
                  eyebrow="Governance"
                  title="Annual General Meeting"
                  description="Notice of meeting, management information circular, and electronic proxy voting guidelines."
                  href="/investors/agm"
                />

                <ResourceTile
                  variant="mint-icon"
                  icon={Building}
                  eyebrow="Shareholder Services"
                  title="Transfer Agent Registry"
                  description="Computershare online shareholder portal for registered holdings and account management."
                  href="https://www.investorcentre.com"
                  isExternal
                />

                <ResourceTile
                  variant="dark-alert"
                  eyebrow="Direct IR Line"
                  title="Management Briefing"
                  description="Direct access to corporate management and IR data room briefings for institutional analysts."
                  href="/contact"
                />
              </div>
            </div>

            {/* Corporate Directory & Professional Advisory Registry */}
            <div className="bg-white rounded-[20px] border border-[#DDE3E3] p-7 sm:p-9 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1F6F78]" />
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold uppercase tracking-wider">
                  Category 4: Corporate Directory &amp; Governance Registry
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1F2A] mb-6">
                Professional Advisory &amp; Shareholder Custody
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-[#5B6B73]">
                <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3]">
                  <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-1">Transfer Agent &amp; Registrar</span>
                  <span className="font-semibold text-sm text-[#0B1F2A] block mb-1">Computershare Investor Services</span>
                  <span>510 Burrard St, Vancouver, BC</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3]">
                  <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-1">Independent Auditor</span>
                  <span className="font-semibold text-sm text-[#0B1F2A] block mb-1">Crowe MacKay LLP</span>
                  <span>Chartered Professional Accountants</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3]">
                  <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-1">Legal Counsel</span>
                  <span className="font-semibold text-sm text-[#0B1F2A] block mb-1">AFG Law LLP / Cutler Law</span>
                  <span>Canadian Securities &amp; US Counsel</span>
                </div>

                <div className="p-4 rounded-xl bg-[#F5F6F1] border border-[#DDE3E3]">
                  <span className="text-[#87969F] block text-[10px] uppercase font-bold mb-1">Direct Shareholder Contact</span>
                  <span className="font-semibold text-sm text-[#0B1F2A] block mb-1">{siteConfig.contact.email}</span>
                  <span>{siteConfig.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
