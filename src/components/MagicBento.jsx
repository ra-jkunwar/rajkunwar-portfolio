import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar, Code, Users, TrendingUp, Award } from 'lucide-react'

const MagicBento = ({ projects = [] }) => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  // Define different sizes for bento grid items
  const getSizeClass = (index) => {
    const patterns = [
      'col-span-2 row-span-2', // Large
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-2 row-span-1', // Wide
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-1', // Small
    ]
    return patterns[index % patterns.length]
  }

  const getContentLayout = (index, project) => {
    const isLarge = index % 6 === 0
    const isTall = index % 6 === 2
    const isWide = index % 6 === 3

    if (isLarge) {
      return (
        <div className="h-full flex flex-col">
          <div className="flex-1 mb-4">
            <div className="h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
              <Code className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
              {project.description}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {project.tech?.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Star className="w-3 h-3" />
                <span>{project.stars || '12'}</span>
                <Users className="w-3 h-3 ml-2" />
                <span>{project.contributors || '3'}</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                  <Github className="w-3 h-3" />
                </button>
                <button className="p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (isTall) {
      return (
        <div className="h-full flex flex-col">
          <div className="h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-3 flex items-center justify-center">
            <Code className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-4 flex-1">
            {project.description}
          </p>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {project.tech?.slice(0, 2).map((tech, i) => (
                <span key={i} className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-1">
              <button className="p-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
                <Github className="w-3 h-3" />
              </button>
              <button className="p-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )
    }

    if (isWide) {
      return (
        <div className="h-full flex gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Code className="w-8 h-8 text-green-500" />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2 flex-1">
              {project.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tech?.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                <button className="p-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
                  <Github className="w-3 h-3" />
                </button>
                <button className="p-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Small cards
    return (
      <div className="h-full flex flex-col">
        <div className="h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-2 flex items-center justify-center">
          <Code className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {project.tech?.[0]}
          </div>
          <div className="flex gap-1">
            <button className="p-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
              <Github className="w-2.5 h-2.5" />
            </button>
            <button className="p-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded">
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 auto-rows-[160px] gap-4 p-4">
      {projects.map((project, index) => (
        <motion.div
          key={project.id || index}
          className={`${getSizeClass(index)} relative group cursor-pointer`}
          onHoverStart={() => setHoveredProject(index)}
          onHoverEnd={() => setHoveredProject(null)}
          onClick={() => setSelectedProject(project)}
          layout
          whileHover={{ 
            scale: 1.02,
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-full h-full bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-xl p-4 overflow-hidden relative">
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              initial={false}
              animate={{ opacity: hoveredProject === index ? 1 : 0 }}
            />
            
            {/* Content */}
            <div className="relative z-10 h-full">
              {getContentLayout(index, project)}
            </div>

            {/* Status indicator */}
            {project.status && (
              <div className="absolute top-2 right-2">
                <div className={`w-2 h-2 rounded-full ${
                  project.status === 'active' ? 'bg-green-500' :
                  project.status === 'completed' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`} />
              </div>
            )}

            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-2 left-2">
                <div className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white text-xs rounded-full">
                  <Award className="w-2.5 h-2.5" />
                  <span>Featured</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg"
                >
                  ✕
                </button>
              </div>
              
              {selectedProject.features && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech?.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MagicBento 