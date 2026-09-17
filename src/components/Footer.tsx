import React from 'react';
import { TimsLogo } from './TimsLogo';
import { COMPANY_DETAILS } from '../data/architecturalData';
import { Phone, Instagram, MapPin, ArrowUp, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FFF9F3] border-t border-[#F3F4F6] text-[#333333] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#F3F4F6]">
          
          {/* Col 1: Logo & Company Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <TimsLogo size="md" />
            
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm pt-2">
              TIMS DESIGNS is an architectural, construction, and interior design practice based in HSR Layout, Bengaluru. We create thoughtfully engineered residences, commercial spaces, and modular interiors tailored to your family’s vision.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-[#F97316] tracking-wider uppercase pt-1">
              <span>YOU DREAM IT, WE CREATE IT.</span>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#333333] border-b border-[#F3F4F6] pb-2">
              OUR DISCIPLINES
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#6B7280]">
              <li>
                <a href="#services" className="hover:text-[#F97316] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  <span>Building Plans & 2D/3D Drawings</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F97316] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  <span>Residential & Commercial Construction</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F97316] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  <span>Bespoke Luxury Interiors</span>
                </a>
              </li>
              <li>
                <a href="#3d-showcase" className="hover:text-[#F97316] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                  <span>3D Architectural Visualization</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#333333] border-b border-[#F3F4F6] pb-2">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#6B7280]">
              <li>
                <a href="#home" className="hover:text-[#F97316] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F97316] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F97316] transition-colors">Project Gallery</a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F97316] transition-colors">Our Process</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F97316] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F97316] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#333333] border-b border-[#F3F4F6] pb-2">
              BENGALURU STUDIO
            </h4>
            <div className="space-y-3 text-xs text-[#6B7280]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <span className="leading-snug text-[#333333] font-medium">{COMPANY_DETAILS.location}</span>
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <div className="font-bold text-[#333333] uppercase text-[11px]">Direct Inquiries:</div>
                {COMPANY_DETAILS.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="hover:text-[#F97316] transition-colors text-xs font-semibold text-[#333333]"
                  >
                    +91 {p}
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-[#F3F4F6] text-xs font-bold text-[#333333] hover:text-[#F97316] hover:border-[#F97316]/40 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{COMPANY_DETAILS.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} <strong className="text-[#333333] font-semibold">TIMS DESIGNS</strong>. All rights reserved. HSR Layout, Bengaluru.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenConsultation}
              className="text-xs font-bold text-[#F97316] hover:underline"
            >
              Get a Free Consultation
            </button>
            <span className="text-[#6B7280]/40">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors font-medium text-[#333333]"
              id="back-to-top-btn"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
