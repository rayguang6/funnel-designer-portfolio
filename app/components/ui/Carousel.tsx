import React from 'react';

interface CarouselItem {
  id: number;
  type: 'chart' | 'cube' | 'graph' | 'stats';
  color: 'blue' | 'purple' | 'cyan';
}

interface CarouselProps {
  items?: CarouselItem[];
  className?: string;
  itemSize?: 'sm' | 'md' | 'lg';
  direction?: 'left' | 'right';
}

const Carousel = ({ 
  items,
  className = '',
  itemSize = 'md',
  direction = 'left'
}: CarouselProps) => {
  // Default items if none provided
  const defaultItems: CarouselItem[] = [];
  for (let i = 1; i <= 15; i++) {
    defaultItems.push({
      id: i,
      type: i % 4 === 0 ? 'chart' : i % 4 === 1 ? 'cube' : i % 4 === 2 ? 'graph' : 'stats',
      color: i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'purple' : 'cyan'
    });
  }
  
  const carouselItems = items || defaultItems;
  
  // Size classes
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  // Animation class
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  // Get icon based on type
  const getIcon = (type: string) => {
    switch(type) {
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'cube':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        );
      case 'graph':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        );
      case 'stats':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        );
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`${itemSize === 'sm' ? 'animate-scroll-mini' : animationClass} flex gap-3 w-max py-3`}>
        {/* First set of items */}
        {carouselItems.map((item) => (
          <div 
            key={`carousel-${item.id}`} 
            className={`${sizeClasses[itemSize]} rounded-lg flex-shrink-0 flex items-center justify-center bg-gray-100`}
          >
            {getIcon(item.type)}
          </div>
        ))}
        
        {/* Duplicate for seamless looping */}
        {carouselItems.map((item) => (
          <div 
            key={`carousel-dup-${item.id}`} 
            className={`${sizeClasses[itemSize]} rounded-lg flex-shrink-0 flex items-center justify-center bg-gray-100`}
          >
            {getIcon(item.type)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel; 