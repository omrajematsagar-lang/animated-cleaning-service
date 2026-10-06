import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, MapPin, Award, CheckCircle } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Line by line reveal animation
      const lines = gsap.utils.toArray<HTMLElement>('.about-reveal-line');

      gsap.fromTo(
        lines,
        {
          y: 60,
          opacity: 0,
          rotateX: -15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.18,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textContainerRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#090d18] text-white overflow-hidden"
    >
      {/* Decorative ambient glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUR ETHOS & PURPOSE</span>
        </div>

        {/* Cinematic Headline - Line by Line */}
        <div ref={textContainerRef} className="space-y-4 mb-16">
          <div className="overflow-hidden">
            <h2 className="about-reveal-line font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-400 uppercase tracking-tight">
              WE DON'T JUST CLEAN.
            </h2>
          </div>

          <div className="overflow-hidden">
            <h3 className="about-reveal-line font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-emerald-300">
              WE CREATE SPACES
            </h3>
          </div>

          <div className="overflow-hidden">
            <h3 className="about-reveal-line font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-white">
              YOU LOVE.
            </h3>
          </div>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-white/10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-sm tracking-wider uppercase">
              <MapPin className="w-4 h-4" />
              <span>{business.displayName} — {business.location}</span>
            </div>

            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              We started <strong className="text-white font-medium">neat_clean_services</strong> with an unwavering commitment: transforming spaces from neglected, dusty, and overwhelming states into pristine environments of calm and elegance.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Founded and directly led by <strong className="text-slate-200">Arjun Gagre</strong> and <strong className="text-slate-200">Karan Gagre</strong> in Nashik, we believe a clean space isn't just about appearance—it enhances your mental clarity, physical well-being, and family comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Owner Supervision</h4>
                  <p className="text-xs text-slate-400 mt-1">Every project is inspected on-site by Arjun or Karan before sign-off.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Eco-Safe Formulas</h4>
                  <p className="text-xs text-slate-400 mt-1">Non-toxic, safe for babies, pets, and delicate marble finishes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <img
                src="/images/gallery/gallery-7.jpg"
                alt="Architectural clean luxury home in Nashik"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-dark border border-white/15">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 block mb-1">
                  SANCTUARY STANDARD
                </span>
                <p className="text-sm font-semibold text-white">
                  Restoring peace of mind across Nashik homes & offices.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
