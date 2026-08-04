import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/lib/homepage-data";
import { blurPlaceholder } from "@/lib/blur-placeholder";

type ServicesOverviewSectionProps = {
  services: ServiceItem[];
};

export function ServicesOverviewSection({ services }: ServicesOverviewSectionProps) {
  return (
    <section className="bg-neutral-50/60 py-20 border-b border-neutral-100" id="services">
      <div className="content-shell">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
              SERVICES (SUPPLY & INSTALL)
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black leading-tight tracking-tight">
              Our Fit-Out Services
            </h2>
          </div>
          <Link className="hidden sm:inline-flex items-center text-xs font-semibold uppercase tracking-widest text-black transition hover:text-[#991b1b]" href="/services">
            All Services
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 3-Column Clean Service Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="group flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-neutral-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#991b1b] opacity-0 group-hover:opacity-100 transition duration-300" />
              <div>
                <Link className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 mb-5" href={service.href}>
                  <Image
                    alt={service.title}
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder()}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    src={service.imageUrl}
                  />
                </Link>
                <h3 className="font-serif text-xl font-normal text-black group-hover:text-[#991b1b] transition leading-snug">
                  <Link href={service.href}>{service.title}</Link>
                </h3>

                {/* Clean Sub-Items */}
                {service.items && service.items.length > 0 ? (
                  <ul className="mt-4 grid gap-2.5 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#991b1b] shrink-0" />
                        <span className="font-medium text-neutral-700">{item}</span>
                      </li>
                    ))}
                    {service.items.length > 3 ? (
                      <li className="pt-1 text-[11px] font-semibold text-neutral-500">
                        + {service.items.length - 3} more options in the full scope
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </div>

              <div className="mt-6 border-t border-neutral-100 pt-4">
                <Link className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-black transition group-hover:text-[#991b1b]" href={service.href}>
                  Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
