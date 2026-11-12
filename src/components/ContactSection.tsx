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
    <section id="contact" className="py-24 relative bg-navy-950 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiry Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connect With{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
              Softstreak
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have questions about software modules, pricing tiers, or implementation under Tavreville? 
            Send a direct message or connect with us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Contact Info & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Business Information
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Softstreak Headquarters
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Offered and governed under <strong className="text-purple-300">{siteConfig.parentCompany}</strong>.
                </p>
              </div>

              {/* Editable Placeholder Notice */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200">
                <span className="font-semibold block text-purple-300 mb-0.5">Note on Contact Details:</span>
                The company contact details below use standard editable placeholders. Replace them in <code className="bg-navy-950 px-1 py-0.5 rounded text-purple-200">siteConfig.ts</code> with your verified operational information.
              </div>

              {/* Contact list with placeholders */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Official Inquiries Email
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {siteConfig.contact.emailPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Phone & WhatsApp Helpline
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {siteConfig.contact.phonePlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Registered Address
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {siteConfig.contact.officeAddressPlaceholder}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-navy-950/70 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Business Operating Hours
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-200">
                      {siteConfig.contact.businessHoursPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hello Softstreak, I have a general enquiry regarding your software catalog.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Connect Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl backdrop-blur-xl">
              <div className="mb-6">
                <span className="text-xs uppercase font-bold text-purple-400 tracking-wider">
                  Direct Message
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  We reply within 1 business day. All fields marked with * are required.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Softstreak. Our technical representative will review your message and reply via email or phone shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-semibold text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 rounded-xl border border-purple-500/30 transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Software of Interest
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white bg-[#0A0F24]"
                      >
                        <option value="General Inquiry" className="bg-[#0A0F24] text-white">General Inquiry</option>
                        <option value="HR Software" className="bg-[#0A0F24] text-white">HR Software</option>
                        <option value="CRM Software" className="bg-[#0A0F24] text-white">CRM Software</option>
                        <option value="WhatsApp Software" className="bg-[#0A0F24] text-white">WhatsApp Software</option>
                        <option value="AI Automation" className="bg-[#0A0F24] text-white">AI Automation</option>
                        <option value="Hospital Software" className="bg-[#0A0F24] text-white">Hospital Software</option>
                        <option value="Travel Software" className="bg-[#0A0F24] text-white">Travel Software</option>
                        <option value="Multi-Product Suite" className="bg-[#0A0F24] text-white">Multi-Product Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your current business challenges or software questions..."
                      className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                      required
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-glow-sm transition-all duration-200 disabled:opacity-50"
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
