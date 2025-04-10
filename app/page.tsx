
import { Hero, About, Services, Testimonial, FinalCTA, SquareCarousel, Footer, LandingPageShowcase } from "./sections";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Landing Page Showcase Section */}
      <LandingPageShowcase id="landing-pages" className="py-24" />

      {/* Services Section */}
      <Services />

      {/* Who Am I Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Full width landing page carousel - only top edges rounded and no bottom space */}
      <SquareCarousel />

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}
