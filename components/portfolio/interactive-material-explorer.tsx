"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Layers, Lightbulb, Shield, Sparkles, Sliders } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export type CeilingSpec = {
  code: string;
  name: string;
  nameKh: string;
  category: "Ceiling" | "Partition" | "Furniture";
  description: string;
  material: string;
  lighting: string;
  durability: string;
  imageUrl: string;
  idealFor: string;
};

const MATERIAL_SPECS: CeilingSpec[] = [
  {
    code: "CL-01",
    name: "Stretch Ceiling (White Finish)",
    nameKh: "ពិដាន Stretch ពណ៌ស",
    category: "Ceiling",
    description: "Sleek, seamless stretch ceiling membrane finished in matte architectural white for clean commercial light distribution.",
    material: "Flame-Retardant PVC Stretch Membrane",
    lighting: "Diffused Ambient LED Strip Ready",
    durability: "Anti-Fungal & Easy Wash Maintenance",
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Corporate Offices, Reception Halls & Showrooms"
  },
  {
    code: "CL-02",
    name: "Moisture-Resistant Stretch Ceiling",
    nameKh: "ពិដាន Stretch ការពារសំណើម",
    category: "Ceiling",
    description: "Hydro-phobic stretch ceiling engineered for high-humidity Cambodian climate, prevents sagging and water stain marks.",
    material: "Moisture-Shielded PVC Polymer",
    lighting: "Recessed Waterproof Downlights",
    durability: "100% Water & Steam Resistant",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Executive Washrooms, Dining Areas & Spas"
  },
  {
    code: "CL-03",
    name: "Reflect Ceiling (High Gloss)",
    nameKh: "ពិដាន Reflect ផ្លាតពន្លឺ",
    category: "Ceiling",
    description: "High-spec specular reflective ceiling sheet that visually expands room height and maximizes ceiling light bounce.",
    material: "Mirror-Finish Reflect Membrane",
    lighting: "Perimeter Cove Lighting Systems",
    durability: "Scratch-Resistant Coating",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Luxury Lobby Spaces & High-End Retail"
  },
  {
    code: "CL-04",
    name: "Reflect Eco Block Ceiling",
    nameKh: "ពិដាន Reflect Eco Block",
    category: "Ceiling",
    description: "Modular acoustic eco block ceiling system providing superior noise dampening and thermal insulation.",
    material: "Recycled Acoustic Fiber & Gypsum Core",
    lighting: "Modular Grid LED Panels (60x60)",
    durability: "Class A Acoustic Absorber (NRC 0.85)",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Conference Rooms, Open Workspaces & Auditoriums"
  },
  {
    code: "CL-05",
    name: "Decorative Reflect Ceiling + LED Troffer",
    nameKh: "ពិដាន Decor Reflect + ភ្លើង LED",
    category: "Ceiling",
    description: "Architectural custom ceiling with integrated linear LED light troffers created for landmark government and corporate projects.",
    material: "Composite Aluminum & Stretch Core",
    lighting: "Custom Dimmer-Controlled Linear LED",
    durability: "50,000hr Rated LED Strips",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Ministry Halls, Boardrooms & VIP Suites"
  },
  {
    code: "CL-06",
    name: "Decorative Reflect Eco Block + LED",
    nameKh: "ពិដាន Decor Eco Block + ភ្លើង LED",
    category: "Ceiling",
    description: "Premium combination of sound-control Eco Block panels and embedded decorative accent lighting for modern fit-outs.",
    material: "Eco Acoustic Block & Light Channels",
    lighting: "Dual-Layer Ambient & Direct Accent Light",
    durability: "High Acoustic & Thermal Efficiency",
    imageUrl: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    idealFor: "Executive Meeting Rooms & Convention Centers"
  }
];

export function InteractiveMaterialExplorer() {
  const [selectedCode, setSelectedCode] = useState<string>("CL-05");

  const currentSpec = MATERIAL_SPECS.find((s) => s.code === selectedCode) || MATERIAL_SPECS[0];

  return (
    <section className="bg-neutral-900 text-white py-16 lg:py-24 border-y border-neutral-800">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent flex items-center gap-2">
              <Sliders className="h-4 w-4" />
              INTERACTIVE MATERIAL EXPLORER
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
              Ceiling System & Fit-Out Material Preview
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-300 font-light leading-relaxed">
            Select any authentic KMD ceiling specification (CL-01 to CL-06) to inspect technical materials, lighting integration, and real-world commercial applications.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {MATERIAL_SPECS.map((spec) => {
            const isSelected = spec.code === selectedCode;
            return (
              <button
                key={spec.code}
                onClick={() => setSelectedCode(spec.code)}
                type="button"
                className={`rounded-full px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? "bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/25"
                    : "bg-neutral-800/80 text-neutral-300 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600"
                }`}
              >
                <span>{spec.code}</span>
                <span className="text-[10px] font-normal opacity-80 border-l border-white/20 pl-2">
                  {spec.name.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Viewer Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          {/* Visual Texture Image Preview */}
          <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-full lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSpec.code}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                alt={currentSpec.name}
                src={currentSpec.imageUrl}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="rounded-full bg-brand-accent px-3 py-1 font-mono text-xs font-bold text-white uppercase tracking-wider">
                  SPECIFICATION CODE: {currentSpec.code}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-normal text-white">
                  {currentSpec.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Technical Specs & Details Drawer */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-brand-accent" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                  AUTHENTIC FIT-OUT SPECIFICATION
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-white leading-tight">
                {currentSpec.name}
              </h3>
              <p className="mt-1 text-xs font-mono text-neutral-400">
                {currentSpec.nameKh}
              </p>

              <p className="mt-4 text-sm text-neutral-300 font-light leading-relaxed border-b border-neutral-800 pb-6">
                {currentSpec.description}
              </p>

              {/* Specs Grid */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3 text-xs">
                  <Layers className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Material Composition</span>
                    <span className="text-white font-medium">{currentSpec.material}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Lightbulb className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Lighting System</span>
                    <span className="text-white font-medium">{currentSpec.lighting}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <Shield className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Durability & Performance</span>
                    <span className="text-white font-medium">{currentSpec.durability}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs border-t border-neutral-800 pt-4">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">Recommended Commercial Application</span>
                    <span className="text-emerald-300 font-semibold">{currentSpec.idealFor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quote CTA */}
            <div className="pt-6 border-t border-neutral-800">
              <Link
                className="bg-brand-accent text-white px-6 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 flex items-center justify-center gap-2 shadow-lg w-full"
                href={`/contact?spec=${currentSpec.code}`}
              >
                <span>Request Quotation for {currentSpec.code}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
