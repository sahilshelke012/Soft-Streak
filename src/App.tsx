import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesSection } from './components/FeaturesSection';
import { ProductsSection } from './components/ProductsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { WhySoftstreak } from './components/WhySoftstreak';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
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
    <div className="min-h-screen bg-[#F7F7F8] text-[#171923] flex flex-col selection:bg-[#E52430] selection:text-white font-sans">
      {/* Sticky Fixed Navigation Bar with Product, Solutions & Learn Mega Menus */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Content Flow */}
      <main className="flex-grow pt-[80px]">
        {/* 1. Hero Section with Live Product Dashboard Preview */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 2. Core CRM, Email Tools & Integrations Features */}
        <FeaturesSection onOpenDemo={handleOpenDemoModal} />

        {/* 3. 6 Core Products Software Catalog */}
        <ProductsSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onBookDemo={(prodName) => handleOpenDemoModal(prodName)}
        />

        {/* 4. Solutions by Industry & Team */}
        <SolutionsSection onOpenDemo={handleOpenDemoModal} />

        {/* 5. Why Choose SoftStreak & Comparison Table */}
        <WhySoftstreak />

        {/* 6. Tailored Solutions for SMB Owners, Founders & Managers */}
        <TargetAudienceSection />

        {/* 7. 4-Step Rollout Framework */}
        <HowItWorks onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* 8. Transparent Pricing Plans */}
        <PricingSection onOpenDemo={handleOpenDemoModal} />

        {/* 9. Testimonials & Verified Client Impact */}
        <TestimonialsSection />

        {/* 10. Interactive Demo Booking Schedule Form */}
        <DemoBookingSection preselectedProduct={preselectedDemoProduct} />

        {/* 11. About SoftStreak & Tavreville Governance */}
        <AboutSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* 12. Frequently Asked Questions */}
        <FAQSection />

        {/* 13. Contact Inquiries & Official Details */}
        <ContactSection />
      </main>

      {/* 14. Professional Dark Black Footer with White Text & Red Highlights */}
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

      {/* Floating Action WhatsApp Widget */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
