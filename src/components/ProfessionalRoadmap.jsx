import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useColorScheme } from '../context/ColorSchemeContext'
import { 
  MapPin, 
  Calendar, 
  Building, 
  Award, 
  TrendingUp, 
  Users, 
  Code, 
  Database,
  Cloud,
  X,
  ExternalLink
} from 'lucide-react'

const ProfessionalRoadmap = () => {
  const { currentColors } = useColorScheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [selectedMilestone, setSelectedMilestone] = useState(null)

  const milestones = [
    {
      id: 1,
      date: "2021",
      title: "Started as Junior Backend Developer",
      company: "Tech Startup",
      location: "Mumbai, India",
      type: "career",
      icon: Code,
      description: "Began my journey in backend development, learning Python and Django while working on small-scale applications.",
      achievements: [
        "Built RESTful APIs for user management",
        "Implemented basic authentication systems", 
        "Learned version control with Git"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Git"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      date: "2022",
      title: "MongoDB Database Administrator",
      company: "MongoDB University",
      location: "Remote",
      type: "certification",
      icon: Database,
      description: "Achieved MongoDB Database Administrator certification, mastering NoSQL database design and optimization.",
      achievements: [
        "Mastered MongoDB query optimization",
        "Designed scalable document schemas",
        "Implemented sharding strategies"
      ],
      technologies: ["MongoDB", "NoSQL", "Database Design", "Performance Tuning"],
      color: "bg-green-500"
    },
    {
      id: 3,
      date: "2022",
      title: "Kubernetes Administrator",
      company: "Cloud Native Computing Foundation",
      location: "Remote",
      type: "certification",
      icon: Cloud,
      description: "Earned Kubernetes Administrator certification, enabling container orchestration and cloud-native development.",
      achievements: [
        "Deployed applications on Kubernetes clusters",
        "Managed container lifecycle and scaling",
        "Implemented service mesh architectures"
      ],
      technologies: ["Kubernetes", "Docker", "Container Orchestration", "Cloud Native"],
      color: "bg-purple-500"
    },
    {
      id: 4,
      date: "2022-2023",
      title: "Backend Engineer",
      company: "Disney+ Hotstar",
      location: "Bangalore, India",
      type: "career",
      icon: Building,
      description: "Scaled to Disney+ Hotstar, building A/B testing platforms supporting 50M+ users with high-performance streaming services.",
      achievements: [
        "Built A/B testing platform supporting 50M+ users",
        "Developed real-time analytics dashboards",
        "Optimized video streaming performance"
      ],
      technologies: ["Python", "Django", "Kafka", "Redis", "AWS"],
      color: "bg-indigo-500"
    },
    {
      id: 5,
      date: "2023",
      title: "AWS Certified Solutions Architect",
      company: "Amazon Web Services",
      location: "Remote",
      type: "certification",
      icon: Award,
      description: "Achieved AWS Solutions Architect certification, mastering cloud architecture and scalable system design.",
      achievements: [
        "Designed highly available cloud architectures",
        "Implemented auto-scaling solutions",
        "Optimized cloud costs and performance"
      ],
      technologies: ["AWS", "EC2", "S3", "Lambda", "CloudFormation"],
      color: "bg-orange-500"
    },
    {
      id: 6,
      date: "2023-Present",
      title: "Senior Backend Engineer",
      company: "Pocket FM",
      location: "Mumbai, India",
      type: "career",
      icon: TrendingUp,
      description: "Leading backend development at Pocket FM, handling 10M+ daily requests with advanced system architecture.",
      achievements: [
        "Built dynamic pricing system handling 10M+ daily requests",
        "Implemented event-based notification system with 99.9% uptime",
        "Developed subscription mandate system reducing churn by 25%",
        "Created traffic routing system improving response time by 40%"
      ],
      technologies: ["Python", "Django", "Kafka", "Redis", "AWS", "PostgreSQL"],
      color: "bg-cyan-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const milestoneVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  // SVG path for curved roadmap
  const roadmapPath = "M50,100 Q200,50 350,100 T650,100 Q800,150 950,100 T1250,100"

  return (
    <section id="about" className={`py-20 ${currentColors.section.primary} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={milestoneVariants} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow my path from junior developer to senior engineer, with each milestone representing 
              key achievements, certifications, and career growth.
            </p>
          </motion.div>

          {/* Interactive Roadmap */}
          <div className="relative">
            {/* SVG Path */}
            <svg 
              className="w-full h-64 absolute top-0 left-0 z-0"
              viewBox="0 0 1300 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d={roadmapPath}
                stroke={`url(#roadmapGradient)`}
                strokeWidth="4"
                fill="none"
                variants={pathVariants}
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="25%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="75%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestone Dots */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-16">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <motion.div
                    key={milestone.id}
                    variants={milestoneVariants}
                    className="flex flex-col items-center cursor-pointer group"
                    onClick={() => setSelectedMilestone(milestone)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Milestone Dot */}
                    <div className={`
                      w-16 h-16 rounded-full ${milestone.color} 
                      flex items-center justify-center text-white shadow-lg
                      group-hover:shadow-xl transition-all duration-300
                      border-4 border-white dark:border-gray-800
                      ${currentColors.card.glow}
                    `}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    {/* Date and Title */}
                    <div className="mt-4 text-center">
                      <div className={`text-sm font-semibold ${currentColors.button.accent}`}>
                        {milestone.date}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-24">
                        {milestone.title}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <motion.div variants={milestoneVariants} className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Career Milestones</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Certifications</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Achievements</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Detailed Milestone Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMilestone(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`
                ${currentColors.card.background} ${currentColors.card.border} border
                rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto
                shadow-2xl ${currentColors.card.glow}
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${selectedMilestone.color} flex items-center justify-center text-white`}>
                    <selectedMilestone.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedMilestone.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mt-1">
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{selectedMilestone.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedMilestone.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedMilestone.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedMilestone.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedMilestone.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${currentColors.button.primary} text-white
                        shadow-md hover:shadow-lg transition-shadow
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProfessionalRoadmap 