import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const SignatureTransformation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dirtyLayerRef = useRef<HTMLDivElement>(null);
  const cleanLayerRef = useRef<HTMLDivElement>(null);
  const titleBeforeRef = useRef<HTMLHeadingElement>(null);
  const titleAfterRef = useRef<HTMLHeadingElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Initial State: "FROM THIS..." active, dirty image visible
      // 2. Mid scroll: dirty image wipes away via clipPath revealing clean image
      tl.to(dirtyLayerRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        ease: 'power1.inOut',
        duration: 2,
      }, 0)

      // Title crossfade: "FROM THIS..." fades out, "...TO THIS." fades in
      .to(titleBeforeRef.current, {
        opacity: 0,
        y: -30,
        filter: 'blur(8px)',
        duration: 0.8,
      }, 0.2)
      .fromTo(titleAfterRef.current, {
        opacity: 0,
        y: 30,
        filter: 'blur(8px)',
      }, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
      }, 1)

      // Progress bar fill
      .to(progressLineRef.current, {
        width: '100%',
        duration: 2,
        ease: 'none',
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="transformation"
      ref={containerRef}
      className="relative w-full h-screen bg-[#07090e] text-white flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-hidden z-20 select-none"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.8)_0,#05070a_100%)] pointer-events-none" />

      {/* Top Header Row with Dynamic Titles */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Dynamic Title Switcher */}
        <div className="relative h-16 sm:h-20 w-full max-w-lg flex items-center">
          <h2
            ref={titleBeforeRef}
            className="absolute top-0 left-0 font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-amber-200/90 uppercase drop-shadow-md"
          >
            "FROM THIS..."
          </h2>
          <h2
            ref={titleAfterRef}
            className="absolute top-0 left-0 opacity-0 font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-emerald-400 uppercase drop-shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          >
            "...TO THIS."
          </h2>
        </div>

        {/* Transformation Indicator Badge */}
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>CHAOS</span>
            <span className="text-white/40">→</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-semibold">PERFECTION</span>
          </div>
        </div>
      </div>

      {/* Main Visual Transformation Frame */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex-1 my-4 rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-black">
        
        {/* LAYER 1: CLEAN / AFTER (Underneath) */}
        <div
          ref={cleanLayerRef}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/images/before-after/clean-home.jpg"
            alt="Spotless clean interior after Neat Clean Services treatment"
            className="w-full h-full object-cover object-center scale-100"
          />
          
          {/* After Status Watermark */}
          <div className="absolute top-6 right-6 px-4 py-2 rounded-full glass-panel-dark border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-widest flex items-center gap-2 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>AFTER: 100% SANITIZED & SPOTLESS</span>
          </div>

          <div className="absolute bottom-6 right-6 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel-dark border border-white/20 text-xs">
            <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
            <div>
              <p className="font-semibold text-white">Full Deep Cleanse Complete</p>
              <p className="text-slate-400 text-[11px]">Vitrified floors, glass facade & allergen free</p>
            </div>
          </div>
        </div>

        {/* LAYER 2: DIRTY / BEFORE (Top layer with clipPath wipe) */}
        <div
          ref={dirtyLayerRef}
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: 'inset(0 0% 0 0)' }}
        >
          <img
            src="/images/before-after/dirty-home.jpg"
            alt="Dirty, cluttered room before cleaning services"
            className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.1]"
          />
          
          {/* Before Status Watermark */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full glass-panel-dark border border-amber-500/40 text-amber-300 text-xs font-bold tracking-widest flex items-center gap-2 backdrop-blur-md">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>BEFORE: POST-RENOVATION DUST & ACCUMULATED DIRT</span>
          </div>

          <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl glass-panel-dark border border-white/20 text-xs">
            <div>
              <p className="font-semibold text-amber-200">Raw Uncleaned Condition</p>
              <p className="text-slate-400 text-[11px]">Tile residue, wall grime & heavy particulate</p>
            </div>
          </div>
        </div>

        {/* Scroll Progress Line at Bottom of Frame */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
          <div
            ref={progressLineRef}
            className="h-full w-0 bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400"
          />
        </div>
      </div>

      {/* Footer Info & Instant Booking Bar */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-400 text-center sm:text-left">
          <span className="text-white font-medium">Scroll down</span> to complete the visual wipe. We restore properties to original showroom glory.
        </p>

        <a
          href="#contact"
          data-cursor="open"
          className="inline-flex items-center gap-2 text-sky-400 hover:text-white font-semibold uppercase tracking-wider transition-colors py-1"
        >
          <span>BOOK THIS TRANSFORMATION FOR YOUR SPACE</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
