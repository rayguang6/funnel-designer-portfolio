import React from 'react';
import { GRADIENTS } from '@/app/constants/theme';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) => {
  const baseClasses = 'inline-block font-medium py-4 px-8 rounded-full transition-all transform hover:translate-y-[-2px]';
  
  const variantClasses = {
    primary: `${GRADIENTS.bg} ${GRADIENTS.shadow} text-white`,
    secondary: `border-2 ${GRADIENTS.border} ${GRADIENTS.bgHover} bg-transparent text-gray-700 dark:text-gray-300`
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 