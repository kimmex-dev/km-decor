export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  descriptionHtml?: string;
  items?: string[];
  href: string;
  imageUrl: string;
  structuredData?: Record<string, unknown>;
};

export type ProductItem = {
  id: string;
  name: string;
  descriptor: string;
  descriptionHtml?: string;
  brand: string;
  category: string;
  sku: string;
  price: number;
  comparePrice?: number;
  unit: string;
  stockStatus: "In stock" | "Preorder" | "Low stock";
  rating: number;
  reviewCount: number;
  badge?: string;
  specs: string[];
  moq: string;
  leadTime: string;
  delivery: string;
  quoteRecommended?: boolean;
  customerGoal: string;
  keyFeatures: string[];
  compatibleProductIds: string[];
  applications: string[];
  materialNotes: string[];
  href: string;
  imageUrl: string;
  galleryImages: string[];
  structuredData?: Record<string, unknown>;
};

export type ProjectItem = {
  id: string;
  title: string;
  location: string;
  scope: string;
  projectType: string;
  caption: string;
  href: string;
  imageUrl: string;
};

export type BrandItem = {
  id: string;
  name: string;
  href: string;
};

export type ProjectPackage = {
  id: string;
  title: string;
  summary: string;
  startingPrice: number;
  includes: string[];
  href: string;
  imageUrl: string;
};

export const companyVision = "To become a trusted decoration and fit-out partner for businesses by delivering innovative design solutions, quality craftsmanship, and professional project execution.";

export const companyMission = "To help businesses create attractive, functional, and inspiring commercial spaces that strengthen brand identity and improve customer experience.";

export const companyPartnershipStrengths = [
  { num: "01", title: "Professional B2B Project Experience", desc: "Specialized in corporate offices, government institutions, retail, and hospitality." },
  { num: "02", title: "Customized Solutions for Business Needs", desc: "Tailored interior decoration and material specs to match operational goals." },
  { num: "03", title: "Reliable Quality & Material Standards", desc: "Certified stretch ceilings, galvanized steel framing, and moisture-proof boards." },
  { num: "04", title: "On-Time Project Delivery", desc: "Strict timeline management to meet your target handover and grand opening dates." },
  { num: "05", title: "Competitive Pricing & Cost Control", desc: "Direct manufacturer supply chain optimizing project BOQ budgets." },
  { num: "06", title: "Skilled Technical & Design Team", desc: "Experienced engineers and interior fit-out craftsmen in Phnom Penh." },
  { num: "07", title: "Long-Term Business Partnership Approach", desc: "Dedicated ongoing support and maintenance for business expansion." }
];

export const trustPoints = [
  "Professional B2B Project Experience",
  "On-Time Project Delivery",
  "Competitive Pricing & Cost Control",
  "Reliable Quality & Material Standards"
];

export const shopCategories = [
  "Gypsum Board",
  "Eco Block Ceiling Board",
  "Cline & Partition Frame",
  "Sanitary Ware",
  "Decor Materials",
  "Furniture Decor",
  "Wall Systems"
];

export const services: ServiceItem[] = [
  {
    id: "ceiling",
    title: "1. Ceiling Décor",
    description: "Complete stretch and eco block ceiling systems with integrated LED lighting and moisture protection.",
    items: [
      "CL-01 Stretch ceiling with white paint",
      "CL-02 Stretch moisture ceiling with white paint",
      "CL-03 Reflect ceiling with white paint",
      "CL-04 Reflect eco block ceiling",
      "CL-05 Decore Reflect Ceiling with LED light",
      "CL-06 Decore Reflect eco block Ceiling with LED Light"
    ],
    href: "/services/ceiling",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "partition",
    title: "2. Partition & Wall Décor",
    description: "Custom doors, windows, feature backdrops, service counters, and heavy-duty commercial floor carpeting.",
    items: [
      "Door & Window installation",
      "Back drop design & framing",
      "Counter & reception desks",
      "Floor Carpet installation"
    ],
    href: "/services/partition",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "furniture",
    title: "3. Interior Décor & Furniture",
    description: "Custom cabinetry, modular office materials, and full conference hall interior fit-out solutions.",
    items: [
      "Cabinet & storage solutions",
      "Office Materials & modular desks",
      "Conference hall fit-outs"
    ],
    href: "/services/furniture",
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
  }
];

const temporaryProductImages = {
  gypsumBoard: "/products/gypsum_board.webp",
  partitionFrame: "/products/partition.webp",
  ceilingProfile: "/products/cline.webp",
  decorBoard: "/products/wood.webp",
  sanitaryWare: "/products/sanitery_ware.webp"
};

