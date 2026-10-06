import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Phone, MessageSquare } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const Owners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const arjunCardRef = useRef<HTMLDivElement>(null);
  const karanCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Arjun card enters from left
      if (arjunCardRef.current) {
        gsap.fromTo(
          arjunCardRef.current,
          {
            x: -100,
            opacity: 0,
            clipPath: 'inset(0 100% 0 0 round 24px)',
          },
          {
            x: 0,
            opacity: 1,
            clipPath: 'inset(0 0% 0 0 round 24px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Karan card enters from right
      if (karanCardRef.current) {
        gsap.fromTo(
          karanCardRef.current,
          {
            x: 100,
            opacity: 0,
            clipPath: 'inset(0 0 0 100% round 24px)',
          },
          {
            x: 0,
            opacity: 1,
            clipPath: 'inset(0 0 0 0% round 24px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Staggered text reveal for names
      gsap.fromTo(
        '.owner-name-stagger',
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="owners"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#06080d] text-white overflow-hidden border-t border-white/10"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LEADERSHIP & ACCOUNTABILITY</span>
          </div>
          
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
            THE PEOPLE BEHIND THE CLEAN
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base mt-3">
            Directly owned and managed in Nashik, Maharashtra.
          </p>
        </div>

        {/* Two Premium Owner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">
          
          {/* Card 1: ARJUN GAGRE (Enters from left) */}
          <div
            ref={arjunCardRef}
            data-cursor="view"
            className="group relative bg-[#0e1320] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-sky-400/50 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container with Zoom and Overlay */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
              <img
                src={business.owners[0].image}
                alt={business.owners[0].name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Subtle gradient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
            </div>

            {/* Content Bottom Overlay */}
            <div className="p-8 absolute bottom-0 left-0 right-0 z-10">
              <div className="owner-name-stagger transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-sky-400 text-xs font-mono tracking-widest uppercase block mb-1 font-semibold">
                  {business.owners[0].role}
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                  {business.owners[0].name}
                </h3>
              </div>

              {/* Direct Call / Contact Action */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href={`tel:${business.phones[0].replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{business.phones[0]}</span>
                </a>

                <a
                  href={business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: KARAN GAGRE (Enters from right) */}
          <div
            ref={karanCardRef}
            data-cursor="view"
            className="group relative bg-[#0e1320] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container with Zoom and Overlay */}
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
              <img
                src={business.owners[1].image}
                alt={business.owners[1].name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Subtle gradient vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
            </div>

            {/* Content Bottom Overlay */}
            <div className="p-8 absolute bottom-0 left-0 right-0 z-10">
              <div className="owner-name-stagger transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase block mb-1 font-semibold">
                  {business.owners[1].role}
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase">
                  {business.owners[1].name}
                </h3>
              </div>

              {/* Direct Call / Contact Action */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href={`tel:${business.phones[1].replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{business.phones[1]}</span>
                </a>

                <a
                  href={business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
