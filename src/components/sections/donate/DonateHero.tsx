'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const DonateHero: React.FC = () => {
  return (
    <section className="relative bg-background min-h-[70vh] flex items-center overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-dark leading-tight">
              Votre Don Fait la{' '}
              <span className="font-accent italic text-primary">
                Différence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-dark/80 leading-relaxed">
              Chaque contribution, grande ou petite, a le pouvoir de transformer
              des vies. Votre générosité aide à créer un avenir meilleur pour
              ceux qui en ont le plus besoin.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary">
              <p className="text-dark font-medium text-lg">
                100% de votre don va directement aux programmes qui changent des
                vies.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-2xl aspect-[4/5] overflow-hidden">
              <Image
                src="/images/kids-2.jpeg"
                alt="Don Hero Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 right-0 translate-x-1/4 -translate-y-1/2">
              <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
