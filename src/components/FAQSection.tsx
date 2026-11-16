import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is "ready-to-use business software"?',
      answer: 'Ready-to-use software is pre-engineered, fully functional software built around industry-standard workflows. Unlike custom development projects that require months of coding from scratch, SoftStreak systems are ready to deploy, configure, and connect to your team within days.'
    },
    {
      question: `What is the relationship between SoftStreak and ${siteConfig.parentCompany}?`,
      answer: `SoftStreak (Software Street) is an official venture and product ecosystem offered under ${siteConfig.parentCompany}. All software architectures, deployment standards, and customer agreements operate under the backing and governance of Tavreville.`
    },
    {
      question: 'Can the software be configured to match our exact company processes?',
      answer: 'Yes. While the core engine is pre-built to ensure rock-solid stability, every module features configurable settings: custom fields, approval chains, role permissions, notification rules, and company branding (logos and color schemes).'
    },
    {
      question: 'What are the technical requirements for the WhatsApp Software?',
      answer: 'Our WhatsApp Software utilizes the official Meta / WhatsApp Cloud and Business APIs. It requires a dedicated phone number (mobile or landline) that can receive a verification code, and an active Meta Business Manager account. Our team assists with full setup.'
    },
    {
      question: 'How do we schedule and experience a product demonstration?',
      answer: 'You can book a live interactive demo using our booking form or directly reach out on WhatsApp. A software specialist will walk you through the system in real time, answer questions, and show how the product fits your day-to-day operations.'
    },
    {
      question: 'Are there long-term locked-in contracts?',
      answer: 'We prioritize SMB-friendly flexibility. Specific billing tiers and subscription options are discussed transparently during your initial walkthrough, tailored to your company headcount and required feature modules.'
    }
  ];

  return (
    <section className="py-20 relative bg-[#F7F8FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E52430] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171923] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-base text-[#252832]">
            Clear answers to common questions about our ready-to-deploy software and onboarding.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft-sm transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#171923]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E52430]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#252832] leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
          <p className="text-xs sm:text-sm text-[#252832] font-medium">
            Have a question not listed here? Connect with our team directly.
          </p>
          <a
            href={buildWhatsAppUrl("Hello SoftStreak team, I have a specific question about your software.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#E52430] hover:underline transition"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Ask us on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
