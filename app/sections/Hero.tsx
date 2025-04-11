'use client';

import React, { useEffect, useState } from 'react'
import { GradientButton, Badge } from '../components/ui'
import imageLink from '../constants/imageLink'
import { useTheme } from '../context/ThemeProvider';
import { motion } from 'framer-motion';

const Hero = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 500,
        damping: 15,
        velocity: 2
      }
    }
  };

  // Split text for animation
  const firstLine = "Funnels that CONVERT.";
  const secondLine = "Designs that IMPRESS.";
  
  return (
    <section className={`relative ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-blue-50 to-white'} pt-32 pb-24 overflow-hidden`}>
        {/* Decorative elements with mouse parallax */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <motion.div 
            className={`absolute -top-24 -left-24 w-72 h-72 ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-xl animate-blob`}
            style={{ 
              x: mousePosition.x * -30,
              y: mousePosition.y * -30
            }}
          ></motion.div>
          <motion.div 
            className={`absolute top-48 -right-24 w-72 h-72 ${theme === 'dark' ? 'bg-blue-800' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000`}
            style={{ 
              x: mousePosition.x * 40,
              y: mousePosition.y * 40
            }}
          ></motion.div>
          <motion.div 
            className={`absolute -bottom-24 left-1/3 w-72 h-72 ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000`}
            style={{ 
              x: mousePosition.x * -20,
              y: mousePosition.y * -20
            }}
          ></motion.div>
        </div>
        
        {/* Animated grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px), 
                              linear-gradient(to right, ${theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge text="FUNNEL DESIGNER" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold leading-tight mb-4 mt-3"
                variants={titleVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="overflow-hidden">
                  <motion.span className="text-gradient inline-block">
                    {firstLine.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
                {/* Reduce spacing between lines */}
                <div className="overflow-hidden mt-1">
                  <motion.span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} inline-block`}>
                    {secondLine.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </div>
              </motion.h1>
              
              <motion.p 
                className={`text-xl mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Strategic funnel design that transforms visitors into loyal customers and drives measurable business growth.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <GradientButton href="https://www.facebook.com/rayguangg/">
                  <motion.span 
                    className="flex items-center justify-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                </GradientButton>
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* Main image container with parallax effect - removed shadow */}
                <motion.div 
                  className="relative w-full rounded-xl overflow-hidden"
                  style={{ 
                    x: mousePosition.x * -20,
                    y: mousePosition.y * -20,
                    rotateX: mousePosition.y * 5,
                    rotateY: mousePosition.x * -5,
                  }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  {/* Removed overlay gradient */}
                  
                  {/* Hero image with subtle hover effect */}
                  <motion.div 
                    className="relative h-full w-full transform transition-all duration-500"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={imageLink.hero} 
                      alt="Hero" 
                      className="w-full h-full object-cover rounded-xl" 
                    />
                  </motion.div>
                </motion.div>
                
                {/* Floating elements with enhanced styling and animations */}
                <motion.div 
                  className={`absolute top-12 left-0 w-44 ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} rounded-xl shadow-xl p-3 backdrop-blur-sm border border-orange-500/20`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  style={{ 
                    x: mousePosition.x * -30 - 25,
                    y: mousePosition.y * 10,
                    rotate: 5
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(251,146,60,0.4)',
                          '0 0 0 10px rgba(251,146,60,0)',
                          '0 0 0 0 rgba(251,146,60,0)'
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </motion.div>
                    <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      <p className="text-xs font-medium">Client Rating</p>
                      <motion.p 
                        className="text-lg font-bold"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <motion.span
                          animate={{ 
                            color: theme === 'dark' 
                              ? ['rgb(251,146,60)', 'rgb(249,115,22)', 'rgb(251,146,60)'] 
                              : ['rgb(234,88,12)', 'rgb(249,115,22)', 'rgb(234,88,12)'] 
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          4.9/5.0
                        </motion.span>
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute inset-0 -z-10 rounded-xl opacity-60"
                    style={{ 
                      background: `radial-gradient(circle at center, ${theme === 'dark' ? 'rgba(249,115,22,0.4)' : 'rgba(249,115,22,0.2)'} 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                    }}
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* ROI Card - styled like monthly growth */}
                <motion.div 
                  className={`absolute top-24 right-12 w-44 ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} rounded-xl shadow-xl p-3 backdrop-blur-sm border border-indigo-500/20`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ 
                    x: mousePosition.x * 20 + 15,
                    y: mousePosition.y * 20 - 15,
                    rotate: -8
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white shadow-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(99,102,241,0.4)',
                          '0 0 0 10px rgba(99,102,241,0)',
                          '0 0 0 0 rgba(99,102,241,0)'
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                    </motion.div>
                    <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      <p className="text-xs font-medium">Avg. ROI</p>
                      <motion.p 
                        className="text-lg font-bold"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <motion.span
                          animate={{ 
                            color: theme === 'dark' 
                              ? ['rgb(99,102,241)', 'rgb(129,140,248)', 'rgb(99,102,241)'] 
                              : ['rgb(67,56,202)', 'rgb(79,70,229)', 'rgb(67,56,202)'] 
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          312%
                        </motion.span>
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute inset-0 -z-10 rounded-xl opacity-60"
                    style={{ 
                      background: `radial-gradient(circle at center, ${theme === 'dark' ? 'rgba(99,102,241,0.4)' : 'rgba(99,102,241,0.2)'} 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                    }}
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </motion.div>
                
                {/* Enhanced conversion rate card */}
                <motion.div 
                  className={`absolute -bottom-6 right-24 w-44 ${theme === 'dark' ? 'bg-gray-800/90' : 'bg-white'} rounded-xl shadow-xl p-3 backdrop-blur-sm border border-teal-500/20`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ 
                    x: mousePosition.x * 25 + 20,
                    y: mousePosition.y * 25 + 20,
                    rotate: 3
                  }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(45,212,191,0.4)',
                          '0 0 0 10px rgba(45,212,191,0)',
                          '0 0 0 0 rgba(45,212,191,0)'
                        ]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </motion.div>
                    <div className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      <p className="text-xs font-medium">Monthly Growth</p>
                      <motion.p 
                        className="text-lg font-bold"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <motion.span
                          animate={{ 
                            color: theme === 'dark' 
                              ? ['rgb(45,212,191)', 'rgb(94,234,212)', 'rgb(45,212,191)'] 
                              : ['rgb(13,148,136)', 'rgb(20,184,166)', 'rgb(13,148,136)'] 
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          +84%
                        </motion.span>
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute inset-0 -z-10 rounded-xl opacity-60"
                    style={{ 
                      background: `radial-gradient(circle at center, ${theme === 'dark' ? 'rgba(45,212,191,0.4)' : 'rgba(45,212,191,0.2)'} 0%, transparent 70%)`,
                      filter: 'blur(8px)',
                    }}
                    animate={{ opacity: [0.6, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Scroll to explore</p>
          <motion.div 
            className={`w-6 h-10 border-2 ${theme === 'dark' ? 'border-gray-500' : 'border-gray-400'} rounded-full flex justify-center items-start p-1`}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className={`w-1.5 h-1.5 ${theme === 'dark' ? 'bg-blue-400' : 'bg-blue-500'} rounded-full`}
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>
  )
}

export default Hero