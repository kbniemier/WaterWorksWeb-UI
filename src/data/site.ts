// Central business info — update these values in one place.
export const site = {
  name: 'WaterWorksWeb UI',
  tagline: 'AI-driven web design for local service businesses',
  // TODO: replace with your real business email before launch
  email: 'hello@waterworksweb.com',
};

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  blurb: string;
  features: string[];
}

export const industries: Industry[] = [
  {
    slug: 'dental',
    name: 'Dental Practices',
    icon: 'tooth',
    blurb: 'Calm, trustworthy sites that turn searches for "dentist near me" into booked cleanings.',
    features: [
      'Online appointment requests & new-patient forms',
      'Service pages for cleanings, implants, Invisalign & more',
      'Insurance & financing info patients can actually find',
      'Review highlights and before/after galleries',
    ],
  },
  {
    slug: 'home-services',
    name: 'Plumbing, HVAC & Electrical',
    icon: 'wrench',
    blurb: 'Fast, mobile-first sites built for the homeowner with a burst pipe at 2 a.m.',
    features: [
      'Tap-to-call buttons and emergency service banners',
      'Service-area pages that rank in every town you cover',
      'Quote request and scheduling forms',
      'Financing, warranties & maintenance plan showcases',
    ],
  },
  {
    slug: 'therapy',
    name: 'Therapy & Psychology',
    icon: 'heart',
    blurb: 'Warm, private, judgment-free sites that make reaching out feel easy.',
    features: [
      'Clinician bios and specialty pages',
      'Privacy-conscious intake with HIPAA-ready third-party tools',
      'Telehealth, insurance & sliding-scale details',
      'Gentle, accessible design that puts clients at ease',
    ],
  },
  {
    slug: 'more',
    name: 'And Many More',
    icon: 'spark',
    blurb: 'Chiropractors, med spas, veterinarians, law offices, salons — if you serve clients locally, I can help.',
    features: [
      'Industry-specific copy and structure',
      'Local SEO built in from day one',
      'Integrations with the tools you already use',
      'A site you can update without calling a developer',
    ],
  },
];

export interface Service {
  name: string;
  icon: string;
  description: string;
  includes: string[];
}

export const services: Service[] = [
  {
    name: 'AI-Powered Website Design',
    icon: 'layout',
    description:
      'Custom, conversion-focused websites designed with AI-accelerated workflows and finished by hand — so you get a polished site in weeks, not months.',
    includes: ['Custom design (no cookie-cutter templates)', 'Mobile-first & lightning fast', 'Accessibility best practices', 'Up to 10 core pages'],
  },
  {
    name: 'AI Chat & Lead Capture',
    icon: 'chat',
    description:
      'A friendly AI assistant trained on your services, hours, and FAQs that answers visitors 24/7 and hands qualified leads straight to you.',
    includes: ['Trained on your business info', 'After-hours lead capture', 'Booking & quote handoff', 'Conversation summaries by email'],
  },
  {
    name: 'Local SEO & Google Presence',
    icon: 'pin',
    description:
      'Get found by the people in your area who are already searching for what you do.',
    includes: ['On-page SEO & schema markup', 'Google Business Profile optimization', 'Service-area landing pages', 'Speed & Core Web Vitals tuning'],
  },
  {
    name: 'Content & Copywriting',
    icon: 'pen',
    description:
      'AI-assisted, human-edited copy that sounds like you and speaks to your patients and customers — not to robots.',
    includes: ['Service page copy', 'FAQ & about content', 'Blog post starters', 'Brand voice guide'],
  },
  {
    name: 'Booking & Integrations',
    icon: 'calendar',
    description:
      'Connect your site to the scheduling, CRM, and payment tools you already rely on.',
    includes: ['Online scheduling setup', 'Form-to-CRM automations', 'Review request workflows', 'Analytics & call tracking'],
  },
  {
    name: 'Care Plans & Hosting',
    icon: 'shield',
    description:
      'Ongoing updates, monitoring, and improvements so your site keeps working while you focus on your business.',
    includes: ['Fast, secure hosting', 'Monthly content updates', 'Uptime & security monitoring', 'Quarterly performance reports'],
  },
];

export const process = [
  { step: '01', title: 'Discover', text: 'A free 30-minute call to learn your business, your clients, and your goals.' },
  { step: '02', title: 'Design', text: 'AI-accelerated drafts let you see real designs within days — then we refine together.' },
  { step: '03', title: 'Launch', text: 'Your new site goes live, tuned for speed and search, with training so you feel in control.' },
  { step: '04', title: 'Grow', text: 'Ongoing care, SEO, and AI tools that keep bringing in new clients month after month.' },
];
