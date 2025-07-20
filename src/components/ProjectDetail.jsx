import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp, Award, Play, Code, Database, Globe, Zap } from 'lucide-react'

const ProjectDetail = ({ project, onBack }) => {
  if (!project) return null

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'fullstack': return Code
      case 'backend': return Database
      case 'frontend': return Globe
      case 'mobile': return Zap
      default: return Code
    }
  }

  const CategoryIcon = getCategoryIcon(project.category)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="max-w-5xl w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl my-8"
      >
        {/* Header */}
        <div className="relative">
          <div className="h-80 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="absolute top-6 left-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          {/* Project Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 backdrop-blur-md rounded-lg border border-green-500/30">
                <CategoryIcon className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-green-400 font-medium text-sm uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">{project.title}</h1>
            <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
              <Calendar className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900 dark:text-white">{project.year}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Year</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900 dark:text-white">{project.team}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Team Size</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900 dark:text-white">{project.impact}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Impact</div>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
              <Award className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <div className="font-semibold text-gray-900 dark:text-white">{project.status}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Details */}
              {project.achievements && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h3>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 border border-gray-200 dark:border-zinc-700 rounded-lg"
                      >
                        <Award className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics */}
              {project.metrics && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Performance Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
                      >
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">{value}</div>
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-zinc-700"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Links</h3>
                <div className="space-y-3">
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-5 h-5" />
                      <span className="font-medium">View Live Demo</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-medium">View Source Code</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.duration || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Role:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{project.role || 'Developer'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Type:</span>
                    <span className="font-medium text-gray-900 dark:text-white capitalize">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail 