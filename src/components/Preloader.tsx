import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'words' | 'wipe' | 'done'>('initial');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ['NEAT', 'CLEAN', 'SERVICES'];

  useEffect(() => {
    // Phase 1: show full title briefly
    const timer1 = setTimeout(() => {
      setPhase('words');
    }, 600);

    // Phase 2: cycle through NEAT -> CLEAN -> SERVICES
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < 2) return prev + 1;
        clearInterval(wordInterval);
        return prev;
      });
    }, 450);

    // Phase 3: sparkle wipe
    const timer2 = setTimeout(() => {
      setPhase('wipe');
    }, 1900);

    // Phase 4: complete & reveal hero
    const timer3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearInterval(wordInterval);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05070b] text-white overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle background ambient mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12)_0,transparent_60%)]" />

          {/* Sparkle particle sweeping across */}
          {phase === 'wipe' && (
            <motion.div
              className="absolute h-0.5 w-48 bg-gradient-to-r from-transparent via-sky-400 to-emerald-400 blur-[1px] shadow-[0_0_24px_rgba(56,189,248,0.8)]"
              initial={{ x: '-100vw', y: '0%' }}
              animate={{ x: '100vw', y: '0%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          )}

          <div className="relative z-10 flex flex-col items-center">
            {/* Sparkle icon header */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2 text-sky-400"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-slate-400">
                Nashik, India
              </span>
            </motion.div>

            {/* Word sequencing */}
            <div className="h-24 flex items-center justify-center overflow-hidden">
              {phase === 'initial' ? (
                <motion.h1
                  key="initial-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em] text-center"
                >
                  NEAT_CLEAN_SERVICES
                </motion.h1>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={words[currentWordIndex]}
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -40, filter: 'blur(8px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-emerald-300 text-center"
                  >
                    {words[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Minimal loader line indicator */}
            <div className="mt-8 w-40 h-[2px] bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-emerald-400"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
