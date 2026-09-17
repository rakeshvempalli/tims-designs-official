import React, { useState } from 'react';
import { Check, ArrowRight, MapPin, Building, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'philosophy' | 'approach'>('mission');

  const coreFocusAreas = [
    { label: 'Building Plans', desc: 'Vastu-aligned architectural layouts & 2D/3D sanction drawings' },
    { label: 'Residential & Commercial Construction', desc: 'RCC structural execution with multi-stage durability testing' },
    { label: 'Interior Design', desc: 'Turnkey fit-outs with premium cabinetry, lighting & materiality' },
    { label: 'Functional Layouts', desc: 'Zero square-foot wastage with optimized light and natural airflow' },
    { label: 'Modern Architectural Concepts', desc: 'Contemporary, timeless facades tailored to Bengaluru geography' },
    { label: 'Personalized Design Solutions', desc: 'Bespoke spaces custom-crafted around your family’s routine' },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Architectural Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Primary Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#F3F4F6] bg-[#FFF9F3] p-2 sm:p-3">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="TIMS DESIGNS Architecture in HSR Layout"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">Studio Identity</span>
                    <h4 className="text-lg font-bold text-white">TIMS DESIGNS Studio</h4>
                    <p className="text-xs text-gray-200">HSR Layout, Bengaluru</p>
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                    alt="TIMS DESIGNS Interior Craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-[#333333] border border-[#F97316]/20">
                    Bespoke Interior Craft
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-[#FFF0E5] border border-[#F97316]/30 px-4 py-2.5 rounded-lg shadow-md flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span className="text-xs font-bold text-[#333333]">HSR Layout, Bengaluru</span>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial About Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
              <span>ABOUT TIMS DESIGNS</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight leading-tight">
                Creating Spaces That Reflect Your Vision
              </h2>
              <div className="h-1 w-16 bg-[#F97316] rounded-full"></div>
            </div>

            {/* Paragraph Content */}
            <p className="text-base text-[#6B7280] leading-relaxed">
              Based in the vibrant design hub of <strong className="text-[#333333] font-semibold">HSR Layout, Bengaluru</strong>, <strong className="text-[#333333] font-semibold">TIMS DESIGNS</strong> was founded with a singular conviction: every home and workspace should be as functionally intuitive as it is aesthetically striking.
            </p>

            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
              We seamlessly bridge the gap between architectural blueprints, civil engineering, and bespoke interior styling. Rather than dealing with disconnected architects, contractors, and carpenters, TIMS DESIGNS provides a unified, transparent design-to-build partnership.
            </p>

            {/* 6 Key Focus Areas */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Our Core Disciplines</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {coreFocusAreas.map((area) => (
                  <div
                    key={area.label}
                    className="p-3 rounded-lg bg-[#FFF9F3] border border-[#F3F4F6] hover:border-[#F97316]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#333333]">
                      <div className="w-4 h-4 rounded-full bg-[#FFF0E5] flex items-center justify-center text-[#F97316]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{area.label}</span>
                    </div>
                    <p className="text-[11px] text-[#6B7280] mt-1 pl-6 leading-normal">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>CONSULT WITH OUR ARCHITECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-md bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>VIEW RECENT CONCEPTS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
