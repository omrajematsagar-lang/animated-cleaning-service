import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { business } from '../config/business';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState<'slider' | 'real-project'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0f1d] text-white overflow-hidden border-t border-b border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE RESTORATION INSPECTOR</span>
          </div>
          
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white mb-4">
            SLIDE TO REVEAL THE MAGIC
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Drag the handle horizontally to compare raw post-renovation condition against our surgical deep-clean finish.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 mt-8 gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('slider')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'slider'
                  ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Slider Comparison
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('real-project')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === 'real-project'
                  ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Nashik Living Room Project Photo
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Slider */}
        {activeTab === 'slider' && (
          <div className="space-y-6">
            <div
              ref={containerRef}
              onMouseDown={handlePointerDown}
              onMouseUp={handlePointerUp}
              onMouseLeave={handlePointerUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onTouchStart={handlePointerDown}
              onTouchEnd={handlePointerUp}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[620px] rounded-3xl overflow-hidden select-none cursor-ew-resize border border-white/20 shadow-[0_20px_70px_rgba(0,0,0,0.8)] bg-black"
            >
              {/* RIGHT / AFTER IMAGE (Full width underlying layer) */}
              <img
                src="/images/before-after/clean-home.jpg"
                alt="After: Bright clean finished home"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* AFTER LABEL */}
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full glass-panel-dark border border-emerald-400/50 text-emerald-300 text-xs font-bold tracking-widest flex items-center gap-2 pointer-events-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>AFTER: SPOTLESS FINISH</span>
              </div>

              {/* LEFT / BEFORE IMAGE (Clipped overlay) */}
              <div
                className="absolute inset-0 h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/images/before-after/dirty-home.jpg"
                  alt="Before: Dirty post-renovation home"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  }}
                />
                
                {/* BEFORE LABEL */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full glass-panel-dark border border-amber-500/50 text-amber-300 text-xs font-bold tracking-widest flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>BEFORE: DIRTY STATE</span>
                </div>
              </div>

              {/* SLIDER DIVIDER LINE */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* CIRCULAR DRAGGABLE HANDLE WITH < > */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-slate-900 shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-2 border-sky-400 flex items-center justify-center font-bold text-sm tracking-tighter cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <div className="flex items-center gap-1 select-none font-mono">
                    <span className="text-xs">&lt;</span>
                    <MoveHorizontal className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-xs">&gt;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Drag Hint & Details */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 px-2">
              <div className="flex items-center gap-2">
                <MoveHorizontal className="w-4 h-4 text-sky-400" />
                <span>Drag slider left or right with your mouse or finger</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-amber-400">● 100% Dust Free</span>
                <span className="text-sky-400">● Steam Sanitized</span>
                <span className="text-emerald-400">● Non-Toxic Polish</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Real Nashik Living Room Project Photo */}
        {activeTab === 'real-project' && (
          <div className="bg-[#0e131f] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  VERIFIED NASHIK RESTORATION PROJECT
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Living Room Deep Clean & Sofa Extraction
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${business.phones[0].replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400 text-xs font-semibold text-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  Call Arjun
                </a>
                <a
                  href={business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-semibold text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/before-after/living-room-transformation.jpg"
                alt="Actual living room before and after transformation by Neat Clean Services in Nashik"
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-sky-400 text-xs font-mono uppercase">Floor Scrubbing</span>
                <p className="text-white text-sm font-semibold mt-1">High-speed rotary machine polish</p>
                <p className="text-slate-400 text-xs mt-1">Removes plaster, paint specks, and grouting haze.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-teal-400 text-xs font-mono uppercase">Upholstery Care</span>
                <p className="text-white text-sm font-semibold mt-1">Deep fabric steam extraction</p>
                <p className="text-slate-400 text-xs mt-1">Eliminates dust mites, spills, and deep odors.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-emerald-400 text-xs font-mono uppercase">Glass & Fixtures</span>
                <p className="text-white text-sm font-semibold mt-1">Streak-free window detailing</p>
                <p className="text-slate-400 text-xs mt-1">Surgical cleanup of sliding aluminum channels.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
