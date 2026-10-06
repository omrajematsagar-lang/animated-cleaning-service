import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const BigTypography: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Pin container and sequence through the 6 state words
      const dirtyWords = gsap.utils.toArray<HTMLElement>('.dirty-word');
      const cleanWords = gsap.utils.toArray<HTMLElement>('.clean-word');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Initially set all words hidden except the first
      gsap.set(dirtyWords.concat(cleanWords), {
        opacity: 0,
        scale: 0.8,
        filter: 'blur(16px)',
        y: 60,
      });

      // Word 1: DIRTY
      tl.to(dirtyWords[0], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1,
      })
      .to(dirtyWords[0], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
        y: -60,
        duration: 1,
      }, '+=0.5')

      // Word 2: MESSY
      .to(dirtyWords[1], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1,
      })
      .to(dirtyWords[1], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
        y: -60,
        duration: 1,
      }, '+=0.5')

      // Word 3: UNCOMFORTABLE
      .to(dirtyWords[2], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1,
      })
      .to(dirtyWords[2], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
        y: -60,
        duration: 1,
      }, '+=0.5')

      // TRANSITION SPARKLE BACKGROUND
      .to('.transition-backdrop', {
        opacity: 0.85,
        duration: 0.8,
      }, '-=0.3')

      // Word 4: CLEAN
      .to(cleanWords[0], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
      })
      .to(cleanWords[0], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
        y: -60,
        duration: 1,
      }, '+=0.5')

      // Word 5: CLEAR
      .to(cleanWords[1], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.2,
      })
      .to(cleanWords[1], {
        opacity: 0,
        scale: 1.15,
        filter: 'blur(16px)',
        y: -60,
        duration: 1,
      }, '+=0.5')

      // Word 6: COMFORTABLE
      .to(cleanWords[2], {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.4,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#040609] text-white flex flex-col items-center justify-center overflow-hidden z-20 select-none"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07090e] to-[#030508] pointer-events-none" />
      
      {/* Dynamic clean radiance backdrop activated mid-scroll */}
      <div className="transition-backdrop absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18)_0,rgba(16,185,129,0.08)_40%,transparent_80%)] opacity-0 pointer-events-none transition-opacity duration-700" />

      {/* Subtle indicator header */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400 font-mono">
        <Sparkles className="w-4 h-4 text-sky-400" />
        <span>THE HUMAN EXPERIENCE OF SPACE</span>
      </div>

      {/* Words stage */}
      <div ref={wordsWrapRef} className="relative w-full max-w-6xl px-4 flex items-center justify-center min-h-[260px]">
        
        {/* DIRTY GROUP (Warm amber/ash dusty tint) */}
        <div className="dirty-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-amber-500/80 uppercase block mb-3">STATE: 01</span>
          <h2 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight text-stone-300 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            DIRTY.
          </h2>
        </div>

        <div className="dirty-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-amber-500/80 uppercase block mb-3">STATE: 02</span>
          <h2 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight text-stone-400 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            MESSY.
          </h2>
        </div>

        <div className="dirty-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-red-400/80 uppercase block mb-3">STATE: 03</span>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tight text-stone-300 drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            UNCOMFORTABLE.
          </h2>
        </div>

        {/* CLEAN GROUP (Luminescent cyan / emerald crystalline clarity) */}
        <div className="clean-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-sky-400 uppercase block mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" /> TRANSFORMATION
          </span>
          <h2 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400 drop-shadow-[0_0_50px_rgba(56,189,248,0.5)]">
            CLEAN.
          </h2>
        </div>

        <div className="clean-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-teal-300 uppercase block mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" /> PURITY
          </span>
          <h2 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-teal-300 drop-shadow-[0_0_50px_rgba(45,212,191,0.5)]">
            CLEAR.
          </h2>
        </div>

        <div className="clean-word absolute text-center pointer-events-none">
          <span className="text-xs font-mono tracking-[0.4em] text-emerald-400 uppercase block mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> SANCTUARY
          </span>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400 drop-shadow-[0_0_60px_rgba(16,185,129,0.5)]">
            COMFORTABLE.
          </h2>
        </div>

      </div>

      {/* Bottom hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 font-medium">
        <span>SCROLL TO WITNESS THE RESTORATION</span>
        <ArrowDown className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
      </div>
    </section>
  );
};
