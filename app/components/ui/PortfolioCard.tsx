import React from 'react';
import { GRADIENTS, SVG_GRADIENT } from '@/app/constants/theme';

interface PortfolioCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  tags?: string[];
  link?: string;
  className?: string;
  featured?: boolean;
}

const PortfolioCard = ({
  title,
  description,
  image,
  category = '',
  tags = [],
  link = '#',
  className = '',
  featured = false
}: PortfolioCardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl ${className}`}>
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden group">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={`absolute inset-0 ${GRADIENTS.bgBottomRight} flex items-center justify-center text-white text-2xl font-bold`}>
            {category || 'Project Image'}
          </div>
        )}
        <div className={`absolute inset-0 ${GRADIENTS.bgBottomRight.replace('from-[#1479FF]', 'from-[#1479FF]/50').replace('to-[#00D8FF]', 'to-[#00D8FF]/50')} opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
          <a 
            href={link} 
            className={`bg-white ${GRADIENTS.hoverBg} hover:text-white bg-clip-padding ${GRADIENTS.text} font-semibold py-2 px-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform`}
          >
            View Project
          </a>
        </div>
      </div>
      <div className="p-6">
        {tags.length > 0 && (
          <div className="flex items-center mb-4 flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 ${GRADIENTS.subtleBg} dark:${GRADIENTS.darkSubtleBg} rounded-full text-xs ${GRADIENTS.text} font-medium`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-2`}>{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <a 
          href={link} 
          className={`${GRADIENTS.text} font-medium hover:underline inline-flex items-center`}
        >
          View Case Study 
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24">
            <defs dangerouslySetInnerHTML={{ __html: SVG_GRADIENT.def }} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" stroke={SVG_GRADIENT.url} />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard; 