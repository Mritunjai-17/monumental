import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FileText, Users, FileSpreadsheet, Bell, ArrowRight, ExternalLink } from 'lucide-react';

export const InvestorHub: React.FC = () => {
  const tiles = [
    {
      id: 'presentation',
      title: 'Corporate Deck',
      badge: 'PDF',
      description: 'Comprehensive 2026 corporate overview and asset development roadmap.',
      icon: FileText,
      linkText: 'Presentation (PDF)',
      href: '/investors/presentation',
      isExternal: false,
    },
    {
      id: 'agm',
      title: 'Annual Meeting',
      badge: 'Governance',
      description: 'Meeting circulars, notice of AGM, proxy voting forms, and shareholder materials.',
      icon: Users,
      linkText: 'AGM Details',
      href: '/investors/agm',
      isExternal: false,
    },
    {
      id: 'filings',
      title: 'Securities Filings',
      badge: 'External',
      description: 'Audited annual financial statements, MD&As, and official regulatory filings on SEDAR+.',
      icon: FileSpreadsheet,
      linkText: 'SEDAR+ Filings',
      href: 'https://www.sedarplus.ca',
      isExternal: true,
    },
    {
      id: 'alerts',
      title: 'News Alerts',
      badge: 'Email',
      description: 'Email distribution service for material disclosures and operational announcements.',
      icon: Bell,
      linkText: 'Subscribe to Alerts',
      href: '/contact#newsletter',
      isExternal: false,
    },
  ];

  return (
    <section className="py-14 lg:py-24 bg-[#F5F6F1]">
      <Container>
        <SectionHeading
          eyebrow="Shareholder Central"
          title="Investor Hub"
          description="Direct access to vital corporate governance documents, official securities filings, and presentation materials."
          action={{ label: 'View investor centre', shortLabel: 'View all', href: '/investors' }}
        />

        {/* Equal-height cards: flex column with the link row pinned via mt-auto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.id}
                className="bg-white rounded-[16px] border border-[#DDE3E3] p-7 flex flex-col h-full shadow-[0_4px_20px_-2px_rgba(11,31,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-4px_rgba(11,31,42,0.1)] hover:border-[#1F6F78]/40 group"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-[12px] bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center group-hover:bg-[#1F6F78] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* One badge per card */}
                  <Badge variant="neutral" className="text-[10px] px-2.5">
                    {tile.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-2 group-hover:text-[#1F6F78] transition-colors">
                  {tile.title}
                </h3>

                <p className="text-sm text-[#5B6B73] leading-relaxed mb-6 font-normal">
                  {tile.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#DDE3E3]/60">
                  <Link
                    href={tile.href}
                    target={tile.isExternal ? '_blank' : undefined}
                    rel={tile.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-link text-sm font-semibold inline-flex items-center gap-1.5 text-[#1F6F78] whitespace-nowrap"
                  >
                    <span>{tile.linkText}</span>
                    {tile.isExternal ? (
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
