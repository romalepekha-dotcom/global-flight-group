// ============================================
// GLOBAL FLIGHT GROUP - CONTENT & CONSTANTS
// ============================================

// CONTACT INFORMATION
export const CONTACT_EMAIL = "roman@globalflightgroup.com";
export const COMPANY_NAME = "Global Flight Group";

// HERO SECTION
export const HERO = {
  headline: "U.S. Aircraft. Verified. Exported. Delivered.",
  subheadline: "From U.S. acquisition to worldwide delivery - fully managed. We source, verify, escrow, export, and deliver civilian aircraft globally with complete documentation and transparency.",
  trustBullets: [
    "Escrow-first transactions",
    "Complete title & lien checks",
    "Export paperwork handled",
    "Worldwide ferry delivery",
  ],
  primaryCTA: "Schedule a Call",
  secondaryCTA: "See How It Works",
};

// HOW IT WORKS - PROCESS STEPS
export const PROCESS_STEPS = [
  {
    id: 1,
    title: "U.S. Aircraft Search",
    shortTitle: "Search",
    description: "We identify and evaluate suitable civilian aircraft from verified U.S. sellers, matching your specifications and budget requirements.",
    details: [
      "Access to extensive U.S. aircraft databases",
      "Market analysis and pricing verification",
      "Initial seller vetting and communication",
      "Aircraft history and documentation review",
    ],
  },
  {
    id: 2,
    title: "Verification & Inspection",
    shortTitle: "Verification",
    description: "Comprehensive verification process including title checks, lien searches, and professional pre-purchase inspections coordinated with certified mechanics.",
    details: [
      "FAA registration and title verification",
      "Comprehensive lien search",
      "Pre-purchase inspection coordination",
      "Airworthiness and maintenance records review",
      "Legal compliance verification",
    ],
  },
  {
    id: 3,
    title: "Escrow & Transaction",
    shortTitle: "Escrow",
    description: "Secure escrow arrangement protects your funds. Money is held by a licensed third-party escrow agent until all conditions are met and documentation is complete.",
    details: [
      "Licensed third-party escrow service",
      "Your funds never touch our accounts",
      "Clear release conditions and milestones",
      "Full transaction transparency",
      "Purchase agreement review and execution",
    ],
  },
  {
    id: 4,
    title: "Export Documentation",
    shortTitle: "Export Docs",
    description: "We handle all FAA deregistration, export certificates, customs documentation, and international compliance requirements for legal export.",
    details: [
      "FAA deregistration processing",
      "Export Certificate of Airworthiness",
      "U.S. Customs documentation",
      "Destination country import documentation support",
      "ITAR/EAR compliance and export licensing",
      "International compliance verification",
    ],
  },
  {
    id: 5,
    title: "Ferry Delivery",
    shortTitle: "Delivery",
    description: "Professional ferry pilots deliver your aircraft to your specified location worldwide, with full insurance coverage and flight tracking throughout the journey.",
    details: [
      "Experienced, licensed ferry pilots",
      "Comprehensive insurance coverage",
      "International flight planning and permits",
      "Real-time tracking and updates",
      "Worldwide delivery to your specified location",
    ],
  },
];

// PACKAGES
export const PACKAGES = [
  {
    id: "basic",
    name: "Verification & Delivery",
    tagline: "You found it, we handle the rest",
    price: "",
    recommended: false,
    description: "Perfect when you've already identified an aircraft. We take over from verification through delivery.",
    features: [
      "Title & lien verification",
      "Pre-purchase inspection coordination",
      "Escrow arrangement & management",
      "Complete export documentation",
      "Worldwide ferry delivery",
      "Transaction support & guidance",
    ],
    cta: "Get Quote",
  },
  {
    id: "full-search",
    name: "Full Search & Acquisition",
    tagline: "End-to-end aircraft acquisition",
    price: "",
    recommended: true,
    description: "Complete service from search to delivery. We find options, verify everything, and deliver your aircraft ready to fly.",
    features: [
      "U.S. aircraft search & evaluation",
      "Negotiation support",
      "Complete verification process",
      "Pre-purchase inspection coordination",
      "Escrow arrangement & management",
      "All export documentation & licensing",
      "Worldwide ferry delivery",
      "Dedicated acquisition specialist",
    ],
    cta: "Get Started",
  },
  {
    id: "vip",
    name: "VIP Concierge Service",
    tagline: "White-glove, priority handling",
    price: "",
    recommended: false,
    description: "Premium service with priority attention, expedited timelines, and comprehensive concierge support throughout the entire process.",
    features: [
      "Priority aircraft sourcing",
      "Multiple aircraft evaluations",
      "Expedited verification & inspection",
      "Premium escrow service",
      "Accelerated export processing",
      "Premium worldwide ferry delivery",
      "24/7 dedicated support",
      "Post-delivery assistance",
      "Destination country registration support",
    ],
    cta: "Contact Us",
  },
];

