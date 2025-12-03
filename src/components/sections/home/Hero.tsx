"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-background min-h-screen flex items-center justify-center overflow-x-hidden pt-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent" />

      {/* Extended background to cover navbar area */}
      <div className="absolute inset-0 -top-24 bg-background -z-10" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Large Hero Text with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full px-2"
          >
            <h1
              className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12.5rem] xl:text-[15rem] 2xl:text-[17rem] font-black leading-[0.85] tracking-tighter"
              style={{
                backgroundImage: "url(/images/hero.avif)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              APEC
              <br />
              INTERNATIONAL
            </h1>
            {/* Fallback text for accessibility */}
            <span className="sr-only">APEC INTERNATIONAL</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-dark font-medium max-w-4xl mx-auto"
          >
            Autonomiser les communautés, transformer les vies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              href="/faire-un-don"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Faire un Don
            </Button>
            <Button
              href="/a-propos"
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 border-dark hover:bg-dark hover:text-white"
            >
              En Savoir Plus
            </Button>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-dark/70 text-sm">Personnes touchées</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">14</p>
              <p className="text-dark/70 text-sm">Pays d&apos;intervention</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">6</p>
              <p className="text-dark/70 text-sm">Projets actifs</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
