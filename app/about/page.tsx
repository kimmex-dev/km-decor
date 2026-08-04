import { ArrowRight, Building2, Check, MapPin, Phone, Ruler, Sparkles, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { services } from "@/lib/homepage-data";
import heroKmdAsset from "@/public/hero-kmd.avif";

export const metadata = {
  title: "About KMD Décor",
  description: "KMD Décor provides commercial interior fit-out, ceiling, partition, and furniture solutions in Phnom Penh, Cambodia."
};

const companyFacts = [
  { value: "B2B", label: "Project focus" },
  { value: "03", label: "Core services" },
  { value: "Phnom Penh", label: "Based in" }
];

const sectors = ["Commercial offices", "Developers", "Hotels", "Restaurants", "Retail spaces", "Construction firms"];

const reasons = [
  "Professional B2B project experience",
  "Custom solutions for each business need",
  "Reliable material and quality standards",
  "Focused, on-time project delivery",
  "Competitive pricing and cost control",
  "Skilled technical and design team"
];

const workingPrinciples = [
  {
    Icon: Ruler,
    number: "01",
    title: "Define the brief",
    copy: "Bring together your space, desired finish, timeline, and practical project requirements."
  },
  {
    Icon: WalletCards,
    number: "02",
    title: "Shape the solution",
    copy: "Match the scope and materials to the way your business needs the space to work."
  },
  {
    Icon: Sparkles,
    number: "03",
    title: "Deliver the finish",
    copy: "Coordinate the fit-out with attention to finish quality, clarity, and cost control."
  }
];

const projectReferences = [
  { name: "Ministry of Economy and Finance", acronym: "MEF" },
  { name: "Ministry of Justice", acronym: "MOJ" },
  { name: "Commercial Building", acronym: "CB" }
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="border-b border-sand-400 bg-sand-50">
        <div className="content-shell grid gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-12 xl:gap-12">
          <div className="flex max-w-2xl flex-col justify-center py-4 lg:py-8">
            <p className="eyebrow">About KMD Décor</p>
            <h1 className="mt-3 font-serif text-5xl leading-[1.02] text-ink-900 md:text-6xl xl:text-7xl">
              Spaces made to work beautifully for business.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink-700 md:text-lg">
              KMD Décor provides complete interior fit-out solutions for commercial environments—balancing a considered
              visual finish with the practical needs of everyday operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="action-commerce gap-2" href="/contact">
                Discuss a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="action-secondary" href="/portfolio">
                Explore our work
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-sand-400 bg-ink-900 shadow-panel md:min-h-[540px]">
            <Image
              alt="KMD Décor commercial fit-out"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              src={heroKmdAsset}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-white/20 bg-black/30 backdrop-blur-sm">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="min-w-0 border-r border-white/20 p-4 text-white last:border-r-0 md:p-5">
                  <p className="truncate font-serif text-lg leading-tight md:text-2xl">{fact.value}</p>
                  <p className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/65 md:text-[0.65rem]">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start xl:gap-16">
          <div>
            <p className="eyebrow">Your fit-out partner</p>
            <h2 className="section-title">From a clear brief to a finished commercial space.</h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-ink-900 md:text-2xl">
              We work with companies, developers, retailers, restaurants, hotels, offices, and construction firms to
              create interiors that support their brand, people, and daily operations.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-ink-700">
              Our team combines design expertise with practical project coordination, keeping timelines, cost control,
              material quality, and professional execution in view from the beginning.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <span key={sector} className="rounded-full border border-sand-400 bg-sand-50 px-4 py-2 text-sm font-medium text-ink-700">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-sand-400 bg-sand-200/55">
        <div className="section-shell">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="section-title">Complete interior solutions, clearly organised.</h2>
            </div>
            <Link className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink-900 transition hover:text-brand-red" href="/services">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid overflow-hidden rounded-lg border border-sand-400 bg-white lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                className="group flex min-h-[310px] flex-col border-b border-sand-400 p-6 transition hover:bg-sand-50 lg:border-b-0 lg:border-r lg:last:border-r-0"
                href={service.href}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold tracking-[0.16em] text-brand-red">0{index + 1}</span>
                  <ArrowRight className="h-4 w-4 text-ink-700 transition group-hover:translate-x-1 group-hover:text-brand-red" />
                </div>
                <h3 className="mt-8 font-serif text-3xl leading-tight text-ink-900">{service.title.replace(/^\d+\.\s*/, "").replace(/\s*\(Supply & Install\)$/, "")}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-700">{service.description}</p>
                <p className="mt-auto pt-7 text-sm font-semibold text-ink-900">Explore service scope</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start xl:gap-16">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">A practical route from idea to installation.</h2>
          </div>
          <div className="grid overflow-hidden rounded-lg border border-sand-400 bg-white md:grid-cols-3">
            {workingPrinciples.map(({ Icon, copy, number, title }) => (
              <article key={number} className="border-b border-sand-400 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-brand-red" />
                  <span className="text-xs font-semibold tracking-[0.14em] text-ink-700">{number}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl leading-tight text-ink-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/55">Why KMD Décor</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">A dependable partner for commercial projects.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
              The details that matter to a business project stay central: clear coordination, appropriate materials,
              quality standards, and value-conscious execution.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-3 bg-ink-900 p-5 text-sm font-medium leading-6 text-white/85">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Selected experience</p>
          <h2 className="section-title">Fit-out experience across Phnom Penh.</h2>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-sand-400 bg-white md:grid-cols-3">
          {projectReferences.map((project) => (
            <article key={project.acronym} className="group relative min-h-56 border-b border-sand-400 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <Building2 className="h-5 w-5 text-brand-red" />
              <p className="absolute right-6 top-6 text-xs font-semibold tracking-[0.16em] text-ink-700">{project.acronym}</p>
              <h3 className="mt-12 max-w-xs font-serif text-2xl leading-tight text-ink-900">{project.name}</h3>
              <div className="mt-5 flex items-center gap-2 text-sm text-ink-700">
                <MapPin className="h-4 w-4 text-brand-red" /> Phnom Penh
              </div>
              <p className="mt-2 text-sm font-semibold text-ink-900">Finishing décor</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-shell pb-12 lg:pb-16">
        <div className="grid gap-8 rounded-lg border border-sand-400 bg-sand-50 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-red">
              <MapPin className="h-4 w-4" /> Toul Kork, Phnom Penh
            </div>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink-900">Let’s shape a space that works for your business.</h2>
            <a className="mt-4 inline-flex items-center gap-2 text-sm text-ink-700 transition hover:text-brand-red" href="tel:+85516927683">
              <Phone className="h-4 w-4" /> +855 16 927 683
            </a>
          </div>
          <Link className="action-commerce w-fit gap-2 whitespace-nowrap" href="/contact">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
