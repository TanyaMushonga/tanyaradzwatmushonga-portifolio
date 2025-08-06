"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  EyeIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WrenchIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Project } from "./types";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto glass-effect border border-white/20 rounded-2xl custom-scrollbar"
          >
            <div className="sticky top-0 bg-dark-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400 mb-2">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {project.keyFeatures?.length > 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <StarIcon className="w-6 h-6 text-accent-400 mr-2" />
                        Key Features
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.keyFeatures.map((feature, index) => (
                          <li
                            key={index}
                            className="glass-effect p-4 rounded-lg border border-white/10 flex items-start"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-primary-400 mt-1.5 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <CpuChipIcon className="w-6 h-6 text-primary-400 mr-2" />
                      Implementation Details
                    </h3>
                    <div className="space-y-4">
                      {project.implementation.map((detail, index) => (
                        <div
                          key={index}
                          className="glass-effect p-4 rounded-lg border border-white/10"
                        >
                          <h4 className="text-lg font-semibold text-primary-400 mb-2">
                            {detail.title}
                          </h4>
                          <p className="text-gray-300 mb-3">
                            {detail.description}
                          </p>

                          {detail.achievements &&
                            detail.achievements.length > 0 && (
                              <div className="mt-3">
                                <h5 className="text-sm font-medium text-yellow-400 mb-1">
                                  Achievements:
                                </h5>
                                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                                  {detail.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          <div className="mt-4 flex flex-wrap gap-2">
                            {detail.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-primary-500/20 px-3 py-1 rounded-full text-sm text-primary-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                      <ShieldCheckIcon className="w-6 h-6 text-accent-400 mr-2" />
                      Architecture & Challenges
                    </h3>
                    <div className="glass-effect p-6 rounded-lg border border-white/10 mb-4">
                      <h4 className="text-lg font-semibold text-accent-400 mb-2">
                        System Architecture
                      </h4>
                      <p className="text-gray-300 whitespace-pre-line">
                        {project.architecture}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {project.challenges.map((challenge, index) => (
                        <div
                          key={index}
                          className="glass-effect p-4 rounded-lg border border-white/10"
                        >
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Challenge: {challenge.description}
                          </h4>
                          <div className="mb-2">
                            <span className="text-sm font-medium text-primary-400">
                              Solution:
                            </span>
                            <p className="text-gray-300 mt-1">
                              {challenge.solution}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-green-400">
                              Impact:
                            </span>
                            <p className="text-gray-300 mt-1">
                              {challenge.impact}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                      <div className="glass-effect p-6 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <LightBulbIcon className="w-5 h-5 text-white mr-2" />
                          Lessons Learned
                        </h3>
                        <ul className="space-y-3">
                          {project.lessonsLearned.map((lesson, index) => (
                            <li
                              key={index}
                              className="flex items-start text-gray-300"
                            >
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 mr-2 flex-shrink-0"></span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.futureImprovements && project.futureImprovements.length > 0 && (
                      <div className="glass-effect p-6 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          <WrenchIcon className="w-5 h-5 mr-2" />
                          Future Improvements
                        </h3>
                        <ul className="space-y-3">
                          {project.futureImprovements.map(
                            (improvement, index) => (
                              <li
                                key={index}
                                className="flex items-start text-gray-300"
                              >
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 mr-2 flex-shrink-0"></span>
                                <span>{improvement}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
 
                <div className="lg:col-span-1 space-y-6">
 
                  <div className="glass-effect p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <ChartBarIcon className="w-5 h-5 text-primary-400 mr-2" />
                      Key Metrics
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center"
                        >
                          <span className="text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className="font-bold text-primary-400">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                  <div className="glass-effect p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <DocumentTextIcon className="w-5 h-5 text-accent-400 mr-2" />
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-dark-800 px-3 py-1 rounded-md text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

               
                  <div className="glass-effect p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                      Project Info
                    </h3>
                    <div className="space-y-3">
                      {project.developmentPeriod && (
                        <div className="flex items-center text-sm">
                          <ClockIcon className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Duration: </span>
                          <span className="text-white ml-2">
                            {project.developmentPeriod}
                          </span>
                        </div>
                      )}
                      {project.teamSize && (
                        <div className="flex items-center text-sm">
                          <UserGroupIcon className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Team Size: </span>
                          <span className="text-white ml-2">
                            {project.teamSize}
                          </span>
                        </div>
                      )}
                      {project.status && (
                        <div className="flex items-center text-sm">
                          <RocketLaunchIcon className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-400">Status: </span>
                          <span className="text-green-400 ml-2">
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
 
                  {project.tags?.length > 0 && (
                    <div className="glass-effect p-6 rounded-lg border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-4">
                        Technology Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm ${
                              tag.color === "blue-text-gradient"
                                ? "bg-blue-500/20 text-blue-400"
                                : tag.color === "green-text-gradient"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-pink-500/20 text-pink-400"
                            }`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

              
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary-500 to-accent-400 px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <EyeIcon className="w-5 h-5 mr-2" />
                        View Live Demo
                      </motion.button>
                    )}

                    {project.githubUrl && (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full border border-primary-500/30 px-6 py-3 rounded-lg text-primary-400 font-semibold flex items-center justify-center hover:bg-primary-500/10 transition-colors"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <CodeBracketIcon className="w-5 h-5 mr-2" />
                        View Source Code
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
