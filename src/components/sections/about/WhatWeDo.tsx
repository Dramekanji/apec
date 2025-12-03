"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { focusAreas } from "@/lib/constants";

const initiatives = [
  {
    id: "emergency",
    title: "Aide d'Urgence",
    description:
      "Offrir un soutien immédiat en temps de crise - que ce soit par la distribution de nourriture, la fourniture d'abris ou l'assistance financière.",
    icon: "🚨",
  },
  {
    id: "education",
    title: "Programmes d'Éducation",
    description:
      "Équiper les individus avec les compétences et les connaissances dont ils ont besoin pour sortir de la pauvreté.",
    icon: "📚",
  },
  {
    id: "health",
    title: "Santé et Bien-être",
    description:
      "Assurer l'accès à des soins de santé de qualité, des ressources en santé mentale et des programmes de bien-être.",
    icon: "⚕️",
  },
  {
    id: "community",
    title: "Développement Communautaire",
    description:
      "Travailler avec les leaders locaux et les organisations pour créer des solutions durables qui profitent à des communautés entières.",
    icon: "🤝",
  },
];

export const WhatWeDo: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-2xl aspect-[4/5] overflow-hidden">
              <Image
                src="/images/students.jpg"
                alt="Students in Ce Que Nous Faisons section"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-dark">
              Ce Que{" "}
              <span className="font-accent italic text-primary">
                Nous Faisons
              </span>
            </h2>
            <p className="text-lg text-dark/70 leading-relaxed">
              De la fourniture d&apos;aide directe à ceux qui font face à des
              difficultés, au soutien de projets de développement à long terme
              qui améliorent les conditions de vie, nous nous engageons pour un
              impact durable. Nos initiatives incluent :
            </p>

            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <motion.div
                  key={initiative.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{initiative.icon}</span>
                  <div>
                    <h3 className="font-medium text-dark text-lg mb-1">
                      {initiative.title}
                    </h3>
                    <p className="text-dark/70">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-dark mb-4">
              Nos Domaines d&apos;
              <span className="font-accent italic text-primary">
                Intervention
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-medium text-dark mb-3">
                  {area.title}
                </h3>
                <p className="text-dark/70 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
