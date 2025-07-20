import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const RippleGrid = ({ className = "" }) => {
  const gridRef = useRef(null)
  const [ripples, setRipples] = useState([])

  // Create ripple effect on mouse interaction
  const createRipple = (x, y) => {
    const newRipple = {
      id: Date.now() + Math.random(),
      x,
      y,
      timestamp: Date.now()
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 2000)
  }

  // Handle mouse move to create ripples
  const handleMouseMove = (e) => {
    if (!gridRef.current) return

    const rect = gridRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Throttle ripple creation
    if (Math.random() > 0.95) {
      createRipple(x, y)
    }
  }

  // Create random ripples
  useEffect(() => {
    const interval = setInterval(() => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect()
        const x = Math.random() * rect.width
        const y = Math.random() * rect.height
        createRipple(x, y)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      ref={gridRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Base Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0">
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-green-500/15 to-transparent"
            style={{
              left: `${(i + 1) * 5}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Horizontal lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute left-0 h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent"
            style={{
              top: `${(i + 1) * 6.66}%`,
              width: '100%'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-green-500/30 rounded-full" />
        </motion.div>
      ))}

      {/* Floating Dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1 h-1 bg-green-500/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
    </div>
  )
}

export default RippleGrid 