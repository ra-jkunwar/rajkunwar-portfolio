import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useColorScheme } from '../context/ColorSchemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useColorScheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-14 h-7 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
        ${isDark ? 'bg-gray-700' : 'bg-gray-200'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Ball */}
      <motion.div
        className={`
          w-5 h-5 rounded-full shadow-lg flex items-center justify-center
          ${isDark ? 'bg-gray-800' : 'bg-white'}
        `}
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {/* Icon */}
        <motion.div
          initial={false}
          animate={{ 
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-blue-400" />
          ) : (
            <Sun className="w-3 h-3 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-3 h-3 text-yellow-500" />
        </motion.div>
        <motion.div
          animate={{ 
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-3 h-3 text-blue-400" />
        </motion.div>
      </div>
    </motion.button>
  )
}

export default ThemeToggle 