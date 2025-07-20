import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useColorScheme } from '../context/ColorSchemeContext'
import { MapPin, Calendar, Star } from 'lucide-react'

const Experience = () => {
  const { currentColors } = useColorScheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const workHistory = [
    {
      id: 1,
      role: "Software Engineer",
      company: "OneShield Software",
      companyLogo: "🛡️",
      location: "Remote",
      duration: "Aug 2022 — Present",
      type: "Full-time",
      description: "Working on enterprise insurance software solutions, developing scalable backend systems and optimizing performance for large-scale applications.",
      achievements: [
        "Developed and maintained microservices architecture for insurance platforms",
        "Implemented efficient database solutions and optimized query performance",
        "Collaborated with cross-functional teams on feature development",
        "Contributed to code quality improvements and best practices"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker"],
      featured: true
    },
    {
      id: 2,
      role: "Founder & Community Builder",
      company: "Design and Code",
      companyLogo: "🎨",
      location: "Remote",
      duration: "Jan 2021 — Present",
      type: "Entrepreneurship",
      description: "Founded a community-driven platform connecting designers and developers. Built from ground up and grew to serve thousands of active members in the tech community.",
      achievements: [
        "Built and grew tech community to 10K+ active members",
        "Organized workshops, webinars, and knowledge-sharing events",
        "Developed community platform with engagement features",
        "Created educational content and mentorship programs"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Discord API", "Community Management"],
      featured: true
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Freelance Projects",
      companyLogo: "💻",
      location: "Remote",
      duration: "2020 — 2022",
      type: "Freelance",
      description: "Worked on various web development projects, building responsive websites and web applications for clients across different industries.",
      achievements: [
        "Delivered 15+ successful web development projects",
        "Built responsive websites using modern frontend frameworks",
        "Implemented backend APIs and database solutions",
        "Maintained high client satisfaction and project delivery rates"
      ],
      technologies: ["HTML/CSS", "JavaScript", "React", "Python", "Django", "MySQL"],
      featured: false
    }
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      id="experience" 
      className={`py-20 ${currentColors.section.primary} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 dark:from-green-500/10 dark:via-blue-500/10 dark:to-purple-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <Star className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Career Journey
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Professional
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              My journey through the world of software development, from building communities to developing enterprise solutions.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 origin-top"
              variants={timelineVariants}
            />

            <div className="space-y-12">
              {workHistory.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div 
                      className={`w-16 h-16 rounded-full border-4 ${
                        job.featured 
                          ? 'border-green-500 bg-white dark:bg-gray-900' 
                          : 'border-blue-500 bg-white dark:bg-gray-900'
                      } flex items-center justify-center text-2xl shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {job.companyLogo}
                    </motion.div>
                    
                    {/* Glow Effect for Featured */}
                    {job.featured && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 ${currentColors.card.background} ${currentColors.card.border} border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {job.role}
                          </h3>
                          {job.featured && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                          {job.company}
                        </h4>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {job.duration}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-zinc-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Years Experience", value: "2+", icon: "📅" },
              { label: "Projects Completed", value: "20+", icon: "🚀" },
              { label: "Community Members", value: "10K+", icon: "👥" },
              { label: "Technologies Used", value: "15+", icon: "⚡" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`${currentColors.card.background} ${currentColors.card.border} border rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 