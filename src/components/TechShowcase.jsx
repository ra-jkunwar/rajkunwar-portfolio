import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SkillCard } from './CardSwap'
import TextType from './TextType'
import { Code, Database, Cloud, Zap, Users, Award, Star, Sparkles } from 'lucide-react'

const TechShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillsData = [
    {
      skill: "React Development",
      level: 95,
      description: "Expert in React ecosystem including hooks, context, Redux, and modern patterns. Built enterprise applications serving millions of users with complex state management and real-time features.",
      icon: <Code className="w-8 h-8 text-blue-500" />
    },
    {
      skill: "Python Backend",
      level: 90,
      description: "Advanced Python development with Django, FastAPI, and async programming. Built scalable APIs handling 10M+ daily requests with robust error handling and performance optimization.",
      icon: <Database className="w-8 h-8 text-green-500" />
    },
    {
      skill: "Cloud Architecture",
      level: 85,
      description: "Proficient in AWS services, containerization with Docker & Kubernetes, and Infrastructure as Code with Terraform. Designed auto-scaling microservices architectures.",
      icon: <Cloud className="w-8 h-8 text-purple-500" />
    },
    {
      skill: "Database Design",
      level: 88,
      description: "Expert in PostgreSQL, MongoDB, and Redis. Optimized database queries reducing latency by 60%, designed efficient schemas, and implemented caching strategies.",
      icon: <Database className="w-8 h-8 text-orange-500" />
    },
    {
      skill: "System Design",
      level: 82,
      description: "Skilled in designing distributed systems, microservices architecture, and event-driven patterns. Built systems with 99.9% uptime and horizontal scalability.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      skill: "Team Leadership",
      level: 80,
      description: "Led development teams of 5+ engineers, mentored junior developers, and established best practices. Excellent communication and project management skills.",
      icon: <Users className="w-8 h-8 text-indigo-500" />
    }
  ]

  const expertiseAreas = [
    {
      id: 1,
      title: "Development",
      description: "Full-stack web applications with modern frameworks",
      technologies: ["React.js", "Next.js", "Node.js", "Python", "Django", "FastAPI"],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      projects: "50+",
      years: "3+"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design with focus on accessibility",
      technologies: ["Figma", "Framer", "Tailwind CSS", "Material UI", "Chakra UI"],
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      projects: "30+",
      years: "2+"
    },
    {
      id: 3,
      title: "Database",
      description: "Scalable database design and optimization",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      projects: "40+",
      years: "3+"
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      description: "Infrastructure automation and deployment",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      projects: "25+",
      years: "2+"
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

  const cardVariants = {
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <Star className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
              Speciality
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Areas of{' '}
            <TextType 
              texts={[
                'Expertise',
                'Specialization', 
                'Innovation',
                'Excellence'
              ]}
              speed={110}
              deleteSpeed={55}
              pauseTime={2200}
              className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
            />
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From development to deployment, I handle the full spectrum of modern web technologies with precision and creativity.
          </p>
        </motion.div>

        {/* Skills Cards with Card Swap */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillsData.map((skillData, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <SkillCard {...skillData} />
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: "Development", count: "15+", icon: "💻" },
              { category: "UI/UX Design", count: "8+", icon: "🎨" },
              { category: "Database", count: "6+", icon: "🗄️" },
              { category: "Cloud & DevOps", count: "10+", icon: "☁️" }
            ].map((stat, index) => (
              <motion.div
                key={stat.category}
                className="p-6 bg-zinc-100/50 dark:bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-zinc-200/50 dark:border-zinc-700/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechShowcase 