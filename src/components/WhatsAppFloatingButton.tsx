import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: 'Enquire about HR & CRM Software', message: 'Hello Softstreak, I would like more information on your HR and CRM software.' },
    { label: 'WhatsApp Automation Details', message: 'Hello Softstreak, can you share details on your official WhatsApp Business software?' },
    { label: 'Schedule a Guided Demo', message: 'Hello Softstreak, I would like to schedule a quick demo walkthrough for our team.' },
    { label: 'General Business Software Query', message: 'Hello Softstreak, I run an SMB and want to see what software suits our workflow.' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-navy-900 border border-emerald-500/40 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                  S
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-300 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <div className="text-sm font-bold">Softstreak Specialist</div>
                <div className="text-[11px] text-emerald-100">under {siteConfig.parentCompany} • Online</div>
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
          <div className="p-4 bg-navy-950/90 text-xs text-slate-300 space-y-3">
            <div className="p-3 rounded-xl bg-navy-900 border border-white/5 text-slate-200 leading-relaxed">
              Hello! 👋 Welcome to <strong className="text-white">Softstreak (Software Street)</strong>. How can we assist your business operations today?
            </div>

            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Quick Inquiries:
            </div>

            <div className="space-y-1.5">
              {quickPrompts.map((item, idx) => (
                <a
                  key={idx}
                  href={buildWhatsAppUrl(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-xl bg-navy-900 hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 text-slate-200 hover:text-emerald-300 text-xs transition"
                >
                  {item.label} &rarr;
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 bg-navy-900 border-t border-white/10 text-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition"
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
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-navy-950"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Open WhatsApp chat menu</span>
      </button>
    </div>
  );
};