// TRUST & COMPLIANCE
export const TRUST_POINTS = [
  {
    id: "escrow",
    icon: "🔒",
    title: "Third-Party Escrow",
    description: "Your funds are held by a licensed, independent escrow agent. We never touch your money. Funds release only when all agreed conditions are met and documented.",
  },
  {
    id: "verification",
    icon: "✓",
    title: "Complete Verification",
    description: "Every aircraft undergoes thorough title verification, comprehensive lien searches, and FAA registration checks before any transaction proceeds.",
  },
  {
    id: "documentation",
    icon: "📋",
    title: "Legal Export Documentation",
    description: "We handle all FAA deregistration, export certificates, customs paperwork, and international compliance requirements. Everything is documented and transparent.",
  },
  {
    id: "inspection",
    icon: "🔍",
    title: "Professional Inspections",
    description: "Pre-purchase inspections coordinated with certified A&P mechanics. You receive detailed reports on airworthiness, maintenance history, and condition.",
  },
  {
    id: "transparency",
    icon: "👁️",
    title: "Full Transparency",
    description: "Complete visibility into every step. You receive regular updates, documentation copies, and direct communication throughout the entire acquisition process.",
  },
  {
    id: "compliance",
    icon: "⚖️",
    title: "International Regulatory Compliance",
    description: "All transactions comply with U.S. export regulations (ITAR/EAR), FAA requirements, and destination country import regulations. We handle end-use certificates, export licensing, and international aviation standards.",
  },
];

// AIRCRAFT TYPES
export const AIRCRAFT_TYPES = {
  title: "Aircraft We Handle",
  subtitle: "From agricultural workhorses to business jets and specialized military aircraft - we source and export aircraft that meet strict regulatory and documentation requirements.",
  note: "Civilian and demilitarized aircraft only. All exports subject to ITAR/EAR compliance, end-use certification, and export licensing. Military aircraft must be demilitarized and civilian-registered. We handle all regulatory requirements and ensure legal exportability to your destination country.",
  categories: [
    {
      category: "Agricultural Aircraft",
      examples: ["Air Tractor AT-502/602/802", "Thrush 510G/710", "PZL-Mielec M18 Dromader", "Cessna Ag Wagon/Ag Truck"],
    },
    {
      category: "Single-Engine Piston",
      examples: ["Cessna 172/182/206/210", "Piper Cherokee/Archer/Saratoga/Lance", "Beechcraft Bonanza/Baron (single)", "Cirrus SR20/SR22/SR22T", "Mooney M20 series", "Aviat Husky/Pitts"],
    },
    {
      category: "Twin-Engine Piston",
      examples: ["Beechcraft Baron 58/58TC", "Piper Seneca/Navajo/Chieftain/Aztec", "Cessna 310/340/414/421", "Diamond DA42 Twin Star"],
    },
    {
      category: "Turboprop Aircraft",
      examples: ["Beechcraft King Air 90/200/350", "Pilatus PC-12/PC-6 Porter", "Piper Meridian/M500/M600", "Cessna Caravan 208", "Daher TBM 700/850/940", "Socata TBM series"],
    },
    {
      category: "Business Jets (Light)",
      examples: ["Cessna Citation Mustang/M2/CJ2/CJ3/CJ4", "Embraer Phenom 100/300", "HondaJet HA-420", "Cirrus Vision SF50", "Eclipse 500/550"],
    },
    {
      category: "Business Jets (Midsize)",
      examples: ["Cessna Citation Excel/XLS/Sovereign", "Hawker 400XP/800XP/900XP", "Learjet 45/60/70/75", "Embraer Legacy 450/500"],
    },
    {
      category: "Business Jets (Heavy)",
      examples: ["Gulfstream G280/G450/G550/G650", "Bombardier Challenger 300/350/605/650", "Dassault Falcon 2000/7X/8X", "Embraer Legacy 600/650"],
    },
    {
      category: "Helicopters (Piston)",
      examples: ["Robinson R22/R44/R66", "Schweizer 300C", "Enstrom 280FX/480B"],
    },
    {
      category: "Helicopters (Turbine)",
      examples: ["Bell 206 JetRanger/LongRanger/407", "Airbus H125 (AS350)/H130/H135/H145", "MD 500/520N/530F", "Sikorsky S-76"],
    },
    {
      category: "Military & Specialized Aircraft",
      examples: ["North American T-6 Texan (demilitarized)", "Beechcraft T-34 Mentor (civilian registered)", "North American T-28 Trojan (demilitarized)", "Cessna O-1 Bird Dog (civilian)", "De Havilland DHC-2 Beaver (military surplus)", "Pilatus PC-6/PC-9 (civilian registered)", "L-39 Albatros (demilitarized)", "MiG-15/17 (demilitarized, where legal)", "Warbirds (P-51, T-6, etc. - civilian registered)"],
    },
  ],
};

