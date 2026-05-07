"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#labor", label: "Nuestra Labor" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking — pick the section whose body contains a probe
  // line just below the navbar. Always resolves to exactly one section.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const computeActive = () => {
      const probeY = 110; // viewport y just below the navbar
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // At the very bottom of the page → last section (footer/contact may be
      // shorter than the probe distance from viewport bottom).
      if (Math.ceil(scrollY + viewportH) >= docH - 2) {
        setActive(`#${ids[ids.length - 1]}`);
        return;
      }

      // 1) Section whose bounds straddle the probe line.
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setActive(`#${id}`);
          return;
        }
      }

      // 2) Fallback when there's a gap between sections — pick the closest.
      let bestId = ids[0];
      let bestDistance = Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance =
          rect.top > probeY ? rect.top - probeY : probeY - rect.bottom;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      }
      setActive(`#${bestId}`);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  // Lock body scroll while sidebar is open + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(27,45,107,0.25)] border-b border-[#1B2D6B]/5"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Fundación Manos que Ayudan"
                width={200}
                height={72}
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-11" : "h-14"
                } group-hover:scale-[1.03]`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-[#F3F4F6]/60 rounded-full p-1.5 backdrop-blur-sm">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-white bg-[#1B2D6B] shadow-md shadow-[#1B2D6B]/20"
                        : "text-[#1B2D6B] hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contacto"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#F5A52B] to-[#E8342E] text-white font-extrabold px-6 py-2.5 rounded-full hover:scale-[1.04] transition-all duration-300 shadow-lg shadow-[#F5A52B]/30 hover:shadow-xl hover:shadow-[#E8342E]/30 text-sm overflow-hidden group"
              >
                <span className="relative z-10">Únete</span>
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2.5 rounded-2xl text-[#1B2D6B] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors shadow-sm active:scale-95"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="mobile-sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 7h16M4 12h16M4 17h10"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Sidebar ─── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-[#1B2D6B]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Image
            src="/logo.png"
            alt="Fundación Manos que Ayudan"
            width={180}
            height={64}
            className="h-11 w-auto object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl text-[#1B2D6B] bg-[#F3F4F6] hover:bg-[#E5E7EB] transition-colors active:scale-95"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-3 mb-3 text-[11px] font-black uppercase tracking-widest text-gray-400">
            Navegación
          </p>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-2xl transition-all duration-200 font-bold ${
                      isActive
                        ? "bg-[#1B2D6B] text-white shadow-md shadow-[#1B2D6B]/20"
                        : "text-[#1B2D6B] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`text-xs font-black w-6 ${
                          isActive ? "text-white/60" : "text-gray-300"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      {link.label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? "translate-x-0 text-white"
                          : "-translate-x-1 opacity-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="border-t border-gray-100 p-5 space-y-3">
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F5A52B] to-[#E8342E] text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-[#F5A52B]/25 hover:scale-[1.02] transition-transform"
          >
            Únete a la causa
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/fundacionmanosqueayudan22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-[#1B2D6B] text-sm font-bold py-2 hover:text-[#E8342E] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.333.014 8.741 0 12 0c3.259 0 3.668.014 4.948.072 4.354.2 6.782 2.618 6.979 6.98.059 1.28.073 1.689.073 4.948 0 3.259-.014 3.667-.072 4.947-.196 4.354-2.617 6.78-6.979 6.98C15.668 23.986 15.259 24 12 24c-3.259 0-3.667-.014-4.947-.072-4.354-.2-6.782-2.618-6.979-6.98C.014 15.667 0 15.259 0 12c0-3.259.014-3.668.072-4.948.2-4.358 2.618-6.78 6.98-6.98C8.333.014 8.741 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @fundacionmanosqueayudan22
          </a>
        </div>
      </aside>
    </>
  );
}
