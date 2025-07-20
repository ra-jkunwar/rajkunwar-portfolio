import React from 'react'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useColorScheme } from '../context/ColorSchemeContext'

const ColorSchemeSelector = ({ position = "fixed", className = "" }) => {
  const { currentScheme, colorSchemes, changeScheme } = useColorScheme()

  const positionClasses = position === "fixed" 
    ? "fixed top-24 right-4 z-50" 
    : "relative"

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className={`${positionClasses} ${className}`}
    >
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/20 dark:border-gray-700/20">
        <div className="flex items-center space-x-2 mb-3">
          <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
            Themes
          </span>
        </div>
        
        <div className="space-y-2">
          {colorSchemes.map((scheme, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => changeScheme(index)}
              className={`w-full h-8 rounded-md border-2 transition-all flex items-center justify-center ${
                index === currentScheme 
                  ? 'ring-2 ring-blue-500/50 border-blue-500/50' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
              style={{
                background: index === 0 ? 'linear-gradient(45deg, #06b6d4, #a855f7, #ec4899)' :
                           index === 1 ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #14b8a6)' :
                           index === 2 ? 'linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4)' :
                           index === 3 ? 'linear-gradient(45deg, #10b981, #22c55e, #14b8a6)' :
                           'linear-gradient(45deg, #f97316, #ef4444, #ec4899)'
              }}
              title={scheme.name}
            >
              <span className="text-xs font-medium text-white drop-shadow-sm">
                {scheme.name.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-center text-gray-500 dark:text-gray-400">
            {colorSchemes[currentScheme].name}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ColorSchemeSelector 