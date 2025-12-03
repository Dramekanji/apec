import React from 'react';
import type { Metadata } from 'next';
import {
  AboutHero,
  OurMission,
  AboutPresident,
  WhatWeDo,
  OurValues,
  VisionCommitment,
} from '@/components/sections/about';
import { Newsletter } from '@/components/layout';

export const metadata: Metadata = {
  title: 'À Propos - APEC International',
  description:
    'Découvrez la mission, les valeurs et l\'engagement d\'APEC International pour la promotion de la démocratie, l\'éducation citoyenne et le développement durable en Afrique.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurMission />
      <AboutPresident />
      <WhatWeDo />
      <OurValues />
      <VisionCommitment />
      <Newsletter />
    </>
  );
}
