import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { MediaReveal } from '@/components/ui/MediaReveal';
import { Button } from '@/components/ui/Button';
import { KineticHeading } from '@/components/ui/KineticHeading';
import { projectsData } from '@/data/projects';
import { constructMetadata } from '@/lib/seo';
import { StrategyComparator } from '@/components/ui/StrategyComparator';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Zap, Droplets, Layers, Target, Square, BarChart3 } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Project Portfolio',
  description: 'Monumental Energy’s dual-pillar asset portfolio: near-term oil & gas production in New Zealand and a strategic 2% NSR lithium royalty in Chile.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Asset Portfolio"
        eyebrow="Dual-Pillar Strategy"
        description="Balancing low-capex conventional energy production in New Zealand with high-upside critical mineral royalty participation in Chile."
        breadcrumbs={[{ label: 'Projects' }]}
        backgroundImage="/images/project-new-zealand.jpg"
      />

      {/* Strategic Portfolio Framework (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch mb-20">
            
            {/* 1. New Zealand Oil & Gas (Cinematic Dark Card) */}
            <div data-reveal="card" className="h-full">
              <article className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[#1D3B4C] bg-[#07161F] text-white flex flex-col justify-between p-7 sm:p-9 min-h-[520px] lg:min-h-[580px] shadow-[0_16px_36px_-6px_rgba(7,22,31,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-8px_rgba(7,22,31,0.35)] hover:border-[#1F6F78] h-full">
                {/* Full-bleed photography with rich multi-stop gradient overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/project-new-zealand.jpg"
                    alt="New Zealand Oil & Gas facility in Taranaki Basin"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-right md:object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07161F] via-[#07161F]/90 to-[#07161F]/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07161F] via-transparent to-[#07161F]/60" />
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                  {/* Large architectural index watermark */}
                  <div className="font-heading font-light text-5xl sm:text-6xl text-white/20 tracking-wider mb-5 select-none leading-none">
                    01
                  </div>

                  <div className="text-[#2DD4BF] text-xs uppercase font-heading font-semibold tracking-[0.14em] mb-2">
                    Oil &amp; Gas
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-white tracking-[-0.02em] leading-[1.15] mb-3">
                    New Zealand Oil &amp; Gas
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#DDE3E3]/85 mb-8">
                    <MapPin className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                    <span>Taranaki Basin, NZ</span>
                  </div>

                  {/* 3 Structured Feature Bullets */}
                  <div className="space-y-3.5 mb-8">
                    <div className="flex items-center gap-3.5 text-sm text-[#E2E8F0] font-medium">
                      <span className="w-6 h-6 rounded-full border border-[#B7E34A]/40 flex items-center justify-center shrink-0 text-[#B7E34A] bg-[#B7E34A]/10">
                        <Droplets className="w-3.5 h-3.5" />
                      </span>
                      <span>Near-term production focus</span>
                    </div>

                    <div className="flex items-center gap-3.5 text-sm text-[#E2E8F0] font-medium">
                      <span className="w-6 h-6 rounded-full border border-[#B7E34A]/40 flex items-center justify-center shrink-0 text-[#B7E34A] bg-[#B7E34A]/10">
                        <Layers className="w-3.5 h-3.5" />
                      </span>
                      <span>Joint-venture assets</span>
                    </div>

                    <div className="flex items-center gap-3.5 text-sm text-[#E2E8F0] font-medium">
                      <span className="w-6 h-6 rounded-full border border-[#B7E34A]/40 flex items-center justify-center shrink-0 text-[#B7E34A] bg-[#B7E34A]/10">
                        <Target className="w-3.5 h-3.5" />
                      </span>
                      <span>Recompletion opportunities</span>
                    </div>
                  </div>
                </div>

                {/* Pinned Bottom Action Row */}
                <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/projects/new-zealand"
                    className="text-sm font-semibold text-white group-hover:text-[#B7E34A] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore NZ Asset</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/projects/new-zealand"
                    aria-label="View New Zealand Oil & Gas project details"
                    className="w-11 h-11 rounded-full border border-[#B7E34A]/50 text-[#B7E34A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#B7E34A] group-hover:text-[#0B1F2A] group-hover:border-[#B7E34A] group-hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>

            {/* 2. Salar de Turi Lithium Project (Structured Light Metric Card) */}
            <div data-reveal="card" className="h-full">
              <article className="group relative rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[#DDE3E3] bg-white text-[#0B1F2A] flex flex-col justify-between p-7 sm:p-9 min-h-[520px] lg:min-h-[580px] shadow-[0_4px_24px_-2px_rgba(11,31,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-6px_rgba(11,31,42,0.12)] hover:border-[#1F6F78]/50 h-full">
                {/* Top Header & Inset Section */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[#1F6F78] text-xs uppercase font-heading font-semibold tracking-[0.14em]">
                      Lithium
                    </span>
                    <span className="px-3 py-1 rounded-full border border-[#B7E34A] bg-[#B7E34A]/15 text-[#0B1F2A] font-heading font-bold text-xs tracking-wide">
                      2% NSR
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.15] mb-2 group-hover:text-[#1F6F78] transition-colors">
                    Salar de Turi Lithium Project
                  </h3>

                  <p className="text-sm text-[#5B6B73] leading-relaxed mb-6 font-normal">
                    Royalty exposure to a large-scale lithium project in Chile.
                  </p>

                  {/* Inset Rounded Landscape Photo */}
                  <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden bg-[#0B1F2A] mb-6 shadow-sm border border-[#DDE3E3]/60">
                    <Image
                      src="/images/project-salar-de-turi.jpg"
                      alt="Salar de Turi Lithium brine project in Antofagasta, Chile"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* 3-Column Metric Data Strip */}
                  <div className="grid grid-cols-3 divide-x divide-[#DDE3E3] rounded-xl bg-[#F5F6F1] border border-[#DDE3E3] py-3.5 px-2 mb-6">
                    <div className="text-center px-1">
                      <div className="text-[11px] uppercase tracking-wider text-[#87969F] font-heading font-semibold mb-1 flex items-center justify-center gap-1">
                        <Square className="w-3 h-3 text-[#1F6F78]" />
                        <span>Area</span>
                      </div>
                      <div className="font-heading font-bold text-sm sm:text-base text-[#0B1F2A]">
                        8,500 ha
                      </div>
                    </div>

                    <div className="text-center px-1">
                      <div className="text-[11px] uppercase tracking-wider text-[#87969F] font-heading font-semibold mb-1 flex items-center justify-center gap-1">
                        <BarChart3 className="w-3 h-3 text-[#1F6F78]" />
                        <span>Royalty</span>
                      </div>
                      <div className="font-heading font-bold text-sm sm:text-base text-[#1F6F78]">
                        2.0% NSR
                      </div>
                    </div>

                    <div className="text-center px-1">
                      <div className="text-[11px] uppercase tracking-wider text-[#87969F] font-heading font-semibold mb-1 flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-[#1F6F78]" />
                        <span>Region</span>
                      </div>
                      <div className="font-heading font-bold text-xs sm:text-sm text-[#0B1F2A] truncate">
                        Antofagasta
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pinned Bottom Action Row */}
                <div className="relative z-10 mt-auto pt-6 border-t border-[#DDE3E3] flex items-center justify-between">
                  <Link
                    href="/projects/salar-de-turi"
                    className="text-sm font-semibold text-[#0B1F2A] group-hover:text-[#1F6F78] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore Chile Royalty</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/projects/salar-de-turi"
                    aria-label="View Salar de Turi Lithium project details"
                    className="w-11 h-11 rounded-full border border-[#0B1F2A]/20 text-[#0B1F2A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0B1F2A] group-hover:text-white group-hover:border-[#0B1F2A] group-hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Interactive Strategy Pillar Comparator */}
          <div className="mb-16">
            <StrategyComparator />
          </div>

          {/* Detailed Project Cards */}
          <div className="space-y-12">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                data-reveal="card"
                className="bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-[#0B1F2A] group ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <MediaReveal parallax={0.08}>
                    <Image
                      src={project.heroImage}
                      alt={`${project.name}, ${project.location}`}
                      fill
                      sizes="(min-width: 1024px) 470px, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </MediaReveal>
                  <div className="absolute top-4 left-4">
                    <Badge
                    variant={project.category === 'Oil & Gas' ? 'lime' : 'teal'}
                    className={project.category === 'Oil & Gas' ? undefined : 'bg-white border-white'}
                  >
                      {project.statusBadge}
                    </Badge>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] leading-[1.18] mb-3">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#DDE3E3]/60 mb-6 text-xs sm:text-sm">
                      {project.keyFacts.slice(0, 4).map((fact) => (
                        <div key={fact.label}>
                          <span className="text-[#5B6B73] block">{fact.label}</span>
                          <span className="font-semibold text-[#0B1F2A]">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button href={`/projects/${project.slug}`} variant="primary" size="md">
                      View Project Specifications
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
