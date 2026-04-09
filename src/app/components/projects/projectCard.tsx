"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Project } from "./types";
import { getTechIcon } from "./techIcons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-effect rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-36 overflow-hidden bg-dark-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-dark-900 to-accent-400/10" />
        <div className="relative text-center px-6">
          <span className="text-xs uppercase tracking-[0.24em] text-primary-400 font-semibold">
            {project.category}
          </span>
          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            {project.status}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-end mb-4">
          <div className="bg-dark-900/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-accent-400 flex items-center">
            <ChartBarIcon className="w-3 h-3 mr-1" />
            {project.metrics.performance ?? project.status}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="overflow-hidden py-2">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -16, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="flex gap-3 min-w-max"
          >
            {project.techStack.map((tech, index) => {
              const Icon = getTechIcon(tech);
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-dark-800 px-3 py-2 text-xs text-gray-300 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4 text-primary-400" />
                  {tech}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ClockIcon className="w-3 h-3 mr-1" />
              {project.metrics.duration ?? project.developmentPeriod}
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="w-3 h-3 mr-1" />
              {project.metrics.team ?? project.teamSize}
            </div>
          </div>

          <div className="text-primary-400 font-medium">View Details →</div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
        <div className="absolute inset-0 rounded-2xl border border-primary-500/20" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
