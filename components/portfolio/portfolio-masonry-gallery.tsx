"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  PhoneCall,
  X
} from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

export type PortfolioProject = {
  id: string;
  title: string;
  location: string;
  scope: string;
  projectType: string;
  category: "Government" | "Commercial" | "FitOut";
  caption: string;
  imageUrl: string;
  highlights: string[];
};

type PortfolioMasonryGalleryProps = {
  initialProjects: PortfolioProject[];
};

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "Government", label: "Government & Institutional" },
  { id: "Commercial", label: "Commercial Towers & Offices" },
  { id: "FitOut", label: "Ceiling & Partition Fit-Outs" }
];

export function PortfolioMasonryGallery({ initialProjects }: PortfolioMasonryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return initialProjects;
    return initialProjects.filter((project) => project.category === selectedCategory);
  }, [initialProjects, selectedCategory]);

  const activeProject = activeLightboxIndex !== null ? filteredProjects[activeLightboxIndex] : null;

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8 lg:py-20">
      {/* Filter Tabs */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-neutral-200 pb-6">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Visual Portfolio Showcase
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl text-neutral-950 font-normal">
            Architectural Project Gallery
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                    : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Asymmetric Masonry Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const aspectClass =
              index % 3 === 0
                ? "aspect-[4/5]"
                : index % 3 === 1
                ? "aspect-square"
                : "aspect-[16/10]";

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-md cursor-pointer ${aspectClass}`}
                onClick={() => setActiveLightboxIndex(index)}
              >
                <img
                  alt={project.title}
                  src={project.imageUrl}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Dark Vignette Overlay — Fades in on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content Overlay — Appears & Slides Up on Hover Only */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-accent backdrop-blur-md border border-white/10">
                      {project.projectType}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md">
                      <Expand className="h-4 w-4" />
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-neutral-300 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-brand-accent" />
                      {project.location}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-normal text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-300 line-clamp-2 font-light">
                      {project.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-xl p-4 sm:p-6 lg:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              type="button"
              className="absolute top-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
              aria-label="Previous Project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              type="button"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
              aria-label="Next Project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Body */}
            <div className="mx-auto max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-800 bg-neutral-900 text-white grid grid-cols-1 lg:grid-cols-12 shadow-2xl overflow-hidden">
              {/* Image Preview Side */}
              <div className="relative min-h-[320px] sm:min-h-[440px] lg:min-h-full lg:col-span-7 bg-black flex items-center justify-center">
                <img
                  alt={activeProject.title}
                  src={activeProject.imageUrl}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Detail Sidebar */}
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-brand-accent/20 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-accent border border-brand-accent/30">
                      {activeProject.projectType}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-accent" />
                      {activeProject.location}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl font-normal text-white leading-tight">
                    {activeProject.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-light">
                    {activeProject.caption}
                  </p>

                  <div className="mt-6 border-t border-b border-neutral-800 py-4 font-mono text-xs">
                    <span className="text-neutral-400 block text-[10px] uppercase">Scope of Work</span>
                    <span className="text-white font-semibold text-sm mt-0.5 block">{activeProject.scope}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Fit-Out Deliverables
                    </span>
                    {activeProject.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="h-4 w-4 shrink-0 text-brand-accent mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col gap-3">
                  <Link
                    className="bg-brand-accent text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-lg"
                    href="/contact"
                    onClick={() => setActiveLightboxIndex(null)}
                  >
                    <span>Inquire About Similar Fit-Out</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    className="border border-white/20 text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-200 text-center flex items-center justify-center gap-2"
                    href="tel:+85516927683"
                  >
                    <PhoneCall className="h-4 w-4 text-brand-accent" />
                    <span>Call +855 16 927 683</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
