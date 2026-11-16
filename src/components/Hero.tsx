import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CheckCircle,
  Eye,
  Mail
} from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

interface HeroProps {
  onOpenDemoModal: (productName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const [activePipelineTab, setActivePipelineTab] = useState<'leads' | 'deals' | 'emails'>('deals');

  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-[#E5E7EB]">
      {/* Subtle light background accent */}
      <div className="absolute inset-0 bg-light-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F7F7F8] border border-[#E5E7EB] shadow-soft-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#E52430]" />
                <span className="text-xs font-semibold text-[#171923]">
                  Offered under <strong className="text-[#E52430]">{siteConfig.parentCompany}</strong>
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50/60 border border-red-100 text-xs font-semibold text-[#E52430]">
                <Zap className="w-3.5 h-3.5 text-[#E52430]" />
                <span>Essential Software for Every Business</span>
              </div>
            </div>

            {/* Large Bold Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#171923] leading-[1.12]">
              The Modern CRM &{' '}
              <span className="text-[#E52430]">Ready-to-Use</span> Business Software Platform
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#626773] leading-relaxed max-w-xl font-normal">
              Eliminate long development cycles and software headaches. <strong className="text-[#171923] font-semibold">SoftStreak</strong> gives 
              small and medium-sized business owners, founders, and managers ready-to-deploy CRM pipelines, automated email tools, WhatsApp communication, and business automation.
            </p>

            {/* Dual CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Red Button */}
              <button
                onClick={() => onOpenDemoModal('SoftStreak Platform')}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold shadow-soft-sm hover:shadow-red-sm"
              >
                <Calendar className="w-4 h-4 text-white/90" />
                <span>Get a Free Live Demo</span>
                <ArrowRight className="w-4 h-4 text-white/90" />
              </button>

              {/* Secondary Button */}
              <a
                href={buildWhatsAppUrl("Hello SoftStreak team, I would like to enquire about your CRM and business software.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold shadow-soft-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#E52430]" />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#626773]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#E52430] shrink-0" />
                <span className="font-medium text-[#171923]">Ready to Deploy in Days</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E52430] shrink-0" />
                <span className="font-medium text-[#171923]">Tavreville Governance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#E52430] shrink-0" />
                <span className="font-medium text-[#171923]">Zero Tech Bloat</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Product Dashboard Preview (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-[0_20px_50px_rgba(23,25,35,0.08)] overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-[#F7F7F8] px-4 py-3 border-b border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-500 ml-2 font-medium">app.softstreak.com/pipeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-50 text-[#E52430] border border-red-100">
                    Live CRM
                  </span>
                </div>
              </div>

              {/* Sub-bar Tabs */}
              <div className="px-5 pt-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setActivePipelineTab('deals')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activePipelineTab === 'deals' ? 'bg-[#171923] text-white' : 'text-slate-500 hover:text-[#171923]'}`}
                  >
                    Deals Pipeline
                  </button>
                  <button 
                    onClick={() => setActivePipelineTab('leads')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activePipelineTab === 'leads' ? 'bg-[#171923] text-white' : 'text-slate-500 hover:text-[#171923]'}`}
                  >
                    Contacts & Leads
                  </button>
                  <button 
                    onClick={() => setActivePipelineTab('emails')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activePipelineTab === 'emails' ? 'bg-[#171923] text-white' : 'text-slate-500 hover:text-[#171923]'}`}
                  >
                    Email Tracking
                  </button>
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Total Value: $148,500
                </span>
              </div>

              {/* Pipeline Board Body */}
              <div className="p-4 bg-[#F7F7F8] space-y-3 min-h-[300px]">
                {activePipelineTab === 'deals' && (
                  <div className="grid grid-cols-3 gap-3">
                    
                    {/* Stage 1: Qualified */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                        <span>Qualified (3)</span>
                        <span className="text-slate-400">$38,000</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] shadow-soft-sm space-y-1.5 hover:border-red-200 transition">
                        <span className="text-[10px] font-bold uppercase text-[#E52430] bg-red-50 px-1.5 py-0.5 rounded">B2B SaaS</span>
                        <div className="text-xs font-bold text-[#171923]">Acme Global Corp</div>
                        <div className="flex items-center justify-between text-[11px] text-[#626773]">
                          <span>$16,500 / yr</span>
                          <span className="flex items-center text-emerald-600 text-[10px] font-bold"><Eye className="w-3 h-3 mr-0.5" /> Opened 5m ago</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] shadow-soft-sm space-y-1.5">
                        <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Healthcare</span>
                        <div className="text-xs font-bold text-[#171923]">Metro Medical Group</div>
                        <div className="text-[11px] text-[#626773]">$21,500 / yr</div>
                      </div>
                    </div>

                    {/* Stage 2: Proposal Sent */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                        <span>Proposal Sent (2)</span>
                        <span className="text-[#E52430]">$54,000</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border-2 border-[#E52430]/40 shadow-soft-sm space-y-1.5 bg-red-50/20">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase text-[#E52430] bg-red-50 px-1.5 py-0.5 rounded">Priority Deal</span>
                          <span className="text-[10px] text-slate-400">Today</span>
                        </div>
                        <div className="text-xs font-bold text-[#171923]">Apex Retail Ventures</div>
                        <div className="text-xs font-bold text-[#E52430]">$32,000</div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#E52430]" />
                          <span>AI: High closure probability (88%)</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#E5E7EB] shadow-soft-sm space-y-1.5">
                        <span className="text-[10px] font-bold uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">Travel Agency</span>
                        <div className="text-xs font-bold text-[#171923]">Horizon Voyages</div>
                        <div className="text-[11px] text-[#626773]">$22,000</div>
                      </div>
                    </div>

                    {/* Stage 3: Closed Won */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 px-1">
                        <span>Closed Won (4)</span>
                        <span className="text-emerald-600">$56,500</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-soft-sm space-y-1.5">
                        <div className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">Deal Closed</div>
                        <div className="text-xs font-bold text-[#171923]">Zenith Logistics</div>
                        <div className="text-xs font-bold text-emerald-700">$28,000</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-emerald-200 shadow-soft-sm space-y-1.5">
                        <div className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">Deal Closed</div>
                        <div className="text-xs font-bold text-[#171923]">Starlight Hospitality</div>
                        <div className="text-xs font-bold text-emerald-700">$28,500</div>
                      </div>
                    </div>

                  </div>
                )}

                {activePipelineTab === 'leads' && (
                  <div className="space-y-2 bg-white p-3 rounded-xl border border-[#E5E7EB]">
                    <div className="text-xs font-bold text-[#171923] mb-2">Centralized Contact Database</div>
                    <div className="divide-y divide-slate-100 text-xs">
                      <div className="py-2 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Sarah Jenkins</div>
                          <div className="text-slate-400 text-[11px]">VP Sales, TechEdge</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#E52430] bg-red-50 px-2 py-0.5 rounded">Deal in Progress</span>
                      </div>
                      <div className="py-2 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-[#171923]">Michael Chang</div>
                          <div className="text-slate-400 text-[11px]">Director Ops, BioCare</div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Active Client</span>
                      </div>
                    </div>
                  </div>
                )}

                {activePipelineTab === 'emails' && (
                  <div className="space-y-2 bg-white p-3 rounded-xl border border-[#E5E7EB]">
                    <div className="text-xs font-bold text-[#171923] mb-2">Live Email Tracking Telemetry</div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-emerald-50/50 border border-emerald-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-emerald-600" />
                          <span>"Software Street Contract v2" opened by David</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">Just now</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-slate-400" />
                          <span>"Product Demo Follow-Up" link clicked</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium">12m ago</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dashboard bottom feature bar */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#626773] border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-[#171923]">AI Automation Active</span>
                  </div>
                  <button 
                    onClick={() => onOpenDemoModal('CRM Pipeline Overview')}
                    className="text-[#E52430] font-bold hover:underline"
                  >
                    Explore Interactive Live View &rarr;
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
