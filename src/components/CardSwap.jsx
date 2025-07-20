import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CardSwap = ({ 
  frontCard, 
  backCard, 
  className = '', 
  trigger = 'hover',
  duration = 0.6,
  direction = 'horizontal'
}) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsFlipped(!isFlipped)
    }
  }

  const handleHover = () => {
    if (trigger === 'hover') {
      setIsFlipped(true)
    }
  }

  const handleHoverEnd = () => {
    if (trigger === 'hover') {
      setIsFlipped(false)
    }
  }

  const getTransitionVariants = () => {
    const variants = {
      front: {
        initial: { rotateY: 0, rotateX: 0, scale: 1 },
        exit: direction === 'horizontal' 
          ? { rotateY: 90, scale: 0.8 }
          : { rotateX: 90, scale: 0.8 }
      },
      back: {
        initial: direction === 'horizontal' 
          ? { rotateY: -90, scale: 0.8 }
          : { rotateX: -90, scale: 0.8 },
        animate: { rotateY: 0, rotateX: 0, scale: 1 }
      }
    }
    return variants
  }

  const variants = getTransitionVariants()

  return (
    <div 
      className={`relative perspective-1000 ${className}`}
      onClick={handleInteraction}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isFlipped ? (
          <motion.div
            key="front"
            initial={variants.front.initial}
            animate={variants.front.initial}
            exit={variants.front.exit}
            transition={{ 
              duration,
              ease: "easeInOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
            className="w-full h-full"
          >
            {frontCard}
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={variants.back.initial}
            animate={variants.back.animate}
            exit={variants.front.exit}
            transition={{ 
              duration,
              ease: "easeInOut",
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
            className="w-full h-full"
          >
            {backCard}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Pre-built card templates
export const SkillCard = ({ skill, level, description, icon }) => (
  <CardSwap
    trigger="hover"
    frontCard={
      <div className="h-full bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {skill}
        </h3>
        <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${level}%` }}
          />
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {level}% Proficiency
        </span>
      </div>
    }
    backCard={
      <div className="h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          {skill}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full mr-1 ${
                  i < Math.floor(level / 20) ? 'bg-green-500' : 'bg-gray-300 dark:bg-zinc-600'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
            {Math.floor(level / 20)}/5 Stars
          </span>
        </div>
      </div>
    }
    className="h-48"
  />
)

export const ExperienceCard = ({ company, role, duration, achievements, logo }) => (
  <CardSwap
    trigger="hover"
    frontCard={
      <div className="h-full bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-2xl">
            {logo}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {role}
            </h3>
            <p className="text-green-600 dark:text-green-400 font-medium">
              {company}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {duration}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Click to see key achievements...
        </p>
      </div>
    }
    backCard={
      <div className="h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Key Achievements
        </h3>
        <ul className="space-y-2">
          {achievements?.slice(0, 3).map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    }
    className="h-64"
  />
)

export const ProjectCard = ({ project }) => (
  <CardSwap
    trigger="hover"
    frontCard={
      <div className="h-full bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-xl p-6">
        <div className="h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-4xl">{project.icon || '🚀'}</div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {project.description}
        </p>
      </div>
    }
    backCard={
      <div className="h-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.slice(0, 4).map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {project.features?.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    }
    className="h-80"
  />
)

export default CardSwap 