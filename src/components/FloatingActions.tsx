import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';

interface FloatingActionsProps {
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Connect Button */}
      <a
        href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TIMS DESIGNS, I am interested in building plans / construction / interiors in Bengaluru.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold tracking-wider uppercase">
          WhatsApp Us
        </span>
      </a>

      {/* Instant Consultation Trigger Button */}
      <button
        onClick={onOpenConsultation}
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F97316] text-white shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:bg-[#D95B16] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Open Free Consultation Form"
        id="floating-consultation-btn"
      >
        <Calendar className="w-4 h-4" />
        <span className="text-xs font-bold tracking-wider uppercase">
          Free Consultation
        </span>
      </button>
    </div>
  );
};
