'use client';

import React from 'react';
import { motion } from 'framer-motion';

const impactItems = [
  {
    id: 'education',
    icon: '📚',
    title: 'Éducation pour les Enfants',
    description:
      'Votre don peut changer la vie d\'un enfant en lui donnant accès à une éducation de qualité.',
  },
  {
    id: 'safety',
    icon: '🚦',
    title: 'Sécurité Routière',
    description:
      'Financez des campagnes de sensibilisation qui sauvent des vies sur nos routes.',
  },
  {
    id: 'employment',
    icon: '💼',
    title: 'Insertion Professionnelle',
    description:
      'Aidez les jeunes à acquérir les compétences nécessaires pour un emploi durable.',
  },
  {
    id: 'environment',
    icon: '🌍',
    title: 'Protection de l\'Environnement',
    description:
      'Contribuez à des initiatives de préservation environnementale pour les générations futures.',
  },
];

export const WhyDonate: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-4">
            Pourquoi{' '}
            <span className="font-accent italic text-primary">Donner</span> ?
          </h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Votre contribution a un impact direct et mesurable sur les
            communautés que nous servons. Voici comment votre don peut faire la
            différence :
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium text-dark mb-3">
                {item.title}
              </h3>
              <p className="text-dark/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-[#278793] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-medium mb-4">
            L&apos;Impact de Votre Don
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Chaque franc guinéen donné contribue directement à nos programmes sur
            le terrain. Nous nous engageons à une transparence totale sur
            l&apos;utilisation des fonds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-medium text-primary mb-2">150+</p>
              <p className="text-gray-300">Bénéficiaires en 2023</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-medium text-primary mb-2">6</p>
              <p className="text-gray-300">Projets financés</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-3xl font-medium text-primary mb-2">14</p>
              <p className="text-gray-300">Pays d&apos;intervention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
