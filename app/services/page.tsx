"use client";

import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import {
  companyMission,
  companyPartnershipStrengths,
  companyVision,
  projects,
  services
} from "@/lib/homepage-data";
import { serviceDetails } from "@/lib/service-data";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  FileCheck2,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    num: "01",
    title: "Share Your Commercial Space",
    copy: "Send project drawings, floor plans, or site photos along with your target completion schedule."
  },
  {
    num: "02",
    title: "Technical Review & BOQ Scope",
    copy: "Our engineering and design team assesses material specs, structural requirements, and site logistics."
  },
  {
    num: "03",
    title: "Receive Detailed Commercial Quotation",
    copy: "Review a transparent BOQ proposal covering supply, fabrication, transport, and expert installation."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <SiteHeader />

      {/* Pristine Light Header */}
      <section className="bg-neutral-50/80 border-b border-neutral-200 py-10 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">
                KMD DÉCOR — SERVICES & CAPABILITIES
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight">
                Interior Fit-Out & Architectural Services
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light max-w-xl leading-relaxed">
                From material supply and installation to complete fit-out work, KMD Décor creates modern, practical, and high-quality commercial interiors across Phnom Penh.
              </p>
            </div>
            <div>
              <a
                className="bg-neutral-900 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition duration-200 inline-flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                href="#services-list"
              >
                <span>Explore Services</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick-Nav Bar */}
      <nav aria-label="Service categories" className="sticky top-16 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm" id="services-list">
        <div className="mx-auto flex max-w-screen-2xl snap-x gap-2 overflow-x-auto px-4 py-3 md:px-8">
          {services.map((service, index) => (
            <a
              key={service.id}
              className="flex min-h-10 shrink-0 snap-start items-center gap-2.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 text-xs font-semibold text-neutral-800 transition hover:border-brand-accent hover:bg-brand-accent hover:text-white"
              href={`#${service.id}`}
            >
              <span className="font-mono text-[11px] opacity-70">0{index + 1}</span>
              <span>{service.title.replace(/^\d+\.\s*/, "")}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Services Overview Section */}
      <section className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 lg:py-24">
        <div className="mb-14 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl md:text-5xl">
              Commercial Interior Services
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 font-light leading-relaxed">
            Every engagement puts project timelines, cost control, material quality, and dependable B2B delivery at the center of execution.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const detail = serviceDetails[service.id];
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="scroll-mt-32 grid gap-8 lg:grid-cols-12 lg:items-center"
                id={service.id}
              >
                {/* Visual Image Container — Hover Shows Service Scope */}
                <Link
                  href={`/services/${service.id}`}
                  className={`relative block min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-md group lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <img
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    src={service.imageUrl}
                  />
                  {/* Base Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-40" />

                  {/* Clean Translucent Hover Overlay showing Service Scope & Vivid Background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/45 to-neutral-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-8 flex flex-col justify-between text-white">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
                        SCOPE & AVAILABLE SPECIFICATIONS
                      </span>
                      <h4 className="mt-1 font-serif text-2xl text-white font-normal">
                        {service.title.replace(/^\d+\.\s*/, "")}
                      </h4>
                      {service.items && service.items.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {service.items.slice(0, 4).map((item) => (
                            <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-200 font-light">
                              <Check className="h-3.5 w-3.5 shrink-0 text-brand-accent stroke-[2.5] mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                        <span>Explore Full Service Scope</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Content Container — Minimal & Visual B2B Card */}
                <div className={`flex flex-col justify-center lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-1">
                    0{index + 1} — SUPPLY & INSTALLATION
                  </span>

                  <h3 className="font-serif text-3xl font-normal text-neutral-950 sm:text-4xl leading-tight">
                    {service.title.replace(/^\d+\.\s*/, "")}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* 3 Quick Spec Badges */}
                  {detail?.materials && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {detail.materials.slice(0, 3).map((mat) => (
                        <span key={mat} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-[11px] font-medium text-neutral-700">
                          {mat}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Single Clear Primary Action Link */}
                  <div className="mt-6">
                    <Link
                      className="bg-brand-primary text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition duration-200 inline-flex items-center gap-2 shadow-sm"
                      href={`/services/${service.id}`}
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Why Businesses Choose KMD Décor — KMD Brand Primary Deep Navy */}
      <section className="bg-brand-primary text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-accent">
              KMD DÉCOR — B2B VALUE ADVANTAGE
            </span>
            <h2 className="mt-3 font-serif text-3xl font-normal text-white sm:text-4xl md:text-5xl">
              Why Businesses Choose KMD Décor
            </h2>
            <p className="mt-4 text-base text-neutral-200 font-light leading-relaxed">
              Our B2B approach puts project timelines, cost control, certified material quality, and dependable delivery at the center of every commercial engagement in Phnom Penh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyPartnershipStrengths.map((item) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-brand-accent">{item.num}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-accent/60 group-hover:bg-brand-accent transition-colors" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-white font-normal leading-snug">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple 3-Step Project Process */}
      <section className="mx-auto max-w-screen-2xl px-4 py-16 md:px-8 lg:py-24">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Simple Workflow
          </span>
          <h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl">
            How Your Fit-Out Project Starts
          </h2>
          <p className="mt-3 text-sm text-neutral-600 font-light">
            Clear information and transparent communication before construction begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-3xl font-bold text-brand-primary">{step.num}</span>
                <h3 className="mt-4 font-serif text-xl font-normal text-neutral-950">{step.title}</h3>
                <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section className="bg-neutral-50 py-16 lg:py-24 border-t border-neutral-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
                Proven Track Record
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl">
                Selected Project Showcase
              </h2>
            </div>
            <Link
              className="text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-brand-accent-hover inline-flex items-center gap-1.5"
              href="/portfolio"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href="/portfolio"
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-md min-h-[320px] cursor-pointer block"
              >
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={project.imageUrl}
                />
                
                {/* Default Bottom Vignette & Scope Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-30" />
                
                <div className="absolute top-4 left-4 rounded-full bg-brand-primary/90 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white border border-white/10 z-10">
                  {project.scope}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-serif text-xl text-white font-normal">{project.title}</h3>
                  <p className="mt-1 text-xs text-neutral-300 font-mono">{project.location}</p>
                </div>

                {/* Clean Translucent Hover Overlay — Vivid Background Photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/45 to-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">{project.location}</span>
                    <h3 className="mt-1 font-serif text-2xl text-white font-normal">{project.title}</h3>
                    <p className="mt-2 text-xs text-neutral-200 font-light leading-relaxed line-clamp-3">{project.caption}</p>
                  </div>
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                      <span>Explore Project Showcase</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA Banner */}
      <section className="bg-brand-primary text-white py-16 lg:py-20 border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Get Started Today
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl md:text-5xl text-white">
            Start Your Commercial Fit-Out Project
          </h2>
          <p className="mt-4 text-base text-neutral-200 font-light leading-relaxed">
            Tell us about your commercial space, project requirements, and timeline. KMD Décor will help you shape a fit-out solution that is functional, considered, and ready to deliver.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="bg-brand-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 inline-flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              href="/contact"
            >
              <span>Request BOQ Quotation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              className="border border-white/30 text-white px-6 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              href="tel:+85516927683"
            >
              <PhoneCall className="h-4 w-4 text-brand-accent" />
              <span>+855 16 927 683</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
