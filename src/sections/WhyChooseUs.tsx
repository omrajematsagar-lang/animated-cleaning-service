import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Clock, HeartHandshake } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const icons = [
    <ShieldCheck className="w-7 h-7 text-sky-400" />,
    <Sparkles className="w-7 h-7 text-teal-400" />,
    <Clock className="w-7 h-7 text-emerald-400" />,
    <HeartHandshake className="w-7 h-7 text-cyan-400" />
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.why-card');

      gsap.fromTo(
        cards,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#090e1a] text-white overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STANDARDS OF DISTINCTION</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
            WHY NEAT_CLEAN_SERVICES?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base mt-4">
            Four foundational pillars that define our commitment to every client in Nashik.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.whyChooseUs.map((item, idx) => (
            <div
              key={item.id}
              className="why-card group relative p-8 rounded-3xl bg-[#0e1424] border border-white/10 hover:border-sky-400/40 shadow-xl transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-sky-400 transition-colors">
                    {item.id}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent glow */}
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-sky-500/0 to-transparent group-hover:via-sky-400/50 transition-all duration-500 mt-8 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
