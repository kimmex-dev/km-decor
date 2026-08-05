"use client";

import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceItem } from "@/lib/homepage-data";
import { blurPlaceholder } from "@/lib/blur-placeholder";

type ServicesOverviewSectionProps = {
  services: ServiceItem[];
};

export function ServicesOverviewSection({ services }: ServicesOverviewSectionProps) {
  return (
    <section className="bg-neutral-50/50 py-12 lg:py-16 border-b border-neutral-100" id="services">
      <div className="content-shell">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
              SPECIALIZED B2B CAPABILITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 leading-tight tracking-tight">
              Fit-Out & Decoration Services
            </h2>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-900 transition hover:text-brand-accent"
            href="/services"
          >
            <span>View All Services</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3-Column Vercel-Style Service Card Grid with Motion Reveal */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300 hover:-translate-y-0.5"
            >
              <div>
                {/* Image Container with Smooth Zoom */}
                <Link className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 mb-6" href={service.href}>
                  <Image
                    alt={service.title}
                    className="object-cover transition duration-700 ease-out group-hover:scale-104"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder()}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={service.imageUrl}
                  />
                  <div className="absolute top-3 left-3 bg-neutral-950/75 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-md font-medium">
                    0{index + 1}
                  </div>
                </Link>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-neutral-950 leading-snug group-hover:text-brand-accent transition-colors">
                  <Link href={service.href}>{service.title}</Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Sub-Items List */}
                {service.items && service.items.length > 0 ? (
                  <ul className="mt-5 grid gap-2 border-t border-neutral-100 pt-4 text-xs text-neutral-700">
                    {service.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                        <span className="font-medium text-neutral-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Action Link */}
              <div className="mt-8 border-t border-neutral-100 pt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600">Supply & Install</span>
                <Link
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-950 transition group-hover:text-brand-accent"
                  href={service.href}
                >
                  <span>Explore Scope</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
