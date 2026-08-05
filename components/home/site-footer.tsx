"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import kmdLogo from "@/resource/kmd-logo.png";

const exploreLinks = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" }
];

const customerLinks = [
  { label: "Account & Orders", href: "/account" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Shopping Cart", href: "/cart" }
];

const khmerFooterLinks: Record<string, string> = {
  Products: "ផលិតផល",
  Services: "សេវាកម្ម",
  Portfolio: "ស្នាដៃ",
  About: "អំពីយើង",
  "Account & Orders": "គណនី និងការបញ្ជាទិញ",
  Wishlist: "បញ្ជីចំណូលចិត្ត",
  "Shopping Cart": "កន្ត្រកទិញទំនិញ"
};

export function SiteFooter() {
  const { text } = useLanguage();
  return (
    <footer className="border-t border-neutral-100 bg-white pt-12 pb-16">
      <div className="content-shell">
        {/* Fast Track Quotation Banner */}
        <div className="bg-brand-primary text-white p-8 md:p-12 rounded-3xl mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 mb-2 block">
              FAST TRACK B2B QUOTATION
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal leading-tight">
              Get Priority BOQ Material Pricing
            </h3>
            <p className="mt-2 text-xs text-white/80 leading-relaxed">
              Have a floor plan or ceiling material list? Connect directly with our engineering team on Telegram for an instant quote.
            </p>
          </div>
          <a
            href="https://t.me/kmddecor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition duration-200 inline-flex items-center justify-center gap-2 shrink-0"
          >
            <MessageSquare className="h-4 w-4" />
            Instant Telegram Quote
          </a>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <a className="inline-flex items-center gap-3" href="/">
              <Image alt="KMD Decor logo" className="h-9 w-auto object-contain" loading="lazy" src={kmdLogo} width={36} height={36} />
              <span className="font-serif text-2xl font-bold text-black">{text("KMD Decor", "KMD តុបតែង")}</span>
            </a>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-500">
              {text("Commercial decoration, interior fit-out services, and building material supply for business spaces in Phnom Penh, Cambodia.", "សេវាកម្មតុបតែងពាណិជ្ជកម្ម ការតុបតែងផ្ទៃក្នុង និងការផ្គត់ផ្គង់សម្ភារៈសំណង់សម្រាប់អាជីវកម្មនៅភ្នំពេញ។")}
            </p>
            <a className="mt-6 bg-black text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition duration-200 inline-flex items-center gap-2 rounded-full" href="/contact">
              {text("Request Quote", "ស្នើសុំតម្លៃ")}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FooterLinks links={exploreLinks.map((link) => ({ ...link, label: text(link.label, khmerFooterLinks[link.label] || link.label) }))} title={text("Explore", "ស្វែងយល់")} />
            <FooterLinks links={customerLinks.map((link) => ({ ...link, label: text(link.label, khmerFooterLinks[link.label] || link.label) }))} title={text("Customer", "អតិថិជន")} />
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{text("Contact Studio", "ទំនាក់ទំនង")}</h2>
            <div className="mt-4 grid gap-3 text-xs leading-relaxed text-neutral-500">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                <span>#54, St. 590, Sangkat Boeung Kok II, Khan Toul Kork, Phnom Penh, Cambodia</span>
              </div>
              <a className="flex items-center gap-3 transition hover:text-black" href="tel:+85516927683">
                <Phone className="h-4 w-4 shrink-0 text-black" />
                <span>+855 16 92 76 83 / 087 777 560</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-6 mt-12 flex flex-col gap-2 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <span>© 2026 KMD Decor. {text("All rights reserved.", "រក្សាសិទ្ធិគ្រប់យ៉ាង។")}</span>
          <span>{text("Commercial Fit-Out & Material Supply", "ការតុបតែងពាណិជ្ជកម្ម និងសម្ភារៈ")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ links, title }: { links: Array<{ label: string; href: string }>; title: string }) {
  return (
    <div>
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{title}</h2>
      <nav className="mt-4 grid gap-2.5 text-xs text-neutral-500" aria-label={`${title} links`}>
        {links.map((link) => (
          <a key={link.href} className="w-fit transition hover:text-black" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
