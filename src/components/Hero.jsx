import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import TextType from './TextType'
import { portfolioData } from '../data/portfolioData'

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
        {portfolioData.techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${15 + (index * 9)}%`,
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
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {tech.name}
                </div>
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
            {portfolioData.hero.greeting}{' '}
            <TextType 
              texts={portfolioData.hero.typewriterTexts}
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
            {portfolioData.hero.headline.line1}
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
            {portfolioData.hero.headline.line2}
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            {portfolioData.hero.headline.line3}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          variants={textVariants}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {portfolioData.hero.description}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          variants={textVariants}
          className="flex items-center justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: portfolioData.social.github, label: "GitHub" },
            { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
            { icon: Instagram, href: portfolioData.social.instagram, label: "Instagram" }
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

        {/* Scroll Indicator */}
        <motion.div
          variants={textVariants}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 