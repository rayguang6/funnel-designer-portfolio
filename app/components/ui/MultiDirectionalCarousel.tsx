import React from 'react';
import Image from 'next/image';
import { GRADIENTS, SVG_GRADIENT } from '@/app/constants/theme';

interface CarouselItem {
  id: number;
  image?: string;
  type?: 'chart' | 'cube' | 'graph' | 'stats';
  color: 'blue' | 'purple' | 'cyan' | 'red' | 'green' | 'yellow';
}

interface MultiDirectionalCarouselProps {
  className?: string;
  itemSize?: 'sm' | 'md' | 'lg';
  topItems?: CarouselItem[];
  bottomItems?: CarouselItem[];
}

const MultiDirectionalCarousel = ({
  className = '',
  itemSize = 'md',
  topItems,
  bottomItems
}: MultiDirectionalCarouselProps) => {
  // Default top items (going left to right)
  
  const carouselTopItems = topItems;
  const carouselBottomItems = bottomItems;
  
  // Responsive size classes
  const sizeClasses = {
    sm: 'w-16 h-16 md:w-20 md:h-20',
    md: 'w-24 h-24 md:w-32 md:h-32',
    lg: 'w-32 h-32 md:w-48 md:h-48'
  };
  

  const renderCarouselItem = (item: CarouselItem, key: string) => {
    return (
      <div 
        key={key} 
        className={`${sizeClasses[itemSize]} rounded-lg flex-shrink-0 flex items-center justify-center gradient-bg-subtle shadow-md hover:shadow-lg transition-all hover-lift`}
      >
        <div className="w-full h-full relative">
          <Image 
            src={item.image || ''} 
            alt={`Carousel item ${item.id}`} 
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 6rem, 12rem"
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`space-y-4 md:space-y-8 ${className}`}>
      {/* Top row - scrolls left to right */}
      <div className="overflow-hidden">
        <div className="animate-scroll-right flex gap-2 md:gap-3 w-max py-2 md:py-3">
          {/* First set of top items */}
          {carouselTopItems && carouselTopItems.map((item) => renderCarouselItem(item, `carousel-top-${item.id}`))}
          
          {/* Duplicate for seamless looping */}
          {carouselTopItems && carouselTopItems.map((item) => renderCarouselItem(item, `carousel-top-dup-${item.id}`))}
        </div>
      </div>
      
      {/* Bottom row - scrolls right to left */}
      <div className="overflow-hidden">
        <div className="animate-scroll-left flex gap-2 md:gap-3 w-max py-2 md:py-3">
          {/* First set of bottom items */}
          {carouselBottomItems && carouselBottomItems.map((item) => renderCarouselItem(item, `carousel-bottom-${item.id}`))}
          
          {/* Duplicate for seamless looping */}
          {carouselBottomItems && carouselBottomItems.map((item) => renderCarouselItem(item, `carousel-bottom-dup-${item.id}`))}
        </div>
      </div>
    </div>
  );
};

export default MultiDirectionalCarousel; 