import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Building, 
  Mail, 
  Phone, 
  User, 
  CheckCircle, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { productsData } from '../data/products';
import { siteConfig, buildWhatsAppUrl } from '../config/siteConfig';
import type { DemoBookingFormData } from '../types';

interface DemoBookingSectionProps {
  preselectedProduct?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const DemoBookingSection: React.FC<DemoBookingSectionProps> = ({
  preselectedProduct = '',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<DemoBookingFormData>({
    fullName: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    preferredProduct: preselectedProduct || productsData[0].name,
    companySize: '11-50 employees',
    preferredDate: '',
    preferredTimeSlot: '10:00 AM - 12:00 PM EST',
    additionalNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, preferredProduct: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.businessEmail.trim() || !formData.phoneNumber.trim()) {
      setErrorMessage('Please fill in your name, business email, and phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission & fire Meta/Google conversion events
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Marketing Conversion Events for Google and Meta Ads if present
      if (typeof window !== 'undefined') {
        const win = window as any;
        if (win.fbq) {
          win.fbq('track', 'Lead', {
            content_name: formData.preferredProduct,
            content_category: 'DemoBooking',
          });
        }
        if (win.gtag) {
          win.gtag('event', 'generate_lead', {
            event_category: 'DemoBooking',
            event_label: formData.preferredProduct,
          });
        }
      }

      if (onSuccess) onSuccess();
    }, 900);
  };

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
  ];

  return (
    <div className={`w-full ${isModal ? '' : 'py-20 bg-white border-t border-b border-[#EEF0F3]'}`} id="book-demo">
      <div className={`${isModal ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#E52430] text-xs font-bold mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Interactive Walkthrough</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171923] tracking-tight">
              Schedule Your Free Product Walkthrough
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-[#252832]">
              See how our ready-to-use business software functions with your specific team workflow. 
              No obligations, no pressure.
            </p>
          </div>
        )}

        <div className={`mx-auto ${isModal ? 'max-w-full' : 'max-w-4xl'}`}>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-soft-lg overflow-hidden">
            
            {/* Form Header Info Banner */}
            <div className="bg-[#F7F8FA] p-6 sm:p-7 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold text-[#E52430] tracking-wider">
                  Direct Specialist Demo
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#171923] mt-0.5">
                  {isModal ? 'Book a Product Demonstration' : 'Reserve Your Live Demonstration'}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#252832] bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-soft-sm">
                <ShieldCheck className="w-4 h-4 text-[#E52430]" />
                <span className="font-semibold">Zero spam guarantee</span>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-soft-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-[#171923]">
                      Demo Request Registered!
                    </h4>
                    <p className="text-sm text-[#252832] max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-[#171923]">{formData.fullName}</strong>. We have received your request for{' '}
                      <span className="text-[#E52430] font-bold">{formData.preferredProduct}</span>. A SoftStreak solution specialist will reach out shortly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Connect Button */}
                  <div className="p-5 rounded-2xl bg-[#F7F8FA] border border-slate-200 max-w-md mx-auto space-y-3">
                    <div className="text-xs text-slate-600 font-medium">
                      Want an immediate confirmation or prefer chatting on WhatsApp?
                    </div>
                    <a
                      href={buildWhatsAppUrl(
                        `Hello SoftStreak team, I just submitted a demo request for ${formData.preferredProduct}. My name is ${formData.fullName} from ${formData.companyName || 'our company'}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-[#171923] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition shadow-soft-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Confirm via WhatsApp Directly</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        businessEmail: '',
                        phoneNumber: '',
                        companyName: '',
                        preferredProduct: productsData[0].name,
                        companySize: '11-50 employees',
                        preferredDate: '',
                        preferredTimeSlot: '10:00 AM - 12:00 PM EST',
                        additionalNotes: '',
                      });
                    }}
                    className="text-xs text-[#E52430] hover:underline font-bold"
                  >
                    Submit another booking request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-[#E52430] text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Product Choice Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#171923] mb-1.5">
                      Select Software Solution *
                    </label>
                    <select
                      name="preferredProduct"
                      value={formData.preferredProduct}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl clean-input text-sm text-[#171923] font-medium"
                      required
                    >
                      {productsData.map((prod) => (
                        <option key={prod.id} value={prod.name}>
                          {prod.name} — ({prod.shortTagline})
                        </option>
                      ))}
                      <option value="Entire Business Software Suite">
                        Entire Business Software Suite (Integrated Ecosystem)
                      </option>
                    </select>
                  </div>

                  {/* Personal and Business Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Alex Johnson"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl clean-input text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Business Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="businessEmail"
                          value={formData.businessEmail}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl clean-input text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl clean-input text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Your Company / Venture"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl clean-input text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Size & Timing */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Company Headcount / Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm text-[#171923]"
                      >
                        <option value="1-10 employees">1 - 10 employees</option>
                        <option value="11-50 employees">11 - 50 employees</option>
                        <option value="51-200 employees">51 - 200 employees</option>
                        <option value="200+ employees">200+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#252832] mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        name="preferredTimeSlot"
                        value={formData.preferredTimeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl clean-input text-sm text-[#171923]"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special requirements */}
                  <div>
                    <label className="block text-xs font-bold text-[#252832] mb-1.5">
                      Specific Requirements or Current Challenges (Optional)
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Tell us what business operations you are looking to streamline..."
                      className="w-full px-4 py-2.5 rounded-xl clean-input text-sm"
                    />
                  </div>

                  {/* Submission and CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                      Offered under {siteConfig.parentCompany}. Confidential consultation.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#E52430] hover:bg-[#CF1B27] rounded-xl shadow-soft-sm hover:shadow-red-sm transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Booking...</span>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-white/90" />
                          <span>Confirm Product Demo</span>
                          <ArrowRight className="w-4 h-4 text-white/90" />
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
    </div>
  );
};
