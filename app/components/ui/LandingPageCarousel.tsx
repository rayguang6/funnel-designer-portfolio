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

  // Check if top images are square (based on whether squareOnly is true or topImages are provided)
  const useSquareForTop = squareOnly || topImages !== undefined;

  // Calculate dimensions for the long image preview
  const longImageWidth = 250; // Base width in pixels
  const longImageHeight = Math.floor(longImageWidth * 1.5); // Maintain ratio
  
  return (
    <div className={`${needsSpacing ? 'space-y-16' : ''} ${className}`}>
      {/* Top row - scrolls right to left */}
      {!squareOnly && (
        <div className="overflow-hidden w-full">
          <div className="animate-scroll-right flex gap-6 w-max py-4">
           {/* First set of top images */}
            {carouselTopImages.map((src, index) => (
              <div 
                key={`carousel-top-${index}`} 
                className={`${topCarouselItemClass} overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover-lift hover-glow`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  width: useSquareForTop ? '400px' : longOnly ? `${longImageWidth}px` : '280px',
                  height: useSquareForTop ? '400px' : longOnly ? `${longImageHeight}px` : '600px'
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
                          sizes="(max-width: 768px) 70vw, 33vw"
                          priority={index < 3}
                          className="animate-fade-in"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 animate-fade-in-up">
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
                      sizes="(max-width: 768px) 70vw, 33vw"
                      priority={index < 3}
                      className="animate-fade-in group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 animate-fade-in-up">
                        {/* Project name overlay removed */}
                      </div>
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
                  width: useSquareForTop ? '400px' : longOnly ? `${longImageWidth}px` : '280px',
                  height: useSquareForTop ? '400px' : longOnly ? `${longImageHeight}px` : '600px'
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
                          sizes="(max-width: 768px) 70vw, 33vw"
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
                      sizes="(max-width: 768px) 70vw, 33vw"
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
      
      {/* Bottom row - scrolls left to right with square images - only shown when longOnly is false */}
      {!longOnly && (
        <div className="overflow-hidden w-full">
          <div className="animate-scroll-left flex gap-8 w-max py-4">
            {/* First set of bottom square images */}
            {carouselBottomImages.map((src, index) => (
              <div 
                key={`carousel-bottom-${index}`} 
                className="w-[400px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover-scale hover-glow"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-full h-full group">
                  <Image 
                    src={src} 
                    alt={`Project example ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 80vw, 40vw"
                    priority={index < 3}
                    className="group-hover:scale-110 transition-transform duration-700 animate-fade-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 animate-fade-in-up">
                      {/* Project name overlay removed */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate for seamless looping */}
            {carouselBottomImages.map((src, index) => (
              <div 
                key={`carousel-bottom-dup-${index}`} 
                className="w-[400px] h-[400px] rounded-2xl overflow-hidden flex-shrink-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover-scale hover-glow"
              >
                <div className="relative w-full h-full group">
                  <Image 
                    src={src} 
                    alt={`Project example ${index + 1}`} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 80vw, 40vw"
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      {/* Project name overlay removed */}
                    </div>
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