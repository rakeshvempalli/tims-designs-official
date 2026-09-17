import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/architecturalData';
import { Coffee, PenTool, FileText, Box, Hammer, Key, Check, Clock } from 'lucide-react';

const processIcons: Record<string, React.ReactNode> = {
  Coffee: <Coffee className="w-5 h-5 text-[#F97316]" />,
  PenTool: <PenTool className="w-5 h-5 text-[#F97316]" />,
  FileText: <FileText className="w-5 h-5 text-[#F97316]" />,
  Box: <Box className="w-5 h-5 text-[#F97316]" />,
  Hammer: <Hammer className="w-5 h-5 text-[#F97316]" />,
  Key: <Key className="w-5 h-5 text-[#F97316]" />,
};

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="process" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>STRUCTURED METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            OUR DESIGN & BUILD PROCESS
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            A transparent six-stage roadmap guiding your space from exploratory conversation to certified key handover.
          </p>
        </div>

        {/* Desktop Step Numbers Bar with Connector Line */}
        <div className="hidden lg:block relative mb-14">
          {/* Thin Architectural Connector Line */}
          <div className="absolute top-6 left-12 right-12 h-[2px] bg-[#F3F4F6]" />
          <div
            className="absolute top-6 left-12 h-[2px] bg-[#F97316] transition-all duration-500"
            style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 90}%` }}
          />

          <div className="grid grid-cols-6 gap-4 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm border-2 transition-all duration-300 z-10 ${
                      isSelected
                        ? 'bg-[#F97316] text-white border-[#D95B16] shadow-lg scale-110'
                        : isPassed
                        ? 'bg-[#FFF0E5] text-[#F97316] border-[#F97316]'
                        : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#F97316]'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <span
                    className={`mt-3 text-xs font-bold uppercase tracking-wider transition-colors max-w-[140px] leading-tight ${
                      isSelected ? 'text-[#F97316]' : 'text-[#333333] group-hover:text-[#F97316]'
                    }`}
                  >
                    {step.title.split(' / ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Card (Desktop Interactive Highlight) */}
        <div className="hidden lg:block bg-[#FFF9F3] border border-[#F3F4F6] rounded-2xl p-8 shadow-sm mb-16">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            <div className="col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold font-mono text-[#F97316]">
                  {PROCESS_STEPS[activeStepIndex].stepNumber}
                </span>
                <span className="h-4 w-[1.5px] bg-[#F97316]"></span>
                <span className="text-xs font-bold text-[#D95B16] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Estimated Phase: {PROCESS_STEPS[activeStepIndex].duration}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#333333]">
                {PROCESS_STEPS[activeStepIndex].title}
              </h3>

              <p className="text-sm text-[#6B7280] leading-relaxed max-w-2xl">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              {/* Deliverables Checklist */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#333333] mb-2.5">
                  Phase Deliverables & Verification:
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStepIndex].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#333333] bg-white p-2.5 rounded-md border border-[#F3F4F6]">
                      <div className="w-4 h-4 rounded-full bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4 flex justify-center">
              <div className="w-32 h-32 rounded-2xl bg-white border border-[#F3F4F6] shadow-md flex items-center justify-center p-6">
                <div className="w-16 h-16 rounded-xl bg-[#FFF0E5] flex items-center justify-center text-[#F97316]">
                  {React.cloneElement(processIcons[PROCESS_STEPS[activeStepIndex].icon] as React.ReactElement, {
                    className: 'w-8 h-8 text-[#F97316]',
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Step Cards Timeline View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className={`bg-white rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                activeStepIndex === idx
                  ? 'border-[#F97316] shadow-md bg-[#FFF9F3]/40'
                  : 'border-[#F3F4F6] hover:border-[#F97316]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-[#F97316]">
                    {step.stepNumber}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[#FFF0E5] flex items-center justify-center text-[#F97316]">
                    {processIcons[step.icon]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#333333] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <div className="text-[11px] font-semibold text-[#D95B16] mb-3">
                  Phase Timeline: {step.duration}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F3F4F6] space-y-1.5">
                {step.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#333333]">
                    <span className="text-[#F97316] font-bold">•</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
