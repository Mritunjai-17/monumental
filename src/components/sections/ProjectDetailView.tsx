import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { PageHero } from '@/components/layout/PageHero';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MediaReveal } from '@/components/ui/MediaReveal';
import {
  FileText,
  Download,
  MapPin,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export const ProjectDetailView: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      {/* 1. Consistent Navy Hero with Breadcrumbs & Contextual Background Image */}
      <PageHero
        title={project.name}
        eyebrow={`${project.category} Portfolio Asset`}
        description={project.shortSummary}
        breadcrumbs={[
          { label: 'Projects', href: '/projects' },
          { label: project.name },
        ]}
        badge={
          <Badge variant={project.category === 'Oil & Gas' ? 'lime' : 'teal'}>
            {project.statusBadge}
          </Badge>
        }
        backgroundImage={project.heroImage}
      />

      {/* 2. Overview & Key Facts Table (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          {/* Project banner (3:2 photo slot, cropped wide) */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[16px] overflow-hidden border border-[#DDE3E3] shadow-md mb-10 lg:mb-14 bg-[#0B1F2A]">
            <MediaReveal parallax={0.1}>
              <Image
                src={project.bannerImage || project.heroImage}
                alt={`${project.name}, ${project.location}`}
                fill
                priority
                sizes="(min-width: 1200px) 1136px, 100vw"
                className="object-cover object-center"
              />
            </MediaReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left 7 Cols: Overview & Highlights */}
            <div className="lg:col-span-7">
              <span className="eyebrow text-[#1F6F78] block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-6">
                Operational Context &amp; Strategic Thesis
              </h2>

              <p className="text-base sm:text-lg text-[#5B6B73] leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Core Strategic Highlights */}
              <h3 className="text-xl font-bold font-heading text-[#0B1F2A] mb-4">
                Asset Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    data-reveal="card"
                    className="p-4 rounded-xl bg-white border border-[#DDE3E3] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1F6F78] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#16232B] font-medium leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Key Facts Table & Summary Card */}
            <div className="lg:col-span-5 space-y-6">
              <Card data-reveal="card" className="p-6 sm:p-7 bg-white">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#DDE3E3]">
                  <Layers className="w-5 h-5 text-[#1F6F78]" />
                  <h3 className="text-lg font-bold font-heading text-[#0B1F2A]">
                    Key Facts &amp; Specifications
                  </h3>
                </div>

                <dl className="divide-y divide-[#DDE3E3]/70">
                  {project.keyFacts.map((fact) => (
                    <div key={fact.label} className="py-3 flex flex-col sm:flex-row sm:justify-between text-sm">
                      <dt className="text-[#5B6B73] font-medium">{fact.label}</dt>
                      <dd className="text-[#0B1F2A] font-semibold text-right mt-1 sm:mt-0">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>

              {/* Ownership Structure Card */}
              <div data-reveal="card" className="p-6 rounded-[16px] bg-[#0B1F2A] text-white border border-[#1D3B4C]">
                <div className="flex items-center gap-2 text-xs uppercase font-heading font-semibold text-[#B7E34A] tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Structure &amp; Governance</span>
                </div>
                <h4 className="text-lg font-bold font-heading text-white mb-2">
                  {project.ownership}
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Governed under Canadian TSX-V disclosure standards with verified third-party technical validations and joint-venture frameworks.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#B7E34A] font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>TSX-V: MNRG Holding</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Location Map Placeholder (White) */}
      <section className="py-14 lg:py-24 bg-white border-y border-[#DDE3E3]">
        <Container>
          <div className="max-w-3xl mb-8">
            <span className="eyebrow text-[#1F6F78] block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              Geographic Setting
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
              Location &amp; Regional Infrastructure
            </h2>
          </div>

          <div className="relative rounded-[16px] overflow-hidden border border-[#DDE3E3] bg-[#0E2836] p-8 sm:p-12 text-center text-white">
            {/* Topography Map Graphic Placeholder */}
            <div className="max-w-xl mx-auto py-8">
              <div className="w-16 h-16 rounded-full bg-[#1F6F78]/20 text-[#B7E34A] mx-auto flex items-center justify-center mb-4 border border-[#1F6F78]/40">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2 leading-[1.18]">
                {project.location}
              </h3>
              <p className="text-sm text-[#94A3B8] mb-6">
                Interactive GIS concessions map and spatial boundaries available in the technical data room.
              </p>

              <div className="inline-grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/90">
                <div className="p-3 rounded-lg bg-[#07151D] border border-[#1D3B4C]">
                  <span className="text-[#94A3B8] block mb-1">Coordinates</span>
                  <span className="text-[#B7E34A] font-medium">[LAT/LONG_PLACEHOLDER]</span>
                </div>
                <div className="p-3 rounded-lg bg-[#07151D] border border-[#1D3B4C]">
                  <span className="text-[#94A3B8] block mb-1">Access</span>
                  <span className="font-semibold">All-Season Highway</span>
                </div>
                <div className="p-3 rounded-lg bg-[#07151D] border border-[#1D3B4C] col-span-2 sm:col-span-1">
                  <span className="text-[#94A3B8] block mb-1">Grid Power</span>
                  <span className="font-semibold">High-Voltage Line Nearby</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Development Timeline (Off-white) */}
      <section className="py-14 lg:py-24 bg-[#F5F6F1]">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="eyebrow text-[#1F6F78] block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
              Project Timeline &amp; Catalysts
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl">
            {project.timeline.map((step, idx) => (
              <div
                key={step.title}
                data-reveal="card"
                className="bg-white rounded-[16px] border border-[#DDE3E3] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 shadow-sm"
              >
                <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 shrink-0 w-32">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1F6F78] bg-[#1F6F78]/10 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    {step.date}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold font-heading text-[#0B1F2A] mb-1.5 leading-[1.18]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5B6B73] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Document Downloads List (White) */}
      <section className="py-14 lg:py-24 bg-white border-t border-[#DDE3E3]">
        <Container>
          <div className="max-w-3xl mb-10">
            <span className="eyebrow text-[#1F6F78] block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
              Technical Library
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
              Asset Documents &amp; Technical Reports
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.documents.map((doc) => (
              <div key={doc.title} data-reveal="card" className="h-full">
                <a
                  href={doc.url}
                  download
                  className="h-full p-6 rounded-[16px] border border-[#DDE3E3] bg-[#F5F6F1] hover:bg-white hover:border-[#1F6F78] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#1F6F78]/10 text-[#1F6F78] flex items-center justify-center mb-4 group-hover:bg-[#1F6F78] group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-[#0B1F2A] mb-1 group-hover:text-[#1F6F78] transition-colors leading-[1.18]">
                      {doc.title}
                    </h3>
                    <span className="text-xs text-[#5B6B73] uppercase font-medium">
                      {doc.type} • {doc.size}
                    </span>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#DDE3E3]/60 flex items-center justify-between text-xs font-semibold text-[#1F6F78]">
                    <span>Download file</span>
                    <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CTA Band (Navy) */}
      <section className="py-14 lg:py-24 bg-[#0B1F2A] text-white text-center">
        <Container size="narrow">
          <span className="eyebrow text-[#B7E34A] block mb-2 font-heading tracking-[0.12em] uppercase font-semibold text-xs sm:text-sm">
            Investor Due Diligence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-[-0.02em] mb-4 leading-[1.18]">
            Request Additional Technical Briefings
          </h2>
          <p className="text-sm sm:text-base text-[#DDE3E3]/90 mb-8 max-w-xl mx-auto">
            Our management team is available to discuss reserve data, well recompletion schedules, and royalty terms directly with analysts and shareholders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Contact Investor Relations
            </Button>
            <Button href="/investors/presentation" variant="secondary-dark" size="md">
              Download Full Presentation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};
