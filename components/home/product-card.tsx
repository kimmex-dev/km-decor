"use client";

import type { ProductItem } from "@/lib/homepage-data";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: ProductItem;
  compact?: boolean;
  onOpenQuickView?: (product: ProductItem) => void;
};

export function ProductCard({ product, compact = false, onOpenQuickView }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md">
      {/* Visual Image Container */}
      <div 
        className={`relative block overflow-hidden rounded-xl bg-neutral-100 cursor-pointer ${compact ? "h-44" : "h-52"}`}
        onClick={() => onOpenQuickView?.(product)}
      >
        <Image
          alt={product.name}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={product.imageUrl}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute top-3 left-3 rounded-full bg-neutral-950/80 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white backdrop-blur-md z-10">
          {product.category}
        </span>

        {/* Quick Specs Hover Overlay */}
        <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/90 backdrop-blur-md text-neutral-950 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Eye className="h-3.5 w-3.5 text-brand-accent" />
            <span>Quick Specs</span>
          </span>
        </div>
      </div>

      {/* Tiny Clean Info Only (No Button) */}
      <div className="pt-3 pb-1 px-1">
        <h3 className="font-serif text-base font-normal text-neutral-950 truncate leading-snug">
          <button 
            onClick={() => onOpenQuickView?.(product)} 
            type="button" 
            className="text-left transition hover:text-brand-accent truncate block w-full"
          >
            {product.name}
          </button>
        </h3>
        
        <div className="mt-1 flex items-center justify-between font-mono text-[11px] text-neutral-500">
          <span>MOQ: {product.moq}</span>
          <span className="font-bold text-neutral-900">
            {product.price ? `$${product.price.toFixed(2)}` : "Supply Rate"}
          </span>
        </div>
      </div>
    </article>
  );
}
