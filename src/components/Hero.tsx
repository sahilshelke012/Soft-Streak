import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import { productsData } from '../data/products';

interface HeroProps {
  onOpenDemoModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const activeProduct = productsData[activePreviewIndex];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-10 w-[300px] h-[300px] bg-brand-purple-glow/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Announcement */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-purple-500/30 backdrop-blur-md shadow-glow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-purple-200">
              Offered under <strong className="text-white font-bold">{siteConfig.parentCompany}</strong>
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800/60 border border-white/10 text-xs text-slate-300">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Turnkey Business Software for SMBs</span>
          </div>
        </div>

        {/* Hero Title & Subtext */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            The One-Stop Shop for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300">
              Ready-to-Use Business Software
            </span>{' '}
            & Automation
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Eliminate long custom development cycles. <strong className="text-white font-medium">Softstreak (Software Street)</strong> empowers 
            small and medium-sized business owners, founders, and managers with ready-to-deploy HR, CRM, WhatsApp, AI Automation, Hospital, and Travel platforms.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Demo Button */}
            <button
              onClick={() => onOpenDemoModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] border border-purple-400/30"
            >
              <Calendar className="w-5 h-5 text-purple-200" />
              <span>Book a Live Product Demo</span>
              <ArrowRight className="w-4 h-4 text-purple-200" />
            </button>

            {/* Direct WhatsApp Enquiry */}
            <a
              href={buildWhatsAppUrl("Hello Softstreak team, I would like to enquire about your ready-to-use business software suite.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-emerald-300 bg-navy-800/90 hover:bg-navy-800 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Instant WhatsApp Enquiry</span>
            </a>

            {/* Explore Catalog Secondary */}
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-medium text-slate-300 hover:text-white bg-navy-900/60 hover:bg-navy-800/80 border border-white/10 rounded-xl transition-all"
            >
              <span>Explore 6 Products</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Trust Value Badges */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" />
              <span>Zero Development Waiting</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Offered under Tavreville</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>SMB-Friendly Budgeting</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Human Guided Onboarding</span>
            </div>
          </div>
        </div>

        {/* Interactive Software Interactive Showcase Switcher */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-purple-500/30 via-white/10 to-transparent shadow-2xl">
            <div className="bg-navy-900/95 backdrop-blur-xl rounded-[15px] border border-white/10 p-4 sm:p-6 lg:p-8">
              
              {/* Showcase Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-purple-400">
                    Live Product Navigator
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Explore Ready-to-Use Business Solutions
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 bg-navy-800/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Interactive System Preview</span>
                </div>
              </div>

              {/* Product Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-6">
                {productsData.map((item, index) => {
                  const isSelected = activePreviewIndex === index;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePreviewIndex(index)}
                      className={`text-left p-3 rounded-xl transition-all duration-200 border ${
                        isSelected
                          ? 'bg-purple-600/20 border-purple-500 text-white shadow-glow-sm'
                          : 'bg-navy-800/50 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-navy-800'
                      }`}
                    >
                      <div className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider mb-1">
                        0{index + 1}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold truncate">
                        {item.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Showcase Content Panel */}
              <div className="bg-navy-950/70 rounded-xl p-5 sm:p-7 border border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left side details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {activeProduct.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {activeProduct.deploymentTime}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {activeProduct.name}
                    </h4>
                    <p className="text-sm font-medium text-purple-300 mt-1">
                      {activeProduct.shortTagline}
                    </p>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {activeProduct.description}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Core Functional Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {activeProduct.capabilities.slice(0, 4).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons inside preview */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenDemoModal(activeProduct.name)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition shadow-glow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Demo for {activeProduct.name}</span>
                    </button>
                    <a
                      href={buildWhatsAppUrl(`Hello Softstreak, I would like to get quick details and pricing for your ${activeProduct.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </div>
                </div>

                {/* Right side graphical badge / simulated UI preview */}
                <div className="lg:col-span-5 bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                      softstreak://{activeProduct.id}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3.5">
                    <div className="p-3 rounded-lg bg-navy-950/80 border border-white/5">
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">
                        Target Audience
                      </div>
                      <div className="text-xs font-medium text-white mt-1">
                        {activeProduct.targetAudience}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-navy-950/80 border border-white/5">
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">
                        Key Business Impact
                      </div>
                      <div className="text-xs font-medium text-emerald-300 mt-1">
                        {activeProduct.keyBenefits[0]}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-navy-950/80 border border-white/5">
                      <div className="text-[11px] text-slate-400 uppercase font-semibold">
                        Parent Governance
                      </div>
                      <div className="text-xs font-medium text-purple-300 mt-1">
                        Offered & Supported under Tavreville
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
