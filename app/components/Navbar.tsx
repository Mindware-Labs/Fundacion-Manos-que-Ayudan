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
            className={`relative flex h-[72px] items-center justify-between overflow-hidden rounded-lg border px-4 transition-all duration-500 ${
              scrolled
                ? "border-[#dce5f2] bg-white/90 shadow-xl shadow-[#061e5c]/10 backdrop-blur-2xl"
                : "border-white/70 bg-white/80 shadow-lg shadow-[#061e5c]/10 backdrop-blur-xl"
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#dce5f2]"
            />

            <Link
              href="/"
              className="group relative flex min-w-0 shrink-0 items-center gap-3"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-[#061e5c]/10 transition-all duration-300 group-hover:ring-[#f8b133]/50">
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
                  <span className="block text-[11px] font-extrabold uppercase leading-none text-[#6b7280]">
                  Fundación
                </span>
                <span className="mt-1.5 block truncate text-lg font-extrabold leading-none text-[#061e5c]">
                  Manos que Ayudan
                </span>
              </span>
            </Link>

            <div className="relative hidden items-center gap-1 rounded-lg border border-[#dce5f2] bg-white/75 p-1 shadow-inner shadow-[#061e5c]/[0.03] lg:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative rounded-md px-3.5 py-2 text-[13px] font-extrabold transition-all duration-300 ${
                      isActive
                        ? "bg-[#061e5c] text-white shadow-md shadow-[#061e5c]/20"
                        : "text-[#36425a] hover:bg-[#f1f7fe] hover:text-[#061e5c]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <a
              href="#contacto"
              className="hidden items-center gap-2 rounded-md bg-[#f8b133] px-5 py-2.5 text-sm font-extrabold text-[#061e5c] shadow-md shadow-[#f8b133]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d79a27] active:translate-y-0 active:scale-[0.98] lg:inline-flex"
            >
              <svg
                className="h-4 w-4"
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
              Contáctanos
            </a>

            <button
              className="relative flex h-11 w-11 items-center justify-center rounded-md bg-white text-[#061e5c] shadow-sm ring-1 ring-[#061e5c]/10 transition active:scale-95 lg:hidden"
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
        className={`fixed inset-0 z-40 bg-[#061e5c]/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-[#f8fafe] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#dce5f2] px-6 py-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-[#061e5c]/10">
              <Image
                src="/logo.png"
                alt="Fundación Manos que Ayudan"
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-extrabold uppercase leading-none text-[#6b7280]">
                Fundación
              </p>
              <p className="mt-1.5 truncate text-lg font-extrabold leading-none text-[#061e5c]">
                Manos que Ayudan
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#f1f7fe] text-[#061e5c] transition active:scale-95"
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
          <p className="px-3 text-[11px] font-extrabold uppercase text-[#7b8794]">
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
                    className={`flex items-center justify-between rounded-md px-4 py-3.5 font-extrabold transition duration-200 ${
                      isActive
                        ? "bg-[#061e5c] text-white shadow-md shadow-[#061e5c]/20"
                        : "text-[#061e5c] hover:bg-[#f1f7fe]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className={`w-6 shrink-0 text-xs ${
                          isActive ? "text-[#f8b133]" : "text-[#b7c0cc]"
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

        <div className="border-t border-[#dce5f2] p-5">
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-md bg-[#f8b133] px-6 py-3.5 text-sm font-extrabold text-[#061e5c] shadow-md shadow-[#f8b133]/20 transition active:scale-[0.98]"
          >
            <svg
              className="h-4 w-4"
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
            Contáctanos
          </a>
        </div>
      </aside>
    </>
  );
}
