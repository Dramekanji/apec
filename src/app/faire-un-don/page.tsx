import React from 'react';
import type { Metadata } from 'next';
import {
  DonateHero,
  WhyDonate,
  DonationMethods,
  Transparency,
} from '@/components/sections/donate';
import { Newsletter } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Faire un Don - APEC International',
  description:
    'Soutenez APEC International dans sa mission de promotion de la démocratie, l\'éducation citoyenne et le développement durable. Chaque don fait la différence.',
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <WhyDonate />
      <DonationMethods />
      <Transparency />
      <Newsletter />
    </>
  );
}
