import React from 'react';
import { ArrowRight, Compass, Building, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-16 lg:py-20 border-b border-[#F3F4F6]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      {/* Subtle Top Warm Gradient Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFF0E5]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Value Proposition */}
          <div className="lg:col-span-6 space-y-7">
            {/* Architectural Sub-header Tag & Official Logo Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFF0E5] border border-[#F97316]/20 text-[#D95B16] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
                <span>HSR LAYOUT, BENGALURU</span>
                <span className="text-[#6B7280]/40">•</span>
                <span className="text-[#333333] font-semibold">PREMIER DESIGN STUDIO</span>
              </div>

              {/* Verified Official Brand Badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF9F3] border border-[#F97316]/30 text-[11px] font-bold text-[#F97316] uppercase tracking-wider">
                <span>Official Studio Identity</span>
              </div>
            </div>

            {/* Official Logo Banner as uploaded */}
            <div className="max-w-xs sm:max-w-sm">
              <img
                src="/image.png"
                alt="TIMS DESIGNS"
                className="w-full h-auto object-contain block"
              />
            </div>

            {/* Brand Title & Tagline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.25em] text-[#F97316] uppercase">
                  BUILDING PLANS | CONSTRUCTION | INTERIORS
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#333333] tracking-tight leading-[1.12]">
                TIMS <span className="text-[#F97316]">DESIGNS</span>
              </h1>
              
              <div className="flex items-center gap-3 pt-1">
                <div className="h-[3px] w-12 bg-[#F97316] rounded-full"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#333333] tracking-tight">
                  YOU DREAM IT, <span className="text-[#F97316]">WE CREATE IT.</span>
                </h2>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-xl">
              Thoughtful building plans, quality construction, and beautifully designed interiors tailored to your vision. Engineered with architectural precision across Bengaluru.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                id="hero-start-project-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-sm tracking-wider uppercase shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all duration-200 active:scale-[0.98]"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-[#FFF9F3] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F97316] border border-[#F97316]/30 font-bold text-sm tracking-wider uppercase transition-all duration-200"
              >
                <span>EXPLORE OUR SERVICES</span>
              </a>
            </div>

            {/* Quick Credentials Pills */}
            <div className="pt-4 border-t border-[#F3F4F6] grid grid-cols-3 gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#333333]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Custom Plans</span>
                </div>
                <p className="text-[11px] text-[#6B7280]">Vastu & Council Aligned</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#333333]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Turnkey Build</span>
                </div>
                <p className="text-[11px] text-[#6B7280]">RCC Structural Quality</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#333333]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Luxury Fit-outs</span>
                </div>
                <p className="text-[11px] text-[#6B7280]">German Modular Finish</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Blueprint Details */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Architectural Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#F3F4F6] bg-[#FFF9F3] p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                
                {/* Main Architectural Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#F3F4F6]">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                    alt="TIMS DESIGNS Modern Architectural Villa"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Subtle Gradient Shade for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                  {/* Blueprint Measurement Markers Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono font-semibold text-[#333333] border border-[#F97316]/30 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                    <span>CAD SPEC // ELEVATION 01</span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">Concept Visualization</p>
                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm">Linear Modern Residence</h3>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#333333] border border-gray-200">
                    AREA: 4,200 SQ. FT.
                  </div>
                </div>

                {/* Blueprint Measurement Lines */}
                <div className="hidden sm:flex justify-between items-center px-4 pt-2 text-[10px] font-mono text-[#6B7280]">
                  <span>◄─── 14.8 M FRONTAGE ───►</span>
                  <span className="text-[#F97316] font-bold">TIMS DESIGNS • ARCHITECTURAL STUDIO</span>
                  <span>◄─── 24.2 M DEPTH ───►</span>
                </div>
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white p-4 rounded-lg border border-[#F3F4F6] shadow-xl max-w-[240px] flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#333333]">HSR Layout Studio</div>
                  <div className="text-[11px] text-[#6B7280]">Serving South Bengaluru & Beyond</div>
                </div>
              </div>

              {/* Floating Consultation Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg border border-[#F97316]/30 shadow-lg max-w-[210px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs font-extrabold text-[#F97316] uppercase tracking-wider">Turnkey Mastery</span>
                </div>
                <p className="text-[11px] text-[#6B7280] leading-snug">
                  Zero design compromise from blueprint to key handover.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
