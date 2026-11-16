import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: 'Enquire about HR & CRM Software', message: 'Hello SoftStreak, I would like more information on your HR and CRM software.' },
    { label: 'WhatsApp Automation Details', message: 'Hello SoftStreak, can you share details on your official WhatsApp Business software?' },
    { label: 'Schedule a Guided Demo', message: 'Hello SoftStreak, I would like to schedule a quick demo walkthrough for our team.' },
    { label: 'General Business Software Query', message: 'Hello SoftStreak, I run an SMB and want to see what software suits our workflow.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white text-emerald-700 flex items-center justify-center font-extrabold text-sm shadow-soft-sm">
                  S
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <div className="text-sm font-bold">SoftStreak Specialist</div>
                <div className="text-[11px] text-emerald-100 font-medium">under {siteConfig.parentCompany} • Online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F7F8FA] text-xs text-[#252832] space-y-3">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-soft-sm text-[#171923] leading-relaxed font-medium">
              Hello! 👋 Welcome to <strong className="text-[#E52430]">SoftStreak</strong>. How can we assist your business operations today?
            </div>

            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Quick Inquiries:
            </div>

            <div className="space-y-1.5">
              {quickPrompts.map((item, idx) => (
                <a
                  key={idx}
                  href={buildWhatsAppUrl(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-xl bg-white hover:bg-red-50/50 border border-slate-200 hover:border-red-300 text-[#171923] hover:text-[#E52430] text-xs font-semibold transition shadow-soft-sm"
                >
                  {item.label} &rarr;
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-white border-t border-slate-200 text-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition shadow-soft-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open Custom Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Open WhatsApp chat menu</span>
      </button>
    </div>
  );
};
