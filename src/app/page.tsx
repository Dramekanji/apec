import React from 'react';
import {
  Hero,
  Mission,
  Stats,
  FeaturedProjects,
  WhyChooseUs,
} from '@/components/sections/home';
import { Newsletter } from '@/components/layout';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <Stats />
      <FeaturedProjects />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}
