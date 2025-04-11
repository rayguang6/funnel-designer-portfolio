"use client"

import React from 'react'
import { Badge } from '../components/ui'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeProvider'
import ServiceCard from '../components/ui/ServiceCard'

// Service data for easy maintenance
const servicesData = [
  {
    title: "Strategic Design",
    description: "Conversion-focused design that guides users through the buying journey",
    color: "blue",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Tech Integration",
    description: "Seamless integration with your CRM, payment processors, and marketing tools",
    color: "purple",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Copywriting",
    description: "Persuasive copy that connects with your audience and drives conversions",
    color: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "Automation",
    description: "Streamlined workflows that nurture leads through the entire sales process",
    color: "pink",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Mobile Optimization",
    description: "Responsive designs that convert on all devices and screen sizes",
    color: "yellow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Graphics & Visuals",
    description: "Eye-catching visuals that enhance your message and build trust",
    color: "indigo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Complete Buildout",
    description: "End-to-end implementation from concept to launch and beyond",
    color: "red",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Analytics & Optimization",
    description: "Data-driven improvements to continuously increase conversion rates",
    color: "teal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];
    
const Services = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`relative py-24 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-b from-white via-gray-50/50 to-white'}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.07]' : 'opacity-[0.05]'}`}
          style={{
            backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px), 
                             linear-gradient(to bottom, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            mask: 'radial-gradient(circle at center, black 60%, transparent 90%)'
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', '64px 64px', '0px 0px'],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px), 
                               linear-gradient(to bottom, ${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'} 1px, transparent 1px)`,
              backgroundSize: '64px 64px'
            }}
          />
        </div>

        {/* Gradient orbs */}
        <motion.div
          className={`absolute w-[600px] h-[600px] rounded-full ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-200/20'} blur-3xl`}
          animate={{
            x: [-300, 300, -300],
            y: [-200, 200, -200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute right-0 w-[500px] h-[500px] rounded-full ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-200/20'} blur-3xl`}
          animate={{
            x: [200, -200, 200],
            y: [200, -200, 200],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={textVariants}>
            <Badge text="SERVICES" />
          </motion.div>
          
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            variants={textVariants}
          >
            <span>Fullstack A-Z </span>
            <span className="gradient-text">Funnel Solutions</span>
          </motion.h2>

          <motion.p 
            className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}
            variants={textVariants}
          >
            Everything you need to build high-converting funnels that drive real business growth
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services