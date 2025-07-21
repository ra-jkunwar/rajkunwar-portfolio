import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ProfileCard from './ProfileCard'
import TextType from './TextType'
import { User, Code, Heart, Target } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <User className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                About Me
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Get to Know{' '}
              <TextType 
                texts={portfolioData.about.typewriterTexts}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
              />
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {portfolioData.about.description}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Profile Card - Full width */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Profile Card */}
                <div className="space-y-4 flex flex-col items-center">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Professional Profile
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      🎨 Hover to experience the 3D tilt effect!
                    </p>
                  </div>
                  <ProfileCard 
                    className="w-full max-w-sm mx-auto" 
                    onContactClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  />
                </div>
                
                {/* Additional Info Cards */}
                <div className="space-y-6">
                  {/* Mission Card */}
                  <motion.div
                    className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <Target className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        My Mission
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {portfolioData.about.mission}
                    </p>
                  </motion.div>

                  {/* Passion Card */}
                  <motion.div
                    className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-red-500/10 rounded-lg">
                        <Heart className="w-5 h-5 text-red-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        What I Love
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {portfolioData.about.passion}
                    </p>
                  </motion.div>

                  {/* Values Card */}
                  <motion.div
                    className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Core Values
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {portfolioData.about.values.map((value, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Stats/Achievements */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                number: "50+", 
                label: "Projects Completed", 
                description: "From MVPs to enterprise solutions",
                icon: "🚀"
              },
              { 
                number: "3+", 
                label: "Years Experience", 
                description: "In full-stack development",
                icon: "⚡"
              },
              { 
                number: "99.9%", 
                label: "Uptime Achieved", 
                description: "For production systems",
                icon: "📈"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6 text-center"
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 