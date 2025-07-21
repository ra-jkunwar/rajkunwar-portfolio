import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Instagram, ArrowUp, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    main: [
      { name: 'Home', href: '#hero' },
      { name: 'Resume', href: '#resume' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/rajkunwar23', icon: Github },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/rajkunwar23', icon: Linkedin },
      { name: 'Instagram', href: 'https://instagram.com/raj_kunwar23', icon: Instagram }
    ]
  }

  const contactInfo = [
    { icon: Mail, text: 'rajkunwarsingh1729@gmail.com', href: 'mailto:rajkunwarsingh1729@gmail.com' },
    { icon: Phone, text: '+91 9140024467', href: 'tel:+919140024467' },
    { icon: MapPin, text: 'Delhi, India', href: '#' }
  ]

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Experience' },
    { number: '10K+', label: 'Community Members' },
    { number: '24/7', label: 'Available for Work' }
  ]

  return (
    <footer className="relative bg-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="py-16 border-b border-zinc-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links and Info Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Raj Kunwar Singh</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Building digital experiences that inspire and engage. Passionate about creating 
              scalable solutions and helping businesses achieve their goals through technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <div className="space-y-4">
              {footerLinks.main.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-green-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Follow Me</h3>
            <div className="space-y-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Available for Work</span>
              </div>
              <p className="text-xs text-gray-400">
                Open to new opportunities and exciting projects
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by Raj Kunwar Singh</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 