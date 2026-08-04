import { ArrowRight, CheckCircle2 } from "lucide-react";
import { blurPlaceholder } from "@/lib/blur-placeholder";
import Image from "next/image";
import Link from "next/link";
import heroKmdAsset from "@/public/hero-kmd.jpeg";

export function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-b border-neutral-100">
      <div className="content-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        
        {/* Left Column: Spacious Typography & Proof Row */}
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
            KMD DECOR
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.15] tracking-tight">
            Commercial Fit-Out & Interior Decor
          </h1>

          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            Complete ceiling, partition, and interior solutions for commercial spaces in Phnom Penh.
          </p>

          {/* Clean Non-Redundant CTAs */}
          <div className="mt-8 flex items-center gap-6">
            <Link
              className="bg-black text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#991b1b] transition duration-200 rounded-full inline-flex items-center gap-2 shadow-sm"
              href="#services"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              className="text-xs font-semibold uppercase tracking-wider text-black hover:text-[#991b1b] transition inline-flex items-center gap-1"
              href="#portfolio"
            >
              <span>View Portfolio →</span>
            </Link>
          </div>

          {/* Quiet Trust Proof Row */}
          <div className="mt-10 border-t border-neutral-100 pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#991b1b]" />
              <span className="font-semibold text-black">30+ Commercial Fit-Outs</span>
            </div>
            <div className="h-3 w-px bg-neutral-200 hidden sm:block" />
            <div className="font-medium text-neutral-700">100% On-Time Handover</div>
            <div className="h-3 w-px bg-neutral-200 hidden sm:block" />
            <div className="text-neutral-500">Phnom Penh, KH</div>
          </div>
        </div>

        {/* Right Column: Architectural Photo Showcase with Glass Badge */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm group">
          <Image
            alt="KMD Decor Commercial Reception Fit-Out"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-102"
            src={heroKmdAsset}
            fill
            priority
            placeholder="blur"
            blurDataURL={blurPlaceholder(1600, 1000)}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Floating Subtle Glass Badge */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-white/10 text-xs font-medium">
            B2B Reception & Fit-Out Specialist
          </div>
        </div>

      </div>
    </section>
  );
}
