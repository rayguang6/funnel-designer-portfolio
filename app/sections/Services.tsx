"use client"

import React from 'react'
import { Badge } from '../components/ui'
import { motion } from 'framer-motion'
    
const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-24">
          <Badge text="SERVICES" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete <span className="gradient-text">Funnel Solutions</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to build high-converting funnels that drive real business growth
          </p>
        </div>

        {/* Services Grid - New comprehensive services */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Service 1 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Strategic Design</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Conversion-focused design that guides users through the buying journey
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Tech Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Seamless integration with your CRM, payment processors, and marketing tools
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Copywriting</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Persuasive copy that connects with your audience and drives conversions
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Automation</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Streamlined workflows that nurture leads through the entire sales process
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Mobile Optimization</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Responsive designs that convert on all devices and screen sizes
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Graphics & Visuals</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Eye-catching visuals that enhance your message and build trust
            </p>
          </motion.div>

          {/* Service 7 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Complete Buildout</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              End-to-end implementation from concept to launch and beyond
            </p>
          </motion.div>

          {/* Service 8 */}
          <motion.div 
            className="bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover:bg-gradient-to-b hover:from-white hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-gray-800/80 border border-gray-100 dark:border-gray-700"
            variants={itemVariants}
          >
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 transition-all group-hover:gradient-text">Analytics & Optimization</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-all">
              Data-driven improvements to continuously increase conversion rates
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services