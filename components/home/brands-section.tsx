import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import type { HomeBrandItem } from "@/lib/api-home";
import kmdLogo from "@/resource/kmd-logo.png";
import kimmexLogo from "@/public/kimmex-logo.png";

type BrandsSectionProps = {
  brands: HomeBrandItem[];
};

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <section id="brands" className="bg-neutral-50/60 py-16 border-b border-neutral-100">
      <div className="content-shell">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-1">
              BRANDS & PARTNERS
            </p>
            <h2 className="font-serif text-2xl font-normal text-black tracking-tight">
              Official Group & Certified Material Partners
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
            <ShieldCheck className="h-4 w-4 text-[#991b1b]" />
            <span>Certified Construction & Fit-Out Supply</span>
          </div>
        </div>

        {/* Authentic Brand Partner Showcase Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 border-t border-neutral-200/80 pt-6">
          
          {/* Brand 1: KMD Decor */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-50 p-2">
              <Image alt="KMD Decor logo" className="h-7 w-auto object-contain" src={kmdLogo} width={28} height={28} />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-black">KMD Decor</strong>
              <span className="text-[11px] text-neutral-500">Fit-Out & Decoration</span>
            </div>
          </div>

          {/* Brand 2: Kim Mex Group */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-50 p-2">
              <Image alt="Kim Mex Construction logo" className="h-7 w-auto object-contain" src={kimmexLogo} width={28} height={28} />
            </div>
            <div>
              <strong className="block text-sm font-semibold text-black">Kim Mex Group</strong>
              <span className="text-[11px] text-neutral-500">Parent Construction</span>
            </div>
          </div>

          {/* Brand 3: Zeit Gypsum */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#991b1b]/10 text-[#991b1b] font-serif font-bold text-xs">
              ZEIT
            </div>
            <div>
              <strong className="block text-sm font-semibold text-black">Zeit Gypsum</strong>
              <span className="text-[11px] text-neutral-500">Ceiling & Wall Boards</span>
            </div>
          </div>

          {/* Brand 4: ISI Steel */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white font-mono font-bold text-xs">
              ISI
            </div>
            <div>
              <strong className="block text-sm font-semibold text-black">ISI Steel</strong>
              <span className="text-[11px] text-neutral-500">C-Line & Steel Frame</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
