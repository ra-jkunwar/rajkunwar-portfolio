import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Home, User, Code, FolderOpen, FileText, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Dock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const mouseX = useMotionValue(Infinity)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, color: 'text-green-500' },
    { name: 'Resume', href: '#resume', icon: User, color: 'text-blue-500' },
    { name: 'Skills', href: '#skills', icon: Code, color: 'text-purple-500' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, color: 'text-orange-500' },
    { name: 'Blog', href: '/blog', icon: FileText, color: 'text-red-500' },
    { name: 'Contact', href: '#contact', icon: Mail, color: 'text-cyan-500' },
  ]

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Use React Router navigate for better SPA routing
      navigate(href)
    }
  }

  return (
    <motion.div
      className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-2 sm:px-0"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div 
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-xl sm:rounded-2xl shadow-2xl max-w-[calc(100vw-16px)] overflow-x-auto"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {navItems.map((item, index) => (
          <DockItem
            key={item.name}
            mouseX={mouseX}
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            onClick={() => scrollToSection(item.href)}
          />
        ))}
        
        {/* Theme Toggle */}
        <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-zinc-600 mx-1 sm:mx-2" />
        <div className="p-1 sm:p-2">
          <ThemeToggle />
        </div>
      </div>
    </motion.div>
  )
}

const DockItem = ({ mouseX, item, index, hoveredIndex, setHoveredIndex, onClick }) => {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  // Responsive sizing - smaller on mobile, larger on desktop
  const widthSync = useTransform(distance, [-150, 0, 150], [32, 56, 32])
  const widthSyncDesktop = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  
  // Use different width based on screen size
  const width = useSpring(
    typeof window !== 'undefined' && window.innerWidth >= 640 ? widthSyncDesktop : widthSync, 
    { mass: 0.1, stiffness: 150, damping: 12 }
  )

  return (
    <motion.button
      ref={ref}
      style={{ width }}
      className={`aspect-square flex items-center justify-center rounded-lg sm:rounded-xl transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-zinc-800 ${item.color} group relative min-w-[32px] sm:min-w-[40px]`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
      
      {/* Tooltip - Only show on desktop */}
      {hoveredIndex === index && (
        <motion.div
          className="absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded whitespace-nowrap hidden sm:block"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.2 }}
        >
          {item.name}
        </motion.div>
      )}
    </motion.button>
  )
}

export default Dock 