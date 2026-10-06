import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { business } from '../config/business';

gsap.registerPlugin(ScrollTrigger);

export const Statistics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(business.stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let animated = false;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 85%',
      onEnter: () => {
        if (animated) return;
        animated = true;

        business.stats.forEach((stat, idx) => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = Math.floor(obj.val);
                return next;
              });
            },
          });
        });
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#05070c] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {business.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center hover:border-sky-400/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-emerald-300 mb-2">
                {counts[idx].toLocaleString()}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
