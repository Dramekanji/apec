'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const OurMission: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-wider text-primary font-medium mb-4">
              Notre Mission
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark leading-tight mb-6">
              Notre mission est de créer un monde où chacun a{' '}
              <span className="font-accent italic text-primary">
                accès aux nécessités de base
              </span>
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-dark/70 space-y-6">
            <p className="text-lg leading-relaxed">
              Que ce soit la nourriture, un abri, l&apos;éducation ou les soins
              de santé, nous visons à combler le fossé entre ceux qui ont des
              ressources et ceux qui en ont besoin en favorisant un esprit de
              don et d&apos;unité au sein de notre communauté.
            </p>

            <p className="text-lg leading-relaxed">
              APEC International (Action Pour l&apos;Education Citoyenne) est
              une organisation non gouvernementale dédiée à la promotion de la
              démocratie, de la bonne gouvernance, de la gestion des conflits,
              de la protection de l&apos;environnement et de l&apos;éducation
              citoyenne.
            </p>

            <p className="text-lg leading-relaxed">
              Présente dans 14 pays à travers l&apos;Afrique et au-delà, APEC
              travaille en partenariat avec les communautés locales pour créer
              un impact durable et significatif. Nous croyons fermement que le
              changement commence par l&apos;éducation et l&apos;engagement
              citoyen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
