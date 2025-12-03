"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";

const reasons = [
  {
    id: "impact",
    title: "Impact Prouvé",
    description:
      "Plus de 150 personnes touchées en 2023, avec des projets concrets dans 14 pays.",
  },
  {
    id: "community",
    title: "Axé sur la Communauté",
    description:
      "Nous travaillons en partenariat avec les leaders locaux pour assurer un changement durable.",
  },
  {
    id: "transparent",
    title: "Transparent",
    description:
      "Rapports financiers clairs pour que vous sachiez exactement comment votre don est utilisé.",
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-dark mb-6">
                Pourquoi{" "}
                <span className="font-accent italic text-primary">Choisir</span>{" "}
                APEC ?
              </h2>
              <p className="text-lg text-dark/70 leading-relaxed mb-8">
                Avec plus de 10 ans de service dévoué, APEC International a
                touché la vie de centaines de personnes à travers 14 pays. Nos
                opérations transparentes et nos bénévoles passionnés
                garantissent que chaque contribution a un impact maximal.
              </p>
            </div>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-md flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-dark/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/a-propos" size="lg">
                En Savoir Plus
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gray-200 rounded-2xl aspect-[4/5] overflow-hidden">
              <Image
                src="/images/apec-1.jpg"
                alt="APEC team members"
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
