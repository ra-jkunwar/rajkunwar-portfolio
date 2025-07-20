import React from 'react'
import { motion } from 'framer-motion'

const FluidGlass = ({ 
  children, 
  className = "",
  intensity = "medium",
  animated = true 
}) => {
  const intensityClasses = {
    light: "bg-white/5 dark:bg-white/5 backdrop-blur-sm border-white/10",
    medium: "bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20",
    heavy: "bg-white/20 dark:bg-white/10 backdrop-blur-lg border-white/30"
  }

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      borderRadius: ["30% 70% 70% 30%", "70% 30% 30% 70%", "30% 70% 70% 30%"],
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background blobs */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"
            variants={blobVariants}
            animate="animate"
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              borderRadius: "30% 70% 70% 30%"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-purple-400/15 to-pink-400/15 blur-xl"
            variants={blobVariants}
            animate="animate"
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{
              borderRadius: "70% 30% 30% 70%"
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 blur-2xl"
            variants={blobVariants}
            animate="animate"
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            style={{
              borderRadius: "50% 50% 30% 70%"
            }}
          />
        </div>
      )}

      {/* Glass container */}
      <motion.div
        className={`
          relative rounded-2xl border backdrop-saturate-150
          ${intensityClasses[intensity]}
          ${animated ? 'hover:bg-white/15 dark:hover:bg-white/10' : ''}
          transition-all duration-500
        `}
        whileHover={animated ? { 
          scale: 1.02,
          borderColor: "rgba(255, 255, 255, 0.3)"
        } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Animated edge highlights */}
        {animated && (
          <>
            <motion.div
              className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleX: [1, 0.8, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </>
        )}
      </motion.div>
    </div>
  )
}

export default FluidGlass 