import React from 'react';
import { GRADIENTS } from '@/app/constants/theme';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = '',
  href,
  size = 'md',
}) => {
  // Size based styling
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];
  
  // Common styling for all buttons
  const buttonClasses = `
    gradient-bg text-white font-medium rounded-full
    transition-all transform hover:translate-y-[-2px] hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    ${sizeClasses}
    ${className}
  `.trim();
  
  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default GradientButton; 