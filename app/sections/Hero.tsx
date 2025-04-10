import React from 'react'
import { GradientButton, Badge } from '../components/ui'
import imageLink from '../constants/imageLink'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-48 -right-24 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge text="FUNNEL DESIGNER" /> 
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-gradient">Funnels that CONVERT.</span><br/>
                Designs that IMPRESS.
              </h1>
              <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-lg">
                Strategic funnel design that transforms visitors into loyal customers and drives measurable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <GradientButton href="https://www.facebook.com/rayguangg/">
                  <span className="flex items-center justify-center">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </GradientButton>
              </div>
         
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative">
                {/* Main image container */}
                <div className="relative w-full rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                  {/* Replace with your hero image */}
                  <div className="relative h-full w-full rounded-xl shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                    <img src={imageLink.hero} alt="Hero" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-15 left-5 w-24 h-24 rounded-lg bg-white dark:bg-gray-800 shadow-lg p-3 transform -rotate-6">
                  <div className="w-full h-full rounded bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="#14d3ff">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute -bottom-8 -right-6 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 transform rotate-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium">Conversion Rate</p>
                      <p className="text-lg font-bold">+135%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero