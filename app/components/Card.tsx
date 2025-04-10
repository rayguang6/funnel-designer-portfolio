import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animationDelay?: string;
}

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  animationDelay = ''
}: CardProps) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all';
  const hoverClasses = hover ? 'hover:shadow-xl hover-lift' : '';
  const animationClasses = animationDelay ? `animate-fade-in-up animation-delay-${animationDelay}` : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${animationClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card; 