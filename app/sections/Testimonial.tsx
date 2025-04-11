import React from 'react'
import { Badge } from '../components/ui'
import { externalLinks } from '../constants/routes'
import Image from 'next/image'
import imageLink from '../constants/imageLink'

// Testimonial data for reusability
const testimonials = [
  {
    id: 1,
    quote: "Our conversion rate increased by 143% after implementing the new funnel design. The ROI was almost immediate, and the process was smooth from start to finish.",
    author: "Jordan Tay",
    position: "CEO, TechStartup Inc.",
    image: imageLink.testimonial.testimonial1,
    rating: 5,
    highlight: "143% increase in conversion rate"
  },
  {
    id: 2,
    quote: "What impressed me most was the attention to both design and conversion strategy. The funnel not only looks great but actually converts visitors into paying customers.",
    author: "Sarah Johnson",
    position: "Marketing Director, E-commerce Brand",
    image: imageLink.testimonial.testimonial2,
    rating: 5,
    highlight: "Beautiful design & high conversion"
  },
  {
    id: 3,
    quote: "Working with a funnel designer who understands both design and technical implementation was a game-changer. Our sales doubled within 3 months of launching.",
    author: "Mike Thompson",
    position: "Founder, Online Coaching Program",
    image: imageLink.testimonial.testimonial3,
    rating: 5,
    highlight: "Sales doubled in 3 months"
  }
];

// Star rating component for cleaner code
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex mb-2">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-48 -right-24 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge text="TESTIMONIALS" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What My <span className="text-gradient">Clients Say</span></h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Results speak louder than words. Here's what clients have to say about our partnership.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl relative transform transition-all duration-500 
                animate-fade-in-up animation-delay-${(index + 1) * 100} hover:-translate-y-2 
                hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_25px_-5px_rgba(37,99,235,0.3)] 
                before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity
                before:bg-gradient-to-br before:from-blue-100/50 before:via-transparent before:to-purple-100/50
                dark:before:from-blue-900/30 dark:before:to-purple-900/30
                hover:before:opacity-100 before:-z-10 before:blur-xl group`}
            >
              {/* Highlight badge */}
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                {testimonial.highlight}
              </div>
              
              {/* Quote mark */}
              <div className="absolute -top-5 -left-3 text-7xl text-gradient opacity-90 leading-none">"</div>
              
              <div className="relative pt-4">
                <StarRating rating={testimonial.rating} />
                
                <div className="h-40">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center">
                  <div className="relative w-16 h-16 flex-shrink-0 mr-5" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Testimonial