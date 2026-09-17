import React from 'react';
import { Compass, Building2, Sofa, Ruler, Users, ShieldCheck } from 'lucide-react';
import { TRUST_HIGHLIGHTS } from '../data/architecturalData';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-[#F97316]" />,
  Building2: <Building2 className="w-6 h-6 text-[#F97316]" />,
  Sofa: <Sofa className="w-6 h-6 text-[#F97316]" />,
  Ruler: <Ruler className="w-6 h-6 text-[#F97316]" />,
  Users: <Users className="w-6 h-6 text-[#F97316]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#F97316]" />,
};

export const TrustHighlights: React.FC = () => {
  return (
    <section id="trust-highlights" className="py-14 sm:py-16 bg-[#FFF9F3] border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>FOUNDATION OF EXCELLENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] tracking-tight">
            Architectural Precision Across Every Phase
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            A disciplined, holistic approach uniting design ideation, engineering durability, and bespoke craftsmanship.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white p-7 rounded-xl border border-[#F3F4F6] hover:border-[#F97316]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(249,115,22,0.08)] flex flex-col justify-between"
            >
              {/* Top Row: Icon and Accent indicator */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#FFF0E5] group-hover:bg-[#F97316] transition-colors duration-300 flex items-center justify-center group-hover:text-white">
                    {React.cloneElement(iconMap[item.icon] as React.ReactElement, {
                      className: 'w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300',
                    })}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#6B7280]/60 group-hover:text-[#F97316] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#F97316] transition-colors mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Orange Line */}
              <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between text-xs font-semibold text-[#F97316]">
                <span className="tracking-wider uppercase text-[11px]">TIMS Standards</span>
                <div className="w-5 h-[2px] bg-[#F97316] rounded-full group-hover:w-10 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
