import type { SiteConfig } from '../types';

/**
 * Site Configuration & Business Details
 * NOTE: Company contact details, phone numbers, and addresses use editable placeholders
 * in compliance with project instructions. Replace placeholder values with verified credentials.
 */
export const siteConfig: SiteConfig = {
  brandName: "Softstreak",
  parentCompany: "Tavreville",
  tagline: "Software Street - Ready-to-Use Business Software & Automation",
  subTagline: "The one-stop shop for ready-to-use business software and intelligent automation, engineered for SMB founders, managers, and growing teams.",
  
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
    defaultTitle: "Softstreak (Software Street) | Ready-to-Use Business Software & Automation",
    defaultDescription: "Softstreak under Tavreville offers ready-to-use HR, CRM, WhatsApp, AI Automation, Hospital, and Travel management software built for small and medium businesses.",
    siteUrlPlaceholder: "https://softstreak.com",
  }
};

/**
 * Helper to build an official WhatsApp enquiry URL with a pre-formatted message
 */
export const buildWhatsAppUrl = (customMessage?: string): string => {
  const number = siteConfig.contact.whatsappNumberPlaceholder.replace(/[^0-9]/g, '');
  const message = customMessage || "Hello Softstreak team, I would like to enquire about your ready-to-use business software solutions.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
