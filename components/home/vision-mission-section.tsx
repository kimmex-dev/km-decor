"use client";

import { companyVision, companyMission } from "@/lib/homepage-data";
import { Compass, Target, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function VisionMissionSection() {
  return (
    <section id="company-overview" className="relative overflow-hidden bg-brand-primary text-white py-12 lg:py-16 border-b border-brand-primary/80">
      {/* Ambient Lighting Backdrop */}
      <div className="pointer-events-none absolute top-0 right-1/4 h-96 w-96 rounded-full bg-brand-accent/15 blur-[120px]" />

      <div className="content-shell relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-300 mb-3">
            COMMERCIAL FIT-OUT PARTNER
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
            Vision & Corporate Purpose
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            Based in Phnom Penh, Cambodia, KMD Décor creates practical, modern, and high-standard interiors for companies, developers, institutions, retailers, and restaurants.
          </p>
        </motion.div>

        {/* Vision & Mission Cards Grid with Motion Reveal */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/15 bg-white/10 p-8 sm:p-10 transition-all duration-300 hover:border-white/30 hover:bg-white/15 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                  <Compass className="h-5 w-5 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-neutral-300">
                  Our Vision
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal mb-4 leading-snug">
                Trusted Fit-Out & Decoration Partner
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-light">
                {companyVision}
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/15 bg-white/10 p-8 sm:p-10 transition-all duration-300 hover:border-white/30 hover:bg-white/15 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-neutral-300">
                  Our Mission
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal mb-4 leading-snug">
                Inspiring Commercial Environments
              </h3>
              <p className="text-sm text-neutral-200 leading-relaxed font-light">
                {companyMission}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Location & Call Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
            <MapPin className="h-4 w-4 text-neutral-300 shrink-0" />
            <span>#54, Street 590, Sangkat Boeung Kok II, Khan Toul Kork, Phnom Penh</span>
          </div>
          <Link
            href="tel:+85516927683"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/20 hover:border-white/40 transition"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>+855 16 927 683</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
