"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  EyeIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Project } from "./types";

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

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="bg-dark-800 px-2 py-1 rounded-md text-xs text-gray-400">
              +{project.techStack.length - 3} more
            </span>
          )}
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
