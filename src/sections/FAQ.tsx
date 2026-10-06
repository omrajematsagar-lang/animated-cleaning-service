import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { business } from '../config/business';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#070b16] text-white overflow-hidden border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLARITY & ASSURANCE</span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Everything you need to know about our cleaning processes, coverage across Nashik, and booking.
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4">
          {business.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#0e1424] border border-white/10 overflow-hidden transition-colors hover:border-sky-400/30"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-lg sm:text-xl text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>

                  {/* Animated Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="p-1 rounded-full bg-white/5 text-slate-400 flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.35, ease: 'easeOut' },
                          opacity: { duration: 0.25, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: 'easeIn' },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-semibold text-white text-sm sm:text-base">Have a unique or custom requirement?</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Speak directly with owners Arjun or Karan Gagre anytime.</p>
          </div>
          <a
            href={`tel:${business.phones[0].replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:text-white hover:bg-sky-500/30 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call {business.phones[0]}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
