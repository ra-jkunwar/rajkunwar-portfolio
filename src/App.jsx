import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import Dock from './components/Dock'
import Hero from './components/Hero'
import About from './components/About'
import ProfessionalRoadmap from './components/ProfessionalRoadmap'

import FeaturedProjects from './components/FeaturedProjects'

import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import TechShowcase from './components/TechShowcase'
import { ColorSchemeProvider } from './context/ColorSchemeContext'
import SplashCursor from './components/SplashCursor'
import RippleGrid from './components/RippleGrid'
import { useInView } from 'react-intersection-observer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [konamiCode, setKonamiCode] = useState([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  // Konami code detection
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newCode = [...konamiCode, e.key]
      if (newCode.length > 10) {
        newCode.shift()
      }
      setKonamiCode(newCode)
      
      const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
      if (newCode.join(',') === konami.join(',')) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 3000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiCode])


  // Loading effect
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Loading...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <ColorSchemeProvider>
      <Helmet>
        <title>Raj Kunwar Singh - Backend Engineer</title>
        <meta name="description" content="Backend Engineer with 2+ years experience in scalable systems, real-time applications, and cloud infrastructure." />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
        {/* Ripple Grid Background */}
        <RippleGrid />
        
        {/* Splash Cursor */}
        <SplashCursor />
        
        <Dock />
        
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-4 right-4 z-50 bg-accent-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              🎮 Easter egg activated! Check the game zone!
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
                      <Hero />
        <About />
        <Experience />
        <TechShowcase />
        <FeaturedProjects />
              <Resume />
              <Contact />
              <Footer />
            </motion.div>
          } />
        </Routes>
        </div>
      </ColorSchemeProvider>
  )
}

export default App 