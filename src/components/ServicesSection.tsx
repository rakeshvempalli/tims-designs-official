import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/architecturalData';
import { ServiceCategory } from '../types';
import { Check, ArrowRight, X, Sparkles, Building, Layers, Sofa } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'building-plans':
        return <Layers className="w-5 h-5 text-[#F97316]" />;
      case 'construction':
        return <Building className="w-5 h-5 text-[#F97316]" />;
      case 'interiors':
        return <Sofa className="w-5 h-5 text-[#F97316]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F97316]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FFF9F3] border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>THREE CORE VERTICALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            Integrated Architecture & Execution Services
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            From your very first line on paper to structural casting and modular interior polish, TIMS DESIGNS handles your entire journey under one roof.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border border-[#F3F4F6] hover:border-[#F97316]/50 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(249,115,22,0.1)] flex flex-col overflow-hidden"
            >
              {/* Card Image with Subtle Zoom on Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-white/95 backdrop-blur-sm text-xs font-bold text-[#333333] border border-[#F3F4F6] shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Service Heading on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded bg-[#FFF0E5] flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                      TIMS Disciplines
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-[#D95B16]">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="pt-2 border-t border-[#F3F4F6] space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-2">
                      Key Inclusions:
                    </div>
                    {service.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#333333]">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <div className="text-[11px] text-[#F97316] font-semibold pl-5">
                        + {service.features.length - 5} more specialized capabilities
                      </div>
                    )}
                  </div>
                </div>

                {/* View Service Button */}
                <div className="pt-4 border-t border-[#F3F4F6]">
                  <button
                    onClick={() => setSelectedService(service)}
                    id={`view-service-${service.id}`}
                    className="w-full py-3 px-4 rounded-md bg-[#FFF9F3] hover:bg-[#F97316] text-[#333333] hover:text-white border border-[#F97316]/25 hover:border-[#F97316] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 group-hover:bg-[#F97316] group-hover:text-white"
                  >
                    <span>VIEW SERVICE DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Deep Dive */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#F3F4F6] p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-[#F3F4F6] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F97316] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFF0E5] flex items-center justify-center text-[#F97316]">
                  {getServiceIcon(selectedService.id)}
                </div>
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  {selectedService.badge}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#333333] tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm font-semibold text-[#D95B16] mt-1 mb-4">
                {selectedService.subtitle}
              </p>

              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Detailed Capabilities */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] border-b border-[#F3F4F6] pb-2">
                  Comprehensive Specifications & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.capabilities.map((cap, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#FFF9F3] border border-[#F3F4F6]">
                      <div className="font-bold text-xs text-[#333333] mb-1">{cap.name}</div>
                      <div className="text-[11px] text-[#6B7280] leading-relaxed">{cap.details}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>INQUIRE ABOUT {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-md bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#333333] font-bold text-xs uppercase tracking-wider"
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
