"use client";

import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blurPlaceholder } from "@/lib/blur-placeholder";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import heroKmdAsset from "@/public/hero-kmd.avif";

const heroSlides = [
  {
    id: "mef-moj",
    title: "Commercial Fit-Out & Architectural Precision",
    caption: "Official B2B Contractor for MEF & MOJ Landmark Projects",
    image: heroKmdAsset,
    isLocal: true,
    url: ""
  },
  {
    id: "ceilings",
    title: "CL-01 to CL-06 Stretch Ceiling Systems",
    caption: "Certified Stretch Ceilings & Integrated LED Illumination Profiles",
    image: null,
    isLocal: false,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85"
  },
  {
    id: "partitions",
    title: "C-Line Steel Framing & Wall Partitions",
    caption: "Acoustic Wall Systems & Custom Interior Cabinetry",
    image: null,
    isLocal: false,
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
  }
];

const trustIndicators = [
  {
    number: "MEF & MOJ",
    title: "Landmark Contractor",
    desc: "Official B2B Contractor"
  },
  {
    number: "Phnom Penh",
    title: "Studio & Warehouse",
    desc: "#54, St. 590, Toul Kork"
  },
  {
    number: "CL-01 to CL-06",
    title: "Certified Systems",
    desc: "Stretch Ceilings & Partitions"
  }
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 text-white flex flex-col justify-between min-h-[calc(100vh-4rem)] py-8 sm:py-10 border-b border-neutral-800">

      {/* Quiet Background Cross-Fade Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {currentSlide.isLocal && currentSlide.image ? (
              <Image
                alt={currentSlide.title}
                className="h-full w-full object-cover object-center"
                src={currentSlide.image}
                fill
                priority
                placeholder="blur"
                blurDataURL={blurPlaceholder(1920, 1080)}
                sizes="100vw"
              />
            ) : (
              <img
                alt={currentSlide.title}
                className="h-full w-full object-cover object-center"
                src={currentSlide.url}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Crisp Readability Overlay — Brighter Photo Detail */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-neutral-950/35 to-neutral-950/15 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/20 z-10" />
      </div>

      {/* Hero Body Content */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 relative z-20 w-full my-auto py-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Main Text Content */}
          <div className="max-w-3xl">
            {/* Bold Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.12] tracking-tight">
              Interior Fit-Out Solutions
            </h1>

            {/* Concise Subhead */}
            <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light max-w-md leading-relaxed">
              Commercial interior fit-out services in Phnom Penh.
            </p>

            {/* Two Clean CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md hover:bg-brand-accent-hover transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                href="/services"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/15 transition duration-200 backdrop-blur-md"
                href="/contact"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Minimalist Carousel Slide Indicators + Scroll Prompt */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <a
              href="#services"
              className="hidden sm:inline-flex items-center gap-1.5 border border-white/20 bg-neutral-950/70 px-4 py-2.5 rounded-full backdrop-blur-md text-[11px] font-mono font-medium text-neutral-300 hover:text-white transition"
            >
              <span>Scroll</span>
              <ArrowDown className="h-3 w-3 animate-bounce text-brand-accent" />
            </a>

            <div className="flex items-center gap-4 border border-white/20 bg-neutral-950/70 px-4 py-2.5 rounded-full backdrop-blur-md">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                type="button"
                aria-label="Previous Slide"
                className="text-neutral-400 hover:text-white transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <span className="font-mono text-xs font-bold text-white tracking-widest">
                0{activeSlide + 1} <span className="text-neutral-500 font-normal">/ 03</span>
              </span>

              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                type="button"
                aria-label="Next Slide"
                className="text-neutral-400 hover:text-white transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Row of Trust Indicators */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 relative z-20 w-full">
        <div className="border-t border-white/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {trustIndicators.map((indicator, index) => (
            <div
              key={indicator.number}
              className={`flex flex-col ${index > 0 ? "sm:border-l sm:border-white/20 sm:pl-6" : ""}`}
            >
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                {indicator.number}
              </span>
              <span className="font-mono text-xs text-brand-accent font-bold mt-0.5 uppercase">
                {indicator.title}
              </span>
              <span className="text-xs text-neutral-300 font-light mt-1 max-w-xs leading-relaxed">
                {indicator.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
