'use client';

import React from 'react'
import { Badge, GradientButton, LandingPageCarousel, MultiDirectionalCarousel } from '../components/ui'
import imageLink from '../constants/imageLink'
import { externalLinks } from '../constants/routes'
import { useTheme } from '../context/ThemeProvider';

const FinalCTA = () => {
  const { theme } = useTheme();
  return (
    <section className={`pt-24 pb-0 mb-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Badge text="GET STARTED" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ready to </span>
            <span className="text-gradient">Convert More?</span>
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-12`}>
            Take your business to the next level with high-converting funnel designs
          </p>

          <GradientButton href={externalLinks.facebook}>
            Get Started Now
          </GradientButton>
        </div>

      </div>

      <LandingPageCarousel
        longOnly={true}
        className="pb-0"
        topRoundedOnly={true}
      />
    </section>
  )
}

export default FinalCTA