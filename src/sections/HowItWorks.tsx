import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, PhoneCall, Calendar, SprayCan, Smile } from 'lucide-react';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);

  const stepIcons = [
    <PhoneCall className="w-6 h-6 text-sky-400" />,
    <Calendar className="w-6 h-6 text-teal-400" />,
    <SprayCan className="w-6 h-6 text-emerald-400" />,
    <Smile className="w-6 h-6 text-cyan-400" />,
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate line fill from top to bottom as user scrolls
      if (lineFillRef.current) {
        gsap.to(lineFillRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'bottom 80%',
            scrub: 1,
          },
        });
      }

      // Step cards staggered activation
      const steps = gsap.utils.toArray<HTMLElement>('.timeline-step-node');
      steps.forEach((step) => {
        gsap.fromTo(
          step,
          {
            scale: 0.9,
            opacity: 0.3,
            y: 30,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 75%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#060911] text-white overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SEAMLESS WORKFLOW</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
            HOW IT WORKS
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base mt-4">
            Four simple steps from your first inquiry to an impeccably clean and relaxed sanctuary.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative">
          
          {/* Vertical Connecting Line (Background Track) */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-white/10 rounded-full overflow-hidden">
            {/* Animated Fill Line */}
            <div
              ref={lineFillRef}
              className="w-full h-0 bg-gradient-to-b from-sky-400 via-teal-400 to-emerald-400 rounded-full"
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-16 sm:space-y-24">
            {business.howItWorks.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.step}
                  className={`timeline-step-node relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card (Left or Right on desktop) */}
                  <div className={`w-full sm:w-[44%] pl-16 sm:pl-0 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}>
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1424] border border-white/10 hover:border-sky-400/40 transition-all duration-300 shadow-xl group">
                      <span className="font-mono text-xs text-sky-400 uppercase tracking-widest block mb-1">
                        STEP {step.step}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase mb-2 group-hover:text-sky-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Circle Node Marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#07090e] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.5)] z-20">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden sm:block w-[44%]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
