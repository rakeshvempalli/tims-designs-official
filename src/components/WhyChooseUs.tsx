import React from 'react';
import { Compass, LayoutGrid, Sparkles, MessageSquare, CheckCircle2, Layers } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/architecturalData';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-[#F97316]" />,
  LayoutGrid: <LayoutGrid className="w-6 h-6 text-[#F97316]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#F97316]" />,
  MessageSquareCheck: <MessageSquare className="w-6 h-6 text-[#F97316]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[#F97316]" />,
  Layers: <Layers className="w-6 h-6 text-[#F97316]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-24 bg-[#FFF9F3] border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>OUR CLIENT COMMITMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            WHY CHOOSE TIMS DESIGNS
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            We merge design imagination with civil engineering rigor so your building project is delivered smoothly, reliably, and without hidden surprises.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-xl border border-[#F3F4F6] hover:border-[#F97316]/40 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(249,115,22,0.08)] flex flex-col justify-between group"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#FFF0E5] group-hover:bg-[#F97316] transition-colors duration-300 flex items-center justify-center">
                    {React.cloneElement(iconMap[item.icon] as React.ReactElement, {
                      className: 'w-6 h-6 text-[#F97316] group-hover:text-white transition-colors duration-300',
                    })}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#6B7280]/50 group-hover:text-[#F97316] transition-colors">
                    PILLAR 0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#333333] group-hover:text-[#F97316] transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#6B7280]">
                <span className="text-[11px] font-medium">Verified Practice</span>
                <span className="w-2 h-2 rounded-full bg-[#F97316]/40 group-hover:bg-[#F97316] transition-colors"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
