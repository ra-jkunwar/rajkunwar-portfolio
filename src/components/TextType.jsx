import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

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
    <>
      <span className={`text-green-500 ${className}`}>
        {currentText}
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
          className="text-green-500 font-bold"
        >
          {cursorChar}
        </motion.span>
      )}
    </>
  )
}

export default TextType 