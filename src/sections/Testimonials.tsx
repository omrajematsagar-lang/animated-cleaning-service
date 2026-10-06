import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Star, MoveHorizontal } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Editable placeholders as requested (No fake reviews)
  const testimonials = [
    {
      id: 1,
      quote: "[REAL CUSTOMER REVIEW - PLACEHOLDER]\n\"Arjun and Karan's team transformed our post-renovation bungalow in Gangapur Road. Zero dust remaining on glass tracks and vitrified tiles.\"",
      name: "[REAL CUSTOMER NAME]",
      location: "Gangapur Road, Nashik",
      service: "Post-Renovation Deep Clean",
      rating: 5,
    },
    {
      id: 2,
      quote: "[REAL CUSTOMER REVIEW - PLACEHOLDER]\n\"Extremely professional office cleaning service. Our commercial conference rooms and workstation carpets look brand new.\"",
      name: "[REAL CUSTOMER NAME]",
      location: "College Road, Nashik",
      service: "Commercial Office Cleaning",
      rating: 5,
    },
    {
      id: 3,
      quote: "[REAL CUSTOMER REVIEW - PLACEHOLDER]\n\"The steam sanitization for our modular kitchen eradicated months of grease deposits completely. Highly recommend neat_clean_services!\"",
      name: "[REAL CUSTOMER NAME]",
      location: "Indira Nagar, Nashik",
      service: "Kitchen Steam Detailing",
      rating: 5,
    },
    {
      id: 4,
      quote: "[REAL CUSTOMER REVIEW - PLACEHOLDER]\n\"Smooth move-in experience. They scrubbed the entire flat before our furniture arrived. Spotless and fresh fragrance throughout.\"",
      name: "[REAL CUSTOMER NAME]",
      location: "Pathardi Phata, Nashik",
      service: "Move-In Sanitization",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#080d1a] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC FEEDBACK</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white mb-4">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Verified feedback placeholders from homeowners and business managers across Nashik.
          </p>
        </div>

        {/* Drag Hint */}
        <div className="flex items-center justify-center gap-2 text-xs text-sky-400/80 font-mono uppercase tracking-wider mb-8">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
          <span>DRAG / SWIPE TO EXPLORE REVIEWS</span>
        </div>

        {/* Draggable Carousel */}
        <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-8">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -750 }}
            className="flex gap-6 sm:gap-8 w-max"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] sm:w-[420px] p-8 sm:p-10 rounded-3xl bg-[#0f172a]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col justify-between flex-shrink-0 select-none group hover:border-sky-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-sky-400 opacity-60" />
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line font-light">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-display font-bold text-base text-white tracking-wide">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                    <span>{item.location}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{item.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
