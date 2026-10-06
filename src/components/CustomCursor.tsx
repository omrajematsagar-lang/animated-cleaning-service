import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'view' | 'open' | 'pointer'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouch(!mediaQuery.matches);

    const handlePointerTypeChange = (e: MediaQueryListEvent) => {
      setIsTouch(!e.matches);
    };

    mediaQuery.addEventListener('change', handlePointerTypeChange);

    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      if (interactive) {
        const type = interactive.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorState('view');
          return;
        } else if (type === 'open') {
          setCursorState('open');
          return;
        }
      }

      if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorState('pointer');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerTypeChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const cursorVariants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#38bdf8',
      border: 'none',
    },
    pointer: {
      width: 38,
      height: 38,
      backgroundColor: 'rgba(56, 189, 248, 0.15)',
      border: '1.5px solid #38bdf8',
    },
    view: {
      width: 72,
      height: 72,
      backgroundColor: 'rgba(14, 165, 233, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
    open: {
      width: 68,
      height: 68,
      backgroundColor: 'rgba(16, 185, 129, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
    },
  };

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-display font-semibold text-white uppercase text-[10px] tracking-widest backdrop-blur-[2px] mix-blend-difference"
        animate={{
          x: mousePosition.x - (cursorState === 'view' ? 36 : cursorState === 'open' ? 34 : cursorState === 'pointer' ? 19 : 5),
          y: mousePosition.y - (cursorState === 'view' ? 36 : cursorState === 'open' ? 34 : cursorState === 'pointer' ? 19 : 5),
          ...cursorVariants[cursorState],
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.4,
        }}
      >
        {cursorState === 'view' && <span>VIEW</span>}
        {cursorState === 'open' && <span>OPEN</span>}
      </motion.div>
    </>
  );
};
