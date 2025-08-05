'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  techStack: string[]
  metrics: {
    performance: string
    duration: string
    team: string
  }
  links: {
    live?: string
    github?: string
  }
  status: 'completed' | 'in-progress' | 'planned'
}

interface ProjectCardProps {
  project: Project
  index: number
  onSelect: (project: Project) => void
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
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
        
        {/* Project Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-primary-400 border border-primary-500/30">
            {project.category}
          </span>
        </div>

        {/* Project Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
            project.status === 'completed' 
              ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
              : project.status === 'in-progress'
              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
          }`}>
            {project.status === 'completed' ? 'Completed' : 
             project.status === 'in-progress' ? 'In Progress' : 'Planned'}
          </span>
        </div>

        {/* Quick Metrics */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
          <div className="bg-dark-900/60 backdrop-blur-sm px-2 py-1 rounded-lg text-xs text-accent-400 flex items-center">
            <ChartBarIcon className="w-3 h-3 mr-1" />
            {project.metrics.performance}
          </div>
        </div>

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project?.links?.live && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                window.open(project.links.live, '_blank')
              }}
              className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-colors"
            >
              <EyeIcon className="w-5 h-5 text-white" />
            </motion.button>
          )}
          {project?.links?.github && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                window.open(project.links.github, '_blank')
              }}
              className="bg-dark-700 hover:bg-dark-600 p-3 rounded-full transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 text-white" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
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

        {/* Project Metrics */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ClockIcon className="w-3 h-3 mr-1" />
              {project.metrics.duration}
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="w-3 h-3 mr-1" />
              {project.metrics.team}
            </div>
          </div>
          
          <div className="text-primary-400 font-medium">
            View Details →
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10" />
        <div className="absolute inset-0 rounded-2xl border border-primary-500/20" />
      </div>
    </motion.div>
  )
}

export default ProjectCard
