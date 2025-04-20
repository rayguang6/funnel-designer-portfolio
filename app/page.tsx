import { Hero, About, Services, Testimonial, FinalCTA, SquareCarousel, Footer, RecentWork, Topbar } from "./sections";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

  return (
    <div className="min-h-screen">

      <Topbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Landing Page Showcase Section */}
      <RecentWork id="landing-pages" className="py-24" />

      {/* Services Section */}
      <Services />

      {/* Who Am I Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Full width landing page carousel - only top edges rounded and no bottom space */}
      {/* <SquareCarousel /> */}

      {/* Simple Footer */}
      <Footer />
    </div>
  );
}
