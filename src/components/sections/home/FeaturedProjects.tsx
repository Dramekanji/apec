'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, Button } from '@/components/ui';
import { focusAreas } from '@/lib/constants';

const categoryColors: Record<string, string> = {
  Sensibilisation: 'bg-green-100 text-green-800',
  Formation: 'bg-blue-100 text-blue-800',
  Distribution: 'bg-purple-100 text-purple-800',
  Organisation: 'bg-orange-100 text-orange-800',
};

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-4">
            Notre{' '}
            <span className="font-accent italic text-primary">Impact</span> pour
            Construire un Meilleur Demain
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            De la sensibilisation à la formation, nos initiatives touchent des
            vies et transforment des communautés.
          </p>
        </motion.div>

        {/* Featured Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                    {area.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-dark">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark/70 leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button href="/projets" size="lg">
            Voir Tous les Projets
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
