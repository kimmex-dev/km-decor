"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/lib/homepage-data";
import { blurPlaceholder } from "@/lib/blur-placeholder";

type FeaturedProjectsSectionProps = {
  projects: ProjectItem[];
};

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section className="bg-white py-20 border-b border-neutral-100" id="portfolio">
      <div className="content-shell">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
              PORTFOLIO
            </p>
            <h2 className="font-serif text-3xl font-normal text-black leading-tight">
              Landmark Projects
            </h2>
          </div>
          <Link className="hidden sm:inline-flex items-center text-xs font-semibold uppercase tracking-widest text-black transition hover:text-[#991b1b]" href="/portfolio">
            Full Portfolio
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Landmark Projects Showcase */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div>
                <Link className="relative block aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 mb-4" href={project.href}>
                  <Image
                    alt={project.title}
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder()}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    src={project.imageUrl}
                  />
                  <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur">
                    {project.scope}
                  </span>
                </Link>
                <div className="flex items-center gap-1.5 text-[11px] text-[#991b1b] font-medium mb-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-serif text-xl font-normal text-black group-hover:text-[#991b1b] transition leading-snug">
                  <Link href={project.href}>{project.title}</Link>
                </h3>
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-3">
                <Link className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-black hover:text-[#991b1b] transition" href="#contact">
                  Quote Reference →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
