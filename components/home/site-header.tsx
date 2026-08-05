"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  LogOut,
  Menu,
  PackageCheck,
  Search,
  ShoppingBag,
  UserRound,
  X
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { LanguageSwitcher, useLanguage } from "@/components/language-provider";
import { readCart } from "@/lib/cart-store";
import { useAuth } from "@/lib/auth-context";
import kmdLogo from "@/resource/kmd-logo.png";

const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const khmerNav: Record<string, string> = {
  Services: "សេវាកម្ម",
  Portfolio: "ស្នាដៃ",
  Products: "ផលិតផល",
  About: "អំពីយើង",
  Contact: "ទំនាក់ទំនង"
};

const searchSuggestions = ["gypsum board", "partition", "ceiling", "smart lock"];

function isCurrentRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const { text } = useLanguage();
  const { user, isAuthenticated, clearAuth } = useAuth();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const closeCart = useCallback(() => setCartOpen(false), []);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileDialogRef = useRef<HTMLDivElement>(null);
  const userInitial = user?.name?.trim().charAt(0).toUpperCase() || user?.email?.trim().charAt(0).toUpperCase() || "U";

  const handleSignOut = useCallback(() => {
    clearAuth();
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
    setSearchOpen(false);

    if (pathname.startsWith("/account") || pathname.startsWith("/orders") || pathname === "/checkout") {
      window.location.href = "/login";
    }
  }, [clearAuth, pathname]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncCartCount = () => {
      setCartCount(readCart().reduce((count, item) => count + item.quantity, 0));
    };

    syncCartCount();
    window.addEventListener("kmd-cart-updated", syncCartCount);
    window.addEventListener("storage", syncCartCount);

    return () => {
      window.removeEventListener("kmd-cart-updated", syncCartCount);
      window.removeEventListener("storage", syncCartCount);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAccountMenuOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = mobileDialogRef.current;
    const focusableSelector = "a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])";
    const focusableElements = () => Array.from(dialog?.querySelectorAll<HTMLElement>(focusableSelector) ?? []);
    const focusTimer = window.setTimeout(() => focusableElements()[0]?.focus(), 0);

    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const elements = focusableElements();
      if (elements.length === 0) return;
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleDialogKeyDown);
      (previousFocus ?? mobileMenuButtonRef.current)?.focus();
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!searchOpen && !accountMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
      if (event.key === "Escape") setAccountMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [accountMenuOpen, searchOpen]);

  useEffect(() => {
    if (!accountMenuOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!accountMenuRef.current?.contains(event.target as Node)) {
        setAccountMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", closeOnOutsideClick);

    return () => window.removeEventListener("mousedown", closeOnOutsideClick);
  }, [accountMenuOpen]);

  return (
    <>
      {/* Pristine Modern Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-sm text-neutral-900 transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          
          {/* Brand Logo */}
          <Link className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg" href="/" aria-label="KMD Decor Home">
            <Image alt="KMD Decor logo" className="h-8 w-auto object-contain transition group-hover:opacity-80" priority src={kmdLogo} width={32} height={32} />
            <span className="font-serif text-xl font-bold text-neutral-950 tracking-tight">{text("Decor", "តុបតែង")}</span>
          </Link>

          {/* Clean Center Navigation Links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => {
              const isActive = isCurrentRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-sm ${
                    isActive
                      ? "text-brand-accent font-bold"
                      : "text-neutral-700 hover:text-neutral-950"
                  }`}
                  href={item.href}
                >
                  {text(item.label, khmerNav[item.label] || item.label)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div>
              <LanguageSwitcher />
            </div>

            <button
              aria-expanded={mobileMenuOpen}
              aria-label={text("Open navigation", "បើកម៉ឺនុយ")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:bg-neutral-100 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <Menu size={19} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          role="presentation"
        >
          <div
            ref={mobileDialogRef}
            aria-label="Mobile navigation"
            aria-modal="true"
            className="ml-auto flex h-full w-[min(85vw,360px)] flex-col bg-white border-l border-neutral-200"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
              <Link className="flex items-center gap-3" href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image alt="KMD Decor logo" className="h-8 w-auto object-contain" src={kmdLogo} width={32} height={32} />
                <span className="font-serif text-lg font-bold text-[#111827]">{text("KMD Decor", "KMD តុបតែង")}</span>
              </Link>
              <button
                aria-label={text("Close navigation", "បិទម៉ឺនុយ")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[#111827] transition hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
                type="button"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">{text("Navigation", "ម៉ឺនុយ")}</p>
              <nav className="grid gap-1" aria-label="Mobile main navigation">
                {mainNav.map((item, index) => {
                  const isActive = isCurrentRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between py-3 border-b border-neutral-100 text-sm font-semibold transition ${
                        isActive ? "text-[#111827]" : "text-neutral-600 hover:text-[#111827]"
                      }`}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-neutral-400">0{index + 1}</span>
                        <span>{text(item.label, khmerNav[item.label] || item.label)}</span>
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-neutral-100 bg-neutral-50 px-5 py-4">
              <LanguageSwitcher variant="panel" />
            </div>
          </div>
        </div>
      ) : null}

      <CartDrawer onClose={closeCart} open={cartOpen} />
    </>
  );
}
