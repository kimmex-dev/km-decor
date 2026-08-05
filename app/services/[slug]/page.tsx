import { RichContent } from "@/components/content/rich-content";
import { ProductCard } from "@/components/home/product-card";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { RawStructuredData } from "@/components/structured-data";
import { ServiceFaq } from "@/components/services/service-faq";
import { getRelatedServiceProducts, getServiceBySlug, getServiceDetail } from "@/lib/service-data";
import { services } from "@/lib/homepage-data";
import { getCatalogProducts } from "@/lib/api-catalog";
import { getCatalogService } from "@/lib/api-services";
import {
  ArrowLeft,
  ArrowRight,
  PackageCheck,
  Ruler,
  Sparkles
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found — KMD Decor"
    };
  }

  return {
    title: `${service.title} — KMD Decor`,
    description: service.description
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const detail = getServiceDetail(slug);

  if (!service || !detail) notFound();

  const [products, apiService] = await Promise.all([
    getCatalogProducts(),
    getCatalogService(slug),
  ]);
  const relatedProducts = getRelatedServiceProducts(slug, products);
  const consultationHref = `/contact?service=${encodeURIComponent(service.id)}`;

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <RawStructuredData data={apiService?.structured_data ?? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
        image: service.imageUrl,
        url: `https://kmdecor.com/services/${service.id}`,
      }} />
      <SiteHeader />

      {/* Pristine Light Header */}
      <section className="bg-neutral-50/80 border-b border-neutral-200 py-10 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-mono">
                <Link className="hover:text-neutral-950 transition flex items-center gap-1" href="/services">
                  <ArrowLeft className="h-3 w-3" />
                  <span>Services</span>
                </Link>
                <span>/</span>
                <span className="text-neutral-950 font-bold">{service.title}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight">
                {service.title}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light max-w-xl leading-relaxed">
                {service.description}
              </p>
            </div>
            <div>
              <Link
                className="bg-neutral-900 text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition duration-200 inline-flex items-center gap-2 shadow-sm whitespace-nowrap"
                href={consultationHref}
              >
                <span>{detail.cta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Reference Visual */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-12 lg:py-16 border-b border-neutral-200">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          
          {/* Left Text Overview */}
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">SERVICE OVERVIEW</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950 leading-snug">
              Professional execution tailored to your space requirements.
            </h2>
            <div className="mt-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              {service.descriptionHtml ? (
                <RichContent className="text-neutral-600" html={service.descriptionHtml} />
              ) : (
                <p>{detail.overview}</p>
              )}
            </div>
          </div>

          {/* Right Showcase Image */}
          <div className="group relative min-h-[340px] md:min-h-[420px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-900 shadow-md">
            <Image alt={`${service.title} reference`} className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" fill priority sizes="(max-width: 768px) 100vw, 50vw" src={detail.visuals[0].imageUrl} />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">Planning Note</p>
              <p className="mt-1 font-serif text-xl sm:text-2xl text-white font-normal">{detail.timeline}</p>
            </div>
          </div>

        </div>
      </section>

      {/* Execution Roadmap (Scope, Outcomes, Deliverables) */}
      <section className="bg-neutral-950 text-white py-12 lg:py-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="max-w-xl mb-8">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">EXECUTION PLAN</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">Service Scope & Deliverables</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <ServicePlanColumn Icon={Ruler} items={detail.scope} number="01" title="Scope & Engineering" />
            <ServicePlanColumn Icon={Sparkles} items={detail.outcomes} number="02" title="Expected Result" />
            <ServicePlanColumn Icon={PackageCheck} items={detail.deliverables} number="03" title="Final Deliverables" />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-neutral-50/80 py-12 lg:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 max-w-3xl">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">CERTIFIED MATERIALS</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal">Specified System Materials</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {detail.materials.map((material, index) => (
              <div key={material} className="flex items-center gap-4 border-b border-neutral-100 p-4 last:border-b-0">
                <span className="text-[10px] font-mono font-bold text-brand-accent">0{index + 1}</span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Direction References — Portfolio Clean Hover Concept */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-12 lg:py-16 border-b border-neutral-200" id="service-visuals">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">VISUAL DIRECTION</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950">Project Finishing References</h2>
          </div>
          <Link className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-brand-accent transition" href={consultationHref}>
            <span>{detail.photoCta}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {detail.visuals.map((visual, index) => (
            <article
              key={visual.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 min-h-[300px] md:min-h-[360px] cursor-pointer shadow-md"
            >
              <Image
                alt={visual.title}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                src={visual.imageUrl}
              />
              
              {/* Dark Vignette Overlay — Fades in on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Overlay — Appears & Slides Up on Hover Only */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
                <span className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-accent backdrop-blur-md border border-white/10 w-fit">
                  Reference 0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif text-2xl font-normal text-white leading-tight">
                    {visual.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 font-light max-w-lg leading-relaxed">
                    {visual.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 ? (
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-12 lg:py-16 border-b border-neutral-200" id="related-products">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">RELATED MATERIALS</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950">Materials for this service</h2>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-brand-accent transition" href="/products">
              <span>Browse Products</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </section>
      ) : null}

      {/* Service FAQ */}
      <section className="bg-white py-12 lg:py-16 border-b border-neutral-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">FREQUENT QUESTIONS</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-normal">Common Questions</h2>
          </div>
          <ServiceFaq items={detail.faqs} />
        </div>
      </section>

      {/* Bottom Contact Banner */}
      <section className="bg-brand-primary text-white py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Start Your Fit-Out
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-white font-normal">
            Ready to Plan This Service?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
            Send floor plans, ceiling drawings, or project photos for a fast B2B quotation.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="bg-brand-accent text-white px-8 py-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition duration-200 inline-flex items-center gap-2 shadow-lg" href={consultationHref}>
              <span>{detail.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function ServicePlanColumn({
  Icon,
  items,
  number,
  title
}: {
  Icon: LucideIcon;
  items: string[];
  number: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4">
        <Icon className="h-4 w-4 text-brand-accent" />
        <span className="font-mono text-xs font-bold text-neutral-400">{number}</span>
      </div>
      <h3 className="mt-5 font-serif text-xl text-white font-normal">{title}</h3>
      <div className="mt-3 grid gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
