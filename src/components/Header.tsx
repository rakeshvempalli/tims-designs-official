import React, { useState, useEffect, useRef } from 'react';
import { TimsLogo } from './TimsLogo';
import { Phone, Menu, X, ArrowRight, MessageCircle, ChevronDown, Compass, Hammer, Sparkles, Box, MapPin, Instagram } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/architecturalData';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true 
    },
    { name: '3D Showcase', href: '#3d-showcase' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceSubItems = [
    {
      title: 'Building Plans & Design',
      desc: '2D floor plans, municipal sanctions & elevation drawings',
      icon: <Compass className="w-4 h-4 text-[#F97316]" />,
      href: '#services',
    },
    {
      title: 'Construction & Execution',
      desc: 'Turnkey residential & commercial civil construction',
      icon: <Hammer className="w-4 h-4 text-[#F97316]" />,
      href: '#services',
    },
    {
      title: 'Bespoke Luxury Interiors',
      desc: 'Modular kitchens, living suites & complete fit-outs',
      icon: <Sparkles className="w-4 h-4 text-[#F97316]" />,
      href: '#interiors-showcase',
    },
    {
      title: '3D Architectural Visualization',
      desc: 'Interactive 3D model walk-through before construction',
      icon: <Box className="w-4 h-4 text-[#F97316]" />,
      href: '#3d-showcase',
    },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.07)] border-b border-[#F3F4F6]'
          : 'bg-white border-b border-[#F3F4F6]'
      }`}
    >
      {/* 1. Top Announcement & Utility Bar */}
      <div className="bg-[#FFF9F3] border-b border-[#F3F4F6] py-1.5 px-4 sm:px-6 lg:px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-[#6B7280]">
          
          {/* Left: Studio Location & Availability */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#333333]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Studio: <strong className="text-[#333333] font-bold">HSR Layout, Bengaluru</strong></span>
            </span>
            <span className="text-[#E5E7EB]">|</span>
            <span className="hidden md:inline text-[11px] font-bold tracking-wider text-[#F97316] uppercase font-mono">
              YOU DREAM IT, WE CREATE IT.
            </span>
          </div>

          {/* Right: Quick Inquiries & WhatsApp */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="inline-flex items-center gap-1.5 font-bold text-[#333333] hover:text-[#F97316] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F97316]" />
              <span>+91 {COMPANY_DETAILS.primaryPhone}</span>
            </a>

            <span className="text-[#E5E7EB]">|</span>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello TIMS DESIGNS, I would like to schedule an architectural consultation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#16a34a] hover:text-[#15803d] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <span className="text-[#E5E7EB] hidden lg:inline">|</span>

            <a
              href={COMPANY_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1 text-[#6B7280] hover:text-[#F97316] transition-colors"
            >
              <Instagram className="w-3 h-3 text-[#F97316]" />
              <span>{COMPANY_DETAILS.instagramHandle}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
          
          {/* Logo Area */}
          <div className="flex items-center">
            <TimsLogo size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <a
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-[#FFF0E5] text-[#F97316]'
                          : 'text-[#333333] hover:text-[#F97316] hover:bg-[#FFF9F3]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#F97316]' : ''}`} />
                    </a>

                    {/* Services Dropdown Mega Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#F3F4F6] p-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B7280] px-2 py-1 mb-1 border-b border-[#F3F4F6]">
                          Core Disciplines
                        </div>
                        <div className="space-y-1">
                          {serviceSubItems.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#FFF9F3] hover:border-[#F97316]/20 transition-all group"
                            >
                              <div className="w-8 h-8 rounded-md bg-[#FFF0E5] flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors">
                                {React.cloneElement(item.icon, {
                                  className: 'w-4 h-4 text-[#F97316] group-hover:text-white transition-colors',
                                })}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-[#333333] group-hover:text-[#F97316] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-[#6B7280] leading-snug mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-[#F3F4F6] px-2">
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onOpenConsultation();
                            }}
                            className="w-full text-center text-xs font-bold text-[#F97316] hover:text-[#D95B16] py-1 flex items-center justify-center gap-1"
                          >
                            <span>Book Architectural Discussion</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'bg-[#FFF0E5] text-[#F97316] shadow-xs'
                      : 'text-[#333333] hover:text-[#F97316] hover:bg-[#FFF9F3]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Call Pill */}
            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone}`}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#E5E7EB] hover:border-[#F97316] bg-white hover:bg-[#FFF9F3] text-xs font-bold text-[#333333] hover:text-[#F97316] transition-all"
              title="Speak directly with senior architect"
            >
              <Phone className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Call Us</span>
            </a>

            {/* Primary Action: GET A FREE CONSULTATION */}
            <button
              onClick={onOpenConsultation}
              id="header-consultation-btn"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#D95B16] text-white text-xs font-extrabold tracking-wider uppercase shadow-[0_4px_14px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] transition-all duration-200 active:scale-[0.98]"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Quick Consult & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-full bg-[#F97316] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm"
            >
              Consult
            </button>
            
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#333333] hover:text-[#F97316] hover:bg-[#FFF0E5] transition-colors focus:outline-none ml-1"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Sheet / Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#F3F4F6] bg-white px-5 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#FFF0E5] text-[#F97316]'
                      : 'text-[#333333] hover:bg-[#FFF9F3] hover:text-[#F97316]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>}
                </a>
              );
            })}

            {/* Quick Action Block in Mobile Drawer */}
            <div className="pt-4 mt-2 border-t border-[#F3F4F6] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-[#F97316] hover:bg-[#D95B16] text-white text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
              >
                <span>GET A FREE CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                  className="py-2.5 px-3 rounded-lg border border-[#E5E7EB] bg-[#FFF9F3] text-[#333333] font-bold text-xs flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="text-center pt-2 text-[11px] text-[#6B7280]">
                Studio: HSR Layout, Bengaluru • Mon–Sat
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
