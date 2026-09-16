/**
 * Single source of truth for every word on the site.
 *
 * Everything the client will eventually edit from the admin panel lives here.
 * When the CMS is wired up, these exports get replaced by data fetched from
 * Payload — the components consuming them do not have to change.
 */

export type IconName =
  | "shield"
  | "user"
  | "dollar"
  | "clipboard"
  | "lock"
  | "users"
  | "chart"
  | "gear"
  | "car"
  | "store"
  | "warehouse"
  | "building"
  | "briefcase"
  | "growth"
  | "phone"
  | "mail"
  | "pin"
  | "clock";

export const site = {
  name: "PrimeSecure Solutions",
  nameParts: { first: "Prime", second: "Secure" },
  tagline: "Security. People. Processes.\nAll in One Partner.",
  established: 2022,
  phone: "(856) 123-4567",
  email: "hello@primesecuresolutions.com",
  address: {
    line1: "123 Business Lane, Suite 100",
    line2: "Your City, ST 12345",
  },
  social: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Surveillance & Monitoring", href: "/services/surveillance" },
      { label: "Virtual Assistants", href: "/services/virtual-assistants" },
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Back Office Support", href: "/services/back-office" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "Security. Support. Simplified.",
  titleLead: "Your Business.",
  titleRestBefore: "Our ",
  titleAccent: "All-In-One",
  titleRestAfter: " Support.",
  body: "From 24/7 surveillance and remote monitoring to virtual assistants, bookkeeping, and back-office support — we help businesses stay secure, organized, and focused on what matters most.",
  primaryCta: { label: "Get Started Today", href: "/contact" },
  secondaryCta: { label: "Explore Our Services", href: "#services" },
  highlights: [
    {
      icon: "shield" as IconName,
      title: "Surveillance & Monitoring",
      body: "See more. Worry less.",
    },
    {
      icon: "user" as IconName,
      title: "Virtual Assistants",
      body: "Get more done.",
    },
    {
      icon: "dollar" as IconName,
      title: "Bookkeeping",
      body: "Keep your finances organized.",
    },
    {
      icon: "clipboard" as IconName,
      title: "Back Office Support",
      body: "Streamline your operations.",
    },
  ],
};

