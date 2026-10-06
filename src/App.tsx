import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { BigTypography } from './sections/BigTypography';
import { SignatureTransformation } from './sections/SignatureTransformation';
import { BeforeAfterSlider } from './sections/BeforeAfterSlider';
import { Services } from './sections/Services';
import { HorizontalServices } from './sections/HorizontalServices';
import { About } from './sections/About';
import { Owners } from './sections/Owners';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Statistics } from './sections/Statistics';
import { Gallery } from './sections/Gallery';
import { Testimonials } from './sections/Testimonials';
import { HowItWorks } from './sections/HowItWorks';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Initialize Lenis Smooth Scrolling and link with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#f8fafc] overflow-x-hidden">
      {/* Cinematic Opening Preloader Sequence */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Persistent Glassmorphic Navigation */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className={`transition-opacity duration-700 ${loadingComplete ? 'opacity-100' : 'opacity-90'}`}>
        {/* 1. Hero with Parallax & Scroll Transformation */}
        <Hero />

        {/* 2. Full-Screen Big Typography Section (DIRTY -> CLEAN kinetic sequence) */}
        <BigTypography />

        {/* 3. Signature Transformation (Pinned Scroll Wipe: "FROM THIS..." -> "...TO THIS.") */}
        <SignatureTransformation />

        {/* 4. Interactive Before / After Slider (< > Draggable Handle & Nashik Project) */}
        <BeforeAfterSlider />

        {/* 5. What We Clean (Crisp Light-Clean Rhythmic Contrast with 6 Service Cards) */}
        <Services />

        {/* 6. Horizontal Scroll Services/Story Journey */}
        <HorizontalServices />

        {/* 7. Cinematic About ("WE DON'T JUST CLEAN. WE CREATE SPACES YOU LOVE.") */}
        <About />

        {/* 8. The People Behind the Clean (Arjun Gagre & Karan Gagre) */}
        <Owners />

        {/* 9. Why Choose Neat_Clean_Services */}
        <WhyChooseUs />

        {/* 10. Configurable Statistics Counters */}
        <Statistics />

        {/* 11. Curated Full-Screen Gallery & Interactive Lightbox */}
        <Gallery />

        {/* 12. Testimonials (Editable placeholders & touch/mouse swipe) */}
        <Testimonials />

        {/* 13. How It Works (Scroll-drawn connecting timeline) */}
        <HowItWorks />

        {/* 14. Animated FAQ Accordion */}
        <FAQ />

        {/* 15. Dramatic Final CTA & Animated Quote Form */}
        <Contact />
      </main>

      {/* Agency Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
