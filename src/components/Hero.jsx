import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import TextType from './TextType'

const Hero = () => {
  // Floating animation for tech icons
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // Tech stack icons
  const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎯' },
    { name: 'React', icon: '⚛️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Node.js', icon: '💚' }
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-green-50 dark:from-black dark:via-gray-900 dark:to-green-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${15 + (index * 10)}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 + index * 0.1 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              animate={floatingAnimation}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center text-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 shadow-lg">
                {tech.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.name}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={textVariants} className="mb-6">
          <span className="text-lg text-gray-600 dark:text-gray-400">
            Hey! It's me <span className="font-semibold">Raj</span>, I'm a{' '}
            <TextType 
              texts={[
                'Full-Stack Developer',
                'Backend Engineer', 
                'Software Engineer',
                'Community Builder',
                'Problem Solver'
              ]}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
              className="font-semibold"
            />
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={textVariants}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="text-gray-900 dark:text-white">
            Building scalable
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
            solutions that matter
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            & inspire growth.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={textVariants}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Passionate about creating robust backend systems and engaging user experiences. 
          From enterprise software to community platforms, I build solutions that make a difference.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          variants={textVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/rajkunwar23", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/rajkunwar23", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: Instagram, href: "https://instagram.com/raj_kunwar23", label: "Instagram" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group relative p-3 bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
              variants={iconVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-green-500 transition-colors" />
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {social.label}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#experience"
            className="group px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl flex items-center gap-3"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View My Work</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>
          
          <motion.a
            href="#contact"
            className="group px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-3"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 