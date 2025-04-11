'use client';

import React from 'react'
import { Badge } from '../components/ui'
import imageLink from '../constants/imageLink'
import { useTheme } from '../context/ThemeProvider';
import { motion } from 'framer-motion';

const About = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`relative py-16 md:py-24 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className={`absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-200/20'} blur-3xl`}
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-200/20'} blur-3xl`}
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />

        {/* Accent lines */}
        <div className={`absolute -left-10 top-1/3 w-32 h-[1px] ${theme === 'dark' ? 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-300/40 to-transparent'}`} />
        <div className={`absolute -right-10 bottom-1/3 w-32 h-[1px] ${theme === 'dark' ? 'bg-gradient-to-r from-transparent via-purple-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-purple-300/40 to-transparent'}`} />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left side - Image and badges */}
          <motion.div 
            className="w-full md:w-5/12 mb-8 md:mb-0 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={imageLink.profilePicture}       
                alt="Profile"
                className="w-full object-cover"
              />
            </div>
            
            {/* Experience badge - positioned absolutely relative to parent container */}
            <div className={`absolute -right-4 md:-right-16 top-8 md:top-12 shadow-2xl rounded-lg p-3 md:p-4 transform rotate-3
              ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} backdrop-blur-sm 
              border-2 ${theme === 'dark' ? 'border-blue-500/30' : 'border-blue-500/20'} 
              animate-float z-20`}>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  <p className="text-[10px] md:text-xs font-medium uppercase tracking-wider">Experience</p>
                  <p className="text-lg md:text-2xl font-bold">5+ years</p>
                </div>
              </div>
            </div>

            {/* Project count badge - positioned absolutely relative to parent container */}
            <div className={`absolute -left-4 md:-left-14 bottom-12 md:bottom-16 shadow-2xl rounded-lg p-3 md:p-4 transform -rotate-3
              ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} backdrop-blur-sm 
              border-2 ${theme === 'dark' ? 'border-purple-500/30' : 'border-purple-500/20'} 
              animate-float-delayed z-20`}>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  <p className="text-[10px] md:text-xs font-medium uppercase tracking-wider">Projects</p>
                  <p className="text-lg md:text-2xl font-bold">100+</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="w-full md:w-6/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Badge text="ABOUT ME" />
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6`}>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Hi, I'm </span>
              <span className="text-gradient">Lei Zhi Guang</span>
            </h2>
            
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 md:mb-6 leading-relaxed`}>
              With over 5 years of specialized experience in funnel design and optimization, I help businesses transform their digital presence and maximize conversions. My expertise lies in creating strategic, user-focused funnels that drive real business results.
            </p>
            
            <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 md:mb-8 leading-relaxed`}>
              I've had the privilege of working with numerous clients, helping them develop high-converting funnels that significantly improved their customer acquisition and retention rates. My approach combines deep technical knowledge with psychological insights to create funnels that not only look stunning but actually convert visitors into loyal customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              {/* Skill cards with hover effect */}
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} p-4 md:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500`}>
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-base md:text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Strategic Design
                  </h3>
                </div>
                <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} pl-11 md:pl-14`}>Psychology-backed funnels that guide users to conversion</p>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} p-4 md:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-purple-500`}>
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-base md:text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Technical Skills
                  </h3>
                </div>
                <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} pl-11 md:pl-14`}>Advanced programming techniques for seamless implementation</p>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} p-4 md:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-green-500`}>
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-base md:text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Data-Driven
                  </h3>
                </div>
                <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} pl-11 md:pl-14`}>Maximizing ROI through analytics-based optimization</p>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} p-4 md:p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-500`}>
                <div className="flex items-center mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                  <h3 className={`font-bold text-base md:text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    Creative Solutions
                  </h3>
                </div>
                <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} pl-11 md:pl-14`}>Innovative approaches to complex funnel challenges</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)'})`
        }}
      />
    </section>
  )
}

export default About