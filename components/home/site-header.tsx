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
  { label: "About", href: "/about" }
];

const khmerNav: Record<string, string> = {
  Services: "សេវាកម្ម",
  Portfolio: "ស្នាដៃ",
  Products: "ផលិតផល",
  About: "អំពីយើង"
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
      {/* Pristine Single-Bar Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          
          {/* Brand Logo */}
          <Link className="group flex items-center gap-3 shrink-0" href="/" aria-label="KMD Decor Home">
            <Image alt="KMD Decor logo" className="h-8 w-auto object-contain transition group-hover:opacity-80" priority src={kmdLogo} width={32} height={32} />
            <span className="font-serif text-xl font-bold text-[#111827] tracking-tight">{text("KMD Decor", "KMD តុបតែង")}</span>
          </Link>

          {/* Clean Center Navigation Links */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {mainNav.map((item) => {
              const isActive = isCurrentRoute(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition relative py-1 ${
                    isActive
                      ? "text-[#111827] font-semibold"
                      : "text-neutral-600 hover:text-[#111827]"
                  }`}
                  href={item.href}
                >
                  {text(item.label, khmerNav[item.label] || item.label)}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#991b1b]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Language Switcher */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Search Trigger */}
            <button
              ref={mobileMenuButtonRef}
              aria-expanded={searchOpen}
              aria-label={text("Search products", "ស្វែងរកផលិតផល")}
              className={`p-2 text-neutral-600 hover:text-[#111827] transition rounded-full hover:bg-neutral-100 ${searchOpen ? "text-[#111827] bg-neutral-100" : ""}`}
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen((current) => !current);
              }}
              title={text("Search", "ស្វែងរក")}
              type="button"
            >
              <Search size={18} strokeWidth={2} />
            </button>

            {/* User Account */}
            {mounted && isAuthenticated ? (
              <div className="relative hidden lg:block" ref={accountMenuRef}>
                <button
                  aria-expanded={accountMenuOpen}
                  aria-haspopup="menu"
                  aria-label={text("Open account menu", "បើកម៉ឺនុយគណនី")}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-neutral-100 text-xs font-semibold text-[#111827] transition"
                  onClick={() => {
                    setSearchOpen(false);
                    setAccountMenuOpen((current) => !current);
                  }}
                  type="button"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#111827] text-white text-xs font-bold">{userInitial}</span>
                  <ChevronDown className={`h-3.5 w-3.5 text-neutral-500 transition ${accountMenuOpen ? "rotate-180" : ""}`} />
                </button>
                {accountMenuOpen ? (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg z-50 text-xs" role="menu">
                    <div className="p-2 border-b border-neutral-100 mb-1">
                      <strong className="block font-semibold text-[#111827]">{user?.name || text("Customer", "អតិថិជន")}</strong>
                      <small className="text-neutral-500 truncate block">{user?.email}</small>
                    </div>
                    <Link className="flex items-center gap-2 px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-[#111827] transition" href="/account" onClick={() => setAccountMenuOpen(false)} role="menuitem">
                      <UserRound size={15} />
                      <span>{text("Account dashboard", "ផ្ទាំងគណនី")}</span>
                    </Link>
                    <Link className="flex items-center gap-2 px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-[#111827] transition" href="/orders" onClick={() => setAccountMenuOpen(false)} role="menuitem">
                      <PackageCheck size={15} />
                      <span>{text("Orders", "ការបញ្ជាទិញ")}</span>
                    </Link>
                    <button className="flex w-full items-center gap-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition text-left mt-1" onClick={handleSignOut} role="menuitem" type="button">
                      <LogOut size={15} />
                      <span>{text("Sign out", "ចាកចេញ")}</span>
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Shopping Cart Drawer Trigger */}
            <button
              aria-label={cartCount > 0 ? text(`Cart with ${cartCount} items`, `កន្ត្រកមានទំនិញ ${cartCount} មុខ`) : text("Cart", "កន្ត្រក")}
              aria-expanded={cartOpen}
              aria-haspopup="dialog"
              className="relative p-2 text-neutral-600 hover:text-[#111827] transition rounded-full hover:bg-neutral-100"
              onClick={() => {
                setMobileMenuOpen(false);
                setCartOpen(true);
              }}
              title={text("Cart", "កន្ត្រក")}
              type="button"
            >
              <ShoppingBag size={18} strokeWidth={2} />
              {mounted && cartCount > 0 ? (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#991b1b] text-[9px] font-bold text-white px-1">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              ) : null}
            </button>

            {/* Sleek CTA Button */}
            <Link
              className="bg-[#111827] text-white px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#991b1b] transition duration-200 hidden sm:inline-flex items-center gap-1.5 ml-1"
              href="#contact"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Navigation Menu Toggle */}
            <button
              aria-expanded={mobileMenuOpen}
              aria-label={text("Open navigation", "បើកម៉ឺនុយ")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-[#111827] transition hover:bg-neutral-100 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <Menu size={19} strokeWidth={2} />
            </button>

          </div>
        </div>

        {/* Apple/Vercel Command Search Overlay */}
        {searchOpen ? (
          <div className="border-t border-neutral-100 bg-white py-4 px-6 shadow-sm">
            <div className="max-w-2xl mx-auto">
              <form action="/search" className="flex items-center gap-3 border-b border-[#111827] pb-2.5">
                <Search className="h-4.5 w-4.5 text-[#111827] shrink-0" />
                <label className="sr-only" htmlFor="header-product-search">{text("Search KMD Decor", "ស្វែងរក KMD Decor")}</label>
                <input
                  autoFocus
                  className="w-full bg-transparent text-sm text-[#111827] placeholder:text-neutral-400 focus:outline-none focus:ring-0 border-none p-0"
                  id="header-product-search"
                  name="q"
                  placeholder={text("Search products, services, or materials...", "ស្វែងរកផលិតផល សេវាកម្ម ឬសម្ភារៈ...")}
                  type="search"
                />
                <button className="text-xs font-semibold uppercase tracking-widest text-[#111827] hover:text-[#991b1b] transition shrink-0" type="submit">
                  {text("Search", "ស្វែងរក")}
                </button>
                <button aria-label={text("Close search", "បិទការស្វែងរក")} className="p-1 text-neutral-400 hover:text-[#111827] transition" onClick={() => setSearchOpen(false)} type="button">
                  <X size={18} />
                </button>
              </form>
              <div className="flex flex-wrap items-center gap-2.5 mt-3 text-xs text-neutral-400">
                <span className="font-medium text-neutral-500">{text("Popular:", "ពេញនិយម:")}</span>
                {searchSuggestions.map((suggestion) => (
                  <Link key={suggestion} className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 hover:bg-[#111827] hover:text-white transition text-[11px]" href={`/search?q=${encodeURIComponent(suggestion)}`} onClick={() => setSearchOpen(false)}>
                    {suggestion}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
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

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <Link
                  className="bg-[#111827] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#991b1b] transition duration-200 w-full flex items-center justify-center gap-2"
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Request Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
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
