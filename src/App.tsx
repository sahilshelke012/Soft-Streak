import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { WhySoftstreak } from './components/WhySoftstreak';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { HowItWorks } from './components/HowItWorks';
import { DemoBookingSection } from './components/DemoBookingSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { DemoBookingModal } from './components/DemoBookingModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import type { ProductItem } from './types';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [preselectedDemoProduct, setPreselectedDemoProduct] = useState<string>('');

  const handleOpenDemoModal = (productName?: string) => {
    if (productName) {
      setPreselectedDemoProduct(productName);
    } else {
      setPreselectedDemoProduct('');
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Homepage Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 6 Core Products Catalog */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onBookDemo={(prodName) => handleOpenDemoModal(prodName)}
        />

        {/* Why Softstreak & Tavreville Governance */}
        <WhySoftstreak />

        {/* Target Audience Solutions: SMB Owners, Founders, Managers */}
        <TargetAudienceSection />

        {/* 4-Step Deployment Framework */}
        <HowItWorks onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* Interactive Demo Booking Section */}
        <DemoBookingSection preselectedProduct={preselectedDemoProduct} />

        {/* About Softstreak & Tavreville */}
        <AboutSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact Form & Editable Business Details */}
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookDemo={(name) => handleOpenDemoModal(name)}
      />

      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        preselectedProduct={preselectedDemoProduct}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
