import React from 'react';
import { LandingPageCarousel, squareImagePaths } from '../components/ui';

interface LandingPageShowcaseProps {
  id?: string;
  className?: string;
}

const LandingPageShowcase = ({ id, className = '' }: LandingPageShowcaseProps) => {
  return (
    <div id={id || 'landing-page-showcase'} className={`py-20 ${className} bg-white dark:bg-gray-900 w-full`}>
      <div className="container mx-auto px-4 md:px-8 mb-14">
      <div className={"mb-16 text-center"}>
      
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        High Converting{' '}
        <span>Funnels</span>
      </h2>
      
      <p className={"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"}>
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