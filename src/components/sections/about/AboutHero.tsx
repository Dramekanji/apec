"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutHero: React.FC = () => {
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
              Nous Croyons au Pouvoir de la{" "}
              <span className="font-accent italic text-primary">
                Compassion
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-dark/80 leading-relaxed">
              Fondée sur le principe que chaque personne mérite dignité et
              opportunité, notre mission est d&apos;élever et de soutenir ceux
              qui en ont besoin, en les dotant des moyens de surmonter les défis
              et de construire des avenirs meilleurs.
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll down"
            >
              <span className="mr-2">Découvrir plus</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative rounded-2xl aspect-square overflow-hidden shadow-lg">
              <Image
                src="/images/kids.jpeg"
                alt="Deux enfants souriants"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl aspect-square overflow-hidden mt-8 shadow-lg">
              <Image
                src="/images/women.jpeg"
                alt="Une foule enthousiaste menée par une femme"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
