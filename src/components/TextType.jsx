import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TextType = ({ 
  texts = ['Developer', 'Engineer', 'Creator'], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = '',
  cursorChar = '|',
  showCursor = true 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Calculate the width needed for the longest text to prevent layout shifts
  const maxWidth = useMemo(() => {
    const longestText = texts.reduce((a, b) => a.length > b.length ? a : b, '')
    // Approximate character width (adjust as needed)
    return `${longestText.length * 0.6}em`
  }, [texts])

  useEffect(() => {
    const fullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        return
      }

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        }
      } else {
        if (currentText === fullText) {
          setIsPaused(true)
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseTime])

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span 
        className="text-green-500 inline-block"
        style={{ 
          minWidth: maxWidth,
          textAlign: 'left'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`${currentTextIndex}-${currentText.length}`}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.1 }}
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="ml-1 text-green-500 font-bold"
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
}

export default TextType 