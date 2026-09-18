"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cta, nav } from "@/content/site";
import { Button } from "./ui/button";
import { ChevronDown } from "./ui/icon";
import { Logo } from "./ui/logo";
import { Container } from "./ui/primitives";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/92 backdrop-blur-lg"
          : "border-b border-white/5 bg-navy-950/70 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo tone="light" showTagline size={38} />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const children = "children" in item ? item.children : undefined;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => children && setOpenGroup(item.label)}
                onMouseLeave={() => children && setOpenGroup(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-[13.5px] font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  {children && (
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        openGroup === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {children && (
                  <div
                    className={`absolute top-full left-0 w-[268px] pt-3 transition-all duration-200 ${
                      openGroup === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl border border-ice-200 bg-white p-1.5 shadow-[0_24px_60px_-18px_rgba(5,14,29,0.45)]">
                      {children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-ink-700 transition-colors hover:bg-ice-100 hover:text-brand-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* wrapper owns the responsive display — putting `hidden` on the
              Button itself collides with the `inline-flex` in its base styles */}
          <span className="hidden sm:block">
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-[2px] w-full rounded bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-[2px] w-full rounded bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-full rounded bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-950 transition-[max-height] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          menuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <Container className="flex flex-col gap-1 py-5">
          {nav.map((item) => {
            const children = "children" in item ? item.children : undefined;
            return (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
                {children && (
                  <div className="mb-1 ml-3 flex flex-col border-l border-white/10 pl-3">
                    {children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-md px-2 py-2 text-[13.5px] text-white/60 transition-colors hover:text-brand-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="mt-3 sm:hidden">
            <Button href="/contact" size="lg" className="w-full">
              {cta.primary.label}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
