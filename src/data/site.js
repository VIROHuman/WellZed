// =============================================================
// WellZED — Site content & configuration
// Single source of truth for copy so non-developers can edit
// text without touching component code.
// =============================================================

export const BRAND = {
  name: "WellZED",
  signature: "Intelligent. Integrated. Impactful.",
  promise: "Built around you. Owned by you. Supported by us.",
  email: "hello@wellzed.com.au",
  location: "Perth, Western Australia",
  domain: "https://www.wellzed.com.au",
};

export const NAV_LINKS = [
  { label: "What We Build", to: "/what-we-build" },
  { label: "How We Work", to: "/how-we-work" },
  { label: "Why WellZED", to: "/why-wellzed" },
  { label: "NDIS", to: "/ndis" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER = {
  description:
    "Intelligent digital assets designed around the way organisations actually work — built around you, owned by you, supported by us.",
  explore: [
    { label: "What We Build", to: "/what-we-build" },
    { label: "How We Work", to: "/how-we-work" },
    { label: "Why WellZED", to: "/why-wellzed" },
    { label: "NDIS", to: "/ndis" },
  ],
  legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
  ],
};

export const CTA = {
  primary: { label: "Start a conversation", to: "/contact" },
};

// -------------------------------------------------------------
// Capability areas — shared across Home / What We Build
// -------------------------------------------------------------
export const CAPABILITIES = [
  {
    key: "ai-knowledge",
    title: "AI & Knowledge",
    short: "Approved knowledge made useful.",
    long: "Make approved organisational knowledge easier to find, use and act on.",
  },
  {
    key: "workflow-operations",
    title: "Workflow & Operations",
    short: "Structured actions, approvals and work.",
    long: "Turn scattered actions, approvals and responsibilities into structured workflows.",
  },
  {
    key: "portals-digital-processes",
    title: "Portals & Digital Processes",
    short: "Onboarding, submissions and approvals.",
    long: "Move onboarding, submissions, documents and approvals into one clear process.",
  },
  {
    key: "dashboards-intelligence",
    title: "Dashboards & Intelligence",
    short: "Visibility, analysis and decisions.",
    long: "Turn operational data into visibility, analysis and better decisions.",
  },
  {
    key: "automation-integration",
    title: "Automation & Integration",
    short: "Connect systems. Remove repetition.",
    long: "Connect systems and remove repetitive handling where it adds value.",
  },
  {
    key: "purpose-built-applications",
    title: "Purpose-built Applications",
    short: "Complete applications when products do not fit.",
    long: "Create complete digital applications when off-the-shelf software does not fit.",
  },
];

// -------------------------------------------------------------
// How We Work — process stages
// -------------------------------------------------------------
export const PROCESS_STAGES = [
  {
    n: "01",
    title: "Understand",
    short: "Learn how things work today and what you want to achieve.",
    detail:
      "How the organisation works today, what it wants to achieve, what already works, where friction exists, which constraints matter and who actually uses the process.",
  },
  {
    n: "02",
    title: "Design",
    short: "Shape the simplest fit, including systems, ownership and delivery.",
    detail:
      "Workflows, user journeys, data requirements, integrations, access and permissions, security, hosting, ownership, prototypes and delivery phases.",
  },
  {
    n: "03",
    title: "Build",
    short: "Develop, show, test and refine the agreed digital asset.",
    detail: "Develop visibly and iteratively: Develop → Show → Learn → Refine.",
  },
  {
    n: "04",
    title: "Evolve",
    short: "Keep improving it with WellZED, internally or with another provider.",
    detail:
      "Maintain, support, enhance, integrate, optimise and extend the asset. Continued WellZED support is available, not compulsory.",
  },
];

export const BUILD_ROUTES = [
  { n: "01", title: "Configure what you have", detail: "Get more from an existing system before adding another one." },
  { n: "02", title: "Connect existing systems", detail: "Make tools work together instead of duplicating information." },
  { n: "03", title: "Automate one part", detail: "Remove repetitive handling without rebuilding the whole process." },
  { n: "04", title: "Adopt a suitable product", detail: "If an existing product genuinely fits, building may not be necessary." },
  { n: "05", title: "Build something new", detail: "Create a digital asset when the requirement goes beyond what already exists." },
];

export const DESIGN_FIT_ITEMS = [
  "Users and workflow",
  "Data and integrations",
  "Access and security",
  "Hosting and ownership",
  "Prototype or user journey",
  "Delivery phases",
];

export const DECISION_GATE_ITEMS = [
  "Scope",
  "Cost",
  "What is not included",
  "Third-party costs",
  "Ownership and hosting",
  "What completion looks like",
];

export const BUILD_VISIBLY_STEPS = [
  { n: "01", title: "Develop", detail: "Build the agreed functionality in manageable increments." },
  { n: "02", title: "Show", detail: "Let real users see and use what is taking shape." },
  { n: "03", title: "Learn", detail: "Use feedback and real behaviour to test assumptions." },
  { n: "04", title: "Refine", detail: "Improve before the asset becomes harder to change." },
];

export const TEST_TAGS = ["Accuracy", "Permissions", "Real users", "Errors", "Integrations", "Accessibility"];

export const HANDOVER_ITEMS = [
  { title: "Source code", detail: "Repositories and agreed bespoke code." },
  { title: "Access", detail: "Administrator and relevant account access." },
  { title: "Deployment", detail: "Hosting and infrastructure information." },
  { title: "Documentation", detail: "Architecture and operating information." },
];

export const EVOLVE_ITEMS = [
  { title: "Maintain", detail: "Updates, monitoring and technical upkeep." },
  { title: "Enhance", detail: "Add capability as the organisation changes." },
  { title: "Integrate", detail: "Connect new systems, services or data." },
  { title: "Optimise", detail: "Improve workflows using what real use has taught us." },
];

export const ENGAGEMENT_MODELS = [
  { title: "Discovery & Design", detail: "Understand the need and shape the right path before committing to a full build." },
  { title: "Defined Project", detail: "A clear outcome, agreed scope and delivery." },
  { title: "Ongoing Build Partnership", detail: "A roadmap of improvements delivered over time." },
  { title: "Support & Evolve", detail: "Maintain and improve an existing WellZED asset." },
];

// -------------------------------------------------------------
// Why WellZED
// -------------------------------------------------------------
export const WHY_PRINCIPLES = [
  { n: "01", title: "Organisation-first", detail: "Start with how the organisation works and what it wants to achieve." },
  { n: "02", title: "Intelligent", detail: "Use AI, automation and data where they genuinely add value." },
  { n: "03", title: "Adaptable", detail: "Build for today's need with room to evolve tomorrow." },
  { n: "04", title: "Owned", detail: "Give clients control over their bespoke assets and their data." },
  { n: "05", title: "Supported", detail: "Stay involved because support remains useful, not compulsory." },
];

export const OWNERSHIP_YOURS = [
  { title: "Bespoke client-specific asset", detail: "Code and IP created specifically for your project can be owned by you under the agreed project terms." },
  { title: "Your data", detail: "Your organisational data remains yours." },
  { title: "Your choice", detail: "Host, maintain, enhance or transition the solution without artificial barriers." },
  { title: "Your ability to move", detail: "Use another developer or manage the asset internally if that becomes the better fit." },
];

export const OWNERSHIP_WELLZED_RETAINS = [
  { title: "Frameworks & core libraries", detail: "Pre-existing underlying code, foundational libraries and architecture." },
  { title: "Reusable components", detail: "Generic building blocks, UI patterns and standard functional modules." },
  { title: "Methods & know-how", detail: "Generalised improvements, development techniques and operational expertise." },
  { title: "Non-confidential IP", detail: "Capabilities that can be reused without exposing client data or confidential IP." },
];

export const OWNERSHIP_THIRD_PARTIES = [
  { title: "Cloud infrastructure", detail: "Hosting, cloud storage, database services and serverless runtimes." },
  { title: "Commercial software", detail: "Licensed third-party platforms, tools and vendor subscriptions." },
  { title: "AI & external APIs", detail: "Third-party AI models, external integrations and data providers." },
  { title: "Open-source libraries", detail: "Open-source components remain subject to their respective open licenses." },
];

export const HOW_WE_BEHAVE = [
  { n: "01", title: "Clear", detail: "Explain technology in language people can actually use. No jargon for jargon's sake." },
  { n: "02", title: "Careful", detail: "Accuracy, security and reliability matter, especially where systems carry important operational information." },
  { n: "03", title: "Accessible", detail: "Design for the people who actually need to use the system, across real devices and real environments." },
  { n: "04", title: "Independent", detail: "Choose technology because it fits the requirement, not because we are tied to one platform or product." },
];

export const CONTROL_DESIGNED_IN = [
  { title: "Collect with purpose", detail: "Use the information the system actually needs." },
  { title: "Access by need", detail: "Give people the level of access their role requires." },
  { title: "Audit where it matters", detail: "Important actions should be capable of being traced and understood." },
  { title: "Keep client control", detail: "Data and ownership arrangements should be transparent from the start." },
];

export const ACQUISITION_MODELS = [
  {
    tag: "Option 01",
    title: "Off-the-shelf SaaS",
    rows: [
      ["Starts with", "An existing product."],
      ["Fit", "Configure your organisation around available features."],
      ["Ownership", "Usually vendor-controlled."],
      ["Adaptability", "Depends on the vendor roadmap."],
      ["Ongoing model", "Subscription for continued access."],
    ],
  },
  {
    tag: "Option 02",
    title: "Conventional custom build",
    rows: [
      ["Starts with", "A client specification or project brief."],
      ["Fit", "Built to the agreed specification."],
      ["Ownership", "Depends on the contract."],
      ["Adaptability", "Depends on architecture and future development."],
      ["Ongoing model", "Varies by developer and project."],
    ],
  },
  {
    tag: "WellZED approach",
    title: "Organisation-first build",
    highlight: true,
    rows: [
      ["Starts with", "The organisation, the need and the desired outcome."],
      ["Fit", "Build, integrate, automate or adopt what makes sense."],
      ["Ownership", "Agreed up front for bespoke assets."],
      ["Adaptability", "Designed with change and portability in mind."],
      ["Ongoing model", "Support is available, not a condition of continued use."],
    ],
  },
];

export const TECH_STACK = ["React", "React Native", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Azure", "AI / ML", "APIs", "Automation"];

// -------------------------------------------------------------
// NDIS
// -------------------------------------------------------------
export const NDIS_INDEPENDENCE_STATEMENT = {
  main: "WellZED is an independent software and digital services company. It is not affiliated with, endorsed by or part of the National Disability Insurance Agency (NDIA).",
  sub: "References to NDIS legislation, guidance, pricing arrangements, support catalogues and other public material are references to publicly available information and do not imply ownership by WellZED or its clients.",
};

export const NDIS_PRODUCTS = [
  {
    slug: "invoicing-app",
    tag: "Providers",
    name: "NDIS Invoicing App",
    short: "Create clearer NDIS invoices with support items, GST treatment and claim references structured into the workflow.",
    audience: "For providers and sole traders",
    long: "The NDIS Invoicing App structures the detail NDIS invoices need — support item numbers, GST treatment, claim types and references — directly into the invoicing workflow, so invoices are clear for participants, plan managers and auditors alike.",
    features: [
      "Support items and pricing structured into every line",
      "GST treatment applied consistently",
      "Claim references and categories captured up front",
      "Exportable, audit-ready invoice records",
    ],
  },
  {
    slug: "invoice-processor",
    tag: "Plan managers",
    name: "NDIS Invoice Processor",
    short: "Extract invoice lines, match support items, check pricing and surface exceptions for human review.",
    audience: "For high-volume invoice processing",
    long: "Built for plan managers handling high volumes of incoming invoices, the Invoice Processor extracts line items, matches them against the current support catalogue and pricing, and surfaces exceptions so a human reviewer can focus only on what actually needs attention.",
    features: [
      "Automatic line-item extraction from incoming invoices",
      "Matching against current public pricing and support items",
      "Exceptions and mismatches flagged for review",
      "Designed to reduce manual processing time at volume",
    ],
  },
  {
    slug: "budget-calculator",
    tag: "Budgets",
    name: "NDIS Budget Calculator",
    short: "Model support schedules against available plan budgets using current public pricing information.",
    audience: "For participants, coordinators and plan managers",
    long: "The Budget Calculator models a proposed support schedule against a participant's available plan budget using current public pricing information, helping coordinators and plan managers sense-check a plan before it is locked in.",
    features: [
      "Modelling against current public pricing",
      "Scenario comparison across support schedules",
      "Clear breakdown by support category",
      "Built for coordinators, plan managers and participants",
    ],
  },
  {
    slug: "budget-health-check",
    tag: "Utilisation",
    name: "NDIS Budget Health Check",
    short: "See utilisation, spending pace and projected run-out points before they become harder to manage.",
    audience: "For clearer budget visibility",
    long: "The Budget Health Check turns raw utilisation data into a clear picture of spending pace and projected run-out points, so budget risks are visible early — while they are still easy to manage.",
    features: [
      "Utilisation and spending-pace visibility",
      "Projected run-out points by support category",
      "Early visibility into at-risk budgets",
      "Designed for regular, repeatable review",
    ],
  },
  {
    slug: "support-item-finder",
    tag: "Catalogue",
    name: "NDIS Support Item Finder",
    short: "Search public support catalogue information by keyword, category or code without working through a long PDF.",
    audience: "Current public catalogue data in a usable interface",
    long: "Instead of searching through a long PDF, the Support Item Finder lets you search current public NDIS support catalogue information by keyword, category or code, and get a clear, usable answer.",
    features: [
      "Search by keyword, category or support item code",
      "Current public catalogue data",
      "Clear, structured results rather than a long document",
      "Useful for providers, coordinators and plan managers alike",
    ],
  },
  {
    slug: "mmm-finder",
    tag: "Location",
    name: "NDIS MMM Finder",
    short: "Enter an Australian address or locality to identify its Modified Monash Model classification and relevant location context.",
    audience: "For location-based NDIS work",
    long: "Enter an Australian address or locality and the MMM Finder identifies its Modified Monash Model classification and relevant location context — useful anywhere location affects pricing or service delivery.",
    features: [
      "Address or locality lookup",
      "Modified Monash Model (MMM) classification",
      "Relevant location context for service delivery",
      "Built on current public location data",
    ],
  },
];

// -------------------------------------------------------------
// NDIS Updates (sample seed content — extend via CMS/data later)
// -------------------------------------------------------------
export const NDIS_UPDATES = [
  {
    slug: "pricing-arrangements-update",
    category: "Pricing & Catalogue",
    title: "Public pricing and support catalogue changes",
    date: "2026-07-01",
    summary: "A plain-language summary of recent material changes to public NDIS pricing and support catalogue information, and what they mean for WellZED NDIS products.",
    body: "When the NDIA updates public pricing arrangements or the support catalogue, WellZED reviews the change and updates the relevant products so pricing and support item information stays current. This update is a plain-language summary of source material — always confirm specific figures against the current NDIA pricing arrangements.",
  },
  {
    slug: "claiming-process-notes",
    category: "Scheme & Claiming",
    title: "Operational changes worth knowing about",
    date: "2026-06-15",
    summary: "Useful notes on NDIS processes, claiming and sector guidance, clearly separated from WellZED's own opinion.",
    body: "This note summarises operational changes to NDIS processes and claiming that providers and plan managers have been asking about, and separates what the guidance actually says from WellZED's own commentary on the operational implications.",
  },
  {
    slug: "product-release-notes",
    category: "Product Update",
    title: "What changed in WellZED products",
    date: "2026-05-20",
    summary: "Product releases and improvements to WellZED's NDIS products, clearly labelled so they are never confused with NDIA or scheme changes.",
    body: "This release note covers recent improvements to the WellZED NDIS product suite — including refinements to the Budget Health Check's run-out projections and clearer exception surfacing in the Invoice Processor.",
  },
];

// -------------------------------------------------------------
// Contact
// -------------------------------------------------------------
export const CONTACT_REASONS = [
  { key: "build", title: "Something I'd like to build", detail: "An idea, workflow, portal, dashboard, automation or application." },
  { key: "ndis-product", title: "An NDIS product", detail: "You already know which WellZED product you want to explore." },
  { key: "not-sure", title: "Not sure yet", detail: "Bring the need. We can work out the next step together." },
];

export const CONTACT_NEXT_STEPS = [
  { n: "01", title: "We read it", detail: "We understand the context before getting back to you." },
  { n: "02", title: "We talk", detail: "A practical conversation about the need and what already exists." },
  { n: "03", title: "We shape the next step", detail: "Build, integrate, automate, adopt something existing, or do nothing yet." },
];
