import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HorizontalServices: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const horizontalSlides = [
    {
      title: "CLEAN HOMES",
      subtitle: "Living rooms, master suites & luxury villas in Nashik",
      image: "/images/services/residential.jpg",
      tag: "RESIDENTIAL SANCTUARY",
      number: "01",
    },
    {
      title: "CLEAN OFFICES",
      subtitle: "Corporate cabins, workstations, and glass partition clarity",
      image: "/images/services/office.jpg",
      tag: "PROFESSIONAL WORKSPACE",
      number: "02",
    },
    {
      title: "DEEP CLEANING",
      subtitle: "Steam extraction, grout scrubbing & microbial elimination",
      image: "/images/services/deep-cleaning.jpg",
      tag: "INTENSIVE RESTORATION",
      number: "03",
    },
    {
      title: "FRESH SPACES",
      subtitle: "Pure air, allergen-free surfaces & soothing freshness",
      image: "/images/services/move-in.jpg",
      tag: "HYGIENE ELEVATION",
      number: "04",
    },
    {
      title: "HAPPY CUSTOMERS",
      subtitle: "Peace of mind guaranteed by owners Arjun & Karan Gagre",
      image: "/images/gallery/gallery-1.jpg",
      tag: "EXCELLENCE DELIVERED",
      number: "05",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Only apply GSAP pin horizontal scroll on desktop/tablets (min-width 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const totalWidth = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#06080d] text-white py-20 lg:py-0 lg:h-screen flex flex-col justify-center overflow-hidden z-20 border-t border-b border-white/10"
    >
      {/* Top Banner on Desktop */}
      <div className="max-w-7xl mx-auto w-full px-6 mb-8 lg:absolute lg:top-12 lg:left-12 lg:z-30">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CINEMATIC SERVICE ODYSSEY</span>
        </div>
      </div>

      {/* Horizontal Sliding Track (Horizontal scroll on desktop, swipeable cards on mobile) */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-12 px-6 lg:px-20 w-max items-center py-6"
        >
          {horizontalSlides.map((slide) => (
            <div
              key={slide.title}
              data-cursor="view"
              className="relative w-[85vw] sm:w-[480px] lg:w-[680px] h-[480px] lg:h-[580px] rounded-3xl overflow-hidden bg-[#0e1320] border border-white/15 flex-shrink-0 group shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Background Photography with Parallax Scale */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/40 to-transparent pointer-events-none" />

              {/* Number Watermark */}
              <div className="absolute top-8 right-8 font-mono text-4xl lg:text-5xl font-extrabold text-white/20 select-none group-hover:text-sky-400/40 transition-colors">
                {slide.number}
              </div>

              {/* Card Meta Content */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-[11px] font-mono tracking-widest uppercase mb-3">
                  {slide.tag}
                </span>

                <h3 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mb-3 drop-shadow-md">
                  {slide.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base max-w-md font-light mb-6">
                  {slide.subtitle}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 group-hover:text-emerald-300 transition-colors uppercase"
                >
                  <span>Book this transformation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Hint on Desktop */}
      <div className="hidden lg:flex absolute bottom-8 right-12 z-30 items-center gap-2 text-xs font-mono text-slate-400">
        <span>HORIZONTAL SCROLL TRIGGER ACTIVE</span>
        <div className="w-8 h-[2px] bg-sky-400 animate-pulse" />
      </div>
    </section>
  );
};
