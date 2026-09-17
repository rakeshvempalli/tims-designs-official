import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { Interactive3DShowcase } from './components/Interactive3DShowcase';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { InteriorShowcase } from './components/InteriorShowcase';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', '3d-showcase', 'projects', 'why-choose-us', 'process', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col selection:bg-[#FFF0E5] selection:text-[#F97316]">
      {/* 1. Header with Official TIMS DESIGNS Logo & Navigation */}
      <Header
        onOpenConsultation={() => setConsultationModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* 3. Trust and Company Highlights */}
        <TrustHighlights />

        {/* 4. About TIMS DESIGNS */}
        <AboutSection onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* 5. Services Section */}
        <ServicesSection onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* 6. Interactive 3D Architectural Showcase */}
        <Interactive3DShowcase />

        {/* 7. Project Portfolio */}
        <PortfolioSection onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* 8. Why Choose TIMS DESIGNS */}
        <WhyChooseUs />

        {/* 9. Our Process */}
        <ProcessSection />

        {/* 10. Interior Design Showcase */}
        <InteriorShowcase onOpenConsultation={() => setConsultationModalOpen(true)} />

        {/* 11. FAQ Section */}
        <FaqSection />

        {/* 12. Contact / Free Consultation Section */}
        <ContactSection />
      </main>

      {/* 13. Clean White/Light Footer */}
      <Footer onOpenConsultation={() => setConsultationModalOpen(true)} />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />

      {/* Floating Action Buttons (WhatsApp & Consultation) */}
      <FloatingActions onOpenConsultation={() => setConsultationModalOpen(true)} />
    </div>
  );
}

