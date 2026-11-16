import type { SiteConfig } from '../types';

/**
 * Site Configuration & Business Details
 * Official SoftStreak Brand Identity:
 * Tagline: "Essential Software for Every Business"
 * Offered under Tavreville
 */
export const siteConfig: SiteConfig = {
  brandName: "SoftStreak",
  parentCompany: "Tavreville",
  tagline: "Essential Software for Every Business",
  subTagline: "The one-stop shop for ready-to-use business software and automation solutions, engineered for SMB founders, managers, and growing teams under Tavreville.",
  
  contact: {
    // Editable Placeholders:
    phonePlaceholder: "[+1 (555) 000-0000 / Enter Phone Number]",
    whatsappNumberPlaceholder: "15550000000", // Clean digits for WhatsApp link (e.g. 15551234567)
    emailPlaceholder: "[contact@softstreak.com / Enter Official Email]",
    officeAddressPlaceholder: "[Insert Registered Business Address, City, Country]",
    businessHoursPlaceholder: "[Monday – Friday: 9:00 AM – 6:00 PM EST]",
  },

  socialLinks: {
    linkedinPlaceholder: "https://www.linkedin.com/company/softstreak-placeholder",
    twitterPlaceholder: "https://twitter.com/softstreak_placeholder",
    facebookPlaceholder: "https://facebook.com/softstreak_placeholder",
    instagramPlaceholder: "https://instagram.com/softstreak_placeholder",
  },

  meta: {
    defaultTitle: "SoftStreak | Essential Software for Every Business",
    defaultDescription: "SoftStreak under Tavreville offers ready-to-use HR, CRM, WhatsApp, AI Automation, Hospital, and Travel management software built for small and medium businesses.",
    siteUrlPlaceholder: "https://softstreak.com",
  }
};

/**
 * Helper to build an official WhatsApp enquiry URL with a pre-formatted message
 */
export const buildWhatsAppUrl = (customMessage?: string): string => {
  const number = siteConfig.contact.whatsappNumberPlaceholder.replace(/[^0-9]/g, '');
  const message = customMessage || "Hello SoftStreak team, I would like to enquire about your ready-to-use business software solutions.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
