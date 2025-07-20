import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, X, Code, Database, Globe, Zap } from 'lucide-react'
import { useColorScheme } from '../context/ColorSchemeContext'

const Projects = () => {
  const { currentColors } = useColorScheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Web Zero',
      description: 'A full-stack web application built with MERN stack featuring real-time chat, file sharing, and collaborative features.',
      shortDesc: 'Full-stack MERN application with real-time features',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      features: [
        'Real-time chat with Socket.io',
        'File upload and sharing system',
        'User authentication and authorization',
        'Responsive design with Material-UI',
        'RESTful API with Express.js'
      ],
      github: 'https://github.com/rajkunwar/web-zero',
      live: 'https://web-zero.vercel.app',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'Investo Cars',
      description: 'A car investment platform with dynamic pricing algorithms, portfolio tracking, and market analysis tools.',
      shortDesc: 'Car investment platform with dynamic pricing',
      tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
      features: [
        'Dynamic pricing algorithms',
        'Real-time market data integration',
        'Portfolio tracking and analytics',
        'Automated trading signals',
        'Advanced filtering and search'
      ],
      github: 'https://github.com/rajkunwar/investo-cars',
      live: 'https://investo-cars.com',
      category: 'Backend'
    },
    {
      id: 3,
      title: 'Dynamic Pricing System',
      description: 'Scalable pricing engine handling 10M+ daily requests with real-time optimization and A/B testing capabilities.',
      shortDesc: 'High-performance pricing engine for millions of users',
      tech: ['Python', 'Django', 'Kafka', 'Redis', 'AWS', 'PostgreSQL'],
      features: [
        'Handles 10M+ daily API requests',
        'Real-time price optimization',
        'A/B testing framework',
        'Multi-tenant architecture',
        '99.9% uptime SLA'
      ],
      github: 'https://github.com/rajkunwar/dynamic-pricing',
      live: null,
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Event Notification System',
      description: 'Event-driven notification system with 99.9% uptime, supporting multiple channels and real-time delivery.',
      shortDesc: 'Event-driven notification system with high reliability',
      tech: ['Python', 'Kafka', 'Redis', 'Celery', 'PostgreSQL'],
      features: [
        'Event-driven architecture',
        'Multi-channel notifications (Email, SMS, Push)',
        'Real-time delivery tracking',
        'Retry mechanism with exponential backoff',
        'Scalable microservices design'
      ],
      github: 'https://github.com/rajkunwar/notification-system',
      live: null,
      category: 'Backend'
    },
    {
      id: 5,
      title: 'A/B Testing Platform',
      description: 'Comprehensive A/B testing platform supporting 50M+ users with real-time analytics and statistical significance testing.',
      shortDesc: 'A/B testing platform for 50M+ users',
      tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS'],
      features: [
        'Real-time experiment management',
        'Statistical significance testing',
        'Multi-variant testing support',
        'Real-time analytics dashboard',
        'Automated experiment optimization'
      ],
      github: 'https://github.com/rajkunwar/ab-testing-platform',
      live: null,
      category: 'Backend'
    },
    {
      id: 6,
      title: 'Traffic Routing System',
      description: 'Intelligent traffic routing system improving response time by 40% with load balancing and failover mechanisms.',
      shortDesc: 'Intelligent traffic routing with 40% performance improvement',
      tech: ['Python', 'Django', 'Redis', 'Nginx', 'Docker'],
      features: [
        'Intelligent load balancing',
        'Geographic routing optimization',
        'Automatic failover mechanisms',
        'Real-time health monitoring',
        '40% response time improvement'
      ],
      github: 'https://github.com/rajkunwar/traffic-routing',
      live: null,
      category: 'Backend'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section id="projects" className={`py-20 ${currentColors.section.secondary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in building scalable, 
              high-performance applications and systems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={cardVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="card p-6 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {project.category === 'Full-Stack' && <Globe className="w-5 h-5 text-primary-600" />}
                    {project.category === 'Backend' && <Database className="w-5 h-5 text-primary-600" />}
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.github, '_blank')
                    }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.button>
                  
                  {project.live && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-accent-600 hover:text-accent-700 font-medium text-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.live, '_blank')
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </motion.button>
                  )}
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 font-medium text-sm ml-auto"
                  >
                    <Play className="w-4 h-4" />
                    <span>Details</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
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
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    {selectedProject.category === 'Full-Stack' && <Globe className="w-6 h-6 text-primary-600" />}
                    {selectedProject.category === 'Backend' && <Database className="w-6 h-6 text-primary-600" />}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Zap className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center space-x-2"
                    onClick={() => window.open(selectedProject.github, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.button>
                  
                  {selectedProject.live && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center space-x-2"
                      onClick={() => window.open(selectedProject.live, '_blank')}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects 