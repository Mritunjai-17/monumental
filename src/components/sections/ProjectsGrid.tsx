import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projectsData } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  return (
    <section className="py-14 lg:py-24 bg-[#F5F6F1]">
      <Container>
        <SectionHeading
          eyebrow="Asset Portfolio"
          title="Strategic Energy & Mineral Assets"
          action={{ label: 'View full portfolio', shortLabel: 'View all', href: '/projects' }}
        />

        {/* Equal-height cards: grid rows stretch, card is a flex column, footer pinned with mt-auto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-[16px] border border-[#DDE3E3] overflow-hidden shadow-[0_4px_20px_-2px_rgba(11,31,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-6px_rgba(11,31,42,0.14)] hover:border-[#1F6F78]/50 flex flex-col h-full"
            >
              {/* 3:2 photo slot */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#0B1F2A] shrink-0">
                <Image
                  src={project.heroImage}
                  alt={`${project.name}, ${project.location}`}
                  fill
                  sizes="(min-width: 1200px) 580px, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F2A]/60 via-transparent to-transparent" />

                {/* One badge per card */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant={project.category === 'Oil & Gas' ? 'lime' : 'teal'}
                    className={project.category === 'Oil & Gas' ? undefined : 'bg-white border-white'}
                  >
                    {project.statusBadge}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="text-xs uppercase font-heading font-semibold text-[#1F6F78] tracking-wider mb-2 truncate">
                  <span>{project.category}</span>
                  <span className="mx-1.5">•</span>
                  <span>{project.location}</span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-[#0B1F2A] tracking-[-0.02em] leading-[1.18] mb-3 group-hover:text-[#1F6F78] transition-colors">
                  {project.name}
                </h3>

                <p className="text-[#5B6B73] text-sm sm:text-base leading-relaxed line-clamp-2 mb-6">
                  {project.shortSummary}
                </p>

                {/* Footer row pinned to bottom */}
                <div className="mt-auto pt-4 border-t border-[#DDE3E3]/60 flex items-center justify-between gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-link font-semibold text-sm group/link inline-flex items-center gap-1.5 text-[#1F6F78]"
                  >
                    <span>View project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <span className="text-xs text-[#5B6B73] font-body font-medium truncate">
                    {project.cardMetric}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
