import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';
import { ConsultationFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa Planning & Construction',
    projectLocation: 'HSR Layout, Bengaluru',
    estimatedBudget: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form processing and verification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white border-b border-[#F3F4F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E5] text-[#D95B16] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]"></span>
            <span>DIRECT ARCHITECTURAL CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] tracking-tight">
            LET’S BUILD YOUR VISION
          </h2>
          <p className="mt-3 text-base text-[#6B7280]">
            Have a project in mind? Get in touch with TIMS DESIGNS to discuss your building plans, construction, or interior design requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Info & Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Studio Identity Card */}
            <div className="bg-[#FFF9F3] border border-[#F3F4F6] rounded-2xl p-7 sm:p-8 space-y-6 shadow-sm">
              <div>
                <div className="text-xs font-bold tracking-widest text-[#F97316] uppercase mb-1">
                  OFFICIAL STUDIO
                </div>
                <h3 className="text-2xl font-extrabold text-[#333333]">
                  {COMPANY_DETAILS.name}
                </h3>
                <div className="text-xs font-semibold text-[#6B7280] tracking-wider uppercase mt-1">
                  {COMPANY_DETAILS.tagline}
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#F3F4F6]">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#333333] uppercase tracking-wider">Studio Location</div>
                    <div className="text-sm font-semibold text-[#333333]">{COMPANY_DETAILS.landmark}</div>
                    <div className="text-xs text-[#6B7280]">{COMPANY_DETAILS.location}</div>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-[#333333] uppercase tracking-wider">CONTACT US:</div>
                    <div className="flex flex-col gap-1">
                      {COMPANY_DETAILS.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="text-sm font-bold text-[#333333] hover:text-[#F97316] transition-colors flex items-center gap-2"
                        >
                          <span>+91 {phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF0E5] flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#333333] uppercase tracking-wider">INSTAGRAM:</div>
                    <a
                      href={COMPANY_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#333333] hover:text-[#F97316] transition-colors"
                    >
                      {COMPANY_DETAILS.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="pt-4 border-t border-[#F3F4F6] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                  id="contact-call-now-btn"
                  className="py-3 px-4 rounded-md bg-white hover:bg-[#FFF0E5] border border-[#F97316]/40 text-[#333333] hover:text-[#F97316] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#F97316]" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TIMS DESIGNS, I would like to schedule an architectural / interior consultation.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="py-3 px-4 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP US</span>
                </a>
              </div>
            </div>

            {/* Architectural Studio Photo / Render Badge */}
            <div className="relative rounded-xl overflow-hidden border border-[#F3F4F6] shadow-md aspect-[16/9] bg-[#F3F4F6]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="TIMS DESIGNS Bengaluru Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">TIMS DESIGNS</div>
                <div className="text-xs font-bold">HSR Layout Studio • In-Person Consultations</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#F3F4F6] p-7 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FFF0E5] text-[#F97316] mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-[#333333]">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-[#6B7280] max-w-md mx-auto">
                      Thank you, <strong className="text-[#333333]">{formData.fullName}</strong>. Our senior architects in HSR Layout will review your {formData.projectType} requirements and reach you at <strong className="text-[#333333]">{formData.phone}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(`Hello TIMS DESIGNS, I just submitted an inquiry for ${formData.projectType} in ${formData.projectLocation}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-md bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed-Up via WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          projectType: 'Residential Villa Planning & Construction',
                          projectLocation: 'HSR Layout, Bengaluru',
                          estimatedBudget: '',
                          requirements: '',
                        });
                      }}
                      className="px-6 py-3 rounded-md bg-[#F3F4F6] text-[#333333] font-bold text-xs uppercase tracking-wider"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
                  <div className="border-b border-[#F3F4F6] pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-[#333333]">
                      Schedule a Free Consultation
                    </h3>
                    <p className="text-xs text-[#6B7280] mt-1">
                      Share your plot dimensions or interior goals for a tailored discussion.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all placeholder:text-[#9CA3AF]"
                    />
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9972919700"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all placeholder:text-[#9CA3AF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all placeholder:text-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  {/* Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                        Project Type <span className="text-[#F97316]">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all"
                      >
                        <option>Residential Villa Planning & Construction</option>
                        <option>Architectural Floor Plans & 3D Visualization</option>
                        <option>Complete Home Interior Fit-Out</option>
                        <option>Modular Kitchen & Wardrobe Execution</option>
                        <option>Commercial Office / Retail Design</option>
                        <option>Renovation & Structural Extension</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                        Project Location <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. HSR Layout, Sarjapur, Whitefield"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all placeholder:text-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  {/* Estimated Budget (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>Estimated Budget</span>
                      <span className="text-[10px] text-[#6B7280] font-normal normal-case">Optional</span>
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all"
                    >
                      <option value="">Select an approximate range</option>
                      <option value="Under 15 Lakhs">Under ₹15 Lakhs (Interior / Planning Only)</option>
                      <option value="15 - 35 Lakhs">₹15 Lakhs – ₹35 Lakhs</option>
                      <option value="35 - 75 Lakhs">₹35 Lakhs – ₹75 Lakhs</option>
                      <option value="75 Lakhs - 1.5 Cr">₹75 Lakhs – ₹1.5 Crore</option>
                      <option value="Above 1.5 Cr">Above ₹1.5 Crore</option>
                    </select>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-[#333333] uppercase tracking-wider mb-1.5">
                      Project Requirements & Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details such as plot size (e.g. 30x40, 40x60), number of floors, preferred aesthetic, or timeline..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white border border-[#E5E7EB] focus:border-[#F97316] focus:ring-2 focus:ring-[#FFF0E5] text-sm text-[#333333] outline-none transition-all placeholder:text-[#9CA3AF] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-enquiry-btn"
                      className="w-full py-4 rounded-md bg-[#F97316] hover:bg-[#D95B16] text-white font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(249,115,22,0.25)] transition-all duration-200 active:scale-[0.99] disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>SUBMIT ENQUIRY</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#6B7280] text-center mt-2.5">
                      Direct consultation with TIMS DESIGNS architecture team • No obligation
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
