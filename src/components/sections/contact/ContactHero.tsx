'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative bg-background py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-dark leading-tight">
            <span className="font-accent italic text-primary">Contactez</span>
            -Nous
          </h1>
          <p className="text-lg sm:text-xl text-dark/80 leading-relaxed">
            Nous sommes là pour répondre à vos questions et explorer comment
            nous pouvons travailler ensemble pour avoir un impact positif.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
