"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui";
import { projects } from "@/lib/constants";
import type { ProjectCategory } from "@/lib/types";

const categories: Array<{ value: ProjectCategory | "Tous"; label: string }> = [
  { value: "Tous", label: "Tous" },
  { value: "Sensibilisation", label: "Sensibilisation" },
  { value: "Formation", label: "Formation" },
  { value: "Distribution", label: "Distribution" },
  { value: "Organisation", label: "Organisation" },
];

const categoryColors: Record<string, string> = {
  Sensibilisation: "bg-green-100 text-green-800",
  Formation: "bg-blue-100 text-blue-800",
  Distribution: "bg-purple-100 text-purple-800",
  Organisation: "bg-orange-100 text-orange-800",
};

export const ProjectsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | "Tous"
  >("Tous");

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-dark hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.p
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-dark/60 mb-8"
        >
          {filteredProjects.length} projet
          {filteredProjects.length > 1 ? "s" : ""} trouvé
          {filteredProjects.length > 1 ? "s" : ""}
        </motion.p>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="bg-gray-200 aspect-[16/10] relative overflow-hidden">
                    {project.id === "securite-routiere-yimbaya" ? (
                      <Image
                        src="/images/road-safety.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : project.id === "droits-enfants-kiroty" ? (
                      <Image
                        src="/images/students-2.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : project.id ===
                      "insertion-socioprofessionnelle-nongo" ? (
                      <Image
                        src="/images/professional.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : project.id === "securite-routiere-bambeto" ? (
                      <Image
                        src="/images/road-safety-2.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : project.id === "securite-routiere-matam" ? (
                      <Image
                        src="/images/road-safety-3.jpg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : project.id === "forum-russie-afrique" ? (
                      <Image
                        src="/images/apec-2.jpeg"
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <svg
                          className="w-16 h-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          categoryColors[project.category]
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Date */}
                    <p className="text-sm text-primary font-medium mb-2">
                      {project.date}
                    </p>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-dark mb-3 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-start text-sm text-dark/60 mb-3">
                      <svg
                        className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="line-clamp-2">{project.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-dark/70 leading-relaxed mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Participants */}
                    {project.participants > 0 && (
                      <div className="flex items-center text-sm text-dark/60 pt-4 border-t border-gray-100">
                        <svg
                          className="w-4 h-4 mr-2"
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
                        <span className="font-medium">
                          {project.participants} participants
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-dark/60 text-lg">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