export const services = {
  eyebrow: "Our Services",
  title: "Comprehensive Business Support",
  body: "Reliable, flexible, and professional services designed to help businesses operate more efficiently — all from one trusted partner.",
  items: [
    {
      slug: "surveillance",
      icon: "shield" as IconName,
      title: "Surveillance & Monitoring",
      kicker: "24/7 Eyes on Your Business",
      card: "24/7 remote video monitoring, incident detection, escalation support, and operational awareness for your business and properties.",
      body: "Our trained monitoring professionals help businesses maintain continuous awareness of their properties, facilities, and operations through remote video surveillance and monitoring.",
      features: [
        "24/7 video monitoring",
        "Remote CCTV monitoring",
        "Camera surveillance",
        "Incident detection and escalation",
        "Alarm monitoring support",
        "Remote property monitoring",
        "Daily activity reporting",
      ],
    },
    {
      slug: "virtual-assistants",
      icon: "user" as IconName,
      title: "Virtual Assistants",
      kicker: "Skilled People. Real Business Support.",
      card: "Dedicated remote professionals helping with administration, customer support, research, data entry, scheduling, and more.",
      body: "Reduce your workload with dedicated virtual assistants who can handle repetitive, administrative, customer service, and operational tasks.",
      features: [
        "Administrative support",
        "Email management",
        "Calendar management",
        "Customer support",
        "Data entry",
        "Internet research",
        "Document management",
        "CRM updates",
        "Lead generation support",
      ],
    },
    {
      slug: "bookkeeping",
      icon: "dollar" as IconName,
      title: "Bookkeeping",
      kicker: "Keep Your Finances Organized.",
      card: "Organized financial support including transaction management, reconciliation, invoicing, accounts payable and receivable support.",
      body: "Stay on top of your financial records without adding another full-time employee to your payroll.",
      features: [
        "Transaction categorization",
        "Accounts payable support",
        "Accounts receivable support",
        "Bank and credit-card reconciliation",
        "Invoice management",
        "Financial data entry",
        "Monthly bookkeeping support",
        "Reporting assistance",
      ],
    },
    {
      slug: "back-office",
      icon: "clipboard" as IconName,
      title: "Back Office Support",
      kicker: "The Work Behind Your Business, Handled.",
      card: "Take repetitive operational work off your team's plate with dependable administrative and back-office assistance.",
      body: "Let our team take care of the operational tasks that consume your team's valuable time.",
      features: [
        "Data entry",
        "Document processing",
        "Administrative assistance",
        "Customer follow-up",
        "CRM management",
        "File organization",
        "Scheduling",
        "Reporting",
        "Research",
        "Other recurring business tasks",
      ],
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Choose Us",
  titleLead: "More Than Just a Service.",
  titleAccentLead: "A True ",
  titleAccent: "Business Partner.",
  body: "We combine technology, trained professionals, and structured processes to provide the support your business needs to operate efficiently and grow with confidence.",
  items: [
    {
      icon: "lock" as IconName,
      title: "Reliable & Secure",
      body: "Dependable processes designed around your business requirements.",
    },
    {
      icon: "users" as IconName,
      title: "Skilled Professionals",
      body: "Trained professionals supporting your day-to-day operations.",
    },
    {
      icon: "chart" as IconName,
      title: "Flexible & Scalable",
      body: "Start with one service and expand your support as your business grows.",
    },
    {
      icon: "gear" as IconName,
      title: "One Easy Solution",
      body: "Bring security, staffing, bookkeeping and administrative support together under one partner.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How It Works",
  title: "Simple. Flexible. Built Around You.",
  steps: [
    {
      number: "01",
      title: "Tell Us What You Need",
      body: "Schedule a consultation and tell us about your business and the challenges you're facing.",
    },
    {
      number: "02",
      title: "We Build Your Solution",
      body: "We identify the appropriate services, workflows and staffing requirements.",
    },
    {
      number: "03",
      title: "Meet Your Team",
      body: "We assign professionals according to your requirements and establish your operating process.",
    },
    {
      number: "04",
      title: "We Manage the Support",
      body: "Your team handles the assigned responsibilities while management oversees service quality and performance.",
    },
  ],
};

export const businessSupport = {
  eyebrow: "One Partner. Multiple Solutions.",
  titleLead: "Focus on Your Business.",
  titleAccent: "We'll Handle the Rest.",
  body: [
    "Running a business means dealing with hundreds of tasks every day. Some require your expertise. Others simply require time.",
    "Our goal is to take recurring operational work off your plate so you can focus on your customers, your team, and your growth.",
  ],
  chips: [
    { icon: "shield" as IconName, label: "Surveillance" },
    { icon: "user" as IconName, label: "Virtual Assistants" },
    { icon: "dollar" as IconName, label: "Bookkeeping" },
    { icon: "clipboard" as IconName, label: "Back-Office Support" },
  ],
  cta: { label: "Let's Talk About Your Business", href: "/contact" },
};

export const industries = {
  eyebrow: "Who We Support",
  title: "Built for Businesses of All Sizes",
  body: "Our services can be adapted to businesses across a wide range of industries.",
  cta: { label: "Explore Industries", href: "/industries" },
  items: [
    {
      icon: "car" as IconName,
      title: "Automotive",
      body: "Dealerships, auto lots and automotive businesses.",
    },
    {
      icon: "store" as IconName,
      title: "Retail",
      body: "Stores, convenience businesses and multi-location operations.",
    },
    {
      icon: "warehouse" as IconName,
      title: "Warehousing",
      body: "Warehouses, facilities and distribution operations.",
    },
    {
      icon: "building" as IconName,
      title: "Real Estate",
      body: "Property managers, property owners and real estate companies.",
    },
    {
      icon: "briefcase" as IconName,
      title: "Professional Services",
      body: "Accounting, insurance, consulting and other professional businesses.",
    },
    {
      icon: "growth" as IconName,
      title: "Growing Businesses",
      body: "Companies that need additional capacity without building a large in-house team.",
    },
  ],
};

export const testimonials = {
  eyebrow: "What Our Clients Say",
  title: "Trusted by Businesses That Need Reliable Support.",
  items: [
    {
      quote:
        "The team has become an important part of our daily operations. Their support allows us to focus on our business while they handle the work we outsourced.",
      author: "Client Testimonial",
      role: "Operations Manager",
    },
    {
      quote:
        "Having surveillance, admin support and bookkeeping under one partner removed a real management burden for us. One point of contact, one process.",
      author: "Client Testimonial",
      role: "Business Owner",
    },
    {
      quote:
        "We started with a single virtual assistant and expanded from there. The flexibility is what made the decision easy.",
      author: "Client Testimonial",
      role: "Managing Director",
    },
  ],
};

export const ctaBand = {
  eyebrow: "Ready to Make Your Business Easier to Run?",
  title: "Let's Build the Right Support Team for You.",
  body: "Tell us what you need help with and we'll help you determine the right service and support model for your business.",
  cta: { label: "Get a Free Consultation", href: "/contact" },
  note: "No complicated process. Just a conversation about your business and how we can help.",
};

export const footer = {
  blurb: "Professional business support designed around your needs.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Industries", href: "/industries" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Surveillance & Monitoring", href: "/services/surveillance" },
        { label: "Virtual Assistants", href: "/services/virtual-assistants" },
        { label: "Bookkeeping", href: "/services/bookkeeping" },
        { label: "Back Office Support", href: "/services/back-office" },
        { label: "Customer Support", href: "/services/back-office" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQs", href: "/faqs" },
        { label: "Pricing", href: "/pricing" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Contact Us",
  title: "Let's Build the Right Support Team for You.",
  body: "Tell us what you need help with and we'll help you work out the right service and support model for your business. No complicated process — just a conversation about what you're dealing with and where we can take work off your plate.",

  methods: [
    {
      icon: "phone" as IconName,
      label: "Call us",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
      note: "Monday to Friday, 9am – 6pm.",
    },
    {
      icon: "mail" as IconName,
      label: "Email us",
      value: site.email,
      href: `mailto:${site.email}`,
      note: "We reply within one business day.",
    },
    {
      icon: "pin" as IconName,
      label: "Visit us",
      value: `${site.address.line1}, ${site.address.line2}`,
      note: "By appointment.",
    },
  ],

  form: {
    title: "Send us a message",
    body: "The more you can tell us about your operation, the more useful our first reply will be.",
    services: [
      "Surveillance & Monitoring",
      "Virtual Assistants",
      "Bookkeeping",
      "Back Office Support",
      "More than one / not sure yet",
    ],
    submit: "Send Message",
    /** Shown once the enquiry is accepted. */
    successTitle: "Thanks — we've got it.",
    successBody:
      "We'll come back to you within one business day. If it's urgent, call us and you'll get someone straight away.",
  },

  next: {
    eyebrow: "What Happens Next",
    items: [
      {
        step: "01",
        title: "We read it properly",
        body: "A person reads your message — not an autoresponder — and comes back within one business day.",
      },
      {
        step: "02",
        title: "A short conversation",
        body: "Fifteen minutes to understand your operation, your hours, and what's actually taking up your team's time.",
      },
      {
        step: "03",
        title: "A proposal that fits",
        body: "We suggest the services and staffing that match what you described, and what each one would cost.",
      },
    ],
  },
} as const;
