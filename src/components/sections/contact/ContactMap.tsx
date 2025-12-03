"use client";

import React from "react";
import { motion } from "framer-motion";

export const ContactMap: React.FC = () => {
  // Coordinates for Nongo Kiroty, Commune de Ratoma, Conakry, Guinea
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.925849!2d-13.6582!3d9.5843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cc7e0c8f9c9c9d%3A0x1a2b3c4d5e6f7g8h!2sNongo%20Kiroty%2C%20Ratoma%2C%20Conakry%2C%20Guinea!5e0!3m2!1sen!2sus!4v1234567890";

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-medium text-dark mb-4">
            Notre{" "}
            <span className="font-accent italic text-primary">
              Localisation
            </span>
          </h2>
          <p className="text-lg text-dark/70">
            Retrouvez-nous à Nongo Kiroty, Commune de Ratoma, Conakry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="APEC International Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};
