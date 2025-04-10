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
      <h6 className="text-gradient">
        {text}
      </h6>
    </span>
  );
};

export default Badge; 