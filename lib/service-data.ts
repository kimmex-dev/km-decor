import { services } from "@/lib/homepage-data";
import type { ProductItem } from "@/lib/homepage-data";

export type ServiceDetail = {
  overview?: string;
  photoCta: string;
  quotePrep: string[];
  scope: string[];
  materials: string[];
  cta: string;
  bestFor: string[];
  visuals: Array<{ title: string; caption: string; imageUrl: string }>;
  quoteFactors: string[];
  timeline: string;
  outcomes: string[];
  deliverables: string[];
  relatedProductIds: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  ceiling: {
    overview:
      "KMD Décor specializes in certified stretch ceiling installation (CL-01 Translucent, CL-02 Glossy, CL-03 Satin, CL-04 Matt, CL-05 Perforated, CL-06 Printed) and gypsum ceiling decoration. Supported by C-Line 4M steel framing and integrated LED lighting profiles, our ceiling systems deliver clean lines and high moisture resistance for commercial offices and landmark institutions in Phnom Penh.",
    photoCta: "Send Ceiling Drawings",
    quotePrep: ["Ceiling area or floor plan", "Approximate height & ceiling style", "Lighting profile requirements", "Supply-only or complete installation"],
    scope: [
      "CL-01 Stretch ceiling with white paint",
      "CL-02 Stretch moisture ceiling with white paint",
      "CL-03 Reflect ceiling with white paint",
      "CL-04 Reflect eco block ceiling",
      "CL-05 Decore Reflect Ceiling with LED light",
      "CL-06 Decore Reflect eco block Ceiling with LED Light"
    ],
    materials: [
      "CL-01 Stretch ceiling with white paint",
      "CL-02 Stretch moisture ceiling with white paint",
      "CL-03 Reflect ceiling with white paint",
      "CL-04 Reflect eco block ceiling",
      "CL-05 Decore Reflect Ceiling with LED light",
      "CL-06 Decore Reflect eco block Ceiling with LED Light"
    ],
    cta: "Request Ceiling Quotation",
    bestFor: ["Commercial Offices & Towers", "Government Ministry Halls (MEF & MOJ)", "Corporate Meeting Rooms", "Retail & Hotel Showrooms"],
    visuals: [
      {
        title: "Stretch Ceiling Illumination",
        caption: "CL-01 Translucent membrane with integrated LED backlight profiles.",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "C-Line Framing & Profile Fitting",
        caption: "Galvanized C-Line 4M steel framing for acoustic and gypsum ceilings.",
        imageUrl: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Commercial Hall Finishing",
        caption: "Delivered for government ministries and office towers in Phnom Penh.",
        imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
      }
    ],
    quoteFactors: ["Ceiling square area & room height", "Stretch membrane type (CL-01 to CL-06)", "Framing, lighting profiles & installation access"],
    timeline: "Ceiling estimates are provided within 24 hours of receiving floor plans or room dimensions.",
    outcomes: ["Moisture resistant stretch membranes", "Seamless LED lighting integration", "Certified architectural finish"],
    deliverables: ["BOQ material calculation", "Framing & membrane supply list", "Full installation engineering team"],
    relatedProductIds: ["gypsum-board", "cline-4m", "eco-block-ceiling-board", "installation-kit"],
    faqs: [
      {
        question: "What stretch ceiling options are available?",
        answer: "We supply and install CL-01 to CL-06 stretch and reflect ceiling systems with white paint, eco block, and integrated LED light."
      },
      {
        question: "Do you supply both materials and installation?",
        answer: "Yes. KMD Décor provides both wholesale material supply and complete on-site installation by our engineering team."
      }
    ]
  },
  partition: {
    overview:
      "Our partition wall and framing service provides room division, acoustic isolation, and custom feature wall backdrops for commercial spaces in Phnom Penh.",
    photoCta: "Send Partition Layout",
    quotePrep: ["Wall layout or length & height", "Door & window requirements", "Back drop & counter specifications", "Floor carpet area"],
    scope: ["Door & Window", "Back drop", "Counter", "Floor Carpet"],
    materials: ["Door & Window", "Back drop", "Counter", "Floor Carpet"],
    cta: "Request Partition Quotation",
    bestFor: ["Corporate Office Room Division", "Executive Suites & Meeting Rooms", "Government Ministry Partitions", "Commercial Retail Spaces"],
    visuals: [
      {
        title: "Acoustic Wall Partitions",
        caption: "Sound-control acoustic framing for office meeting rooms.",
        imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Commercial Office Division",
        caption: "Clean C-line steel framing and gypsum wall structures.",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Feature Backdrop Walls",
        caption: "Decor wall panels and framing for reception areas.",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
      }
    ],
    quoteFactors: ["Partition wall length and height", "Door, window & backdrop specifications", "Delivery access in Phnom Penh"],
    timeline: "Partition quotes are calculated after dimensions and material specifications are confirmed.",
    outcomes: ["Certified partition & door installation", "Custom reception counters", "Commercial floor carpeting"],
    deliverables: ["Material schedule", "BOQ calculation", "On-site installation & finishing"],
    relatedProductIds: ["partition-frame-stick", "acoustic-board", "gypsum-board", "installation-kit"],
    faqs: [
      {
        question: "What partition & wall décor scope does KMD Décor cover?",
        answer: "We supply and install doors & windows, back drops, reception counters, and commercial floor carpeting."
      }
    ]
  },
  furniture: {
    overview:
      "KMD Décor manufactures and fits custom interior furniture, built-in office cabinetry, office materials, and full conference hall interior fit-out solutions.",
    photoCta: "Send Cabinet Reference",
    quotePrep: ["Furniture drawings or reference photo", "Approximate dimensions", "Office material preferences"],
    scope: ["Cabinet", "Office Materials", "Conference hall"],
    materials: ["Cabinet", "Office Materials", "Conference hall"],
    cta: "Request Furniture Quotation",
    bestFor: ["Executive Office Suites", "Conference & Boardrooms", "Reception Counters & Displays", "Government & Corporate Fit-Outs"],
    visuals: [
      {
        title: "Executive Office Cabinetry",
        caption: "Custom built-in storage counters and wall features.",
        imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80"
      },
      {
        title: "Conference Hall Fit-Out",
        caption: "High-density decor boards and executive table finishes.",
        imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=900&q=80"
      },
      {
        title: "Reception Counters & Shelving",
        caption: "Commercial grade cabinetry fitted for high-traffic office spaces.",
        imageUrl: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80"
      }
    ],
    quoteFactors: ["Dimensions and quantity", "Board material & finish selection", "Hardware, edge treatment, and installation access"],
    timeline: "Custom furniture quotations depend on design dimensions, board selection, and finish requirements.",
    outcomes: ["Durable commercial cabinetry", "Matched corporate aesthetic", "Precision built-in fitting"],
    deliverables: ["Furniture shop drawings review", "Material samples & board selection", "Fabrication & installation"],
    relatedProductIds: ["decor-board", "cabinet-board", "installation-kit"],
    faqs: [
      {
        question: "Can I choose specific decor board finishes?",
        answer: "Yes. You can select from our range of high-density MDF/WPC decor boards, wood veneers, and commercial laminates."
      },
      {
        question: "Where is KMD Décor's office located?",
        answer: "Our studio & supply warehouse is located at #54, St. 590, Sangkat Boeung Kak II, Khan Toul Kork, Phnom Penh, Cambodia."
      }
    ]
  }
};

export function getServiceDetail(serviceId: string) {
  return serviceDetails[serviceId] ?? serviceDetails["ceiling"];
}

function productSlug(product: ProductItem) {
  return product.href.replace("/products/", "");
}

export function getRelatedServiceProducts(serviceId: string, products: ProductItem[]) {
  const detail = getServiceDetail(serviceId);
  if (!detail) return [];

  return detail.relatedProductIds
    .map((id) => products.find((product) => product.id === id || productSlug(product) === id))
    .filter((product): product is ProductItem => Boolean(product));
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.id === slug) ?? services[0];
}
