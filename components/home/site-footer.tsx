"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import kmdLogo from "@/resource/kmd-logo.png";

export function SiteFooter() {
  const { text } = useLanguage();

  const socialLinks = [
    {
      name: "Telegram",
      href: "https://t.me/+85516927683",
      hoverClass: "hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.27-2.04-.49-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.45 3.81-1.59 4.6-1.87 5.12-1.88.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07.01.23 0 .37z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      hoverClass: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      hoverClass: "hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      hoverClass: "hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        
        {/* Upper Row — Brand & Socials */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div>
            <a className="inline-flex items-center gap-3" href="/">
              <Image alt="Decor logo" className="h-8 w-auto object-contain" loading="lazy" src={kmdLogo} width={32} height={32} />
              <span className="font-serif text-2xl font-bold text-neutral-950">{text("Decor", "តុបតែង")}</span>
            </a>
            <p className="mt-2 text-xs text-neutral-500 font-light max-w-md">
              {text(
                "Commercial decoration, interior fit-out & building material supply in Phnom Penh.",
                "សេវាកម្មតុបតែងពាណិជ្ជកម្ម ការតុបតែងផ្ទៃក្នុង និងការផ្គត់ផ្គង់សម្ភារៈសំណង់នៅភ្នំពេញ។"
              )}
            </p>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
              {text("CONNECT", "ទំនាក់ទំនង")}:
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  className={`grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 shadow-sm transition-all duration-200 ${item.hoverClass}`}
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Row — Contact Line & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand-accent shrink-0" />
              <span>#54, St. 590, Toul Kork, Phnom Penh</span>
            </div>
            <a className="flex items-center gap-2 transition hover:text-brand-primary" href="tel:+85516927683">
              <Phone className="h-3.5 w-3.5 text-brand-primary shrink-0" />
              <span className="font-medium">+855 16 92 76 83</span>
            </a>
          </div>

          <div className="text-neutral-400 font-mono text-[11px]">
            © 2026 KMD Decor. {text("All rights reserved.", "រក្សាសិទ្ធិគ្រប់យ៉ាង។")}
          </div>
        </div>

      </div>
    </footer>
  );
}
