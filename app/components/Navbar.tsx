"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#labor", label: "Labor" },
  { href: "#ayudas", label: "Ayudas" },
  { href: "#galeria", label: "Galería" },
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

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));

    const computeActive = () => {
      const probeY = 110;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      if (Math.ceil(scrollY + viewportH) >= docH - 2) {
        setActive(`#${ids[ids.length - 1]}`);
        return;
      }

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setActive(`#${id}`);
          return;
        }
      }

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
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? "pt-2.5" : "pt-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex h-[72px] items-center justify-between overflow-hidden rounded-2xl border px-4 transition-all duration-500 ${
              scrolled
                ? "border-white/70 bg-white/85 shadow-2xl shadow-[#06153d]/15 backdrop-blur-2xl"
                : "border-white/50 bg-white/70 shadow-xl shadow-[#06153d]/10 backdrop-blur-xl"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#45B8E8]/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#F5A52B]/10 blur-2xl"
            />

            <Link
              href="/"
              className="group relative flex min-w-0 shrink-0 items-center gap-3"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#F6F8FC] shadow-md shadow-[#1B2D6B]/10 ring-1 ring-[#1B2D6B]/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#F5A52B]/20 group-hover:ring-[#F5A52B]/40">
                <Image
                  src="/logo.png"
                  alt="Fundación Manos que Ayudan"
                  width={44}
                  height={44}
                  className="h-10 w-10 object-contain"
                  preload
                />
              </span>
              <span className="hidden min-w-0 sm:block">
                <span className="flex items-center gap-1.5">
                  <span className="block text-[11px] font-black uppercase tracking-[0.18em] leading-none text-[#1B2D6B]/70">
                    Fundación
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[#F5A52B]"
                  />
                </span>
                <span
                  className="mt-1.5 block truncate text-xl leading-none text-[#F5A52B]"
                  style={{ fontFamily: "var(--font-dancing)", fontWeight: 700 }}
                >
                  Manos que Ayudan
                </span>
              </span>
            </Link>

            <div className="relative hidden items-center gap-0.5 rounded-2xl border border-[#1B2D6B]/8 bg-gradient-to-b from-white/80 to-[#F6F8FC]/80 p-1 shadow-inner shadow-[#1B2D6B]/[0.03] lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-xl px-3.5 py-2 text-[13px] font-black tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[#1B2D6B]/80 hover:text-[#1B2D6B]"
                    }`}
                  >
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1B2D6B] to-[#243879] shadow-lg shadow-[#1B2D6B]/30"
                      />
                    )}
                    <span className="relative">{link.label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#F5A52B]"
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#contacto"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#F5A52B] via-[#F5A52B] to-[#E89518] px-5 py-2.5 text-sm font-black text-[#10235f] shadow-lg shadow-[#F5A52B]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#F5A52B]/40 lg:inline-flex"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <svg
                className="relative h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a2.5 2.5 0 0 0 2.5-2.5v-9M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5M3 7.5l9 6 9-6"
                />
              </svg>
              <span className="relative">Contáctanos</span>
            </a>

            <button
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#F3F6FB] text-[#1B2D6B] shadow-md shadow-[#1B2D6B]/10 ring-1 ring-[#1B2D6B]/10 transition active:scale-95 lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isOpen}
              aria-controls="mobile-sidebar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-[#06153d]/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-gradient-to-b from-white via-white to-[#F6F8FC] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-[#F6F8FC] shadow-md ring-1 ring-[#1B2D6B]/10">
              <Image
                src="/logo.png"
                alt="Fundación Manos que Ayudan"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] leading-none text-[#1B2D6B]/70">
                Fundación
              </p>
              <p
                className="mt-1.5 truncate text-xl leading-none text-[#F5A52B]"
                style={{ fontFamily: "var(--font-dancing)", fontWeight: 700 }}
              >
                Manos que Ayudan
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F3F6FB] text-[#1B2D6B] transition active:scale-95"
            aria-label="Cerrar menú"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-3 text-[11px] font-black uppercase tracking-[0.18em] text-gray-400">
            Navegación
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-black transition duration-200 ${
                      isActive
                        ? "bg-gradient-to-br from-[#1B2D6B] to-[#243879] text-white shadow-lg shadow-[#1B2D6B]/25"
                        : "text-[#1B2D6B] hover:bg-[#F3F6FB]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className={`w-6 shrink-0 text-xs ${
                          isActive ? "text-[#F5A52B]" : "text-gray-300"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span className="truncate">{link.label}</span>
                    </span>
                    <svg
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive ? "text-white" : "opacity-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
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

        <div className="border-t border-gray-100 p-5">
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#F5A52B] via-[#F5A52B] to-[#E89518] px-6 py-3.5 text-sm font-black text-[#10235f] shadow-lg shadow-[#F5A52B]/30 transition active:scale-[0.98]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <svg
              className="relative h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.4}
                d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13a2.5 2.5 0 0 0 2.5-2.5v-9M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5M3 7.5l9 6 9-6"
              />
            </svg>
            <span className="relative">Contáctanos</span>
          </a>
        </div>
      </aside>
    </>
  );
}
