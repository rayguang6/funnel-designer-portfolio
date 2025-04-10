const imageLink = {
    hero: '/images/hero-funnel.png',
    profilePicture: '/images/profile-image.png',
    // Adding carousel image paths for reuse
    longCarousel: Array.from({ length: 15 }, (_, i) => `/images/long-carousel/${i + 1}.png`),
    squareCarousel: Array.from({ length: 12 }, (_, i) => `/images/square-carousel/${i + 1}.png`),
}

export default imageLink;