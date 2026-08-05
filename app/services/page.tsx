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
                {/* Visual Image Container */}
                <div className={`relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden rounded-2xl border border-neutral-200 shadow-md group lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    src={service.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-6 left-6 rounded-full bg-brand-primary px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-md">
                    0{index + 1} — SERVICE CATEGORY
                  </span>
                </div>

                {/* Content Container */}
                <div className={`flex flex-col justify-center lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
                    Supply & Installation
                  </span>
                  <h3 className="mt-3 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl leading-tight">
                    {service.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-4 text-base text-neutral-600 font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* List of Specific Items from companyprofile.md */}
                  {service.items && service.items.length > 0 && (
                    <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 space-y-3">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 mb-2">
                        Available Specifications & Scope
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-700">
                        {service.items.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <Check className="h-4 w-4 shrink-0 text-brand-accent mt-0.5" strokeWidth={2.5} />
                            <span className="font-medium text-neutral-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      className="bg-brand-accent text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 inline-flex items-center gap-2 shadow-sm"
                      href={`/contact?service=${encodeURIComponent(service.id)}`}
                    >
                      <span>Inquire About {service.id === "ceiling" ? "Ceilings" : service.id === "partition" ? "Partitions" : "Furniture"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Why Businesses Choose KMD Décor (7 Strength Highlights) */}
      <section className="bg-neutral-900 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
              B2B Value Advantage
            </span>
            <h2 className="mt-3 font-serif text-3xl font-normal text-white sm:text-4xl md:text-5xl">
              Why Businesses Choose KMD Décor
            </h2>
            <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
              Our B2B approach puts project timelines, cost control, material quality, and dependable delivery at the center of every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyPartnershipStrengths.map((item) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm hover:border-white/30 transition duration-300"
              >
                <span className="font-mono text-xl font-bold text-brand-accent">{item.num}</span>
                <h3 className="mt-3 font-serif text-xl text-white font-normal">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 font-light leading-relaxed">{item.desc}</p>
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
              <div key={project.id} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-brand-primary/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white">
                    {project.scope}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-neutral-950 font-normal">{project.title}</h3>
                  <p className="mt-1 text-xs text-neutral-500 font-mono">{project.location}</p>
                  <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-light">{project.caption}</p>
                </div>
              </div>
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