export const products: ProductItem[] = [
  {
    id: "gypsum-board",
    name: "Gypsum Board (Zeit) STD Size",
    descriptor: "Smooth gypsum board for interior ceilings and partition walls. Easy to frame, finish, and paint.",
    brand: "Zeit",
    category: "Gypsum Board",
    sku: "ZTG-STD-1220",
    price: 8.5,
    unit: "sheet",
    stockStatus: "In stock",
    rating: 4.8,
    reviewCount: 28,
    specs: ["1220mm board", "Interior ceiling", "Standard finish"],
    moq: "10 sheets",
    leadTime: "Ready stock",
    delivery: "Delivery available",
    customerGoal: "Cover ceiling or partition surfaces with a standard interior board.",
    keyFeatures: ["Standard Zeit board size", "Smooth interior finish", "Suitable for ceiling and partition work"],
    compatibleProductIds: ["partition-frame-stick", "cline-4m"],
    applications: ["Ceiling lining", "Partition wall surface", "Commercial renovation"],
    materialNotes: ["Standard board size for common ceiling work"],
    href: "/products/gypsum-board",
    imageUrl: temporaryProductImages.gypsumBoard,
    galleryImages: [temporaryProductImages.gypsumBoard]
  },
  {
    id: "partition-frame-stick",
    name: "Partition Frame Stick 4M",
    descriptor: "4-meter steel profile used to create supporting structure for gypsum and acoustic partition walls.",
    brand: "ISI Steel",
    category: "Cline & Partition Frame",
    sku: "ISI-PF-4M",
    price: 3.2,
    unit: "stick",
    stockStatus: "In stock",
    rating: 4.7,
    reviewCount: 19,
    specs: ["4m length", "Partition frame", "Steel profile"],
    moq: "20 sticks",
    leadTime: "Ready stock",
    delivery: "Truck delivery",
    customerGoal: "Build partition wall structure before installing boards.",
    keyFeatures: ["4M stick length", "Steel profile support"],
    compatibleProductIds: ["gypsum-board", "cline-4m"],
    applications: ["Partition framing", "Room division", "Commercial fit-out"],
    materialNotes: ["Four-meter profile for project installation"],
    href: "/products/partition-frame-stick",
    imageUrl: temporaryProductImages.partitionFrame,
    galleryImages: [temporaryProductImages.partitionFrame]
  },
  {
    id: "cline-4m",
    name: "Cline 4M Ceiling Profile",
    descriptor: "4-meter ceiling profile forming straight perimeter lines and edge details for suspended ceilings.",
    brand: "Multi-brand",
    category: "Cline & Partition Frame",
    sku: "KMD-CLN-4M",
    price: 2.8,
    unit: "stick",
    stockStatus: "In stock",
    rating: 4.6,
    reviewCount: 15,
    specs: ["4m profile", "Ceiling edge", "Galvanized steel"],
    moq: "20 sticks",
    leadTime: "Ready stock",
    delivery: "Truck delivery",
    customerGoal: "Form neat perimeter edges for ceiling framing.",
    keyFeatures: ["Galvanized steel", "Perimeter alignment"],
    compatibleProductIds: ["gypsum-board", "partition-frame-stick"],
    applications: ["Ceiling perimeter", "Suspended ceiling grid"],
    materialNotes: ["Essential profile for clean perimeter edges"],
    href: "/products/cline-4m",
    imageUrl: temporaryProductImages.ceilingProfile,
    galleryImages: [temporaryProductImages.ceilingProfile]
  },
  {
    id: "decor-board-mdf",
    name: "Interior Decor Board MDF",
    descriptor: "High-density MDF decor board for custom wall paneling, cabinetry, and interior backdrops.",
    brand: "KMD Supply",
    category: "Decor Materials",
    sku: "KMD-MDF-18",
    price: 18.0,
    unit: "sheet",
    stockStatus: "In stock",
    rating: 4.9,
    reviewCount: 22,
    specs: ["18mm thickness", "MDF core", "Interior backdrop"],
    moq: "5 sheets",
    leadTime: "Ready stock",
    delivery: "Delivery available",
    customerGoal: "Build custom backdrops, wall paneling, and cabinetry.",
    keyFeatures: ["Smooth surface for laminate/paint", "High density"],
    compatibleProductIds: ["gypsum-board"],
    applications: ["Wall backdrops", "Cabinetry", "Showroom displays"],
    materialNotes: ["Premium core for interior woodwork"],
    href: "/products/decor-board-mdf",
    imageUrl: temporaryProductImages.decorBoard,
    galleryImages: [temporaryProductImages.decorBoard]
  }
];

export const projects: ProjectItem[] = [
  {
    id: "mef-phnom-penh",
    title: "Ministry of Economy and Finance (MEF)",
    location: "Phnom Penh, Cambodia",
    scope: "Finishing Décor",
    projectType: "Government & Commercial",
    caption: "Complete interior finishing décor and ceiling installation for MEF facility in Phnom Penh.",
    href: "/portfolio/mef-phnom-penh",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "moj-phnom-penh",
    title: "Ministry of Justice (MOJ)",
    location: "Phnom Penh, Cambodia",
    scope: "Finishing Décor",
    projectType: "Government & Institutional",
    caption: "High-standard decorative ceiling, wall partition, and interior finishing for MOJ headquarters.",
    href: "/portfolio/moj-phnom-penh",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "commercial-building-pp",
    title: "Commercial Building Project",
    location: "Phnom Penh, Cambodia",
    scope: "Finishing Décor",
    projectType: "Commercial Tower",
    caption: "Full-scale interior decoration, service counters, and ceiling fit-out for prime commercial tower space.",
    href: "/portfolio/commercial-building-pp",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
  }
];

export const projectPackages: ProjectPackage[] = [
  {
    id: "office-standard",
    title: "Standard Office Fit-Out",
    summary: "Complete ceiling, partition, and carpet package for modern office spaces.",
    startingPrice: 3500,
    includes: ["Gypsum ceiling & C-Line frame", "Glass partition walls", "Commercial floor carpet", "Basic lighting layout"],
    href: "/packages#office-standard",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "retail-showroom",
    title: "Retail & Showroom Fit-Out",
    summary: "High-impact ceiling decoration, custom backdrop, and display counter setup.",
    startingPrice: 4800,
    includes: ["Reflect ceiling with LED light", "Custom brand backdrop", "Reception & service counter", "Spotlight arrangement"],
    href: "/packages#retail-showroom",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
  }
];

export const brands: BrandItem[] = [
  { id: "zeit", name: "Zeit Gypsum", href: "/products?brand=Zeit" },
  { id: "isi-steel", name: "ISI Steel", href: "/products?brand=ISI%20Steel" },
  { id: "kmd-decor", name: "KMD Decor Materials", href: "/products" }
];
