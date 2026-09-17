import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/architecturalData';
import { ProjectItem } from '../types';
import { MapPin, Maximize2, X, ArrowRight, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'BUILDING PLANS' | 'RESIDENTIAL' | 'COMMERCIAL' | 'INTERIORS'>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['ALL', 'BUILDING PLANS', 'RESIDENTIAL', 'COMMERCIAL', 'INTERIORS'] as const;

  const filteredProjects = activeCategory === 'ALL'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>PORTFOLIO & DESIGN CONCEPTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            Curated Architectural & Interior Concepts
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Explore our curated showcase of residential elevations, commercial fit-outs, precision floor plans, and modular living designs.
          </p>
          <div className="inline-block mt-3 text-[11px] font-semibold tracking-wider text-[#6B7280] uppercase bg-[#F3F4F6] px-3 py-1 rounded-full">
            Note: Displaying verified architectural concepts & design proposals
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#F97316] text-white shadow-sm'
                    : 'bg-[#FFF9F3] text-[#333333] hover:bg-[#FFF0E5] hover:text-[#F97316] border border-[#F3F4F6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-xl border border-[#F3F4F6] hover:border-[#F97316]/50 transition-all duration-300 hover:shadow-[0_16px_36px_rgba(249,115,22,0.12)] overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Category & Concept Tag */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-white/95 text-[10px] font-bold tracking-wider text-[#333333] uppercase border border-[#F3F4F6] shadow-sm">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#FFF0E5] text-[9px] font-extrabold tracking-wider text-[#D95B16] uppercase border border-[#F97316]/30">
                    Concept
                  </span>
                </div>

                {/* Expand Icon on Hover */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 text-[#333333] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-orange-200 mb-1">
                    <MapPin className="w-3 h-3 text-[#F97316]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-100 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#6B7280]">
                    Area: <strong className="text-[#333333]">{project.area}</strong>
                  </span>
                  <span className="font-bold text-[#F97316] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px] uppercase tracking-wider">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#F3F4F6] p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3F4F6] hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F97316] transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Concept Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded bg-[#FFF0E5] text-xs font-bold uppercase tracking-wider text-[#D95B16]">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-medium text-[#6B7280] flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#333333] tracking-tight mb-4">
                {selectedProject.title}
              </h3>

              {/* Large Image Preview */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-[#F3F4F6] border border-[#F3F4F6]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 bg-[#FFF9F3] p-4 rounded-xl border border-[#F3F4F6]">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Project Type</div>
                  <div className="text-xs sm:text-sm font-bold text-[#333333]">{selectedProject.type}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Carpet / Built Area</div>
                  <div className="text-xs sm:text-sm font-bold text-[#333333]">{selectedProject.area}</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">Design Discipline</div>
                  <div className="text-xs sm:text-sm font-bold text-[#F97316]">TIMS Architecture</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-3">
                  Architectural & Interior Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#333333] bg-[#F9FAFB] p-2.5 rounded-md border border-[#F3F4F6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="pt-4 border-t border-[#F3F4F6] flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-6 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>REQUEST SIMILAR DESIGN CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
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
