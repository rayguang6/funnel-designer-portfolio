import React from 'react';
import { MultiDirectionalCarousel } from '../components/index';

interface ShowcaseCarouselProps {
  id?: string;
  className?: string;
}

const ShowcaseCarousel = ({ id, className = '' }: ShowcaseCarouselProps) => {
  return (
    <section className="w-full overflow-hidden mt-0 mb-0 pb-0">
        <MultiDirectionalCarousel   
          itemSize="md"
        />
    </section>
  );
};

export default ShowcaseCarousel; 