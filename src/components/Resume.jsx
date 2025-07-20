import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Eye, FileText, Calendar, MapPin, Building, Award, Star, Globe, GraduationCap, ChevronRight, ExternalLink } from 'lucide-react'

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [activeSection, setActiveSection] = useState('overview')

  const resumeData = {
    personal: {
      name: "Raj Kunwar Singh",
      title: "Full-Stack Developer & Backend Engineer",
      email: "rajkunwarsingh1729@gmail.com",
      phone: "+91 9140024467",
      location: "Delhi, India",
      website: "rajkunwarsingh.dev",
      github: "rajkunwar23",
      linkedin: "rajkunwar23"
    },
    summary: "Passionate full-stack developer with 2+ years of experience building scalable web applications and backend systems. Proven track record of optimizing performance, implementing robust architectures, and delivering high-quality solutions that serve real-world business needs.",
    highlights: [
      "Built and maintained enterprise insurance software systems",
      "Founded and grew tech community to 10K+ active members",
      "Expertise in Python, Django, React, and modern web technologies",
      "Strong foundation in system design and database optimization"
    ],
    education: [
      {
        degree: "Bachelor of Technology in Electronics and Communication Engineering",
        institution: "Guru Gobind Singh Indraprastha University",
        duration: "2020 - 2024",
        grade: "8.2/10 CGPA",
        location: "Delhi, India"
      }
    ],
    certifications: [
      "AWS Cloud Practitioner (In Progress)",
      "Python Django Web Development",
      "Full Stack Web Development"
    ]
  }

  const sections = [
    { id: 'overview', name: 'Overview', icon: FileText },
    { id: 'education', name: 'Education', icon: GraduationCap }
  ]

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

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/RajKunwarSingh.pdf'
    link.download = 'RajKunwarSingh_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewOnline = () => {
    // Open PDF in a new tab
    window.open('/RajKunwarSingh.pdf', '_blank')
  }

  return (
    <section id="resume" className="py-20 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Resume
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Professional
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Profile
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              A comprehensive overview of my professional background, education, and achievements in software development.
            </p>

            {/* Download/View Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownloadResume}
                className="flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
              <motion.button
                onClick={handleViewOnline}
                className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-5 h-5" />
                <span>View Online</span>
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="sticky top-8 space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-50 dark:bg-zinc-900/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.name}</span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                      activeSection === section.id ? 'rotate-90' : ''
                    }`} />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-zinc-700/50 p-8">
                
                {/* Overview Section */}
                {activeSection === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Professional Overview
                    </h3>
                    
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Contact Information
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Building className="w-4 h-4" />
                            <span>{resumeData.personal.title}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{resumeData.personal.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Globe className="w-4 h-4" />
                            <a href={`https://${resumeData.personal.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                              {resumeData.personal.website}
                            </a>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <ExternalLink className="w-4 h-4" />
                            <a href={`https://github.com/${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                              github.com/{resumeData.personal.github}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {resumeData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Professional Summary
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {resumeData.summary}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Education Section */}
                {activeSection === 'education' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Education & Certifications
                    </h3>
                    
                    <div className="space-y-8">
                      {/* Education */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Education
                        </h4>
                        {resumeData.education.map((edu, index) => (
                          <div key={index} className="p-6 border border-gray-200 dark:border-zinc-700/50 rounded-xl">
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                  {edu.degree}
                                </h5>
                                <p className="text-green-600 dark:text-green-400 font-medium">
                                  {edu.institution}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {edu.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {edu.location}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                  {edu.grade}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Certifications */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Certifications
                        </h4>
                        <div className="space-y-3">
                          {resumeData.certifications.map((cert, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg">
                              <Award className="w-5 h-5 text-green-500" />
                              <span className="font-medium text-gray-900 dark:text-white">
                                {cert}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume 