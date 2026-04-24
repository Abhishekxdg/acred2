/**
 * ACRED site content. CMS-ready: every string, section, and discipline
 * lives here so it can later be swapped for Sanity / Contentful / Payload
 * by replacing this module with an async data fetcher of the same shape.
 */

export type Discipline = {
  slug: "architecture" | "construction" | "real-estate" | "engineering" | "development";
  index: string; // "01", "02", ...
  label: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  heroImage: string;
  heroImageAlt: string;
  detailIntro: string;
  processSteps: { title: string; body: string }[];
};

export const site = {
  name: "ACRED",
  tagline: "Imagined with art. Engineered with truth. Forged in earth.",
  subtagline: "Scaled for the future — the total mastery of space and value.",
  manifesto: "The ACRED Manifesto",
  promise: "One partner · Five disciplines · From land to legacy",
  description:
    "ACRED is an integrated studio spanning architecture, construction, real estate, engineering, and development. We read the site before we draw a line.",
  contact: {
    email: "studio@acred.example",
    phone: "+91 80 4000 0000",
    address: "Indiranagar, Bengaluru, Karnataka 560038, India",
    instagram: "@acred.studio",
    linkedin: "company/acred",
  },
  offices: [
    { city: "Bengaluru", note: "Studio & HQ" },
    { city: "Mumbai", note: "Development" },
    { city: "Dubai", note: "Liaison" },
  ],
};

export const navigation = [
  { label: "Work", href: "/projects" },
  { label: "Architecture", href: "/architecture" },
  { label: "Construction", href: "/construction" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Engineering", href: "/engineering" },
  { label: "Development", href: "/development" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const disciplines: Discipline[] = [
  {
    slug: "architecture",
    index: "01",
    label: "01 / Architecture",
    title: "Reads the site\nbefore it draws a line.",
    tagline: "We design for how people actually live and work — not for the render.",
    description:
      "From master planning down to the joinery detail, we treat each project as an argument about place. The result is buildings that feel inevitable — grounded in site, climate, and the life inside them.",
    capabilities: [
      "Master planning",
      "Concept · Design development",
      "Interior architecture",
      "Heritage · Adaptive reuse",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Architectural drawings under warm lamplight",
    detailIntro:
      "Our architecture practice is led by senior partners who draw alongside the team. Every design starts with a site walk and a written brief — not a moodboard.",
    processSteps: [
      { title: "Site + brief", body: "Walk the land. Map sun, wind, and neighbours. Write the brief in plain language before we draw." },
      { title: "Concept", body: "Three distinct directions, each with a clear argument. We don't hedge." },
      { title: "Detail design", body: "We resolve joinery, structure, and services in parallel. No surprises on site." },
      { title: "On-site authorship", body: "Same architect on the drawing and on the walk-through. Quality doesn't survive handoffs." },
    ],
  },
  {
    slug: "construction",
    index: "02",
    label: "02 / Construction",
    title: "Built to\nthe drawing.",
    tagline: "Turnkey construction with in-house quality control. Because we designed and engineered it, we know exactly what on-site compromise is acceptable — and what isn't.",
    description:
      "A general contracting arm that treats the drawing set as a contract, not a suggestion. We self-perform finishes and keep MEP coordination in-house.",
    capabilities: [
      "General contracting",
      "Project management",
      "QA / QC",
      "MEP coordination",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Steel structural framework at dusk",
    detailIntro:
      "Our site team is small and senior. We'd rather move slower with the right hands than faster with the wrong ones.",
    processSteps: [
      { title: "Pre-construction", body: "Value engineering before the first concrete pour, not after the cost overrun." },
      { title: "Execution", body: "Weekly site reports with photographs and a red-flag column. No hiding." },
      { title: "Commissioning", body: "We test every system under load before handover, not after." },
      { title: "Defect liability", body: "12-month active monitoring. We come back without being chased." },
    ],
  },
  {
    slug: "real-estate",
    index: "03",
    label: "03 / Real Estate",
    title: "Where value\nmeets home.",
    tagline: "Advisory and transactions for buyers, sellers, and investors — grounded in what we learned designing and building the asset. Due diligence past the brochure.",
    description:
      "A boutique advisory desk that sits inside the studio. We price risk, we don't sell dreams. Our clients are long-term owners, family offices, and small institutional capital.",
    capabilities: [
      "Advisory",
      "Acquisitions",
      "Dispositions",
      "Investment",
      "Leasing",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Tower at dusk with warm interior lights",
    detailIntro:
      "We only advise on assets we would underwrite with our own capital. That discipline makes our numbers conservative — and our clients patient.",
    processSteps: [
      { title: "Underwriting", body: "A real DCF, not a spreadsheet decorated to hit a target IRR." },
      { title: "Site + title diligence", body: "Our architects walk the site; our lawyers walk the chain of title." },
      { title: "Negotiation", body: "We negotiate on structure — not price first. Most value is in the terms." },
      { title: "Hold-phase advisory", body: "We stay on call after closing. Asset management is where value compounds." },
    ],
  },
  {
    slug: "engineering",
    index: "04",
    label: "04 / Engineering",
    title: "Truth under\nevery surface.",
    tagline: "Structural and MEP engineering that tells the architect 'no' when it has to — and finds the elegant yes when there's one to find.",
    description:
      "A technical core that lets ACRED design buildings we can actually build. Our engineers sit next to our architects and trade redlines daily.",
    capabilities: [
      "Structural design",
      "MEP systems",
      "Sustainability modelling",
      "Building performance",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Precise engineered steel joint detail",
    detailIntro:
      "Our engineers are generalists who specialised. They understand architecture, cost, and construction sequencing — not just code compliance.",
    processSteps: [
      { title: "Performance targets", body: "We set measurable targets for energy, daylight, and comfort up front." },
      { title: "Structural strategy", body: "Grids and spans agreed with the architect before massing is frozen." },
      { title: "MEP coordination", body: "Full BIM coordination. Clashes are resolved in the model, not the ceiling." },
      { title: "Commissioning", body: "Hand-off with a measured-performance report, not just drawings." },
    ],
  },
  {
    slug: "development",
    index: "05",
    label: "05 / Development",
    title: "Land to\nlaunch.",
    tagline: "We originate, capitalize, and deliver our own projects — selectively. Because the best way to know what good looks like is to sign for it.",
    description:
      "A small development vertical that acts as ACRED's proving ground. We co-invest with partners on 2–3 projects a year, each one a vertical we can stand behind.",
    capabilities: [
      "Land sourcing",
      "Feasibility",
      "Capital structuring",
      "Delivery",
      "Asset management",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Tower under construction against a dramatic sky",
    detailIntro:
      "We invest our own equity alongside our partners. That aligns every decision — from FSI strategy to finish selections — with long-term value.",
    processSteps: [
      { title: "Origination", body: "Off-market land with a clear thesis. We pass on most of what we look at." },
      { title: "Feasibility", body: "Architect, engineer, and financial model working in the same room, week one." },
      { title: "Capitalization", body: "Patient equity. Debt sized to the plan, not the cycle." },
      { title: "Delivery + hold", body: "We build to own at least part of the outcome. Skin in the game." },
    ],
  },
];

export const disciplineBySlug = (slug: string) =>
  disciplines.find((d) => d.slug === slug);
