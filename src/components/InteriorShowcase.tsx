import React, { useState } from 'react';
import { INTERIOR_SHOWCASE_DATA } from '../data/architecturalData';
import { Sparkles, Maximize2, ArrowRight } from 'lucide-react';

interface InteriorShowcaseProps {
  onOpenConsultation: () => void;
}

export const InteriorShowcase: React.FC<InteriorShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeItem, setActiveItem] = useState<typeof INTERIOR_SHOWCASE_DATA[0] | null>(null);

  return (
    <section id="interiors-showcase" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>BESPOKE FIT-OUT CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
              INTERIOR DESIGN & MATERIALITY SHOWCASE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-2xl">
              An exploration of custom textures, warm European wood slats, natural Italian marbles, and architectural cove illumination.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0"
          >
            <span>DISCUSS INTERIOR SCOPE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERIOR_SHOWCASE_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-white rounded-xl border border-[#F3F4F6] hover:border-[#F97316]/50 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(249,115,22,0.1)] overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Orange Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded bg-white/95 text-[10px] font-bold tracking-wider text-[#D95B16] uppercase border border-[#F97316]/30 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Marker */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 text-[#333333] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Image Overlay Details */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <div className="text-[11px] font-medium text-orange-200 uppercase tracking-wider mb-1">
                    Finish Palette: {item.finish}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-100 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Caption Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-[#F97316]">
                  <span className="text-[11px] uppercase tracking-wider text-[#333333]">TIMS Custom Specification</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#F3F4F6] p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3F4F6] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F97316]"
              >
                ✕
              </button>

              <div className="inline-block px-3 py-1 rounded bg-[#FFF0E5] text-xs font-bold text-[#D95B16] uppercase tracking-wider mb-2">
                {activeItem.category}
              </div>

              <h3 className="text-2xl font-extrabold text-[#333333] mb-2">
                {activeItem.title}
              </h3>

              <div className="text-xs font-semibold text-[#F97316] mb-4">
                Curated Materials: {activeItem.finish}
              </div>

              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5 bg-[#F3F4F6]">
                <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                {activeItem.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#F3F4F6]">
                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>REQUEST INTERIOR SPECIFICATION FOR THIS STYLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-md bg-[#F3F4F6] text-[#333333] font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
