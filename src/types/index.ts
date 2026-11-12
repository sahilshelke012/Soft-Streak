export interface ProductItem {
  id: string;
  name: string;
  category: 'Operations' | 'Growth & Comms' | 'AI & Automation' | 'Specialized Industry';
  shortTagline: string;
  description: string;
  targetAudience: string;
  iconName: string;
  badge: string;
  capabilities: string[];
  keyBenefits: string[];
  idealFor: string[];
  deploymentTime: string;
  seoKeywords: string[];
}

export interface DemoBookingFormData {
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  preferredProduct: string;
  companySize: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  additionalNotes?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SiteConfig {
  brandName: string;
  parentCompany: string;
  tagline: string;
  subTagline: string;
  contact: {
    phonePlaceholder: string;
    whatsappNumberPlaceholder: string;
    emailPlaceholder: string;
    officeAddressPlaceholder: string;
    businessHoursPlaceholder: string;
  };
  socialLinks: {
    linkedinPlaceholder: string;
    twitterPlaceholder: string;
    facebookPlaceholder: string;
    instagramPlaceholder: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrlPlaceholder: string;
  };
}

