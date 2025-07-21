import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useColorScheme } from '../context/ColorSchemeContext'
import { Filter, Star, Award, Code, Database, Cloud, Globe, Layers, Wrench } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

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

  // Use skills from centralized data
  const skills = portfolioData.skills

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section 
      id="skills" 
      className={`py-24 ${currentColors.section.primary} relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-green-500/10"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-full border border-blue-500/20">
              <Code className="w-5 h-5 text-blue-500" />
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
                Technical Expertise
              </span>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Skills &</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
                A comprehensive overview of my technical skills, programming languages, 
                frameworks, and tools I use to build amazing digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className={`inline-flex flex-wrap gap-2 p-2 ${currentColors.card.background} ${currentColors.card.border} border rounded-2xl`}>
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05
                    }
                  },
                  exit: { opacity: 0 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className={`group ${currentColors.card.background} ${currentColors.card.border} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-blue-500">
                          {skill.mastery}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.mastery}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Mastery Badge */}
                    <div className="mt-4 flex justify-end">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${
                        skill.mastery >= 90 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : skill.mastery >= 80
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                      }`}>
                        {skill.mastery >= 90 ? (
                          <>
                            <Award className="w-3 h-3" />
                            Expert
                          </>
                        ) : skill.mastery >= 80 ? (
                          <>
                            <Star className="w-3 h-3" />
                            Advanced
                          </>
                        ) : (
                          <>
                            <Globe className="w-3 h-3" />
                            Intermediate
                          </>
                        )}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Languages", value: skills.filter(s => s.category === 'languages').length, icon: "💻" },
                { label: "Frameworks", value: skills.filter(s => s.category === 'frameworks').length, icon: "🚀" },
                { label: "Databases", value: skills.filter(s => s.category === 'databases').length, icon: "📊" },
                { label: "Tools", value: skills.filter(s => s.category === 'tools').length + skills.filter(s => s.category === 'cloud').length, icon: "🛠️" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`${currentColors.card.background} ${currentColors.card.border} border rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300`}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills 