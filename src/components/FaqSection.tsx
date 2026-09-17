import React, { useState } from 'react';
import { FAQ_DATA } from '../data/architecturalData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#FFF9F3] border-b border-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>CLARITY & TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Everything you need to know about our building plans, construction timelines, and interior fit-outs in Bengaluru.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#F97316]/50 shadow-[0_8px_24px_rgba(249,115,22,0.06)]'
                    : 'border-[#F3F4F6] hover:border-[#F97316]/30'
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-toggle-${index}`}
                >
                  <span className="text-base font-bold text-[#333333] hover:text-[#F97316] transition-colors leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#F97316] text-white'
                        : 'bg-[#FFF0E5] text-[#F97316]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#6B7280] leading-relaxed border-t border-[#F3F4F6]/80 animate-in fade-in duration-200 whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
