import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectDetailView } from '@/components/sections/ProjectDetailView';
import { constructMetadata } from '@/lib/seo';

const project = projectsData.find((p) => p.slug === 'salar-de-turi')!;

export const metadata = constructMetadata({
  title: `${project.name} | Chile Lithium Triangle`,
  description: project.shortSummary,
  path: `/projects/${project.slug}`,
});

export default function SalarDeTuriProjectPage() {
  if (!project) return notFound();
  return <ProjectDetailView project={project} />;
}
