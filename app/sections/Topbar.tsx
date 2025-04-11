'use client';

import React, { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ui';
import { useTheme } from '../context/ThemeProvider';
import Link from 'next/link';

const Topbar = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? (theme === 'dark' 
            ? 'bg-gray-900/80 backdrop-blur-md shadow-md' 
            : 'bg-white/80 backdrop-blur-md shadow-md')
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center">
            <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              <span className="text-gradient">Lei</span> Funnel Design
            </span>
          </Link>
          
          {/* Right side items: Navigation + Theme Toggle */}
          <div className="flex items-center gap-6">
            {/* Navigation - always visible on desktop */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="#landing-pages" label="Portfolio" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
            </div>
            
            {/* Mobile menu button - only visible on mobile */}
            <div className="md:hidden">
              <button 
                className={`p-2 rounded-md ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                aria-label="Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

// Helper component for navigation links
const NavLink = ({ href, label }: { href: string; label: string }) => {
  const { theme } = useTheme();
  
  return (
    <Link 
      href={href}
      className={`font-medium transition-colors duration-200 hover:text-blue-500 relative group ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default Topbar; 