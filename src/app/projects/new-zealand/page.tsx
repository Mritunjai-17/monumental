import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { ProjectDetailView } from '@/components/sections/ProjectDetailView';
import { constructMetadata } from '@/lib/seo';

const project = projectsData.find((p) => p.slug === 'new-zealand')!;

export const metadata = constructMetadata({
  title: `${project.name} | Taranaki Basin`,
  description: project.shortSummary,
  path: `/projects/${project.slug}`,
});

export default function NewZealandProjectPage() {
  if (!project) return notFound();
  return <ProjectDetailView project={project} />;
}
