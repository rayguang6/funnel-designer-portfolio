import React from 'react'
import { GradientButton, Badge } from '../components/ui'
import imageLink from '../constants/imageLink'

const About = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={imageLink.profilePicture}       
                alt="Picture"
                className="rounded-2xl max-w-full lg:max-w-md xl:max-w-lg mx-auto md:mx-0 
                filter drop-shadow-[0_20px_20px_rgba(255,255,255,0.05)] transition-all duration-500"
              />
              
   
              {/* Experience badge */}
              <div className="absolute -right-10 md:-right-10 top-1/4 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-3 transform rotate-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="text-lg font-bold">5+ years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <Badge text="ABOUT ME" />
            <h2 className="text-4xl font-bold mb-6">The Funnel Expert Behind Your Success</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With over 5 years of experience in funnel design and optimization, I help businesses transform their digital presence and maximize conversions. 
              My expertise lies in creating strategic, user-focused funnels that drive results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">Psychology-backed funnels that guide users to conversion</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Deep Programming Knowledge</h3>
                  <p className="text-gray-600 dark:text-gray-400">Utilizes advanced programming techniques</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Specializing in Data-Driven Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-400">Maximizes ROI through data-driven funnel optimization</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">End-to-End Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-400">Includes design, copy, tech integration, and automation</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About