import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';
import { TimsLogo } from './TimsLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Building Plans & Construction',
    location: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#F3F4F6] relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#FFF9F3] border-b border-[#F3F4F6] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TimsLogo size="sm" />
            <div>
              <h3 className="text-base font-extrabold text-[#333333] leading-tight">
                Request a Consultation
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                HSR Layout Studio, Bengaluru
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#FFF0E5] text-[#333333] hover:text-[#F97316] transition-colors border border-[#F3F4F6]"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#FFF0E5] text-[#F97316] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-[#333333]">
                Thank You, {formData.name}!
              </h4>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed max-w-sm mx-auto">
                Our architectural consultants in HSR Layout will call you at <strong className="text-[#333333]">{formData.phone}</strong> shortly.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hi TIMS DESIGNS, I requested a consultation for ${formData.service} in ${formData.location || 'Bengaluru'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-md bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-2.5 rounded-md bg-[#F3F4F6] text-[#333333] font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Your Name <span className="text-[#F97316]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none placeholder:text-[#9CA3AF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Phone <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9972919700"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                    Plot / Project Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. HSR Sector 2"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none placeholder:text-[#9CA3AF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Required Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none"
                >
                  <option>Building Plans & Construction</option>
                  <option>Architectural 2D/3D Drawings</option>
                  <option>Full Home Luxury Interiors</option>
                  <option>Modular Kitchen & Wardrobe Styling</option>
                  <option>Commercial Space Fit-Out</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1">
                  Plot Dimensions or Brief
                </label>
                <textarea
                  rows={2}
                  placeholder="Plot size (e.g. 30x40, 40x60), apartment configuration, or target timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none placeholder:text-[#9CA3AF] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>REQUEST FREE CONSULTATION</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-3 border-t border-[#F3F4F6] flex items-center justify-between text-xs text-[#6B7280]">
                <span>Or connect instantly:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                    className="flex items-center gap-1 font-bold text-[#333333] hover:text-[#F97316]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                    Call
                  </a>
                  <span>•</span>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-bold text-[#25D366]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
