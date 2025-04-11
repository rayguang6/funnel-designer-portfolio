import React from 'react';

interface BadgeProps {
  className?: string;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({
  text, 
  className = '',
}) => {
  // Common badge styling
  const badgeClasses = `
    inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 
    transform hover:scale-105 transition-transform border-primary border-2
    ${className}
  `.trim();

  return (
    <span 
      className={badgeClasses}
    >
      <h4 className="text-gradient text-lg md:text-md">
        {text}
      </h4>
    </span>
  );
};

export default Badge; 