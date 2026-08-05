import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { ProductCatalog } from "@/components/products/product-catalog";
import { getCatalogCategories, getCatalogProducts } from "@/lib/api-catalog";
import type { ProductItem } from "@/lib/homepage-data";
import Link from "next/link";
import { ArrowUpRight, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Products & Material Supply — KMD Decor",
  description: "Certified ceiling boards (CL-01 to CL-06), C-Line steel framing, gypsum boards, and commercial partition materials in Phnom Penh, Cambodia.",
};

const availability = ["In stock", "Preorder", "Low stock"] satisfies ProductItem["stockStatus"][];

export default async function ProductsPage() {
  const [products, apiCategories] = await Promise.all([
    getCatalogProducts(),
    getCatalogCategories(),
  ]);
  const brands = Array.from(new Set(products.map((product) => product.brand)));
  const categories = apiCategories.length > 0 ? apiCategories : Array.from(new Set(products.map((product) => product.category)));

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-brand-accent selection:text-white">
      <SiteHeader />

      {/* Pristine Clean Header */}
      <section className="bg-neutral-50/80 border-b border-neutral-200 py-10 md:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-accent mb-2">
                KMD DÉCOR — MATERIAL SUPPLY
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
                Interior & Fit-Out Materials
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light max-w-lg">
                Certified stretch ceilings (CL-01 to CL-06), C-Line steel framing, gypsum boards, and partition supplies in Phnom Penh.
              </p>
            </div>
            <div>
              <Link
                className="bg-neutral-900 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                href="/contact"
              >
                <span>Get Material Rates</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Component */}
      <ProductCatalog availability={availability} brands={brands} categories={categories} products={products} />

      {/* Bottom Material Supply Consultation Banner */}
      <section className="bg-brand-primary text-white py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-accent">
            Bulk Supply & Project Schedules
          </span>
          <h2 className="mt-4 font-serif text-3xl font-normal sm:text-4xl text-white">
            Need Bulk Material Pricing?
          </h2>
          <p className="mt-3 text-sm text-neutral-200 font-light leading-relaxed">
            Send your material schedule or BOQ list. Our engineering supply team in Phnom Penh provides priority material availability and wholesale B2B pricing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="bg-brand-accent text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition-all duration-200 inline-flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              href="/contact"
            >
              <span>Upload Project BOQ</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              className="border border-white/30 text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-white/10 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              href="https://t.me/kmddecor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneCall className="h-4 w-4 text-brand-accent" />
              <span>Telegram: @kmddecor</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
