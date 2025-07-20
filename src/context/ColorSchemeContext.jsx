import React, { createContext, useContext, useState, useEffect } from 'react'

const ColorSchemeContext = createContext()

export const useColorScheme = () => {
  const context = useContext(ColorSchemeContext)
  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')
  }
  return context
}

export const ColorSchemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true) // Default to dark mode like Devraj's portfolio

  // Professional black + green color scheme inspired by Devraj's portfolio
  const colorScheme = {
    name: "Professional Dark",
    id: "professional-dark",
    hero: {
      background: "bg-gradient-to-br from-black via-gray-900 to-zinc-900",
      overlay: "bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5",
      text: "text-white",
      accent: "text-green-400"
    },
    section: {
      primary: "bg-white dark:bg-black",
      secondary: "bg-gray-50 dark:bg-zinc-900/50",
      accent: "bg-gray-100 dark:bg-zinc-800"
    },
    card: {
      background: "bg-white dark:bg-zinc-900/80 backdrop-blur-sm",
      border: "border-gray-200 dark:border-zinc-700/50",
      glow: "shadow-xl dark:shadow-green-500/5"
    },
    button: {
      primary: "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-lg shadow-green-500/25",
      secondary: "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-zinc-600 dark:text-gray-300 dark:hover:bg-zinc-700",
      accent: "text-green-600 dark:text-green-400"
    },
    navbar: {
      logo: "bg-green-600 dark:bg-green-500",
      glow: "shadow-lg shadow-green-500/25",
      transparent: "bg-white/10 dark:bg-black/20 text-white backdrop-blur-md",
      scrolled: "bg-white/95 dark:bg-black/95 text-gray-900 dark:text-white backdrop-blur-md",
      border: "border-gray-200/20 dark:border-zinc-700/30"
    },
    text: {
      primary: "text-gray-900 dark:text-white",
      secondary: "text-gray-600 dark:text-gray-300",
      muted: "text-gray-500 dark:text-gray-400"
    }
  }

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('portfolioTheme')
    if (saved !== null) {
      setIsDark(saved === 'dark')
    } else {
      // Default to user's system preference
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  // Save theme to localStorage and apply to document
  useEffect(() => {
    localStorage.setItem('portfolioTheme', isDark ? 'dark' : 'light')
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ColorSchemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        currentColors: colorScheme,
        // Backward compatibility
        currentScheme: 0,
        colorSchemes: [colorScheme],
        changeScheme: () => {}
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeContext 