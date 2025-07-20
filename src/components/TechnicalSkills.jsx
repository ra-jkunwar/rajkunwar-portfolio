import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useColorScheme } from '../context/ColorSchemeContext'
import { Filter, Star, Award, Code, Database, Cloud, Globe, Layers, Wrench } from 'lucide-react'

const TechnicalSkills = () => {
  const { currentColors } = useColorScheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeFilter, setActiveFilter] = useState('all')

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Star },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'frameworks', name: 'Frameworks', icon: Layers },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'tools', name: 'Tools', icon: Wrench }
  ]

  const skills = [
    // Languages
    {
      name: 'Python',
      category: 'languages',
      mastery: 95,
      icon: '🐍',
      color: 'bg-yellow-500',
      description: 'Primary backend language with 3+ years experience'
    },
    {
      name: 'JavaScript',
      category: 'languages',
      mastery: 85,
      icon: '⚡',
      color: 'bg-yellow-400',
      description: 'Frontend and Node.js development'
    },
    {
      name: 'TypeScript',
      category: 'languages',
      mastery: 80,
      icon: '📘',
      color: 'bg-blue-500',
      description: 'Type-safe JavaScript development'
    },
    {
      name: 'Go',
      category: 'languages',
      mastery: 70,
      icon: '🚀',
      color: 'bg-cyan-500',
      description: 'High-performance microservices'
    },
    {
      name: 'SQL',
      category: 'languages',
      mastery: 90,
      icon: '📊',
      color: 'bg-green-500',
      description: 'Complex query optimization and database design'
    },

    // Frameworks
    {
      name: 'Django',
      category: 'frameworks',
      mastery: 95,
      icon: '🎯',
      color: 'bg-green-600',
      description: 'Primary backend framework for REST APIs'
    },
    {
      name: 'FastAPI',
      category: 'frameworks',
      mastery: 85,
      icon: '⚡',
      color: 'bg-teal-500',
      description: 'High-performance async API development'
    },
    {
      name: 'React',
      category: 'frameworks',
      mastery: 80,
      icon: '⚛️',
      color: 'bg-blue-400',
      description: 'Modern frontend development'
    },
    {
      name: 'Node.js',
      category: 'frameworks',
      mastery: 75,
      icon: '💚',
      color: 'bg-green-500',
      description: 'Server-side JavaScript runtime'
    },
    {
      name: 'Express.js',
      category: 'frameworks',
      mastery: 80,
      icon: '🚄',
      color: 'bg-gray-600',
      description: 'Lightweight web framework for Node.js'
    },

    // Databases
    {
      name: 'PostgreSQL',
      category: 'databases',
      mastery: 90,
      icon: '🐘',
      color: 'bg-blue-600',
      description: 'Primary relational database with advanced queries'
    },
    {
      name: 'MongoDB',
      category: 'databases',
      mastery: 85,
      icon: '🍃',
      color: 'bg-green-500',
      description: 'NoSQL document database and aggregation'
    },
    {
      name: 'Redis',
      category: 'databases',
      mastery: 80,
      icon: '🔴',
      color: 'bg-red-500',
      description: 'Caching and session management'
    },
    {
      name: 'Elasticsearch',
      category: 'databases',
      mastery: 70,
      icon: '🔍',
      color: 'bg-yellow-600',
      description: 'Search and analytics engine'
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      category: 'cloud',
      mastery: 85,
      icon: '☁️',
      color: 'bg-orange-500',
      description: 'EC2, S3, Lambda, RDS, and more'
    },
    {
      name: 'Docker',
      category: 'cloud',
      mastery: 85,
      icon: '🐳',
      color: 'bg-blue-500',
      description: 'Containerization and orchestration'
    },
    {
      name: 'Kubernetes',
      category: 'cloud',
      mastery: 75,
      icon: '☸️',
      color: 'bg-blue-600',
      description: 'Container orchestration and scaling'
    },
    {
      name: 'Kafka',
      category: 'cloud',
      mastery: 80,
      icon: '📨',
      color: 'bg-gray-700',
      description: 'Event streaming and message queues'
    },
    {
      name: 'Jenkins',
      category: 'cloud',
      mastery: 70,
      icon: '🔧',
      color: 'bg-blue-700',
      description: 'CI/CD pipeline automation'
    },

    // Tools
    {
      name: 'Git',
      category: 'tools',
      mastery: 90,
      icon: '🌳',
      color: 'bg-orange-600',
      description: 'Version control and collaboration'
    },
    {
      name: 'Nginx',
      category: 'tools',
      mastery: 75,
      icon: '🌐',
      color: 'bg-green-600',
      description: 'Web server and reverse proxy'
    },
    {
      name: 'Postman',
      category: 'tools',
      mastery: 85,
      icon: '📮',
      color: 'bg-orange-500',
      description: 'API testing and development'
    },
    {
      name: 'Grafana',
      category: 'tools',
      mastery: 70,
      icon: '📈',
      color: 'bg-orange-400',
      description: 'Monitoring and observability'
    }
  ]

  const getMasteryColor = (mastery) => {
    if (mastery >= 90) return 'bg-emerald-500'
    if (mastery >= 80) return 'bg-blue-500'
    if (mastery >= 70) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  const getMasteryLabel = (mastery) => {
    if (mastery >= 90) return 'Expert'
    if (mastery >= 80) return 'Advanced'
    if (mastery >= 70) return 'Intermediate'
    return 'Beginner'
  }

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 20
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.8
      }
    }
  }

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }

  const iconHover = {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }

  const floatingAnimation = {
    y: [0, -2, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section id="skills" className={`py-20 ${currentColors.section.secondary} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-green-500/5 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-green-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div 
            variants={filterVariants}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, from languages and frameworks 
              to cloud technologies and development tools.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={filterVariants} className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => {
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
                  onClick={() => setActiveFilter(category.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300
                    ${activeFilter === category.id
                      ? `${currentColors.button.primary} text-white shadow-lg`
                      : `${currentColors.card.background} ${currentColors.card.border} border text-gray-700 dark:text-gray-300 hover:shadow-md`
                    }
                  `}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  layout
                  layoutId={skill.name}
                  whileHover={cardHover}
                  className={`
                    ${currentColors.card.background} ${currentColors.card.border} border
                    rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300
                    cursor-pointer group
                  `}
                >
                                     {/* Skill Header */}
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center space-x-3">
                       <motion.div 
                         className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow`}
                         whileHover={iconHover}
                         animate={floatingAnimation}
                       >
                         {skill.icon}
                       </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                                                 <motion.span 
                           className={`text-xs font-medium px-2 py-1 rounded-full ${getMasteryColor(skill.mastery)} text-white`}
                           initial={{ scale: 0, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ delay: index * 0.08 + 0.3 }}
                         >
                           {getMasteryLabel(skill.mastery)}
                         </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Mastery Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.mastery}%</span>
                    </div>
                                         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                       <motion.div
                         className={`h-2 rounded-full ${getMasteryColor(skill.mastery)}`}
                         initial={{ width: 0, x: "-100%" }}
                         animate={{ 
                           width: `${skill.mastery}%`,
                           x: "0%"
                         }}
                         transition={{ 
                           duration: 1.2, 
                           delay: index * 0.08,
                           ease: "easeOut"
                         }}
                       />
                     </div>
                  </div>

                                     {/* Description */}
                   <motion.p 
                     className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.08 + 0.4 }}
                   >
                     {skill.description}
                   </motion.p>

                                     {/* Mastery Indicator Dots */}
                   <div className="flex items-center space-x-1 mt-4">
                     {[...Array(5)].map((_, i) => (
                       <motion.div
                         key={i}
                         className={`w-2 h-2 rounded-full ${
                           i < Math.floor(skill.mastery / 20)
                             ? getMasteryColor(skill.mastery)
                             : 'bg-gray-300 dark:bg-gray-600'
                         }`}
                         initial={{ scale: 0, opacity: 0 }}
                         animate={{ 
                           scale: 1, 
                           opacity: 1,
                           backgroundColor: i < Math.floor(skill.mastery / 20) 
                             ? undefined 
                             : undefined
                         }}
                         transition={{ 
                           duration: 0.3, 
                           delay: index * 0.08 + i * 0.1,
                           type: "spring",
                           stiffness: 200
                         }}
                         whileHover={{ scale: 1.2 }}
                       />
                     ))}
                   </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skillCategories.slice(1).map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category.id)
              const avgMastery = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.mastery, 0) / categorySkills.length
              )
              const IconComponent = category.icon

                             return (
                 <motion.div
                   key={category.id}
                   variants={skillVariants}
                   whileHover={{ 
                     scale: 1.02,
                     y: -4,
                     transition: { type: "spring", stiffness: 300, damping: 20 }
                   }}
                   className={`
                     ${currentColors.card.background} ${currentColors.card.border} border
                     rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300
                   `}
                 >
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${currentColors.button.accent}`} />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {categorySkills.length} skills
                  </p>
                  <div className={`text-xs font-medium px-2 py-1 rounded-full ${getMasteryColor(avgMastery)} text-white inline-block`}>
                    {avgMastery}% avg
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills 