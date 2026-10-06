import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { business } from '../config/business';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'TRANSFORMATION', href: '#transformation' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT', href: '#about' },
    { name: 'OUR WORK', href: '#gallery' },
    { name: 'OWNERS', href: '#owners' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleScrollTo(e, '#hero')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-emerald-400 p-[1px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-sky-300 transition-colors">
                neat_clean_services
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="relative text-xs tracking-[0.16em] uppercase font-medium text-slate-300 hover:text-white transition-colors duration-200 py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                data-cursor="open"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white overflow-hidden rounded-full group border border-sky-400/40 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  GET A QUOTE
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#07090e]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              <p className="text-[11px] font-mono tracking-widest text-sky-400 uppercase">
                // NAVIGATION
              </p>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.25 }}
                  className="font-display text-2xl font-bold tracking-wider text-slate-200 hover:text-sky-400 py-2 border-b border-white/5 flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold text-sm uppercase tracking-widest shadow-lg shadow-sky-500/20"
              >
                REQUEST A FREE QUOTE
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${business.phones[0].replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  CALL ARJUN
                </a>
                <a
                  href={`tel:${business.phones[1].replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  CALL KARAN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
