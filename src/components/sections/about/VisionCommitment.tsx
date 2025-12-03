'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

export const VisionCommitment: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#278793] rounded-2xl p-10 text-white"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-medium mb-6">Notre Vision</h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Nous envisageons un avenir où la pauvreté, l&apos;inégalité et
              l&apos;injustice ne sont que des reliques du passé, et où chaque
              individu peut vivre une vie de dignité et de but.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Notre travail est guidé par la conviction qu&apos;ensemble, nous
              pouvons réaliser cet avenir grâce à l&apos;espoir, l&apos;action
              et la solidarité.
            </p>
          </motion.div>

          {/* How You Can Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-medium text-dark">
              Comment Vous Pouvez{' '}
              <span className="font-accent italic text-primary">Aider</span>
            </h2>

            <p className="text-lg text-dark/70 leading-relaxed">
              Rien de ce que nous faisons ne serait possible sans le généreux
              soutien de nos donateurs, bénévoles et partenaires. Que vous
              souhaitiez contribuer financièrement, faire du bénévolat ou
              sensibiliser à notre cause, votre implication fait une énorme
              différence.
            </p>

            <div className="bg-background rounded-xl p-6 border-l-4 border-primary">
              <p className="text-dark/80 font-medium">
                APEC International est présent dans 14 pays à travers
                l&apos;Afrique, créant un impact durable dans les communautés à
                travers le continent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/faire-un-don" size="lg">
                Faire un Don
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Nous Contacter
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-medium text-dark">
              Notre{' '}
              <span className="font-accent italic text-primary">
                Engagement
              </span>
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              Nous nous engageons à la transparence, à la responsabilité et à
              l&apos;intégrité. Chaque don, peu importe sa taille, va
              directement à faire une différence réelle dans la vie de ceux que
              nous servons.
            </p>
            <p className="text-dark/70 leading-relaxed">
              Nous prenons grand soin de nous assurer que nos ressources sont
              utilisées de manière efficace et efficiente, en maximisant
              l&apos;impact de chaque contribution.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-200 rounded-2xl aspect-video overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <svg
                className="w-20 h-20 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">Vidéo de présentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
