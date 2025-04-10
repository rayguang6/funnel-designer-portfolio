import React from 'react'
import { Badge, GradientButton } from '../components/ui'
import imageLink from '../constants/imageLink'
import { externalLinks } from '../constants/routes'

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900" id="contact">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <Badge text="GET STARTED" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="text-gradient">Convert More?</span></h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Take your business to the next level with high-converting funnel designs
        </p>

        <GradientButton href={externalLinks.facebook}>
          Get Started Now
        </GradientButton>  
      </div>

      
    
    </div>
  </section>
  )
}

export default FinalCTA