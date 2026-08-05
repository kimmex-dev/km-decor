"use client";

import { ProductCard } from "@/components/home/product-card";
import type { ProductItem } from "@/lib/homepage-data";
import { ArrowUpRight, CheckCircle2, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ProductCatalogProps = {
  products: ProductItem[];
  categories: string[];
  brands: string[];
  availability: ProductItem["stockStatus"][];
};

export function ProductCatalog({ products, categories }: ProductCatalogProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeQuickViewProduct, setActiveQuickViewProduct] = useState<ProductItem | null>(null);

  // Close Quick View on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveQuickViewProduct(null);
    };
    if (activeQuickViewProduct) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeQuickViewProduct]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesQuery =
        !normalizedQuery ||
        [product.name, product.descriptor, product.brand, product.category, product.sku, ...product.specs]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [products, query, selectedCategory]);

  return (
    <section className="mx-auto max-w-screen-2xl px-4 pt-6 pb-16 md:px-8 md:pt-8 lg:pb-20" id="catalog">
      {/* Minimal Underline Filter Bar & Quiet Search */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-neutral-200">
        {/* Minimal Underline Category Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none pb-0.5">
          {["All", ...categories].map((catName) => {
            const isActive = selectedCategory === catName;
            return (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                type="button"
                className={`py-3 text-xs sm:text-sm transition-all duration-200 whitespace-nowrap border-b-2 ${
                  isActive
                    ? "border-neutral-950 text-neutral-950 font-medium"
                    : "border-transparent text-neutral-400 hover:text-neutral-950 font-normal"
                }`}
              >
                {catName === "All" ? "All Materials" : catName}
              </button>
            );
          })}
        </div>

        {/* Minimal Quiet Search */}
        <div className="relative pb-3 md:pb-0 min-w-[200px] sm:min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
          <input
            className="w-full rounded-full border border-neutral-200 bg-neutral-50/60 pl-8 pr-7 py-1.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:bg-white focus:outline-none transition"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            type="search"
            value={query}
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              type="button"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
            >
              <X className="h-3 w-3" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Spacious Clean Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOpenQuickView={(p) => setActiveQuickViewProduct(p)} 
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-12 text-center my-8">
          <h3 className="font-serif text-xl text-neutral-900 font-normal">No materials match your search.</h3>
          <p className="mt-2 text-xs text-neutral-500 max-w-md mx-auto font-light">
            Try selecting another category tab or clearing your search phrase.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setQuery("");
            }}
            type="button"
            className="mt-5 bg-neutral-900 text-white rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-brand-accent transition"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Quick Material Specification Modal */}
      {activeQuickViewProduct ? (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveQuickViewProduct(null)}
        >
          <div 
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all duration-300 border border-neutral-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition"
              type="button"
              aria-label="Close details"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid gap-6 sm:grid-cols-[200px_1fr] items-start">
              {/* Image Preview */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200">
                <Image
                  alt={activeQuickViewProduct.name}
                  src={activeQuickViewProduct.imageUrl}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Material Info */}
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase font-bold text-brand-accent mb-2">
                  <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 border border-neutral-200">{activeQuickViewProduct.category}</span>
                  <span className="text-neutral-400">SKU: {activeQuickViewProduct.sku}</span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-neutral-950 leading-tight">
                  {activeQuickViewProduct.name}
                </h3>

                <p className="mt-2 text-xs text-neutral-600 font-light leading-relaxed">
                  {activeQuickViewProduct.descriptor}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
                    <span className="block text-[10px] text-neutral-400 uppercase">MOQ</span>
                    <strong className="text-neutral-900">{activeQuickViewProduct.moq}</strong>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
                    <span className="block text-[10px] text-neutral-400 uppercase">Rate</span>
                    <strong className="text-neutral-900">{activeQuickViewProduct.price ? `$${activeQuickViewProduct.price.toFixed(2)}` : "Supply Rate"}</strong>
                  </div>
                </div>

                {/* Specs List */}
                <div className="mt-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">Key Specifications</h4>
                  <ul className="grid gap-1.5 text-xs text-neutral-700">
                    {activeQuickViewProduct.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    className="flex-1 bg-brand-accent text-white py-3 px-4 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-brand-accent-hover transition duration-200 flex items-center justify-center gap-1.5 shadow-md text-center"
                    href={`/contact?product=${encodeURIComponent(activeQuickViewProduct.href.replace("/products/", ""))}`}
                    onClick={() => setActiveQuickViewProduct(null)}
                  >
                    <span>Inquire This Item</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
