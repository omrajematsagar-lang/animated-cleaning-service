import React from 'react';
import { Sparkles, ArrowUp, Phone, MessageSquare, MapPin } from 'lucide-react';
import { business } from '../config/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020306] text-slate-400 pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-emerald-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-white">
                {business.name}
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Premium agency-standard residential and commercial cleaning services based in Nashik, Maharashtra. Turning dusty chaos into spotless comfort.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{business.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#transformation" className="hover:text-sky-400 transition-colors">Transformation</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-sky-400 transition-colors">Our Work</a></li>
              <li><a href="#owners" className="hover:text-sky-400 transition-colors">Leadership</a></li>
              <li><a href="#faq" className="hover:text-sky-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-widest">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Office Cleaning</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Move-In Cleaning</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Move-Out Cleaning</a></li>
            </ul>
          </div>

          {/* Owners & Direct Connection */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-widest">
              DIRECT CONTACT
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px]">Arjun Gagre:</span>
                <a href={`tel:${business.phones[0].replace(/\s+/g, '')}`} className="text-white hover:text-sky-400 transition-colors font-medium">
                  {business.phones[0]}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Karan Gagre:</span>
                <a href={`tel:${business.phones[1].replace(/\s+/g, '')}`} className="text-white hover:text-emerald-400 transition-colors font-medium">
                  {business.phones[1]}
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-pink-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </a>
                <a
                  href={`tel:${business.phones[0].replace(/\s+/g, '')}`}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {business.name}. All rights reserved. Crafted with care in Nashik, Maharashtra.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
