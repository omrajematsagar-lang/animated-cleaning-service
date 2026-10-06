import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const revealTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
      .from('.hero-title-line', {
        y: 80,
        opacity: 0,
        rotateX: -20,
        stagger: 0.15,
        duration: 1,
      }, '-=0.5')
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta-group', {
        y: 25,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from(imageWrapperRef.current, {
        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
      }, '-=0.8');

      // 2. ScrollTrigger Hero Scroll Transformation
      if (heroRef.current && imageRef.current && headlineRef.current && revealTextRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.15,
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.to(headlineRef.current, {
          yPercent: -40,
          opacity: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '70% top',
            scrub: true,
          },
        });

        // Cinematic reveal banner: "LET THE TRANSFORMATION BEGIN."
        gsap.fromTo(
          revealTextRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: heroRef.current,
              start: '55% top',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090e]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Typography & CTAs */}
          <div ref={headlineRef} className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Location & Trust Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs sm:text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Nashik, Maharashtra</span>
              <span className="text-white/20">|</span>
              <span className="text-sky-300 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Agency Standard
              </span>
            </div>

            {/* Huge Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-[0.98] text-white uppercase select-none mb-6">
              <span className="block hero-title-line overflow-hidden">
                WE CLEAN.
              </span>
              <span className="block hero-title-line overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                YOU RELAX.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-slate-300 font-light max-w-xl mb-10 leading-relaxed">
              Professional cleaning services in Nashik. We transform chaotic, dusty spaces into immaculate, sun-drenched sanctuaries.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* GET A FREE QUOTE */}
              <a
                href="#contact"
                onClick={handleScrollToQuote}
                data-cursor="open"
                className="relative group inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-sky-500 to-emerald-500 overflow-hidden shadow-[0_10px_35px_rgba(2,132,199,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>GET A FREE QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              {/* WHATSAPP US */}
              <a
                href={business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="relative group inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-slate-200 bg-white/[0.04] border border-white/15 hover:border-emerald-400/60 hover:text-white transition-all duration-300 hover:bg-emerald-500/10 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WHATSAPP US</span>
                </span>
              </a>
            </div>

            {/* Owner quick contact pill */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="block text-slate-500 uppercase tracking-widest text-[10px]">DIRECT SUPERVISION</span>
                <span className="text-slate-200 font-medium">Arjun Gagre & Karan Gagre</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="block text-slate-500 uppercase tracking-widest text-[10px]">PHONE</span>
                <a href={`tel:${business.phones[0].replace(/\s+/g, '')}`} className="text-sky-400 hover:underline">
                  {business.phones[0]}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Immersive Hero Image Container */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageWrapperRef}
              data-cursor="view"
              className="relative w-full aspect-[4/5] sm:aspect-[4/4] lg:aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group"
            >
              <img
                ref={imageRef}
                src="/images/hero/hero-clean-home.jpg"
                alt="Immaculate luxury sunlit living room cleaned by Neat Clean Services in Nashik"
                className="w-full h-full object-cover object-center will-change-transform scale-100 transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-black/20 pointer-events-none" />

              {/* Floating aesthetic pill on the image */}
              <div className="absolute top-6 right-6 px-4 py-2 rounded-2xl glass-panel-dark border border-white/20 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-xs font-semibold text-white tracking-wider uppercase">
                  Spotless Guarantee
                </span>
              </div>

              {/* Bottom detail pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-dark border border-white/15 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Restoration standard</span>
                    <span className="text-white font-semibold">Vitrified, Fabric & Chrome Sanitized</span>
                  </div>
                  <span className="text-emerald-400 font-bold text-sm tracking-widest">100% PURE</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic scroll reveal text container: "LET THE TRANSFORMATION BEGIN." */}
      <div
        ref={revealTextRef}
        className="relative z-10 w-full mt-16 text-center select-none"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="font-display text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-emerald-300">
            LET THE TRANSFORMATION BEGIN.
          </span>
        </div>
      </div>
    </section>
  );
};
