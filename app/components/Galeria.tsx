"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 0,
    label: "Donación de Medicamentos",
    title: "Mesa de Medicamentos e Insumos",
    description:
      "Una cuidadosa selección de medicinas y suministros médicos listos para ser distribuidos a comunidades necesitadas.",
    gradient: "linear-gradient(135deg, #DBEAFE 0%, #93C5FD 50%, #60A5FA 100%)",
    iconPath:
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0H5a2 2 0 00-2 2v4a2 2 0 002 2h4m0-6h10m0 0a2 2 0 012 2v4a2 2 0 01-2 2H9m4-6v6",
    iconColor: "#1e3a8a",
  },
  {
    id: 1,
    label: "Equipos de Movilidad",
    title: "Entrega de Sillas de Ruedas",
    description:
      "Devolviendo la independencia y movilidad a personas que más lo necesitan, con equipos de calidad donados.",
    gradient: "linear-gradient(135deg, #FEF9C3 0%, #FDE68A 50%, #FCD34D 100%)",
    iconPath:
      "M12 2a2 2 0 110 4 2 2 0 010-4zm-3 5h6a1 1 0 011 1v4h2a1 1 0 110 2h-2v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H8a1 1 0 110-2h2V8a1 1 0 011-1z",
    iconColor: "#78350f",
  },
  {
    id: 2,
    label: "Impacto Humano",
    title: "Sonrisas y Esperanza",
    description:
      "Cada encuentro con nuestros beneficiarios es una fuente de inspiración. Ver la alegría en sus rostros nos impulsa a seguir.",
    gradient: "linear-gradient(135deg, #FFE4E6 0%, #FCA5A5 50%, #F87171 100%)",
    iconPath:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconColor: "#7f1d1d",
  },
  {
    id: 3,
    label: "Alianzas Estratégicas",
    title: "Trabajando en Comunidad",
    description:
      "Nuestras alianzas estratégicas con hospitales, fundaciones y empresas multiplican el impacto, llegando a más familias.",
    gradient: "linear-gradient(135deg, #1B2D6B 0%, #2D4F9E 50%, #3A68C9 100%)",
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    iconColor: "rgba(255,255,255,0.7)",
  },
];

export default function Galeria() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const goTo = (i: number) => setCurrent(i);

  // Auto-play cada 5 s
  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="galeria" className="py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8342E]" />
            <span className="text-sm font-bold text-[#E8342E]">Galería</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1B2D6B] mb-4 leading-tight">
            Momentos de{" "}
            <span
              style={{
                fontFamily: "var(--font-dancing)",
                color: "#E8342E",
                fontSize: "1.05em",
              }}
            >
              Esperanza
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Galería en Movimiento — Cada imagen cuenta una historia de
            transformación.
          </p>
        </div>

        {/* ── Carrusel ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Viewport */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{ aspectRatio: "16 / 7" }}
          >
            {/* Track */}
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-full h-full relative flex items-center justify-center"
                  style={{ background: slide.gradient }}
                >
                  {/* Dot pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* Large background icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={slide.iconColor}
                      strokeWidth={0.4}
                      className="w-72 h-72 opacity-25"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={slide.iconPath}
                      />
                    </svg>
                  </div>

                  {/* Camera badge top-right */}
                  <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/30 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
                      <path
                        fillRule="evenodd"
                        d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15a5 5 0 110-10 5 5 0 010 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white text-xs font-bold">
                      Foto próximamente
                    </span>
                  </div>

                  {/* Slide counter top-left */}
                  <div className="absolute top-5 left-5 bg-white/30 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-black text-sm">
                      {slide.id + 1}/{slides.length}
                    </span>
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/65 to-transparent p-7">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-2">
                      <span className="text-white text-xs font-bold">
                        {slide.label}
                      </span>
                    </div>
                    <h3 className="text-white text-2xl font-black mb-1 drop-shadow">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ← Flecha izquierda (azul claro) */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 z-10"
              style={{ background: "#45B8E8" }}
              aria-label="Anterior"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* → Flecha derecha (amarillo cálido) */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 z-10"
              style={{ background: "#F5A52B" }}
              aria-label="Siguiente"
            >
              <svg
                className="w-7 h-7 text-white"
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
            </button>
          </div>

          {/* ── Puntos de paginación ── */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-3 bg-[#1B2D6B]"
                    : "w-3 h-3 bg-gray-300 hover:bg-[#45B8E8]"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>

          {/* ── Miniaturas ── */}
          <div className="flex gap-3 mt-5 justify-center">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`shrink-0 w-24 h-14 rounded-xl overflow-hidden transition-all duration-300 ${
                  i === current
                    ? "ring-2 ring-[#1B2D6B] ring-offset-2 scale-105"
                    : "opacity-55 hover:opacity-90"
                }`}
                style={{ background: slide.gradient }}
                aria-label={`Miniatura ${i + 1}`}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-0.5">
                  <span className="text-white text-xs font-black">{i + 1}</span>
                  <span className="text-white/70 text-[9px] font-semibold text-center leading-none px-1 truncate w-full">
                    {slide.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
