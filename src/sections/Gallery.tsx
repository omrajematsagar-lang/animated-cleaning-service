import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  location: string;
  spanClass: string;
}

export const Gallery: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/gallery/gallery-1.jpg",
      title: "Gangapur Road Luxury Living Room",
      category: "Residential Deep Cleaning",
      location: "Gangapur Rd, Nashik",
      spanClass: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
      id: 2,
      src: "/images/gallery/gallery-2.jpg",
      title: "College Road Modular Kitchen Detailing",
      category: "Steam Degreasing & Polish",
      location: "College Rd, Nashik",
      spanClass: "md:col-span-1 aspect-[4/3]",
    },
    {
      id: 3,
      src: "/images/gallery/gallery-3.jpg",
      title: "Chef Sanctuary Kitchen Sanitation",
      category: "Deep Sanitization",
      location: "Govind Nagar, Nashik",
      spanClass: "md:col-span-1 aspect-[4/3]",
    },
    {
      id: 4,
      src: "/images/gallery/gallery-4.jpg",
      title: "Designer Vitrified Tile Scrubbing",
      category: "Grout & Surface Machine Wash",
      location: "Indira Nagar, Nashik",
      spanClass: "md:col-span-1 aspect-[4/3]",
    },
    {
      id: 5,
      src: "/images/gallery/gallery-5.jpg",
      title: "Indira Nagar Minimalist Suite",
      category: "Move-In Detailing",
      location: "Indira Nagar, Nashik",
      spanClass: "md:col-span-2 aspect-[16/9]",
    },
    {
      id: 6,
      src: "/images/gallery/gallery-6.jpg",
      title: "Master Suite Upholstery Revitalization",
      category: "Fabric Extraction",
      location: "Pathardi Phata, Nashik",
      spanClass: "md:col-span-1 aspect-[4/3]",
    },
    {
      id: 7,
      src: "/images/gallery/gallery-7.jpg",
      title: "Modern Architectural Villa Handover",
      category: "Complete Post-Renovation Handover",
      location: "Gangapur Rd, Nashik",
      spanClass: "md:col-span-2 aspect-[16/9]",
    },
    {
      id: 8,
      src: "/images/gallery/gallery-8.jpg",
      title: "Sunlit Panoramic Balcony Glass Detailing",
      category: "Streak-Free Window Care",
      location: "Panchavati, Nashik",
      spanClass: "md:col-span-1 aspect-[4/3]",
    },
  ];

  // Parallax scroll effects
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.gallery-item-parallax');

      items.forEach((item, i) => {
        const speed = i % 2 === 0 ? 30 : -30;
        gsap.to(item, {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, galleryItems.length]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#07090e] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CURATED PORTFOLIO</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white">
              OUR WORK
            </h2>
          </div>

          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            Every project represents a tailored journey from heavy residue to sterile perfection. Click any project to inspect full-screen.
          </p>
        </div>

        {/* Masonry / Parallax Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              data-cursor="view"
              className={`gallery-item-parallax group relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer bg-slate-900 ${item.spanClass}`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category tag */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-sky-300 uppercase">
                {item.category}
              </div>

              {/* Hover Overlay: VIEW PROJECT → */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-sky-500/90 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg">
                  <Eye className="w-4 h-4" />
                  <span>VIEW PROJECT →</span>
                </div>
              </div>

              {/* Bottom Info Title */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-slate-400 text-xs font-mono mb-1">{item.location}</p>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-20">
            <div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">
                {galleryItems[selectedIdx].category}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-2xl">
                {galleryItems[selectedIdx].title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedIdx(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Large Image & Navigation Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            <button
              type="button"
              onClick={() =>
                setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null))
              }
              className="absolute left-2 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={galleryItems[selectedIdx].src}
              alt={galleryItems[selectedIdx].title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
            />

            <button
              type="button"
              onClick={() =>
                setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null))
              }
              className="absolute right-2 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Details */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4 max-w-4xl mx-auto w-full">
            <span>{galleryItems[selectedIdx].location}</span>
            <span>
              {selectedIdx + 1} of {galleryItems.length}
            </span>
            <span className="text-emerald-400 font-semibold">Verified Clean Standard</span>
          </div>
        </div>
      )}
    </section>
  );
};
