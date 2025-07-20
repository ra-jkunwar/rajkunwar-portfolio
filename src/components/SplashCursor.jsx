import React, { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SplashCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [splashes, setSplashes] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  // Track mouse movement
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  // Create splash effect on click
  const handleMouseDown = useCallback((e) => {
    const newSplash = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      particles: Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (i * 45) * Math.PI / 180,
        distance: Math.random() * 50 + 30,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 0.3 + 0.5
      }))
    }

    setSplashes(prev => [...prev, newSplash])

    // Remove splash after animation
    setTimeout(() => {
      setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id))
    }, 1000)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseDown])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-40 border border-white/50 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 0.8
        }}
      />

      {/* Splash effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <div key={splash.id} className="fixed top-0 left-0 pointer-events-none z-40">
            {splash.particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                initial={{
                  x: splash.x,
                  y: splash.y,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x: splash.x + Math.cos(particle.angle) * particle.distance,
                  y: splash.y + Math.sin(particle.angle) * particle.distance,
                  scale: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: particle.duration,
                  ease: "easeOut"
                }}
                style={{
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default SplashCursor 