"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data";
import ProjectCard from "./projectCard";
import ProjectModal from "./projectModal";
import { Project } from "./types";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", "Web Application", "Mobile Application", "api"];

  const filteredProjects = React.useMemo(() => {
    const result =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    // Sort: Next.js and React Native projects first
    return result.sort((a, b) => {
      const aIsPriority =
        a.techStack.some((t) => /Next\.js|React Native/i.test(t)) ||
        /Next\.js|React Native/i.test(a.category);
      const bIsPriority =
        b.techStack.some((t) => /Next\.js|React Native/i.test(t)) ||
        /Next\.js|React Native/i.test(b.category);

      if (aIsPriority && !bIsPriority) return -1;
      if (!aIsPriority && bIsPriority) return 1;
      return 0;
    });
  }, [filter]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities
            through real-world applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-lg"
                  : "glass-effect text-gray-300 hover:text-white border border-white/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m7-5v5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                No projects found
              </h3>
              <p className="text-gray-400">
                No projects match the selected filter &ldquo;{filter}&rdquo;.
                Try selecting a different category.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
