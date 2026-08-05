import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { FadeInMotion } from "@/components/ui/fade-in-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroKmdAsset from "@/public/hero-kmd.avif";

export const metadata = {
  title: "About — KMD Decor",
  description: "KMD Decor provides commercial interior fit-out, ceiling, partition, and furniture solutions in Phnom Penh, Cambodia.",
};

const companyReasons = [
  "Professional B2B project experience",
  "Custom solutions for each business need",
  "Reliable material and quality standards",
  "Focused, on-time project delivery",
  "Competitive pricing and cost control",
  "Skilled technical and design team"
];

const serviceHighlights = [
  {
    num: "01",
    title: "Ceiling Décor",
    desc: "Supply and installation of certified stretch ceilings (CL-01 to CL-06), moisture-resistant membranes, reflect Eco Blocks, and LED lighting."
  },
  {
    num: "02",
    title: "Partitions & Walls",
    desc: "Galvanized C-line steel framing, doors and windows, feature backdrops, service counters, and commercial floor carpeting."
  },
  {
    num: "03",
    title: "Interior & Furniture",
    desc: "Office cabinetry, executive fittings, conference hall fit-outs, and durable workplace furniture."
  }
];

const selectedProjects = [
  { name: "Ministry of Economy and Finance", acronym: "MEF", scope: "Finishing Décor" },
  { name: "Ministry of Justice", acronym: "MOJ", scope: "Finishing Décor" },
  { name: "Commercial Building", acronym: "CB", scope: "Finishing Décor" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <SiteHeader />

      {/* Pristine Light Header */}
      <section className="bg-neutral-50/80 border-b border-neutral-200 py-10 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <FadeInMotion className="max-w-3xl">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">
              ABOUT KMD DÉCOR
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-950 tracking-tight">
              Commercial Fit-Out & Material Supply
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light leading-relaxed max-w-2xl">
              KMD Décor creates modern, practical, and high-quality interiors for businesses across Phnom Penh. From material supply to complete fit-out work, we help every commercial space perform beautifully.
            </p>
          </FadeInMotion>
        </div>
      </section>

      {/* Overview & Image Banner */}
      <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <FadeInMotion delay={0.1}>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
              COMMERCIAL FIT-OUT PARTNER
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight">
              Your Dependable Project Partner
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              We work with companies, developers, retailers, restaurants, hotels, offices, and construction firms to deliver interiors that balance brand presence, daily operations, and long-term value.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {companyReasons.map((reason) => (
                <div key={reason} className="flex items-center gap-2 text-xs text-neutral-700 font-light">
                  <Check className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </FadeInMotion>

          <FadeInMotion delay={0.2} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 shadow-xs">
            <Image
              alt="KMD Decor Commercial Interior Fit-Out Showcase"
              src={heroKmdAsset}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </FadeInMotion>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="border-t border-neutral-200 bg-neutral-50/60 py-12 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <FadeInMotion className="max-w-xl mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
              OUR CAPABILITIES
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight">
              Services & Scope
            </h2>
          </FadeInMotion>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceHighlights.map((s, idx) => (
              <FadeInMotion key={s.num} delay={idx * 0.1} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md">
                <div>
                  <span className="font-mono text-xs font-bold text-brand-accent">{s.num}</span>
                  <h3 className="mt-2 font-serif text-xl font-normal text-neutral-950">{s.title}</h3>
                  <p className="mt-2 text-xs text-neutral-500 font-light leading-relaxed">{s.desc}</p>
                </div>
                <Link className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-950 hover:text-brand-accent transition" href="/services">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </FadeInMotion>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mx-auto max-w-screen-2xl px-4 py-12 md:px-8">
        <FadeInMotion className="max-w-xl mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">
            PROJECT REFERENCES
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight">
            Selected Landmarks
          </h2>
        </FadeInMotion>

        <div className="grid gap-6 sm:grid-cols-3">
          {selectedProjects.map((p, idx) => (
            <FadeInMotion key={p.acronym} delay={idx * 0.1} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between font-mono text-xs mb-3">
                <span className="font-bold text-brand-accent">{p.acronym}</span>
                <span className="text-neutral-400">Phnom Penh</span>
              </div>
              <h3 className="font-serif text-lg font-normal text-neutral-950">{p.name}</h3>
              <p className="mt-1 text-xs text-neutral-500 font-light">{p.scope}</p>
            </FadeInMotion>
          ))}
        </div>
      </section>

      {/* Studio Location Banner */}
      <section className="mx-auto max-w-screen-2xl px-4 pb-12 md:px-8">
        <FadeInMotion className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent">STUDIO & WAREHOUSE</span>
            <h3 className="mt-1 font-serif text-xl sm:text-2xl font-normal text-neutral-950">#54, St. 590, Toul Kork, Phnom Penh</h3>
            <p className="mt-1 text-xs text-neutral-500 font-light flex items-center gap-3">
              <span>Phone: <a href="tel:+85516927683" className="font-mono text-neutral-900 font-medium">+855 16 927 683</a></span>
              <span>Telegram: <a href="https://t.me/kmddecor" target="_blank" rel="noopener noreferrer" className="font-mono text-neutral-900 font-medium">@kmddecor</a></span>
            </p>
          </div>
          <Link
            className="bg-neutral-900 text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition duration-200 whitespace-nowrap shadow-xs inline-flex items-center gap-1.5"
            href="/contact"
          >
            <span>Contact Studio</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </FadeInMotion>
      </section>

      <SiteFooter />
    </main>
  );
}
