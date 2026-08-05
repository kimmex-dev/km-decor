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
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Coins,
  Compass,
  FileCheck2,
  Handshake,
  MapPin,
  PhoneCall,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


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
                          {service.items.slice(0, 6).map((item) => (
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

      {/* Why Partner with KMD Décor — Architectural Hairline Grid */}
      <section className="bg-white py-16 lg:py-24 border-y border-neutral-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
              KMD DÉCOR — B2B VALUE ADVANTAGE
            </span>
            <h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl md:text-5xl">
              Why Partner with KMD Décor
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              7 core capabilities engineered for dependable commercial fit-out execution in Phnom Penh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {companyPartnershipStrengths.map((item, index) => {
              const icons = [Building2, Target, ShieldCheck, Clock, Coins, Ruler, Handshake];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={item.num}
                  className="group border-t-2 border-neutral-200 pt-6 transition-colors duration-300 hover:border-brand-primary"
                >
                  <div className="flex items-center justify-between font-mono text-sm font-bold">
                    <span className="text-brand-accent">{item.num}</span>
                    <IconComp className="h-4.5 w-4.5 text-neutral-400 group-hover:text-brand-primary transition-colors duration-200" />
                  </div>

                  <h3 className="mt-4 font-serif text-lg font-normal text-neutral-950 leading-snug group-hover:text-brand-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
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

      {/* Ultra-Clean Bottom Consultation CTA */}
      <section className="bg-neutral-50/80 py-16 lg:py-24 border-t border-neutral-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center max-w-3xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
            GET STARTED TODAY
          </span>
          <h2 className="mt-3 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl md:text-5xl">
            Ready to Start Your Commercial Fit-Out?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
            Contact KMD Décor in Phnom Penh for transparent BOQ calculations, material specifications, and professional installation engineering.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="bg-brand-primary text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition-all duration-200 inline-flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
              href="/contact"
            >
              <span>Request BOQ Quotation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              className="border border-neutral-300 bg-white text-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
              href="https://t.me/+85516927683"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="h-4 w-4 fill-brand-accent" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.59 4.6-1.87 5.12-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07.01.23 0 .37z" />
              </svg>
              <span>Telegram Chat</span>
            </a>
            <a
              className="border border-neutral-300 bg-white text-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm"
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
