'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

const transparencyPoints = [
  {
    id: 'reporting',
    title: 'Rapports Financiers',
    description:
      'Nous publions des rapports annuels détaillés sur l\'utilisation de tous les fonds collectés.',
  },
  {
    id: 'impact',
    title: 'Mesure d\'Impact',
    description:
      'Chaque projet est évalué avec des indicateurs concrets pour mesurer son impact réel.',
  },
  {
    id: 'accountability',
    title: 'Responsabilité',
    description:
      'Notre conseil d\'administration assure une gouvernance éthique et transparente.',
  },
];

const faqs = [
  {
    question: 'Comment mon don sera-t-il utilisé ?',
    answer:
      'Votre don finance directement nos programmes sur le terrain : sensibilisation, formation, et aide aux communautés. Aucun frais administratif n\'est prélevé sur les dons.',
  },
  {
    question: 'Puis-je recevoir un reçu fiscal ?',
    answer:
      'Oui, nous émettons des reçus fiscaux pour tous les dons. Contactez-nous avec vos informations après votre don.',
  },
  {
    question: 'Comment puis-je suivre l\'impact de mon don ?',
    answer:
      'Nous envoyons des rapports réguliers à nos donateurs et publions des mises à jour sur nos projets sur notre site web et nos réseaux sociaux.',
  },
  {
    question: 'Puis-je faire un don récurrent ?',
    answer:
      'Oui, vous pouvez configurer des dons mensuels ou annuels. Contactez-nous pour mettre en place un don récurrent.',
  },
];

export const Transparency: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transparency Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-4">
              Notre Engagement envers la{' '}
              <span className="font-accent italic text-primary">
                Transparence
              </span>
            </h2>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              Nous croyons en une transparence totale. Chaque don compte et mérite
              d&apos;être utilisé de manière responsable et efficace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {transparencyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Button href="/contact" size="lg">
              Demander Notre Rapport Annuel
            </Button>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-dark mb-4">
              Questions{' '}
              <span className="font-accent italic text-primary">
                Fréquentes
              </span>
            </h2>
            <p className="text-lg text-dark/70">
              Vous avez des questions ? Nous avons des réponses.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-dark pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-dark/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-background rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-medium text-dark mb-4">
            Chaque Contribution Compte
          </h3>
          <p className="text-lg text-dark/70 mb-6 max-w-2xl mx-auto">
            Que ce soit une contribution financière, du bénévolat ou simplement
            le partage de notre mission, votre soutien fait une différence
            tangible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Devenir Bénévole
            </Button>
            <Button href="/projets" variant="outline" size="lg">
              Voir Nos Projets
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
