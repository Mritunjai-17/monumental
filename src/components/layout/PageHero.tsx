import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ChevronRight } from 'lucide-react';
import { KineticHeading } from '@/components/ui/KineticHeading';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: React.ReactNode;
  backgroundImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  eyebrow,
  description,
  breadcrumbs,
  badge,
  backgroundImage,
}) => {
  return (
    <section className="bg-[#0B1F2A] text-white pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#1D3B4C] relative overflow-hidden">
      {/* Background image if provided */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F2A]/95 via-[#0B1F2A]/85 to-[#0B1F2A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A] via-transparent to-[#0B1F2A]/40" />
        </div>
      )}

      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#1F6F78]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs text-[#94A3B8]">
          <Link href="/" className="hover:text-[#B7E34A] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.label}>
              <ChevronRight className="w-3.5 h-3.5 text-[#5B6B73]" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#B7E34A] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow text-[#B7E34A] block mb-3 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              {eyebrow}
            </span>
          )}

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <KineticHeading
              as="h1"
              text={title}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-[-0.02em] leading-tight"
            />
            {badge && <div>{badge}</div>}
          </div>

          {description && (
            <p className="text-base sm:text-lg text-[#DDE3E3]/90 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
