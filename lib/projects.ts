/**
 * Signature projects. CMS-ready: swap this module for an async fetcher
 * with the same `Project` shape when wiring a real backend.
 */

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Mixed-Use"
  | "Hospitality"
  | "Industrial";

export type Project = {
  slug: string;
  number: string; // "01", "02", ...
  title: string;
  location: string;
  category: ProjectCategory;
  year: number;
  area: string;
  role: string;
  summary: string;
  description: string[];
  heroImage: string;
  gallery: string[];
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "house-of-bronze",
    number: "01",
    title: "House of Bronze",
    location: "Bengaluru",
    category: "Residential",
    year: 2025,
    area: "9,400 sq ft",
    role: "Architecture · Construction · Interiors",
    summary: "A private residence wrapped in oxidised bronze, detailed around the oldest rain tree on the plot.",
    description: [
      "A ground-plus-two residence carved around a 70-year-old rain tree. The brief was simple — don't cut the tree, don't compromise the light.",
      "The envelope is a ventilated bronze rainscreen that weathers as the trees do. Inside, the plan turns on three courtyards that bring the monsoon into the house as part of the design, not a problem to solve.",
      "Designed, engineered, and built by ACRED under a single accountable team. Delivered four weeks ahead of schedule.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Completion", value: "2025" },
      { label: "Plot", value: "12,000 sq ft" },
      { label: "Built-up", value: "9,400 sq ft" },
      { label: "Trees retained", value: "100%" },
    ],
  },
  {
    slug: "whitefield-atrium",
    number: "02",
    title: "Whitefield Atrium",
    location: "Whitefield, Bengaluru",
    category: "Commercial",
    year: 2024,
    area: "240,000 sq ft",
    role: "Architecture · Engineering · Development",
    summary: "A Grade-A workplace organised around a naturally ventilated nine-storey atrium.",
    description: [
      "A speculative office building that refused the sealed-glass template. A nine-storey atrium at the core pulls cross-ventilation through the floor plates for eight months of the year.",
      "ACRED developed, designed, and engineered the project end-to-end, then brought in an institutional partner at 60% completion. Leased to a single tenant pre-launch.",
      "Performance-modelled to 28% below ECBC base case. On-track for IGBC Platinum certification.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Built-up", value: "240,000 sq ft" },
      { label: "Floors", value: "G + 9" },
      { label: "Target", value: "IGBC Platinum" },
      { label: "Delivery", value: "2024" },
    ],
  },
  {
    slug: "electronic-city-mixed-use",
    number: "03",
    title: "Electronic City Mixed-Use",
    location: "Electronic City, Bengaluru",
    category: "Mixed-Use",
    year: 2026,
    area: "620,000 sq ft",
    role: "Development · Architecture · Construction",
    summary: "Two residential towers stacked above a retail plinth and a public ground plane that actually works.",
    description: [
      "A 4-acre plot where most developers would have built two independent silos. We proposed a plinth that acts as a neighbourhood — retail, F&B, and a through-block walking route — with residences above.",
      "Capital structured through a patient equity partner and ACRED's own co-investment. Phase 1 under construction; Phase 2 design locked.",
      "Full lifecycle inside ACRED: origination, design, engineering, build, and post-handover asset management.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Plot", value: "4 acres" },
      { label: "Built-up", value: "620,000 sq ft" },
      { label: "Units", value: "412 residences" },
      { label: "Retail", value: "42,000 sq ft" },
    ],
  },
  {
    slug: "indiranagar-townhouse",
    number: "04",
    title: "Indiranagar Townhouse",
    location: "Indiranagar, Bengaluru",
    category: "Residential",
    year: 2023,
    area: "4,200 sq ft",
    role: "Architecture · Construction",
    summary: "A narrow-plot townhouse that threads light through a four-metre-wide site.",
    description: [
      "A 20' x 60' plot in old Indiranagar. The trick wasn't cramming the program in — it was making the house feel wider than it is.",
      "A central lightwell doubles as the stair. The facade is a single material — exposed board-formed concrete — aged to read like the neighbourhood it sits in.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Plot", value: "1,200 sq ft" },
      { label: "Built-up", value: "4,200 sq ft" },
      { label: "Completion", value: "2023" },
    ],
  },
  {
    slug: "nandi-farmhouse",
    number: "05",
    title: "Nandi Farmhouse",
    location: "Nandi Hills",
    category: "Hospitality",
    year: 2024,
    area: "6,800 sq ft",
    role: "Architecture · Interiors",
    summary: "A weekend retreat that treats the monsoon as a co-designer.",
    description: [
      "A low-slung pavilion on a 3-acre site at 1,400m elevation. Four wings, a central courtyard, and a roof that catches and releases rain on purpose.",
      "Built almost entirely from materials sourced within 200km. The project is off-grid for water and 80% off-grid for power.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Site", value: "3 acres" },
      { label: "Built-up", value: "6,800 sq ft" },
      { label: "Water", value: "100% off-grid" },
    ],
  },
  {
    slug: "hebbal-workshop",
    number: "06",
    title: "Hebbal Workshop",
    location: "Hebbal, Bengaluru",
    category: "Industrial",
    year: 2023,
    area: "32,000 sq ft",
    role: "Architecture · Engineering · Construction",
    summary: "A light-industrial workshop for a family-owned fabrication business, rebuilt without stopping production.",
    description: [
      "The client needed double the floor area without a single day of production lost. We delivered in three phases, over a live shed, with zero missed orders.",
      "A new sawtooth roof pulls north light across every workbench. Building envelope engineered for 8°C cooler internal air than the old shed.",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    facts: [
      { label: "Built-up", value: "32,000 sq ft" },
      { label: "Phasing", value: "3 phases, live site" },
      { label: "Downtime", value: "Zero production days" },
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const categories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Mixed-Use",
  "Hospitality",
  "Industrial",
];
