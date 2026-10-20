import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-14 lg:py-24 bg-[#F5F6F1]">
      <Container>
        {/* Section Header: Heading & View All on the same row */}
        <div className="flex flex-row items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="eyebrow block text-[#1F6F78] text-xs font-heading font-semibold tracking-[0.12em] uppercase mb-2">
              Asset Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18]">
              Strategic Energy &amp; Mineral Assets
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-link text-sm font-semibold shrink-0 inline-flex items-center gap-1.5 pb-1"
          >
            <span className="hidden sm:inline">View full portfolio</span>
            <span className="sm:hidden">View all</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Large Equal-Height Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-[0_4px_20px_-2px_rgba(11,31,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-6px_rgba(11,31,42,0.14)] hover:border-[#1F6F78]/50 flex flex-col h-full"
            >
              {/* Equal Image Height Photo Slot without baked-in text */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0B1F2A] shrink-0">
                <Image
                  src={project.heroImage}
                  alt={`${project.name} site`}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />

                {/* Single Badge per card */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant={project.category === 'Oil & Gas' ? 'lime' : 'teal'}>
                    {project.statusBadge}
                  </Badge>
                </div>
              </div>

              {/* Card Body - Equal Height Flex Column */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category line: strictly max 1 line */}
                  <div className="text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-2 truncate">
                    <span>{project.category}</span>
                    <span className="mx-1.5">•</span>
                    <span>{project.location}</span>
                  </div>

                  {/* Card title: navy by default, teal on hover only */}
                  <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-3 group-hover:text-[#1F6F78] transition-colors">
                    {project.name}
                  </h3>

                  {/* 2-line summary */}
                  <p className="text-[#5B6B73] text-sm sm:text-base leading-relaxed line-clamp-2 mb-6">
                    {project.shortSummary}
                  </p>
                </div>

                {/* Footer pinned to bottom */}
                <div className="pt-4 border-t border-[#DDE3E3]/60 flex items-center justify-between mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-link font-semibold text-sm group/link inline-flex items-center gap-1.5 text-[#1F6F78]"
                  >
                    <span>View project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <span className="text-xs text-[#5B6B73] font-body font-medium">
                    {project.category === 'Lithium' ? '8,500 Hectares' : 'Recompletion Targets'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
