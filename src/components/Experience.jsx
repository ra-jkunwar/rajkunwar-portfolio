import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useColorScheme } from '../context/ColorSchemeContext'
import { MapPin, Calendar, Star, Briefcase, Users, Code, TrendingUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Experience = () => {
  const { currentColors } = useColorScheme()
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
        staggerChildren: 0.15
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
    <section id="experience" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Professional Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="font-display">Work </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              A collection of my professional experiences, highlighting key achievements, 
              technologies mastered, and the impact I've made in each role.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
                  
                  {/* Job Header */}
                  <div className="grid lg:grid-cols-12 gap-8 mb-10">
                    <div className="lg:col-span-9 space-y-6">
                      <div className="flex items-start gap-6">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${job.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          {job.companyLogo}
                        </div>
                        <div className="space-y-4 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                              {job.role}
                            </h3>
                            {job.featured && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100/80 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 rounded-full border border-yellow-200 dark:border-yellow-700 backdrop-blur-sm">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-xs font-bold">Featured</span>
                              </div>
                            )}
                          </div>
                          <h4 className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent leading-tight`}>
                            {job.company}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{job.duration}</span>
                            </div>
                            <div className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full">
                              <span className="text-xs font-medium">{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-3 lg:text-right">
                      <div className="inline-flex items-center gap-3 px-4 py-3 bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
                        {job.featured ? <Briefcase className="w-6 h-6" /> : <Code className="w-6 h-6" />}
                        <span className="font-bold text-gray-900 dark:text-white">{job.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-8">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {job.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Key Highlights
                      </h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        {job.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50/50 dark:bg-zinc-800/30 rounded-xl">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Technologies & Tools
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm border border-gray-200 dark:border-zinc-600 hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Stats */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "🚀", value: "2+", label: "Years Experience", color: "text-blue-500" },
                { icon: "⚡", value: "3+", label: "Years Experience", color: "text-yellow-500" },
                { icon: "🏢", value: "Happy Clients", color: "text-green-500" },
                { icon: "📈", value: "99.9%", label: "Uptime Achieved", color: "text-purple-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
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

export default Experience 