'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeProvider';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const ServiceCard = ({ icon, title, description, color = "blue" }: ServiceCardProps) => {
  const { theme } = useTheme();
  
  // Simplified color mapping for different service cards
  const colorVariants = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      border: theme === 'dark' ? 'border-blue-500/40' : 'border-blue-300/70',
      iconBg: theme === 'dark' ? 'text-blue-400' : 'text-blue-500',
      hoverBg: theme === 'dark' ? 'bg-blue-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.15)',
      coloredShadow: 'rgba(59, 130, 246, 0.25)'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      border: theme === 'dark' ? 'border-purple-500/40' : 'border-purple-300/70',
      iconBg: theme === 'dark' ? 'text-purple-400' : 'text-purple-500',
      hoverBg: theme === 'dark' ? 'bg-purple-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(147,51,234,0.3)' : 'rgba(147,51,234,0.15)',
      coloredShadow: 'rgba(147, 51, 234, 0.25)'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      border: theme === 'dark' ? 'border-green-500/40' : 'border-green-300/70',
      iconBg: theme === 'dark' ? 'text-green-400' : 'text-green-500',
      hoverBg: theme === 'dark' ? 'bg-green-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(34,197,94,0.3)' : 'rgba(34,197,94,0.15)',
      coloredShadow: 'rgba(34, 197, 94, 0.25)'
    },
    pink: {
      gradient: 'from-pink-500 to-pink-600',
      border: theme === 'dark' ? 'border-pink-500/40' : 'border-pink-300/70',
      iconBg: theme === 'dark' ? 'text-pink-400' : 'text-pink-500',
      hoverBg: theme === 'dark' ? 'bg-pink-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(236,72,153,0.3)' : 'rgba(236,72,153,0.15)',
      coloredShadow: 'rgba(236, 72, 153, 0.25)'
    },
    yellow: {
      gradient: 'from-amber-500 to-amber-600',
      border: theme === 'dark' ? 'border-amber-500/40' : 'border-amber-300/70',
      iconBg: theme === 'dark' ? 'text-amber-400' : 'text-amber-500',
      hoverBg: theme === 'dark' ? 'bg-amber-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(234,179,8,0.3)' : 'rgba(234,179,8,0.15)',
      coloredShadow: 'rgba(234, 179, 8, 0.25)'
    },
    indigo: {
      gradient: 'from-indigo-500 to-indigo-600',
      border: theme === 'dark' ? 'border-indigo-500/40' : 'border-indigo-300/70',
      iconBg: theme === 'dark' ? 'text-indigo-400' : 'text-indigo-500',
      hoverBg: theme === 'dark' ? 'bg-indigo-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.15)',
      coloredShadow: 'rgba(99, 102, 241, 0.25)'
    },
    red: {
      gradient: 'from-red-500 to-red-600',
      border: theme === 'dark' ? 'border-red-500/40' : 'border-red-300/70',
      iconBg: theme === 'dark' ? 'text-red-400' : 'text-red-500',
      hoverBg: theme === 'dark' ? 'bg-red-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(239,68,68,0.3)' : 'rgba(239,68,68,0.15)',
      coloredShadow: 'rgba(239, 68, 68, 0.25)'
    },
    teal: {
      gradient: 'from-teal-500 to-teal-600',
      border: theme === 'dark' ? 'border-teal-500/40' : 'border-teal-300/70',
      iconBg: theme === 'dark' ? 'text-teal-400' : 'text-teal-500',
      hoverBg: theme === 'dark' ? 'bg-teal-900/10' : 'bg-white',
      glow: theme === 'dark' ? 'rgba(20,184,166,0.3)' : 'rgba(20,184,166,0.15)',
      coloredShadow: 'rgba(20, 184, 166, 0.25)'
    }
  };
  
  const currentColor = colorVariants[color as keyof typeof colorVariants];
  
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
    <motion.div 
      className={`${theme === 'dark' ? 'bg-gray-800/60' : 'bg-white'} backdrop-blur-sm rounded-xl p-8 
        transition-all duration-150 text-center group relative
        overflow-hidden transform-gpu z-0
        border-3 ${currentColor.border}
        hover:${currentColor.hoverBg}`}
      variants={itemVariants}
      initial="visible"
      whileHover={{
        y: -6,
        boxShadow: `0 25px 30px -8px ${currentColor.coloredShadow}, 0 15px 15px -8px ${currentColor.coloredShadow}`
      }}
      transition={{
        y: { type: "spring", stiffness: 600, damping: 15 },
        boxShadow: { duration: 0.1 }
      }}
    >
      {/* Large full card glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl -m-2 opacity-0 z-[-1] group-hover:opacity-100 transition-opacity duration-150"
        style={{
          background: `radial-gradient(circle at center, ${currentColor.glow} 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* Card background glow that follows mouse */}
      <motion.div 
        className={`absolute -inset-[100px] bg-gradient-to-r ${currentColor.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-full pointer-events-none z-[-1]`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: theme === 'dark' ? 0.25 : 0.15 }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Icon centered without border */}
      <div className="flex justify-center mb-6 relative">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center relative z-10`}>
          {/* Icon with theme-aware color */}
          <div className={`w-full h-full ${currentColor.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-10 transition-transform duration-100`}>
            {/* SVG icons typically have 24x24 or similar sizing, so we need to size them up */}
            <div className="w-12 h-12 flex items-center justify-center">
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Title with color transition */}
      <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'} text-xl font-bold mb-3 
        transition-colors duration-100 group-hover:${currentColor.iconBg}`}>
        {title}
      </h3>
      
      {/* Description with improved spacing */}
      <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-100 
        text-sm leading-relaxed`}>
        {description}
      </p>
      
      {/* Animated gradient line on bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div 
          className={`w-full h-full bg-gradient-to-r ${currentColor.gradient}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard; 