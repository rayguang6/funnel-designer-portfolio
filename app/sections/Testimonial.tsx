'use client'

import React from 'react'
import { Badge } from '../components/ui'
import { externalLinks } from '../constants/routes'
import Image from 'next/image'
import imageLink from '../constants/imageLink'
import { useTheme } from '../context/ThemeProvider';
import { motion } from 'framer-motion';
import { StarRating } from '../components/ui';
// Testimonial data for reusability
const testimonials = [
  {
    id: 1,
    quote: "Our conversion rate increased by 143% after implementing the new funnel design. The ROI was almost immediate, and the process was smooth from start to finish.",
    author: "Jordan Tay",
    position: "CEO, TechStartup Inc.",
    image: imageLink.testimonial.testimonial1,
    rating: 5,
    highlight: "143% increase"
  },
  {
    id: 2,
    quote: "What impressed me most was the attention to both design and conversion strategy. The funnel not only looks great but actually converts visitors into paying customers.",
    author: "Sarah Johnson",
    position: "Marketing Director, E-commerce Brand",
    image: imageLink.testimonial.testimonial2,
    rating: 5,
    highlight: "High conversion"
  },
  {
    id: 3,
    quote: "Working with a funnel designer who understands both design and technical implementation was a game-changer. Our sales doubled within 3 months of launching.",
    author: "Mike Thompson",
    position: "Founder, Online Coaching Program",
    image: imageLink.testimonial.testimonial3,
    rating: 5,
    highlight: "2x sales growth"
  }
];

const Testimonial = () => {
  const { theme } = useTheme();

  return (
    <section className={`relative py-24 overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <motion.div
          className={`absolute w-[600px] h-[600px] rounded-full ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-200/20'} blur-3xl`}
          animate={{
            x: [-300, 300, -300],
            y: [-200, 200, -200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className={`absolute right-0 w-[500px] h-[500px] rounded-full ${theme === 'dark' ? 'bg-purple-500/5' : 'bg-purple-200/20'} blur-3xl`}
          animate={{
            x: [200, -200, 200],
            y: [200, -200, 200],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge text="TESTIMONIALS" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What My </span>
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Results speak louder than words. Here's what clients have to say about our partnership.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className={`relative ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} rounded-2xl p-6 md:p-8 backdrop-blur-sm
                border border-transparent hover:border-blue-500/20
                shadow-lg hover:shadow-2xl transition-all duration-500
                ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-white'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              {/* Highlight badge - made more compact for mobile */}
              <div className={`absolute -top-3 right-4 bg-gradient-to-r from-blue-500 to-blue-600 
                text-white text-xs font-bold py-1 px-2 rounded-full
                shadow-lg ${theme === 'dark' ? 'shadow-blue-500/20' : 'shadow-blue-200/50'}`}>
                {testimonial.highlight}
              </div>
              
              {/* Quote mark with gradient */}
              <div className="absolute -top-4 -left-2 text-5xl md:text-7xl leading-none">
                <span className="text-gradient opacity-90">"</span>
              </div>
              
              <div className="relative pt-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  <StarRating rating={testimonial.rating} />
                </motion.div>
                
                {/* Made quote section more responsive */}
                <div className="min-h-[120px] mt-4">
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm md:text-base italic leading-relaxed`}>
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <motion.div 
                  className={`mt-6 pt-4 border-t flex items-center ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 mr-4 rounded-full overflow-hidden
                    ring-2 ring-offset-2 ring-blue-500/30 ring-offset-transparent">
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
                    <h4 className={`font-bold text-base md:text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {testimonial.author}
                    </h4>
                    <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${theme === 'dark' ? 'rgb(17, 24, 39)' : 'rgb(255, 255, 255)'})`
        }}
      />
    </section>
  )
}

export default Testimonial