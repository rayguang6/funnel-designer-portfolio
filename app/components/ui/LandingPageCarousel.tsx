'use client';

import React from 'react';
import Image from 'next/image';
import imageLink from '../../constants/imageLink';

// Use images from constants
export const actualImagePaths = imageLink.longCarousel;
export const squareImagePaths = imageLink.squareCarousel;

interface LandingPageCarouselProps {
  className?: string;
  topImages?: string[];
  bottomImages?: string[];
  squareOnly?: boolean;
  longOnly?: boolean;
  topRoundedOnly?: boolean;
}

const LandingPageCarousel = ({
  className = '',
  topImages,
  bottomImages,
  squareOnly = false,
  longOnly = false,
  topRoundedOnly = false
}: LandingPageCarouselProps) => {
  // Split into top and bottom if not provided
  const carouselTopImages = topImages || (squareOnly ? squareImagePaths.slice(0, 6) : actualImagePaths.slice(0, 8));
  const carouselBottomImages = bottomImages || (squareOnly ? squareImagePaths.slice(6) : squareImagePaths);

  // Determine if we need spacing between rows
  const needsSpacing = !squareOnly && !longOnly;

  // Determine the border radius class
  const topCarouselItemClass = topRoundedOnly 
    ? 'rounded-t-2xl' 
    : 'rounded-2xl';

  // Check if top images are square
  const useSquareForTop = squareOnly || topImages !== undefined;

  // Calculate responsive dimensions
  const getResponsiveDimensions = (isSquare: boolean) => {
    if (isSquare) {
      return {
        mobile: { width: 280, height: 280 },
        desktop: { width: 400, height: 400 }
      };
    }
    return {
      mobile: { width: 200, height: longOnly ? 300 : 400 },
      desktop: { width: longOnly ? 250 : 280, height: longOnly ? 375 : 600 }
    };
  };
  
  return (
    <div className={`${needsSpacing ? 'space-y-8 md:space-y-16' : ''} ${className}`}>
      {/* Top row - scrolls right to left */}
      {!squareOnly && (
        <div className="overflow-hidden w-full">
          <div className="animate-scroll-right flex gap-3 md:gap-6 w-max">
           {/* First set of top images */}
            {carouselTopImages.map((src, index) => (
              <div 
                key={`carousel-top-${index}`} 
                className={`${topCarouselItemClass} overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover-lift hover-glow`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  width: useSquareForTop 
                    ? 'min(70vw, 400px)'
                    : `min(60vw, ${longOnly ? '250px' : '280px'})`,
                  height: useSquareForTop 
                    ? 'min(70vw, 400px)'
                    : `min(90vw, ${longOnly ? '375px' : '600px'})`
                }}
              >
                {longOnly ? (
                  // Container for long image with hover scroll effect
                  <div className="relative w-full h-full overflow-hidden group">
                    <div 
                      className="absolute w-full transition-transform duration-[2.5s] ease-linear group-hover:translate-y-[-50%]"
                      style={{ height: '200%' }}
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src={src} 
                          alt={`Landing page example ${index + 1}`} 
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          sizes="(max-width: 768px) 60vw, 250px"
                          priority={index < 3}
                          className="animate-fade-in"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 animate-fade-in-up"></div>
                    </div>
                  </div>
                ) : (
                  // Regular image container
                  <div className="relative w-full h-full group">
                    <Image 
                      src={src} 
                      alt={`Landing page example ${index + 1}`} 
                      fill
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: useSquareForTop ? 'center' : 'top',
                      }}
                      sizes={useSquareForTop ? "(max-width: 768px) 70vw, 400px" : "(max-width: 768px) 60vw, 280px"}
                      priority={index < 3}
                      className="animate-fade-in group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 animate-fade-in-up"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Duplicate for seamless looping */}
            {carouselTopImages.map((src, index) => (
              <div 
                key={`carousel-top-dup-${index}`} 
                className={`${topCarouselItemClass} overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover-lift hover-glow`}
                style={{ 
                  width: useSquareForTop 
                    ? 'min(70vw, 400px)'
                    : `min(60vw, ${longOnly ? '250px' : '280px'})`,
                  height: useSquareForTop 
                    ? 'min(70vw, 400px)'
                    : `min(90vw, ${longOnly ? '375px' : '600px'})`
                }}
              >
                {longOnly ? (
                  // Container for long image with hover scroll effect
                  <div className="relative w-full h-full overflow-hidden group">
                    <div 
                      className="absolute w-full transition-transform duration-[2.5s] ease-linear group-hover:translate-y-[-50%]"
                      style={{ height: '200%' }}
                    >
                      <div className="relative w-full h-full">
                        <Image 
                          src={src} 
                          alt={`Landing page example ${index + 1}`} 
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          sizes="(max-width: 768px) 60vw, 250px"
                          className=""
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        {/* Project name overlay removed */}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular image container
                  <div className="relative w-full h-full group">
                    <Image 
                      src={src} 
                      alt={`Landing page example ${index + 1}`} 
                      fill
                      style={{ 
                        objectFit: 'cover', 
                        objectPosition: useSquareForTop ? 'center' : 'top',
                      }}
                      sizes={useSquareForTop ? "(max-width: 768px) 70vw, 400px" : "(max-width: 768px) 60vw, 280px"}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        {/* Project name overlay removed */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Bottom row - scrolls left to right with square images */}
      {!longOnly && (
        <div className="overflow-hidden w-full">
          <div className="animate-scroll-left flex gap-4 md:gap-8 w-max">
            {/* First set of bottom square images */}
            {carouselBottomImages.map((src, index) => (
              <div 
                key={`carousel-bottom-${index}`} 
                className="rounded-2xl overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover-scale hover-glow"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  width: 'min(70vw, 400px)',
                  height: 'min(70vw, 400px)'
                }}
              >
                <div className="relative w-full h-full group">
                  <Image 
                    src={src} 
                    alt={`Project example ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 70vw, 400px"
                    priority={index < 3}
                    className="group-hover:scale-110 transition-transform duration-700 animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 animate-fade-in-up"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate for seamless looping */}
            {carouselBottomImages.map((src, index) => (
              <div 
                key={`carousel-bottom-dup-${index}`} 
                className="rounded-2xl overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover-scale hover-glow"
                style={{ 
                  width: 'min(70vw, 400px)',
                  height: 'min(70vw, 400px)'
                }}
              >
                <div className="relative w-full h-full group">
                  <Image 
                    src={src} 
                    alt={`Project example ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 70vw, 400px"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageCarousel; 