import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Calendar,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';
import { ProductMegaMenu } from './mega-menus/ProductMegaMenu';
import { SolutionsMegaMenu } from './mega-menus/SolutionsMegaMenu';
import { LearnMegaMenu } from './mega-menus/LearnMegaMenu';

interface NavbarProps {
  onOpenDemoModal: (productName?: string) => void;
}

type ActiveDropdown = 'product' | 'solutions' | 'learn' | null;

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleMouseEnter = (menu: ActiveDropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleToggleClick = (menu: ActiveDropdown) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
  };

  return (
    <header 
      ref={navContainerRef}
      className="navbar-header fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E7EB] shadow-[0_1px_3px_0_rgba(23,25,35,0.04)] h-[80px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-[80px]">
        <div className="flex items-center justify-between h-[80px]">
          
          {/* Left Side: SoftStreak Logo & Navigation Links */}
          <div className="flex items-center gap-[44px] xl:gap-[56px] h-full">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center shrink-0 group py-1"
              title="SoftStreak - Essential Software for Every Business"
              onClick={closeDropdown}
            >
              <img
                src="/softstreak-logo.png"
                alt="SoftStreak - Essential Software for Every Business"
                className="navbar-logo-img w-[145px] max-w-[145px] h-auto object-contain transition-transform duration-150 group-hover:opacity-95"
              />
            </a>

            {/* Desktop Navigation Menu: Product, Solutions, Learn, Pricing */}
            <nav className="hidden lg:flex items-center navbar-nav-gap gap-[40px] h-full">
              
              {/* 1. Product Trigger */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('product')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggleClick('product')}
                  className={`navbar-nav-item inline-flex items-center gap-1.5 text-[18px] font-[500] tracking-normal transition-colors duration-150 py-2 ${
                    activeDropdown === 'product'
                      ? 'active text-[#E52430]'
                      : 'text-[#171923] hover:text-[#E52430]'
                  }`}
                  aria-expanded={activeDropdown === 'product'}
                >
                  <span>Product</span>
                  <ChevronDown className={`navbar-dropdown-icon w-[16px] h-[16px] stroke-[2] transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
                </button>

                {/* Product Mega Menu Dropdown */}
                {activeDropdown === 'product' && (
                  <div 
                    className="absolute top-[80px] left-0 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('product')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ProductMegaMenu 
                      onItemClick={closeDropdown}
                      onOpenDemo={(item) => onOpenDemoModal(item)}
                    />
                  </div>
                )}
              </div>

              {/* 2. Solutions Trigger */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggleClick('solutions')}
                  className={`navbar-nav-item inline-flex items-center gap-1.5 text-[18px] font-[500] tracking-normal transition-colors duration-150 py-2 ${
                    activeDropdown === 'solutions'
                      ? 'active text-[#E52430]'
                      : 'text-[#171923] hover:text-[#E52430]'
                  }`}
                  aria-expanded={activeDropdown === 'solutions'}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`navbar-dropdown-icon w-[16px] h-[16px] stroke-[2] transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
                </button>

                {/* Solutions Mega Menu Dropdown */}
                {activeDropdown === 'solutions' && (
                  <div 
                    className="absolute top-[80px] -left-20 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('solutions')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <SolutionsMegaMenu 
                      onItemClick={closeDropdown}
                      onOpenDemo={(item) => onOpenDemoModal(item)}
                    />
                  </div>
                )}
              </div>

              {/* 3. Learn Trigger */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('learn')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleToggleClick('learn')}
                  className={`navbar-nav-item inline-flex items-center gap-1.5 text-[18px] font-[500] tracking-normal transition-colors duration-150 py-2 ${
                    activeDropdown === 'learn'
                      ? 'active text-[#E52430]'
                      : 'text-[#171923] hover:text-[#E52430]'
                  }`}
                  aria-expanded={activeDropdown === 'learn'}
                >
                  <span>Learn</span>
                  <ChevronDown className={`navbar-dropdown-icon w-[16px] h-[16px] stroke-[2] transition-transform duration-200 ${activeDropdown === 'learn' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
                </button>

                {/* Learn Mega Menu Dropdown */}
                {activeDropdown === 'learn' && (
                  <div 
                    className="absolute top-[80px] -left-48 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('learn')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <LearnMegaMenu 
                      onItemClick={closeDropdown}
                      onOpenDemo={(item) => onOpenDemoModal(item)}
                    />
                  </div>
                )}
              </div>

              {/* 4. Pricing Direct Link */}
              <a
                href="#pricing"
                onClick={closeDropdown}
                className="navbar-nav-item inline-flex items-center text-[18px] font-[500] tracking-normal text-[#171923] hover:text-[#E52430] transition-colors duration-150 py-2"
              >
                Pricing
              </a>

            </nav>
          </div>

          {/* Right Side Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Get a Demo (Outline/Ghost Button) */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenDemoModal();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 h-[44px] text-[15px] sm:text-[16px] font-[500] text-[#171923] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <Calendar className="w-4 h-4 text-[#E52430]" />
              <span>Get a Demo</span>
            </button>

            {/* Get Started (Primary Red Button) */}
            <button
              onClick={() => {
                closeDropdown();
                onOpenDemoModal('SoftStreak Get Started');
              }}
              className="inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[15px] sm:text-[16px] font-semibold text-white bg-[#E52430] hover:bg-[#D71926] rounded-xl shadow-soft-sm hover:shadow-red-sm transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#F0F1F3] text-[#171923] hover:text-[#E52430] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Expandable Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[80px] bottom-0 bg-white border-b border-[#E5E7EB] shadow-2xl overflow-y-auto px-5 py-6 animate-in slide-in-from-top-2 duration-200 z-50">
          <div className="flex flex-col space-y-3 pb-8">
            
            {/* Mobile Product Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'product' ? null : 'product')}
                className="w-full flex items-center justify-between py-2.5 text-base font-bold text-[#171923]"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E52430]" />
                  <span>Product</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'product' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
              </button>
              {mobileExpandedSection === 'product' && (
                <div className="pl-6 pt-2 pb-3 space-y-2 text-sm text-[#626773]">
                  <div className="font-bold text-xs uppercase text-slate-400">Core CRM</div>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Pipelines – Track deals through every stage</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">AI – Power your workflow with AI</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Contacts – Shared contact database</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Task Management – Know what to do next</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Automation – Automate CRM drudgery</a>
                  
                  <div className="font-bold text-xs uppercase text-slate-400 pt-2">Email Tools</div>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Email Tracking & Sharing</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Mail Merge & Snippets</a>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between py-2.5 text-base font-bold text-[#171923]"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E52430]" />
                  <span>Solutions</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'solutions' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
              </button>
              {mobileExpandedSection === 'solutions' && (
                <div className="pl-6 pt-2 pb-3 space-y-2 text-sm text-[#626773]">
                  <div className="font-bold text-xs uppercase text-slate-400">Industries</div>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Small Business & Startups</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Venture Capital & Funding</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Real Estate & Travel Agencies</a>
                  
                  <div className="font-bold text-xs uppercase text-slate-400 pt-2">Teams</div>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Sales, Support & Hiring</a>
                  <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Product & Business Development</a>
                </div>
              )}
            </div>

            {/* Mobile Learn Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'learn' ? null : 'learn')}
                className="w-full flex items-center justify-between py-2.5 text-base font-bold text-[#171923]"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#E52430]" />
                  <span>Learn</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedSection === 'learn' ? 'rotate-180 text-[#E52430]' : 'text-slate-400'}`} />
              </button>
              {mobileExpandedSection === 'learn' && (
                <div className="pl-6 pt-2 pb-3 space-y-2 text-sm text-[#626773]">
                  <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">SoftStreak University</a>
                  <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Live Classes & CRM Setup</a>
                  <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-1 hover:text-[#E52430]">Knowledge Base & API Docs</a>
                </div>
              )}
            </div>

            {/* Pricing Direct Link */}
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2.5 text-base font-bold text-[#171923] hover:text-[#E52430] border-b border-slate-100"
            >
              Pricing
            </a>

            {/* Mobile Actions */}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#171923] bg-[#F0F1F3] border border-slate-200 rounded-xl"
              >
                <Calendar className="w-4 h-4 text-[#E52430]" />
                <span>Get a Demo</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDemoModal('SoftStreak Get Started');
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#E52430] hover:bg-[#D71926] rounded-xl shadow-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
