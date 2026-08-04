import { ArrowRight, PackageCheck } from "lucide-react";
import type { ProductItem } from "@/lib/homepage-data";
import { blurPlaceholder } from "@/lib/blur-placeholder";
import Image from "next/image";
import Link from "next/link";

type ProductShowcaseSectionProps = {
  products: ProductItem[];
};

const productGroups = [
  { label: "Gypsum Board", href: "/products?category=Gypsum%20Board" },
  { label: "Steel Framing", href: "/products?category=Cline%20%26%20Partition%20Frame" },
  { label: "Decor Panels", href: "/products?category=Decor%20Materials" },
  { label: "Sanitaryware", href: "/products?category=Sanitary%20Ware" }
];

function productSlug(product: ProductItem) {
  return product.href.replace("/products/", "");
}

export async function ProductShowcaseSection({ products }: ProductShowcaseSectionProps) {
  const featuredProducts = products.filter((product) => product.badge === "Best seller" || product.badge === "Featured").slice(0, 4);
  const displayProducts = featuredProducts.length >= 4 ? featuredProducts : products.slice(0, 4);

  return (
    <section className="bg-white py-20 border-b border-neutral-100" id="products">
      <div className="content-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
              BUILDING MATERIALS
            </p>
            <h2 className="font-serif text-3xl font-normal text-black leading-tight">
              Material Supply Catalog
            </h2>
          </div>
          <Link className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-black transition hover:text-neutral-500" href="/products">
            Full Catalog
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Minimal Category Strip */}
        <div className="flex flex-wrap items-center gap-6 border-b border-neutral-100 pb-4 mb-10">
          {productGroups.map((group) => (
            <Link
              key={group.label}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black transition"
              href={group.href}
            >
              {group.label}
            </Link>
          ))}
        </div>

        {/* Anvogue Rounded Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayProducts.map((product) => {
            const contactHref = `/contact?product=${encodeURIComponent(productSlug(product))}#request-form`;

            return (
              <article key={product.id} className="group flex flex-col justify-between rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition duration-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <Link className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100 mb-3" href={product.href}>
                    <Image
                      alt={product.name}
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                      src={product.imageUrl}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder()}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur">
                      {product.stockStatus}
                    </span>
                  </Link>

                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    <span>{product.brand}</span>
                    <span className="flex items-center gap-1 text-emerald-700">
                      <PackageCheck className="h-3 w-3" /> Certified
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-black group-hover:text-neutral-600 transition leading-snug">
                    <Link href={product.href}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-neutral-500 leading-relaxed">{product.customerGoal || product.descriptor}</p>
                </div>

                <div className="mt-4 border-t border-neutral-100 pt-3 flex items-center justify-between">
                  <div>
                    <span className="text-base font-bold text-black">${product.price.toFixed(2)}</span>
                    <span className="text-[11px] text-neutral-500"> / {product.unit}</span>
                  </div>
                  <Link className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition" href={contactHref}>
                    Request Quote
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
