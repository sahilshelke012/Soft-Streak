import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'hr-software',
    name: 'HR Software',
    category: 'Operations',
    shortTagline: 'End-to-End Human Resource & Payroll Management',
    description: 'A centralized human resources management platform designed to streamline employee lifecycles, attendance tracking, leave workflows, and automated payroll calculations for small and medium-sized organizations.',
    targetAudience: 'HR Managers, Operations Heads, SMB Business Owners',
    iconName: 'Users',
    badge: 'Ready to Deploy',
    capabilities: [
      'Employee profile directory & document storage',
      'Attendance tracking and biometric / check-in logs',
      'Leave application, approval workflows & balance tracking',
      'Automated payroll calculation with deduction rules',
      'Employee self-service (ESS) portal for payslips and requests',
      'Compliance and organizational performance reporting'
    ],
    keyBenefits: [
      'Minimizes manual paperwork and recurring administrative overhead',
      'Maintains clean compliance and auditable employee records',
      'Speeds up monthly payroll disbursement with fewer errors'
    ],
    idealFor: [
      'Growing startups scaling from 10 to 500+ employees',
      'Mid-sized businesses moving away from manual spreadsheets',
      'Distributed teams requiring remote attendance and leave approvals'
    ],
    deploymentTime: 'Rapid Onboarding (Configurable in days)',
    seoKeywords: ['HR software for SMBs', 'HRMS system', 'payroll automation', 'employee management software']
  },
  {
    id: 'crm-software',
    name: 'CRM Software',
    category: 'Growth & Comms',
    shortTagline: 'Intelligent Lead & Customer Relationship Pipeline',
    description: 'A modern sales CRM engineered to capture leads, track conversion funnels, manage customer interactions across touchpoints, and maintain a clear deal pipeline without unnecessary complexity.',
    targetAudience: 'Sales Directors, Business Founders, Account Managers',
    iconName: 'TrendingUp',
    badge: 'High Conversion',
    capabilities: [
      'Multi-channel lead capture and centralized contact repository',
      'Visual drag-and-drop sales pipeline and deal staging',
      'Activity logging for calls, meetings, notes, and emails',
      'Automated task reminders and follow-up alerts',
      'Sales performance dashboards and conversion metrics',
      'Custom fields tailored to your company sales process'
    ],
    keyBenefits: [
      'Prevents valuable sales leads from slipping through cracks',
      'Gives founders and sales leaders real-time revenue visibility',
      'Standardizes follow-up processes across your sales team'
    ],
    idealFor: [
      'B2B service providers and consulting agencies',
      'Wholesale distributors and commercial suppliers',
      'Direct-to-business sales teams seeking streamlined pipeline visibility'
    ],
    deploymentTime: 'Plug-and-Play Setup',
    seoKeywords: ['business CRM software', 'sales pipeline tracker', 'lead management system', 'customer relationship software']
  },
  {
    id: 'whatsapp-software',
    name: 'WhatsApp Software',
    category: 'Growth & Comms',
    shortTagline: 'Official WhatsApp Business & Multi-Agent Communication Suite',
    description: 'A dedicated business communication tool utilizing official WhatsApp Business APIs to enable broadcast messaging, automated replies, team shared inboxes, and instant customer support at scale.',
    targetAudience: 'Customer Support Managers, Marketing Leads, Business Operators',
    iconName: 'MessageSquare',
    badge: 'Top Engagement',
    capabilities: [
      'Official WhatsApp Business API integration support',
      'Shared multi-agent team inbox with role permissions',
      'Automated greeting messages, away alerts & keyword replies',
      'Broadcast campaign delivery for updates and alerts',
      'Contact labeling, tags, and chat history retention',
      'Quick-reply templates for high-frequency inquiries'
    ],
    keyBenefits: [
      'Engages prospects on the messaging channel they check constantly',
      'Enables multiple team members to respond using a single business number',
      'Reduces response turnaround with 24/7 automated instant replies'
    ],
    idealFor: [
      'Retail and e-commerce brands handling high query volumes',
      'Service businesses scheduling appointments and confirmations',
      'Support teams requiring shared team numbers and audit logs'
    ],
    deploymentTime: 'API-Ready Setup',
    seoKeywords: ['WhatsApp business software', 'WhatsApp automation tool', 'multi agent WhatsApp inbox', 'WhatsApp broadcast system']
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    category: 'AI & Automation',
    shortTagline: 'Intelligent Workflow Automation & Data Assistants',
    description: 'Ready-to-use artificial intelligence integrations and automation connectors that eliminate repetitive data entry, extract document information, and trigger business actions across your digital tools.',
    targetAudience: 'Operations Executives, Tech-Forward Founders, Process Managers',
    iconName: 'Cpu',
    badge: 'Next-Gen Tech',
    capabilities: [
      'Automated document data extraction (invoices, forms, receipts)',
      'Intelligent customer inquiry classification and routing',
      'Custom business knowledge-base assistants for internal queries',
      'Automated workflow triggers connecting emails, CRM, and databases',
      'Smart summaries of meetings, tickets, and customer histories',
      'Scheduled background data syncs between enterprise apps'
    ],
    keyBenefits: [
      'Drastically cuts time spent on repetitive manual data handling',
      'Improves process accuracy and minimizes human transcription errors',
      'Empowers small teams to operate with the capacity of larger firms'
    ],
    idealFor: [
      'Businesses managing high-volume paperwork and documentation',
      'Companies wanting custom AI chat assistants for internal staff',
      'Teams seeking hands-off connectivity across their business tools'
    ],
    deploymentTime: 'Modular Implementation',
    seoKeywords: ['AI business automation', 'workflow automation software', 'intelligent document processing', 'business AI assistants']
  },
  {
    id: 'hospital-software',
    name: 'Hospital Software',
    category: 'Specialized Industry',
    shortTagline: 'Comprehensive Hospital & Clinical Practice Management',
    description: 'A purpose-built healthcare management system designed for clinics, nursing homes, and hospitals to coordinate outpatient/inpatient workflows, medical billing, appointment calendars, and patient records.',
    targetAudience: 'Hospital Administrators, Clinic Owners, Medical Directors',
    iconName: 'Activity',
    badge: 'Healthcare Grade',
    capabilities: [
      'Outpatient (OPD) and Inpatient (IPD) registration and admission',
      'Doctor appointment scheduling and digital token generation',
      'Electronic patient health records (EHR) and prescription history',
      'Medical billing, receipt generation, and payment tracking',
      'Pharmacy and laboratory investigation order workflows',
      'Role-based access controls for doctors, nurses, and billing staff'
    ],
    keyBenefits: [
      'Eliminates patient registration bottlenecks and queues',
      'Centralizes clinical history for accurate medical record keeping',
      'Keeps billing, diagnostic tests, and pharmacy charges unified'
    ],
    idealFor: [
      'Multi-specialty clinics and diagnostic care centers',
      'Private hospitals and nursing facilities',
      'Medical practice groups looking for digitized record systems'
    ],
    deploymentTime: 'Configured for Clinical Workflows',
    seoKeywords: ['hospital management software', 'clinic management system', 'EHR software', 'healthcare billing software']
  },
  {
    id: 'travel-software',
    name: 'Travel Software',
    category: 'Specialized Industry',
    shortTagline: 'Tour Operator, Travel Agency & Itinerary Solution',
    description: 'An all-in-one software solution tailored for travel agencies, tour operators, and destination management companies to build customized itineraries, manage bookings, generate invoices, and handle supplier records.',
    targetAudience: 'Travel Agency Owners, Tour Operators, DMCs',
    iconName: 'Compass',
    badge: 'Turnkey Solution',
    capabilities: [
      'Interactive day-by-day travel itinerary builder',
      'Customer quotation generation with customizable pricing tiers',
      'Hotel, transport, and flight booking status management',
      'Supplier and vendor ledger tracking (transfers, hotels, guides)',
      'Automated invoice generation and payment installment alerts',
      'Voucher issuance and customer documentation exports'
    ],
    keyBenefits: [
      'Creates professional, branded travel proposals in minutes',
      'Keeps customer bookings and supplier costs transparent in one place',
      'Reduces coordination errors during peak holiday and booking seasons'
    ],
    idealFor: [
      'Outbound and inbound travel agencies',
      'Customized tour operators and group travel planners',
      'Corporate travel management and hospitality agencies'
    ],
    deploymentTime: 'Rapid Agency Deployment',
    seoKeywords: ['travel agency software', 'tour operator CRM', 'itinerary builder software', 'travel booking management']
  }
];

