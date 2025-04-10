import React from 'react'
import { LandingPageCarousel } from '../components/ui'

const SquareCarousel = () => {
  return (
    <section className="w-full overflow-hidden mt-0 mb-0 pb-0">
        <LandingPageCarousel 
          longOnly={true} 
          className="pb-0" 
          topRoundedOnly={true}
        />
      </section>
  )
}

export default SquareCarousel