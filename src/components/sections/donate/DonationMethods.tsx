'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { donationMethods } from '@/lib/constants';

export const DonationMethods: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-4">
            Comment{' '}
            <span className="font-accent italic text-primary">Donner</span>
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Choisissez la méthode de don qui vous convient le mieux. Toutes les
            options sont sécurisées et simples à utiliser.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {donationMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {method.type === 'bank' && (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                )}
                {method.type === 'mobile' && (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {method.type === 'other' && (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-medium text-dark mb-3">
                {method.title}
              </h3>
              <p className="text-dark/70 mb-6">{method.description}</p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                {Object.entries(method.details).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 rounded-lg p-3 flex items-start"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-dark/60 mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </p>
                      <p className="font-medium text-dark">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {method.type === 'other' && (
                <Button href="/contact" variant="outline" className="w-full">
                  Nous Contacter
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-medium text-dark mb-2">
              Besoin d&apos;aide pour faire un don ?
            </h4>
            <p className="text-dark/70 mb-4">
              Notre équipe est disponible pour vous aider. N&apos;hésitez pas à
              nous contacter pour toute question concernant les dons.
            </p>
            <Button href="/contact" variant="outline">
              Contactez-nous
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
