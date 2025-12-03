import React from 'react';
import type { Metadata } from 'next';
import { ProjectsHero, ProjectsGrid } from '@/components/sections/projects';
import { Newsletter } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Nos Projets - APEC International',
  description:
    'Découvrez les projets réalisés par APEC International en 2023 : sensibilisation sur la sécurité routière, éducation citoyenne, insertion socioprofessionnelle des jeunes et plus encore.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <Newsletter />
    </>
  );
}
