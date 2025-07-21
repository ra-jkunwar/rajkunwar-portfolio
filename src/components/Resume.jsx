import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, FileText, User, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Resume = () => {
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
        staggerChildren: 0.2
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
    <section id="resume" className="py-20 bg-gray-50 dark:bg-zinc-950 relative overflow-hidden">
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Career Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="font-display">Professional </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              {portfolioData.resume.summary}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={portfolioData.personal.resumeUrl}
                download="RajKunwarSingh_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download PDF
              </motion.a>
              
              <motion.a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-zinc-600 transition-all duration-300 hover:shadow-lg group"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-5 h-5" />
                View Online
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Skills */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              {/* Technical Skills */}
              <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Technical Skills
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {/* Group skills by category and show top skills */}
                  {['languages', 'frameworks', 'databases', 'cloud'].map(category => {
                    const categorySkills = portfolioData.skills
                      .filter(skill => skill.category === category)
                      .sort((a, b) => b.mastery - a.mastery)
                      .slice(0, 3);
                    
                    if (categorySkills.length === 0) return null;
                    
                    return (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {categorySkills.map(skill => (
                            <span 
                              key={skill.name}
                              className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {edu.degree}
                    </h4>
                    <p className="text-green-600 font-medium text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {edu.duration} • {edu.grade}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Experience & Highlights */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Professional Experience */}
              <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Professional Experience
                  </h3>
                </div>
                
                <div className="space-y-8">
                  {portfolioData.experience.map((job, index) => (
                    <div key={job.id} className="relative">
                      {index !== portfolioData.experience.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200 dark:bg-zinc-700"></div>
                      )}
                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center text-xl`}>
                            {job.companyLogo}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {job.role}
                            </h4>
                            {job.featured && (
                              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          
                          <p className={`font-semibold text-sm bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent mb-1`}>
                            {job.company}
                          </p>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                            {job.duration} • {job.location}
                          </p>
                          
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                            {job.description}
                          </p>
                          
                          <div className="space-y-1">
                            {job.highlights.slice(0, 3).map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Key Highlights
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioData.resume.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-zinc-800/30 rounded-xl">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 