// FAQ
export const FAQ_ITEMS = [
  {
    id: "escrow",
    question: "How does escrow work?",
    answer: "We arrange a licensed third-party escrow service that holds your funds securely. The escrow agent releases payment to the seller only after all agreed conditions are met: title is clear, inspection is complete, and export documentation is in order. Your money never passes through Global Flight Group - it goes directly from escrow to the seller, ensuring complete transparency and security.",
  },
  {
    id: "international-delivery",
    question: "Do you deliver internationally?",
    answer: "Yes, we provide worldwide delivery services to any legal destination with proper export authorization. We handle all international compliance requirements, including ITAR/EAR export licensing, destination country import permits, and end-use certificates. Common delivery regions include North America, South America, Europe, Africa, Middle East, and Asia-Pacific. Delivery timeline varies by destination (1-4 weeks typical).",
  },
  {
    id: "delivery-location",
    question: "What delivery locations do you serve?",
    answer: "We provide worldwide delivery services to any legal destination. Popular delivery locations include major airports in North America, South America, Europe, Africa, and other international destinations. Delivery location flexibility is one of our key services - we deliver where you need your aircraft.",
  },
  {
    id: "aircraft-types",
    question: "What aircraft can you export?",
    answer: "We handle a wide range of aircraft including single and twin-engine piston aircraft, turboprops, business jets (light through heavy), helicopters, agricultural aircraft, and certain demilitarized military/warbird aircraft. All aircraft must meet U.S. export regulations (ITAR/EAR compliance), have clear title, and be legally exportable to the destination country. We can source everything from Cessna 172s to Gulfstream G650s, Robinson helicopters to turbine ag-planes, and civilian-registered military trainers like T-6 Texans or L-39 Albatros.",
  },
  {
    id: "timeline",
    question: "What's the typical timeline?",
    answer: "Timelines vary based on aircraft availability and complexity. Generally: Aircraft search and selection (1-3 weeks), verification and inspection (1-2 weeks), escrow and purchase (1 week), export documentation (2-4 weeks), ferry delivery (1-2 weeks). Total timeline typically ranges from 6-12 weeks. VIP service can expedite this process significantly.",
  },
  {
    id: "inspection",
    question: "How do inspections work?",
    answer: "We coordinate pre-purchase inspections with certified A&P (Airframe & Powerplant) mechanics near the aircraft's location. You receive a comprehensive inspection report covering airworthiness, structural condition, engine and systems status, and maintenance record review. You can also arrange to be present for the inspection or have your own representative attend.",
  },
  {
    id: "costs",
    question: "What are the total costs involved?",
    answer: "Costs include: aircraft purchase price, our service fee (based on package selected), escrow fees, pre-purchase inspection, export documentation and FAA fees, ferry delivery, and insurance. We provide a detailed cost breakdown upfront with no hidden fees. Final costs depend on aircraft type, location, and service package chosen.",
  },
  {
    id: "payment",
    question: "How and when do I pay?",
    answer: "Payment structure varies by package. Typically: a deposit to initiate services, escrow funding before purchase (held by third-party escrow), and final service fees upon delivery. We provide a clear payment schedule upfront. All major payments go through escrow for your protection.",
  },
  {
    id: "after-delivery",
    question: "What happens after delivery?",
    answer: "After delivery to your specified location, you receive all aircraft documentation, logbooks, export certificates, and bill of sale. We can provide guidance on local registration requirements in your destination country. VIP package includes post-delivery support for registration and any follow-up questions.",
  },
];

// CONTACT FORM
export const CONTACT_FORM = {
  title: "Schedule Your Consultation",
  subtitle: "Tell us about your aircraft needs and we'll get back to you within 24 hours.",
  fields: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number (Optional)",
    aircraft: "Aircraft Type of Interest",
    budget: "Budget Range",
    delivery: "Delivery Region",
    message: "Additional Details",
  },
  aircraftOptions: [
    "Agricultural Aircraft",
    "Single-Engine Piston",
    "Twin-Engine Piston",
    "Turboprop",
    "Light Jet",
    "Midsize Jet",
    "Heavy Jet / Long-Range",
    "Piston Helicopter",
    "Turbine Helicopter",
    "Military/Warbird (Demilitarized)",
    "Not Sure Yet / Other",
  ],
  budgetOptions: [
    "Under $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M+",
    "Prefer to Discuss",
  ],
  deliveryOptions: [
    "North America",
    "South America",
    "Europe",
    "Africa",
    "Middle East",
    "Asia-Pacific",
    "Other / Multiple Locations",
  ],
  submitButton: "Request Consultation",
  successMessage: "Request sent - we'll reply within 24 hours.",
  directEmailLabel: "Or email directly:",
};

// FOOTER
export const FOOTER = {
  tagline: "Professional aircraft acquisition and export services for international buyers.",
  sections: [
    {
      title: "Services",
      links: [
        { label: "Aircraft Search", href: "#how-it-works" },
        { label: "Verification & Inspection", href: "#how-it-works" },
        { label: "Export Services", href: "#how-it-works" },
        { label: "Ferry Delivery", href: "#how-it-works" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Service Packages", href: "#packages" },
        { label: "Aircraft Types", href: "#aircraft-types" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
        { label: "Schedule Consultation", href: "#contact" },
      ],
    },
  ],
  legal: "All aircraft transactions subject to U.S. export regulations and FAA requirements. Civilian aircraft only.",
  copyright: `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`,
};

// NAVIGATION
export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Packages", href: "#packages" },
  { label: "Trust & Compliance", href: "#trust" },
  { label: "Aircraft Types", href: "#aircraft-types" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

