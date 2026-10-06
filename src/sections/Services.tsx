import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.service-card');

      gsap.fromTo(
        cards,
        {
          y: 70,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-slate-900 overflow-hidden"
    >
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-mono tracking-widest uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 uppercase">
              WHAT WE CLEAN
            </h2>
          </div>

          <p className="text-slate-600 text-base sm:text-lg max-w-md leading-relaxed">
            From modern residences to commercial enterprises across Nashik, our specialized teams execute deep restorative cleaning with hospital-grade precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.services.map((service) => (
            <div
              key={service.id}
              data-cursor="view"
              className="service-card group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Card Image with Mask & Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Number Badge with Animated Position Shift */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-xl bg-slate-900/85 backdrop-blur-md text-white font-mono font-bold text-sm tracking-widest transition-all duration-300 group-hover:translate-x-1 group-hover:bg-sky-600">
                  {service.id}
                </div>

                {/* Floating Category Tag */}
                <div className="absolute bottom-4 left-4 z-10 flex gap-1.5 flex-wrap">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-2xl text-slate-900 group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Expanded Details / Benefits on hover */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Chemical-free & Pet Safe
                  </span>
                  <a
                    href="#contact"
                    className="text-sky-600 font-bold hover:underline uppercase tracking-wider text-[11px]"
                  >
                    Request Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
