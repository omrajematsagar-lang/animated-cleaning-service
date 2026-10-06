import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { business } from '../config/business';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={business.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <MessageSquare className="w-6 h-6 fill-white" />

        <motion.span
          initial={{ width: 0, opacity: 0, marginLeft: 0 }}
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            marginLeft: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden whitespace-nowrap font-display font-bold text-xs uppercase tracking-wider select-none pr-1"
        >
          CHAT WITH US
        </motion.span>

        {/* Subtle ping aura */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-300" />
        </span>
      </a>
    </div>
  );
};
