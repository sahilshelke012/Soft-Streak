import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare
} from 'lucide-react';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, email, and inquiry message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-t border-[#EEF0F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E52430] text-xs font-bold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiry Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
            Connect With{' '}
            <span className="text-[#E52430]">
              SoftStreak
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
            Have questions about software modules, pricing tiers, or implementation under Tavreville? 
            Send a direct message or connect with us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Contact Info & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F8FA] rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-soft-sm space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E52430]">
                  Business Information
                </span>
                <h3 className="text-xl font-bold text-[#171923] mt-0.5">
                  SoftStreak Headquarters
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Offered and governed under <strong className="text-[#171923]">{siteConfig.parentCompany}</strong>.
                </p>
              </div>

              {/* Editable Placeholder Notice */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-[#252832]">
                <span className="font-bold block text-[#171923] mb-0.5">Note on Contact Details:</span>
                The company contact details below use standard editable placeholders. Replace them in <code className="bg-slate-100 px-1 py-0.5 rounded text-[#E52430] font-mono">siteConfig.ts</code> with your verified operational information.
              </div>

              {/* Contact list with placeholders */}
              <div className="space-y-3.5">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#E52430] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Official Inquiries Email
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923]">
                      {siteConfig.contact.emailPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-[#E52430] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Phone & WhatsApp Helpline
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923]">
                      {siteConfig.contact.phonePlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#171923] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Registered Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923]">
                      {siteConfig.contact.officeAddressPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-soft-sm">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#171923] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Business Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#171923]">
                      {siteConfig.contact.businessHoursPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hello SoftStreak, I have a general enquiry regarding your software catalog.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-xs font-bold text-[#171923] bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-soft-sm hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-soft-lg">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold text-[#E52430] tracking-wider">
                  Direct Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171923] mt-0.5">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We reply within 1 business day. All fields marked with * are required.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-soft-sm">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#171923]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#252832] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to SoftStreak. Our technical representative will review your message and reply via email or phone shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-bold text-[#E52430] bg-red-50 hover:bg-red-100 rounded-xl border border-red-200 transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-[#E52430] text-xs font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Software of Interest
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm text-[#171923]"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="HR Software">HR Software</option>
                        <option value="CRM Software">CRM Software</option>
                        <option value="WhatsApp Software">WhatsApp Software</option>
                        <option value="AI Automation">AI Automation</option>
                        <option value="Hospital Software">Hospital Software</option>
                        <option value="Travel Software">Travel Software</option>
                        <option value="Multi-Product Suite">Multi-Product Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#252832] mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your current business challenges or software questions..."
                      className="w-full px-4 py-2.5 rounded-xl clean-input text-sm"
                      required
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm hover:shadow-red-sm transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
