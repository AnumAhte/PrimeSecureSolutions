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

/**
 * Canonical origin. Used by metadataBase, the sitemap, robots.txt and the
 * Open Graph image URL, so all four stay in step.
 * NOT VERIFIED — confirm this is the production domain before launch.
 */
export const siteUrl = "https://primesecuresolutions.com";

export const site = {
  name: "PrimeSecure Solutions",
  nameParts: { first: "Prime", second: "Secure" },
  tagline: "Security. People. Processes.\nAll in One Partner.",
  established: 2022,
  /** PLACEHOLDER — not supplied yet. Renders as a live tel: link and is
   *  published in LocalBusiness structured data; replace before launch. */
  phone: "(856) 123-4567",
  /** PLACEHOLDER — as above, renders as a live mailto: link. */
  email: "hello@primesecuresolutions.com",
  /** Verified, supplied by the client. */
  address: {
    line1: "5900 Balcones Drive #27815",
    line2: "Austin, TX 78731, USA",
    /** Broken out for schema.org PostalAddress, which expects the parts
     *  separately rather than as display lines. */
    street: "5900 Balcones Drive #27815",
    city: "Austin",
    region: "TX",
    postalCode: "78731",
    country: "US",
  },
  /** PLACEHOLDER — the four footer icons link nowhere until real profile
   *  URLs are supplied. */
  social: {
    linkedin: "#",
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
} as const;

/**
 * Standard call-to-action wording, per the client's CTA hierarchy:
 *   primary   — the main site CTA, on the header and every page's closing band
 *   secondary — the same across all service pages
 * Service-specific primaries live on each `services.items[].cta`.
 * Do not introduce variants ("Learn More", "Get Started", "Contact Us").
 */
export const cta = {
  primary: { label: "Get a Free Consultation", href: "/contact" },
  secondary: { label: "Discuss Your Needs", href: "/contact" },
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
  /** Was "Get Started Today" in the mockup; changed to the standard primary
   *  CTA on the client's instruction to drop "Get Started" variants. */
  primaryCta: cta.primary,
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

export const capabilities = {
  eyebrow: "Capabilities",
  title: "Built to Support Your Business.",
  /** Shown as a single divided strip, in this order. */
  pillars: [
    { icon: "clock" as IconName, label: "24/7 Monitoring" },
    { icon: "users" as IconName, label: "Dedicated Teams" },
    { icon: "gear" as IconName, label: "Flexible Support" },
    { icon: "chart" as IconName, label: "Scalable Solutions" },
  ],
  body: "Whether you need continuous security monitoring or reliable day-to-day business support, PrimeSecure provides trained professionals and structured processes designed around your business needs.",
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
      body: "PrimeSecure provides remote surveillance and monitoring support for businesses that need reliable oversight of their properties and operations.",
      /** Extra paragraphs shown on the service page under `body`. */
      intro: [
        "Our trained monitoring professionals follow client-defined procedures to identify activity, verify events, escalate incidents when required, and maintain clear documentation.",
      ],
      cta: { label: "Request a Monitoring Assessment", href: "/contact" },
      features: [
        "24/7 Remote CCTV Monitoring",
        "Camera & Property Surveillance",
        "Activity & Incident Detection",
        "Alarm Monitoring Support",
        "Incident Escalation",
        "Daily Activity Reporting",
        "Multi-Location Monitoring",
      ],
      /** The monitoring workflow, shown on the homepage and the service page. */
      process: {
        title: "Our Monitoring Process",
        steps: [
          {
            number: "01",
            title: "Monitor",
            body: "Our team continuously monitors connected camera feeds according to your coverage requirements.",
          },
          {
            number: "02",
            title: "Identify",
            body: "Potentially relevant activity is identified based on your monitoring instructions.",
          },
          {
            number: "03",
            title: "Verify",
            body: "The event is reviewed to determine what is happening and whether further action is required.",
          },
          {
            number: "04",
            title: "Escalate",
            body: "When an incident meets your predefined escalation criteria, the appropriate contact or response process is initiated.",
          },
          {
            number: "05",
            title: "Document",
            body: "Relevant activity and incidents are documented for operational visibility and follow-up.",
          },
        ],
      },
    },
    {
      slug: "virtual-assistants",
      icon: "user" as IconName,
      title: "Virtual Assistants",
      kicker: "Skilled People. Real Business Support.",
      card: "Dedicated remote professionals helping with administration, customer support, research, data entry, scheduling, and more.",
      body: "Reduce your workload with dedicated virtual assistants who can handle repetitive, administrative, customer service, and operational tasks.",
      cta: { label: "Build Your VA Team", href: "/contact" },
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
      /** Support levels, shown on the service page. */
      packages: {
        title: "Flexible Virtual Assistant Support",
        body: "Choose the level of support that fits your business.",
        options: [
          {
            title: "Dedicated Virtual Assistant",
            body: "A dedicated professional focused on your business and trained around your specific processes.",
          },
          {
            title: "Shared Support",
            body: "Flexible assistance for recurring tasks without requiring a full-time dedicated resource.",
          },
          {
            title: "Specialized Support",
            body: "Support for specific functions such as customer service, lead generation, research, CRM management, data entry, or administrative operations.",
          },
        ],
      },
    },
    {
      slug: "bookkeeping",
      icon: "dollar" as IconName,
      title: "Bookkeeping Support",
      kicker: "Keep Your Financial Records Organized.",
      card: "Transaction categorization, reconciliation, invoicing, AP/AR support, and financial data organization.",
      body: "Our bookkeeping support team helps businesses maintain organized financial records and handle recurring bookkeeping tasks efficiently.",
      cta: { label: "Get Bookkeeping Support", href: "/contact" },
      features: [
        "Transaction Categorization",
        "Bank & Credit Card Reconciliation",
        "Accounts Payable Support",
        "Accounts Receivable Support",
        "Invoice Management",
        "Financial Data Entry",
        "Monthly Bookkeeping Support",
        "Reporting Assistance",
      ],
      /** Scope limit. Must stay on the page — it is what separates this from a
       *  CPA/accounting offering. */
      note: "PrimeSecure provides bookkeeping and operational support. Tax, audit, and CPA services are not included unless specifically provided through an appropriately qualified professional.",
    },
    {
      slug: "back-office",
      icon: "clipboard" as IconName,
      title: "Back Office Support",
      kicker: "The Work Behind Your Business, Handled.",
      card: "Take repetitive operational work off your team's plate with dependable administrative and back-office assistance.",
      body: "Let our team take care of the operational tasks that consume your team's valuable time.",
      cta: { label: "Build Your Support Team", href: "/contact" },
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
  eyebrow: "Why PrimeSecure",
  titleLead: "Why Businesses Choose",
  titleAccentLead: "",
  titleAccent: "PrimeSecure",
  body: "We combine technology, trained professionals, and structured processes to provide the support your business needs to operate efficiently and grow with confidence.",
  items: [
    {
      icon: "lock" as IconName,
      title: "Reliable & Consistent",
      body: "Dependable support with processes designed for consistent day-to-day operations.",
    },
    {
      icon: "users" as IconName,
      title: "Trained Professionals",
      body: "Dedicated teams trained to follow your procedures, systems, and communication requirements.",
    },
    {
      icon: "chart" as IconName,
      title: "Flexible & Scalable",
      body: "Start with the support you need and scale as your business grows.",
    },
    {
      icon: "gear" as IconName,
      title: "One Trusted Partner",
      body: "Combine surveillance, virtual assistance, bookkeeping, and back-office support under one partner.",
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
  titleLead: "More Than Security.",
  titleAccent: "Complete Business Support.",
  body: [
    "Our team can also provide reliable operational support behind the scenes, helping businesses reduce administrative workload and stay focused on growth.",
  ],
  /** The three non-surveillance services, summarised. */
  items: [
    {
      icon: "user" as IconName,
      title: "Virtual Assistants",
      body: "Administrative, customer support, research, CRM, email, and other day-to-day tasks.",
      href: "/services/virtual-assistants",
    },
    {
      icon: "dollar" as IconName,
      title: "Bookkeeping Support",
      body: "Transaction categorization, reconciliation, invoicing, AP/AR support, and financial data organization.",
      href: "/services/bookkeeping",
    },
    {
      icon: "clipboard" as IconName,
      title: "Back Office Support",
      body: "Data entry, document management, reporting, processing, and other recurring operational tasks.",
      href: "/services/back-office",
    },
  ],
  cta: { label: "Explore Our Services", href: "/services" },
};

/** Homepage section giving surveillance the prominence it earns as the core service. */
export const surveillanceFeature = {
  eyebrow: "Core Service",
  title: "24/7 Surveillance & Monitoring",
  lead: "Keep an extra set of trained eyes on your business around the clock.",
  body: "Our remote monitoring team helps businesses monitor cameras, identify activity, respond according to established procedures, and document incidents.",
  processTitle: "Our Monitoring Process",
  capabilitiesTitle: "Key Capabilities",
  cta: { label: "Explore Surveillance & Monitoring", href: "/services/surveillance" },
};

/**
 * Security & confidentiality.
 *
 * Deliberately describes the APPROACH only. The client's brief was explicit:
 * list specific technical measures (encryption, certifications, retention
 * periods) only once they confirm those are actually in place. Add them to
 * `measures` at that point — the page renders the list when it is non-empty.
 */
export const security = {
  eyebrow: "Security & Confidentiality",
  title: "Your Business Information Matters.",
  body: [
    "We understand that our teams may work with sensitive operational, customer, financial, and business information.",
    "Our approach focuses on controlled access, clear procedures, responsible handling of information, and following client-defined security and confidentiality requirements.",
  ],
  pillars: [
    { icon: "lock" as IconName, title: "Controlled access" },
    { icon: "clipboard" as IconName, title: "Clear procedures" },
    { icon: "shield" as IconName, title: "Responsible handling" },
    { icon: "gear" as IconName, title: "Client-defined requirements" },
  ],
  /** EMPTY BY DESIGN — see note above. */
  measures: [] as { title: string; body: string }[],
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

export const ctaBand = {
  eyebrow: "Ready to Make Your Business Easier to Run?",
  title: "Let's Build the Right Support Team for You.",
  body: "Tell us what you need help with and we'll help you determine the right service and support model for your business.",
  cta: { label: "Get a Free Consultation", href: "/contact" },
  note: "No complicated process. Just a conversation about your business and how we can help.",
};

export const footer = {
  blurb: "Professional business support designed around your needs.",
  /** Bottom bar links, beside the copyright line. */
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
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

/** Approved copy (_design/homepage-copy.md, "FINAL CTA"). */
export const finalCta = {
  eyebrow: "Ready to Build a More Efficient Operation?",
  title: "Tell us what you need.",
  body: "We'll help you build a support solution around your business.",
  primaryCta: cta.primary,
  secondaryCta: { label: "Explore Our Services", href: "/services" },
};

export const contact = {
  eyebrow: "Contact Us",
  /** Title, body and note are the approved CTA copy, used verbatim. */
  title: ctaBand.title,
  body: ctaBand.body,
  note: ctaBand.note,

  /** Verbatim from _design/homepage-copy.md ("Business Hours") — the only
   *  approved statement about availability. Do not replace this with invented
   *  office hours or response times. */
  hours: {
    icon: "clock" as IconName,
    label: "Business hours",
    value: "Available according to your selected service and support requirements.",
  },

  methods: [
    {
      icon: "phone" as IconName,
      label: "Call us",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
    },
    {
      icon: "mail" as IconName,
      label: "Email us",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "pin" as IconName,
      label: "Visit us",
      value: `${site.address.line1}, ${site.address.line2}`,
    },
  ],

  form: {
    title: "Send us a message",
    /** Every visible string in the form, so all of it stays editable. */
    labels: {
      name: "Your name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      website: "Company website",
      websitePlaceholder: "https://",
      locations: "Number of locations",
      locationsPlaceholder: "Select",
      service: "What can we help with?",
      servicePlaceholder: "Select a service",
      message: "How can we help?",
      messagePlaceholder:
        "Tell us about your business, the hours you need covered, and what's taking up your team's time.",
      privacy: "We'll only use these details to reply to you.",
      sending: "Sending…",
    },
    /** Field labels and UI strings only — no service promises. */
    services: [
      "Surveillance & Monitoring",
      "Virtual Assistants",
      "Bookkeeping Support",
      "Back Office Support",
      "More than one / not sure yet",
    ],
    locationOptions: ["1", "2–5", "6–20", "20+"],
    /** Shown only when the matching service is selected, so the form stays
     *  short for everyone else. Values are submitted as `serviceDetail`. */
    followUps: {
      "Surveillance & Monitoring": {
        label: "What would you like monitored?",
        placeholder:
          "Cameras already installed, sites to cover, and the hours you need watched.",
      },
      "Virtual Assistants": {
        label: "What tasks would the assistant handle?",
        placeholder:
          "The day-to-day work you would hand over, and whether you need dedicated, shared or specialized support.",
      },
      "Bookkeeping Support": {
        label: "What does your bookkeeping involve?",
        placeholder:
          "Software you use, roughly how many transactions a month, and which tasks you need covered.",
      },
      "Back Office Support": {
        label: "Which processes need support?",
        placeholder: "The recurring tasks and systems involved.",
      },
    } as Record<string, { label: string; placeholder: string }>,
    submit: "Send Message",
    successTitle: "Thanks — we've got it.",
    successBody:
      "Your message has been sent. We'll be in touch about the right service and support model for your business.",
  },
};

export const servicePage = {
  eyebrow: "Our Services",
  featuresTitle: "What's included",
  /** Section eyebrows, shown only where the service has that section. */
  processEyebrow: "Process",
  packagesEyebrow: "Options",
  otherTitle: "Explore our other services",
  backLabel: "All services",
} as const;

/* ---------------------------------------------------------------------------
 * Pages beyond the homepage.
 *
 * The homepage copy was approved (_design/homepage-copy.md). These pages were
 * not — no approved copy exists for them. So the rule applied throughout below:
 *
 *   - Anything that restates approved copy is reused directly from the exports
 *     above, never retyped, so it cannot drift.
 *   - Anything genuinely new is marked DRAFT and needs the client's sign-off.
 *   - Facts the business alone can state — prices, legal terms, company history,
 *     headcount, response times — are NOT invented. They are left as empty
 *     structures with a visible notice on the page.
 * ------------------------------------------------------------------------ */

export const about = {
  eyebrow: "About Us",
  titleLead: "Security. People. Processes.",
  titleAccent: "All in One Partner.",
  body: [
    "PrimeSecure Solutions provides professional surveillance, virtual assistance, bookkeeping, and back-office support to businesses looking for reliable operational partners.",
  ],
  sections: [
    {
      icon: "users" as IconName,
      title: "Who We Are",
      body: "PrimeSecure Solutions provides professional surveillance, virtual assistance, bookkeeping, and back-office support to businesses looking for reliable operational partners.",
    },
    {
      icon: "gear" as IconName,
      title: "What We Do",
      body: "We combine trained people, structured processes, and technology to provide practical support that can integrate with your existing operations.",
    },
    {
      icon: "clipboard" as IconName,
      title: "How We Work",
      body: "We first understand your requirements, build a support process around your business, train the assigned team, and maintain ongoing communication to ensure the service continues to meet your needs.",
    },
    {
      icon: "shield" as IconName,
      title: "Our Approach",
      body: "We focus on reliability, clear communication, confidentiality, accountability, and long-term client relationships.",
    },
  ],
  /** DRAFT — team and operations detail the client has not supplied. Headcount,
   *  locations and shift structure are facts only they can state. */
  team: {
    title: "Our Team & Operations",
    paragraphs: [] as string[],
  },
  established: site.established,
};

export const pricing = {
  eyebrow: "Pricing",
  /** DRAFT — describes the consultative model the approved copy already
   *  implies ("we'll help you determine the right service and support model"),
   *  without stating a price. */
  title: "Priced Around What You Actually Need.",
  body: "Every business needs a different mix of services, hours and cover, so support is scoped to your requirements rather than sold as a fixed package.",
  /** Section heading above `factors`. */
  factorsEyebrow: "What shapes a quote",
  factorsTitle: "Three things decide the number.",
  /** Shown while `plans` is empty. */
  quotePanel: {
    title: "Tell us what you need and we'll price it.",
    body: "Support is scoped to your requirements rather than sold as a fixed package, so the quickest route to a number is a short conversation about your operation.",
  },
  /** DRAFT — what a quote depends on. Structural, not a price claim. */
  factors: [
    {
      icon: "clipboard" as IconName,
      title: "Which services you need",
      body: "One service, or several combined under one partner.",
    },
    {
      icon: "clock" as IconName,
      title: "Hours and coverage",
      body: "The hours you need covered and how that changes across the week.",
    },
    {
      icon: "users" as IconName,
      title: "Scale of the work",
      body: "Volume, number of sites or properties, and how many people it takes.",
    },
  ],
  /** EMPTY BY DESIGN. No published rates exist. Add plans here and the page
   *  renders them instead of the "request a quote" panel. */
  plans: [] as {
    name: string;
    price: string;
    period: string;
    body: string;
    features: string[];
    featured?: boolean;
  }[],
  cta: { label: "Get a Free Consultation", href: "/contact" },
};

export const faqs = {
  eyebrow: "FAQs",
  title: "Questions, Answered.",
  /** Link shown under a shortened list, e.g. on the homepage. */
  seeAllLabel: "See all questions",
  items: [
    {
      q: "Do you provide 24/7 surveillance?",
      a: "Yes. We provide remote surveillance and monitoring support based on the required coverage and monitoring procedures.",
    },
    {
      q: "Can you monitor multiple locations?",
      a: "Yes. Our monitoring services can be structured around multiple properties and locations.",
    },
    {
      q: "Can I hire a dedicated VA?",
      a: "Yes. We can provide dedicated virtual assistants trained around your business processes.",
    },
    {
      q: "Can I combine multiple services?",
      a: "Yes. Businesses can use PrimeSecure for surveillance, virtual assistance, bookkeeping support, and back-office operations.",
    },
    {
      q: "How does pricing work?",
      a: "Pricing is customized based on the service, coverage requirements, workload, staffing needs, and scope of work.",
    },
    {
      q: "How quickly can we get started?",
      a: "After understanding your requirements, we define the scope, assign the appropriate resources, complete the required setup/training, and begin service.",
    },
    {
      q: "Do you provide CPA or tax services?",
      a: "Our standard offering is bookkeeping and operational support. CPA, tax, and audit services are not included unless provided through an appropriately qualified professional.",
    },
  ],
};

export const blog = {
  eyebrow: "Blog",
  title: "Insights and Updates",
  body: "Notes on security, outsourcing and running a business with less operational load.",
  /** EMPTY BY DESIGN — no posts have been written. The page renders an empty
   *  state until entries are added here. */
  posts: [] as {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime?: string;
  }[],
  emptyState: "There are no posts yet. Once we start publishing, they'll appear here.",
};

export const careers = {
  eyebrow: "Careers",
  title: "Work With Us",
  body: "We hire monitoring professionals, virtual assistants, bookkeepers and back-office staff.",
  /** EMPTY BY DESIGN — no openings have been supplied. */
  openings: [] as {
    slug: string;
    title: string;
    location: string;
    type: string;
    body: string;
  }[],
  emptyState: "There are no open roles listed right now.",
  /** Shown alongside the empty state so interest is not lost. */
  speculative: {
    body: "If you think you'd be a fit for the kind of work we do, get in touch and tell us what you do.",
    /** Not the standard primary CTA: a candidate is not requesting a sales
     *  consultation. The CTA rules allow a variant where there is a UX reason. */
    cta: { label: "Send Us Your Details", href: "/contact" },
  },
};

/**
 * Legal pages.
 *
 * DELIBERATELY EMPTY. Privacy and terms text must come from the client or their
 * legal advisor: generated boilerplate that does not describe how this business
 * actually handles data is a liability, not a placeholder. Each page renders a
 * visible notice until `sections` is filled in.
 */
export const legal = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    sections: [] as { heading: string; paragraphs: string[] }[],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    sections: [] as { heading: string; paragraphs: string[] }[],
  },
  /** Shown in place of missing legal text. */
  missingNotice: {
    title: "This page has not been published yet.",
    body: "This policy needs to be supplied by the business before launch. Until then, please get in touch with any questions about how we handle your information.",
    /** Same reasoning as careers: a privacy query is not a sales enquiry. */
    cta: { label: "Ask Us a Question", href: "/contact" },
  },
};
