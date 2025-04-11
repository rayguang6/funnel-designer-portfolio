const imageLink = {
    hero: '/images/hero-funnel.png',
    profilePicture: '/images/profile-image.png',
    // Adding carousel image paths for reuse
    longCarousel: Array.from({ length: 15 }, (_, i) => `/images/long-carousel/${i + 1}.png`),
    squareCarousel: Array.from({ length: 12 }, (_, i) => `/images/square-carousel/${i + 1}.png`),
    // Testimonial images
    testimonial: {
        testimonial1: '/images/testimonial-1.png',
        testimonial2: '/images/testimonial-2.png',
        testimonial3: '/images/testimonial-3.png',
    }
}

export default imageLink;