import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Clock, User, Tag, Search, Filter, BookOpen, ArrowRight, Star } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { Link } from 'react-router-dom'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')

  // Get unique categories and tags
  const categories = ['all', ...new Set(portfolioData.blogs.map(blog => blog.category))]
  const allTags = [...new Set(portfolioData.blogs.flatMap(blog => blog.tags))]

  // Filter blogs based on search and filters
  const filteredBlogs = portfolioData.blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory
    const matchesTag = selectedTag === 'all' || blog.tags.includes(selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const featuredBlogs = portfolioData.blogs.filter(blog => blog.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-green-500 font-medium uppercase tracking-wide text-sm">
                Technical Insights
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="font-display">Latest </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Blog Posts
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences from my journey as a software engineer.
              From backend optimization to frontend frameworks, explore the world of modern development.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white appearance-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div className="relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white appearance-none"
                >
                  <option value="all">All Tags</option>
                  {allTags.map(tag => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {featuredBlogs.length > 0 && (
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Posts</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.slice(0, 2).map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    className="group bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 relative overflow-hidden">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs">
                          {blog.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-md text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm group/link"
                        >
                          Read more
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                All Posts ({filteredBlogs.length})
              </h3>
              
              {/* Results info */}
              {(searchTerm || selectedCategory !== 'all' || selectedTag !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedTag('all')
                  }}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
            
            <AnimatePresence mode="wait">
              {filteredBlogs.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {filteredBlogs.map((blog, index) => (
                    <motion.article
                      key={blog.id}
                      className="group bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-gray-200 dark:border-zinc-700/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -3 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-gray-500/20 to-gray-600/20 relative overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 dark:bg-black/90 text-gray-900 dark:text-white rounded-full text-xs font-medium">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(blog.publishedAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {blog.tags.slice(0, 2).map(tag => (
                              <span 
                                key={tag}
                                className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            to={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm group/link"
                          >
                            Read
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your search terms or filters.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog 