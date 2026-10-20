import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { MediaReveal } from '@/components/ui/MediaReveal';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { constructMetadata } from '@/lib/seo';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div data-reveal="card" className="rounded-[16px] bg-white border border-[#DDE3E3] overflow-hidden shadow-sm flex flex-col items-start">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                <Image
                  src="/images/project-new-zealand.jpg"
                  alt="New Zealand Taranaki onshore wellhead facility"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-1 items-start w-full">
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Pillar 1: Cash Flow Today</span>
                <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                  Near-Term Production in New Zealand
                </h2>
                <p className="text-sm text-[#5B6B73] leading-relaxed mb-6 font-normal">
                  Direct investment in New Zealand Energy Corp. (NZEC) and aligned joint-venture opportunities targeting high-deliverability uphole zones with existing processing facilities.
                </p>
                <ul className="space-y-2 text-xs text-[#16232B] font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                    <span>Immediate pipeline tie-in and processing capacity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                    <span>Low-cost workover program targeting near-term production</span>
                  </li>
                </ul>
                <Button href="/projects/new-zealand" variant="secondary" size="sm" className="mt-auto">
                  Explore NZ Assets
                </Button>
              </div>
            </div>

            <div data-reveal="card" className="rounded-[16px] bg-white border border-[#DDE3E3] overflow-hidden shadow-sm flex flex-col items-start">
              <div className="relative w-full aspect-[16/9] bg-[#0B1F2A]">
                <Image
                  src="/images/project-salar-de-turi.jpg"
                  alt="Salar de Turi lithium brine salar in Antofagasta, Chile"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />
              </div>
              <div className="p-8 flex flex-col flex-1 items-start w-full">
                <span className="eyebrow text-[#1F6F78] text-xs font-semibold block mb-2">Pillar 2: Transition Metals</span>
                <h2 className="text-2xl font-bold font-heading text-[#0B1F2A] mb-3 leading-[1.18]">
                  2% Net Smelter Return (NSR) Royalty in Chile
                </h2>
                <p className="text-sm text-[#5B6B73] leading-relaxed mb-6 font-normal">
                  8,500 hectares of exploration concessions inside the prolific Lithium Triangle, structured as an unencumbered 2% Net Smelter Return (NSR) royalty with zero recurring exploration cash call liabilities.
                </p>
                <ul className="space-y-2 text-xs text-[#16232B] font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                    <span>Zero ongoing capex or exploration cash calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1F6F78]" />
                    <span>Direct exposure to battery mineral macro trends</span>
                  </li>
                </ul>
                <Button href="/projects/salar-de-turi" variant="secondary" size="sm" className="mt-auto">
                  Explore Chile Royalty
                </Button>
              </div>
            </div>
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
