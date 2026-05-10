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
  capabilityLinks?: string[];
  heroImage: string;
  heroImageAlt: string;
  heroVideo?: string;
  detailIntro: string;
  processSteps: { title: string; body: string }[];
};

export const site = {
  name: "ACRED",
  tagline: "Imagined with art. Engineered with truth. Forged in earth.",
  subtagline: "Scaled for the future — the total mastery of space and value.",
  manifesto: "Imagined with art. Engineered with truth. Forged in earth. Scaled for the future. The total mastery of space and value.",
  promise: "One partner · Four disciplines · From land to legacy",
  description:
    "ACRED is an integrated studio spanning architecture, construction, real estate, engineering, and development. We read the site before we draw a line.",
  contact: {
    email: "info@acred.in",
    phone: "+91 63618 89281",
    address: "Bengaluru, Karnataka",
    instagram: "@acred.studio",
    linkedin: "company/acred",
  },
  offices: [
    { city: "Bengaluru", note: "Studio & HQ" },
    { city: "Dubai", note: "Liaison" },
  ],
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Interiors", href: "/interiors" },
  { label: "Construction", href: "/construction" },
  { label: "Packages", href: "/packages" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Engineering", href: "/engineering" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const disciplines: Discipline[] = [
  {
    slug: "architecture",
    index: "01",
    label: "Architecture",
    title: "Where form meets everyday life.",
    tagline: "Seamless architectural design and immersive interiors, creating homes that look beautiful and feel effortless to live in.",
    description:
      "From master planning down to the joinery detail, we treat each project as an argument about place. The result is buildings that feel inevitable — grounded in site, climate, and the life inside them.",
    capabilities: [
      "Architectural design & planning",
      "3D modeling and visualization",
      "Interior design",
    ],
    capabilityLinks: [
      "/interiors",
      "/interiors",
      "/interiors",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Architectural drawings under warm lamplight",
    heroVideo: "https://www.youtube.com/watch?v=5YSsJDcTVag",
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
    label: "Construction",
    title: "Vision translated into reality.",
    tagline: "By managing both the plan and the build in-house, we eliminate the guesswork. Experience seamless execution, strict quality control, and a structure that stays completely true to the design.",
    description:
      "A general contracting arm that treats the drawing set as a contract, not a suggestion. We self-perform finishes and keep MEP coordination in-house.",
    capabilities: [
      "Turnkey Residential Construction",
      "General contracting",
      "Construction management",
      "QA / QC",
      "Specialized Engineering Construction",
    ],
    capabilityLinks: [
      "/construction",
      "/construction",
      "/construction",
      "/construction",
      "/construction",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Steel structural framework at dusk",
    heroVideo: "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4",
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
    label: "Real Estate",
    title: "True value, mapped and verified.",
    tagline: "We go beyond the brochure. Through rigorous on-the-ground market mapping and technical surveys, we provide buyers and sellers with an unmatched understanding of actual market demand.",
    description:
      "A boutique advisory desk that sits inside the studio. We price risk, we don't sell dreams. Our clients are long-term owners, family offices, and small institutional capital.",
    capabilities: [
      "Advisory",
      "Acquisitions",
      "Sales",
      "RERA registered",
    ],
    capabilityLinks: [
      "/real-estate",
      "/real-estate",
      "/real-estate",
      "/real-estate",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Tower at dusk with warm interior lights",
    heroVideo: "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4",
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
    label: "Engineering",
    title: "Calculated reality.",
    tagline: "Exact mathematics and advanced modeling. We engineer flawless structural integrity from the ground up.",
    description:
      "A technical core that lets ACRED design buildings we can actually build. Our engineers sit next to our architects and trade redlines daily.",
    capabilities: [
      "Structural engineering",
      "Geotechnical and foundation engineering",
      "Civil infrastructure and site engineering",
      "MEP coordination",
      "Advanced digital engineering",
    ],
    capabilityLinks: [
      "/engineering",
      "/engineering",
      "/engineering",
      "/engineering",
      "/engineering",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Precise engineered steel joint detail",
    heroVideo: "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4",
    detailIntro:
      "Our engineers are generalists who specialised. They understand architecture, cost, and construction sequencing — not just code compliance.",
    processSteps: [
      { title: "Performance targets", body: "We set measurable targets for energy, daylight, and comfort up front." },
      { title: "Structural strategy", body: "Grids and spans agreed with the architect before massing is frozen." },
      { title: "MEP coordination", body: "Full BIM coordination. Clashes are resolved in the model, not the ceiling." },
      { title: "Commissioning", body: "Hand-off with a measured-performance report, not just drawings." },
    ],
  },
];

export const disciplineBySlug = (slug: string) =>
  disciplines.find((d) => d.slug === slug);
