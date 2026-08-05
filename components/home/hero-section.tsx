"use client";

import { ArrowRight } from "lucide-react";
import { blurPlaceholder } from "@/lib/blur-placeholder";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import heroKmdAsset from "@/public/hero-kmd.avif";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-primary text-white flex flex-col justify-between pt-20 pb-12 sm:pb-16 border-b border-brand-primary/80">
      
      {/* Background Architectural Image (Full Brightness, No Heavy Opacity Overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="KMD Decor Commercial Fit-Out"
          className="h-full w-full object-cover object-center"
          src={heroKmdAsset}
          fill
          priority
          placeholder="blur"
          blurDataURL={blurPlaceholder(1920, 1080)}
          sizes="100vw"
        />
        {/* Subtle Text Contrast Vignette Gradient (Left side only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
      </div>

      {/* Hero Body Content */}
      <div className="content-shell relative z-10 py-10 lg:py-16">
        <div className="max-w-3xl">

          {/* Headline with Motion Reveal */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal text-white leading-[1.12] tracking-tight text-balance"
          >
            Commercial Fit-Out & Architectural Precision
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed font-light max-w-xl"
          >
            Complete stretch ceilings, gypsum partitions, custom wall décor, and full interior fit-out solutions for businesses, developers, and corporate headquarters.
          </motion.p>

          {/* Clean Dual CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-md hover:bg-brand-accent-hover transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
              href="#contact"
            >
              <span>Request Commercial Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
            </Link>

            <Link
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/40 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
              href="#services"
            >
              <span>Explore Services</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Integrated Minimalist Statistics Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="content-shell relative z-10"
      >
        <div className="border-t border-white/20 pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">30+</span>
            <span className="text-xs text-neutral-300 font-light mt-1">Commercial Fit-Outs Delivered</span>
          </div>

          <div className="flex flex-col sm:border-l sm:border-white/20 sm:pl-6">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</span>
            <span className="text-xs text-neutral-300 font-light mt-1">On-Time Handover Guarantee</span>
          </div>

          <div className="flex flex-col sm:border-l sm:border-white/20 sm:pl-6">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">MEF & MOJ</span>
            <span className="text-xs text-neutral-300 font-light mt-1">Finishing Décor Contractor</span>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
