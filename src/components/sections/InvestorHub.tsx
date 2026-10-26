import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ResourceTile } from '@/components/ui/ResourceTile';
import { FileText, Calendar, FileSpreadsheet, Bell } from 'lucide-react';

export const InvestorHub: React.FC = () => {
  return (
    <section className="section-y bg-[#F5F6F1]">
      <Container>
        <SectionHeading
          eyebrow="Shareholder Central"
          title="Investor Hub"
          description="Direct access to vital corporate governance documents, official securities filings, and presentation materials."
          action={{ label: 'View investor centre', shortLabel: 'View all', href: '/investors' }}
        />

        {/* 4 Uniform Horizontal Resource Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 items-stretch">
          <ResourceTile
            variant="mint-icon"
            icon={FileText}
            eyebrow="PDF Document"
            title="Corporate Presentation"
            description="Comprehensive 2026 corporate overview and asset development roadmap."
            href="/investors/presentation"
          />

          <ResourceTile
            variant="mint-icon"
            icon={Calendar}
            eyebrow="Governance"
            title="Annual Meeting"
            description="Meeting circulars, notice of AGM, proxy voting forms, and shareholder materials."
            href="/investors/agm"
          />

          <ResourceTile
            variant="mint-icon"
            icon={FileSpreadsheet}
            eyebrow="External"
            title="Securities Filings"
            description="Audited financial statements, MD&As, and official regulatory filings on SEDAR+."
            href="https://www.sedarplus.ca"
            isExternal
          />

          <ResourceTile
            variant="mint-icon"
            icon={Bell}
            eyebrow="Stay Informed"
            title="News Alerts"
            description="Email distribution service for material disclosures and operational announcements."
            href="/contact#newsletter"
          />
        </div>
      </Container>
    </section>
  );
};
