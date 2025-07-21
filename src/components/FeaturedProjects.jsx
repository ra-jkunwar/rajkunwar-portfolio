import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectDetail from './ProjectDetail'
import MagicBento from './MagicBento'
import TextType from './TextType'
import { 
  ExternalLink, 
  Github, 
  Play, 
  X, 
  Code, 
  Database, 
  Globe, 
  Zap,
  Star,
  Eye,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react'

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', icon: Layers },
    { id: 'fullstack', name: 'Full-Stack', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'mobile', name: 'Mobile', icon: Zap }
  ]

  const projects = [
    {
      id: 1,
      title: 'StreamFlow Analytics',
      description: 'A real-time analytics platform built for Disney+ Hotstar handling 50M+ users. Features advanced data visualization, real-time monitoring, and A/B testing capabilities.',
      shortDesc: 'Enterprise analytics platform with real-time insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tech: ['Python', 'Django', 'Kafka', 'Redis', 'PostgreSQL', 'React', 'D3.js'],
      features: [
        'Real-time data streaming with Kafka',
        'Advanced visualization with D3.js',
        'A/B testing framework for 50M+ users',
        'Microservices architecture',
        'Auto-scaling with Kubernetes',
        'Machine learning insights'
      ],
      github: 'https://github.com/rajkunwar/streamflow-analytics',
      live: 'https://streamflow-analytics.com',
      category: 'fullstack',
      status: 'Production',
      impact: '50M+ Users',
      year: '2023',
      featured: true,
      metrics: {
        users: '50M+',
        uptime: '99.9%',
        performance: '40% faster'
      }
    },
    {
      id: 2,
      title: 'PocketFM Revenue Engine',
      description: 'Dynamic pricing and subscription management system handling 10M+ daily requests. Built with advanced algorithms for revenue optimization.',
      shortDesc: 'Revenue optimization platform with dynamic pricing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
      features: [
        'Dynamic pricing algorithms',
        'Subscription mandate system',
        'Real-time revenue tracking',
        'Churn reduction by 25%',
        'Automated billing workflows',
        'Advanced analytics dashboard'
      ],
      github: 'https://github.com/rajkunwar/pocketfm-revenue',
      live: 'https://pocketfm.com',
      category: 'backend',
      status: 'Production',
      impact: '10M+ Requests/Day',
      year: '2024',
      featured: true,
      metrics: {
        requests: '10M/day',
        revenue: '+25%',
        latency: '60% reduced'
      }
    },
    {
      id: 3,
      title: 'Web Zero Collaboration',
      description: 'Modern collaboration platform with real-time chat, file sharing, and project management. Built with MERN stack and Socket.io for seamless team communication.',
      shortDesc: 'Team collaboration platform with real-time features',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'AWS S3'],
      features: [
        'Real-time messaging with Socket.io',
        'File upload and sharing system',
        'Project management tools',
        'Video calling integration',
        'Advanced notification system',
        'Mobile-responsive design'
      ],
      github: 'https://github.com/rajkunwar/web-zero',
      live: 'https://web-zero.vercel.app',
      category: 'fullstack',
      status: 'Live',
      impact: '1K+ Users',
      year: '2023',
      featured: false,
      metrics: {
        users: '1K+',
        satisfaction: '95%',
        engagement: '+150%'
      }
    },
    {
      id: 4,
      title: 'InvestoCars Platform',
      description: 'Car investment platform with AI-powered market analysis and portfolio tracking. Features dynamic pricing, risk assessment, and automated trading signals.',
      shortDesc: 'AI-powered car investment platform',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      tech: ['Python', 'Django', 'PostgreSQL', 'Redis', 'TensorFlow', 'React'],
      features: [
        'AI-powered market analysis',
        'Dynamic pricing algorithms',
        'Portfolio tracking and analytics',
        'Risk assessment tools',
        'Automated trading signals',
        'Real-time market data'
      ],
      github: 'https://github.com/rajkunwar/investo-cars',
      live: 'https://investo-cars.com',
      category: 'fullstack',
      status: 'Beta',
      impact: 'Investment Tool',
      year: '2023',
      featured: false,
      metrics: {
        accuracy: '87%',
        returns: '+12%',
        trades: '500+'
      }
    },
    {
      id: 5,
      title: 'TaskFlow Mobile',
      description: 'Cross-platform mobile app for task management with offline sync, push notifications, and team collaboration features.',
      shortDesc: 'Mobile task management with offline sync',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Redux'],
      features: [
        'Offline-first architecture',
        'Real-time synchronization',
        'Push notifications',
        'Team collaboration',
        'Dark mode support',
        'Biometric authentication'
      ],
      github: 'https://github.com/rajkunwar/taskflow-mobile',
      live: 'https://taskflow-app.com',
      category: 'mobile',
      status: 'Development',
      impact: 'Productivity Tool',
      year: '2024',
      featured: false,
      metrics: {
        downloads: '5K+',
        rating: '4.8/5',
        retention: '78%'
      }
    },
    {
      id: 6,
      title: 'Portfolio Dashboard',
      description: 'Interactive portfolio website with dynamic themes, smooth animations, and responsive design. Built with React and Framer Motion.',
      shortDesc: 'Interactive portfolio with dynamic themes',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      features: [
        'Dynamic color themes',
        'Smooth animations',
        'Responsive design',
        'Interactive roadmap',
        'Skills visualization',
        'SEO optimized'
      ],
      github: 'https://github.com/rajkunwar/portfolio',
      live: 'https://rajkunwar.dev',
      category: 'frontend',
      status: 'Live',
      impact: 'Personal Brand',
      year: '2024',
      featured: false,
      metrics: {
        visitors: '2K+',
        performance: '98/100',
        accessibility: '100/100'
      }
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const featuredProjects = projects.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      y: 30
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }
  }

  const cardHover = {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }

  const imageHover = {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }

      return (
    <>
    <section id="projects" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 dark:from-green-500/10 dark:via-emerald-500/10 dark:to-teal-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={projectVariants} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Code className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Portfolio
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Featured
              <br />
              <TextType 
                texts={[
                  'Projects',
                  'Applications', 
                  'Solutions',
                  'Experiences'
                ]}
                speed={120}
                deleteSpeed={60}
                pauseTime={2500}
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
              />
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              A showcase of my best work, from enterprise-scale applications to innovative personal projects. 
              Each project demonstrates different aspects of my technical expertise and problem-solving abilities.
            </p>
          </motion.div>

          {/* Featured Projects Highlight */}
          <motion.div variants={projectVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Star className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
              Production Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  whileHover={cardHover}
                  className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group relative"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-green-600 text-white">
                    {project.status}
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 lg:h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={imageHover}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Icons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        {project.github && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.github, '_blank')
                            }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </motion.button>
                        )}
                        {project.live && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.live, '_blank')
                            }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.button>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm sm:text-base">
                      {project.shortDesc}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm sm:text-lg font-bold text-green-600 dark:text-green-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={projectVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 20 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300
                    ${activeCategory === category.id
                      ? "bg-green-600 text-white shadow-lg"
                                              : "bg-white dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-700/50 text-gray-700 dark:text-gray-300 hover:shadow-md"
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Magic Bento Projects Layout */}
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Layers className="w-6 h-6 mr-2 text-green-600 dark:text-green-400" />
              All Projects
            </h3>
            <MagicBento projects={filteredProjects} />
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl dark:shadow-green-500/5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{selectedProject.year}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{selectedProject.impact}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.status === 'Production' ? 'bg-green-500' :
                      selectedProject.status === 'Live' ? 'bg-blue-500' :
                      selectedProject.status === 'Beta' ? 'bg-yellow-500' :
                      'bg-gray-500'
                    } text-white`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                  {selectedProject.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                        {value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs sm:text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium
                        bg-gray-800 text-white hover:bg-gray-700 transition-colors
                        shadow-lg hover:shadow-xl w-full sm:w-auto
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default FeaturedProjects 