export const companyValues = [
  {
    title: 'Ready-to-Use Architecture',
    description: 'Skip months of uncertain custom coding. Our software suites are pre-engineered with industry best practices and ready to configure for your business quickly.',
    icon: 'Zap'
  },
  {
    title: 'Offered Under Tavreville',
    description: 'Backed by the stability, governance, and technology standards of Tavreville, ensuring dependable operational continuity and reliable updates.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Engineered for SMB Scalability',
    description: 'Priced and architected specifically for small and medium-sized business owners who need lean, high-impact systems without enterprise bloat.',
    icon: 'Layers'
  },
  {
    title: 'Dedicated Human Support',
    description: 'Get direct onboarding assistance, personalized product walkthroughs, and fast response via WhatsApp or email whenever your team needs help.',
    icon: 'Headphones'
  }
];

export const deploymentSteps = [
  {
    step: '01',
    title: 'Select Your Software',
    description: 'Review our ready-to-use catalog and choose the exact software module that matches your operational requirements.'
  },
  {
    step: '02',
    title: 'Experience a Guided Demo',
    description: 'Book a live walkthrough or chat on WhatsApp. We present the system pre-configured to your business workflow.'
  },
  {
    step: '03',
    title: 'Configure & Onboard',
    description: 'Set up your users, import initial records, and configure roles with assisted guidance from our technical team.'
  },
  {
    step: '04',
    title: 'Automate & Scale',
    description: 'Launch day-to-day operations with confidence, backed by continuous uptime and responsive customer assistance.'
  }
];
