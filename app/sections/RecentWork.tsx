'use client';

import React from 'react';
import { Badge, LandingPageCarousel, squareImagePaths } from '../components/ui';
import { useTheme } from '../context/ThemeProvider';
interface LandingPageShowcaseProps {
  id?: string;
  className?: string;
}

const LandingPageShowcase = ({ id, className = '' }: LandingPageShowcaseProps) => {
  const { theme } = useTheme();
  return (
    <div id={id || 'landing-page-showcase'} className={`py-20 ${className} ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} w-full`}>
      <div className="container mx-auto px-4 md:px-8 mb-14">
      <div className={"mb-16 text-center"}>
      
      <Badge text="High Converting Funnels" />
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Recent{' '}</span>
        <span className='gradient-text'>Funnels</span>
      </h2>
      
      <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
      Browse through my portfolio of meticulously designed landing pages that convert visitors into customers


      </p>
    </div>
      </div>
      
      <div className="w-full">
        <LandingPageCarousel 
          topImages={squareImagePaths.slice(0, 6)}
          bottomImages={squareImagePaths.slice(6)} 
        />
      </div>
    </div>
  );
};

export default LandingPageShowcase; 