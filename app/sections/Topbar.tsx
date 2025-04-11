'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeProvider';
import { NavLink, ThemeToggle } from '../components/ui';

const Topbar = () => {
  const { theme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'}`}>
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
            {/* Navigation - only visible on desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavLink href="#landing-pages" label="Portfolio" />
              <NavLink href="#about" label="About" />
              <NavLink href="#contact" label="Contact" />
            </div>
            
            {/* Theme Toggle - always visible */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar; 