'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Mission: React.FC = () => {
  const partnerLogos = [
    { name: 'Hues', placeholder: true },
    { name: 'Penta', placeholder: true },
    { name: 'Cactus', placeholder: true },
    { name: 'Vision', placeholder: true },
    { name: 'Greenish', placeholder: true },
    { name: 'Cloud', placeholder: true },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-wider text-primary font-medium">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark leading-tight">
              Nous croyons au pouvoir de la{' '}
              <span className="font-accent italic text-primary">
                compassion
              </span>{' '}
              et de l&apos;
              <span className="font-accent italic text-primary">
                action collective
              </span>
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              Notre mission est de créer un monde où chacun a accès aux
              nécessités de base de la vie. Nous œuvrons pour l&apos;éducation
              citoyenne, la promotion de la démocratie, la gestion des conflits
              et la protection de l&apos;environnement.
            </p>
          </motion.div>
        </div>

        {/* Partner Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-center text-sm text-dark/50 mb-8 uppercase tracking-wider">
            Nos Partenaires
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="text-gray-400 text-sm font-medium">
                    {partner.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
