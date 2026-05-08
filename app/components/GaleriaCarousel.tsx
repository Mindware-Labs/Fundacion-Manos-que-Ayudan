"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type GalleryImage = {
  number: number;
  src: string;
  alt: string;
  label: string;
  title?: string;
  description?: string;
  position?: string;
  fit?: "cover" | "contain";
  accent?: string;
};

type GaleriaCarouselProps = {
  images: GalleryImage[];
  aspectRatio?: string;
  showLabel?: boolean;
};

export default function GaleriaCarousel({
  images,
  aspectRatio = "aspect-[4/5] sm:aspect-[16/10]",
  showLabel = true,
}: GaleriaCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const active = total > 0 ? current % total : 0;

  const activeImage = useMemo(() => images[active], [active, images]);

  const prev = () => {
    if (total < 2) return;
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = () => {
    if (total < 2) return;
    setCurrent((c) => (c + 1) % total);
  };

  const goTo = (i: number) => {
    if (i < 0 || i >= total) return;
    setCurrent(i);
  };

  useEffect(() => {
    if (total < 2) return;

    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 6500);

    return () => clearInterval(timer);
  }, [total]);

  if (total === 0) {
    return (
      <div className="mx-auto max-w-5xl rounded-xl border border-dashed border-navy/25 bg-white px-6 py-16 text-center shadow-sm">
        <p className="font-extrabold text-navy">
          Agrega imágenes a la carpeta `public` para alimentar esta galería.
        </p>
      </div>
    );
  }

  const activeAccent = activeImage?.accent ?? "#45B8E8";

  return (
    <div className="gallery-shell mx-auto max-w-6xl">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/80 bg-[#081a48] shadow-[0_28px_80px_-34px_rgba(27,45,107,0.7)] ${aspectRatio}`}
        >
          {images.map((image, i) => {
            const isActive = i === active;
            const fitClass =
              image.fit === "cover" ? "object-cover" : "object-contain";

            return (
              <div
                key={image.src}
                className={`absolute inset-0 transition duration-700 ease-out ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.03] opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 780px"
                  className="object-cover opacity-45 blur-2xl scale-110"
                  style={{ objectPosition: image.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,72,0.18)_0%,rgba(8,26,72,0.68)_100%)]" />
                <div className="absolute inset-2 sm:inset-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 94vw, 760px"
                    className={`${fitClass} rounded-xl shadow-2xl shadow-black/25 transition duration-[6500ms] ease-out ${
                      isActive ? "scale-[1.01]" : "scale-100"
                    }`}
                    style={{ objectPosition: image.position ?? "center" }}
                    preload={i === 0}
                  />
                </div>
              </div>
            );
          })}

          <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-black text-white shadow-lg backdrop-blur-md sm:left-5 sm:top-5">
            {active + 1}/{total}
          </div>

          {showLabel && activeImage && (
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto">
              <div className="inline-flex max-w-full items-center gap-2 rounded-xl border border-white/16 bg-black/38 px-4 py-3 text-white shadow-xl backdrop-blur-md">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: activeAccent }}
                />
                <span className="truncate text-sm font-black">
                  {activeImage.title ?? activeImage.label}
                </span>
              </div>
            </div>
          )}

          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-white/90 text-[#1B2D6B] shadow-xl transition duration-200 hover:-translate-x-0.5 hover:bg-white sm:left-5 sm:h-12 sm:w-12"
                aria-label="Imagen anterior"
                title="Imagen anterior"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-white/90 text-[#1B2D6B] shadow-xl transition duration-200 hover:translate-x-0.5 hover:bg-white sm:right-5 sm:h-12 sm:w-12"
                aria-label="Imagen siguiente"
                title="Imagen siguiente"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        <aside className="rounded-2xl border border-[#1B2D6B]/10 bg-white/88 p-5 shadow-[0_24px_60px_-38px_rgba(27,45,107,0.8)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p
                className="text-xs font-black uppercase text-[#1B2D6B]/50"
                style={{ letterSpacing: 0 }}
              >
                Registro {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-2xl font-black leading-tight text-[#1B2D6B]">
                {activeImage?.title ?? activeImage?.label}
              </h3>
            </div>
            <span
              className="h-12 w-1.5 rounded-full"
              style={{ backgroundColor: activeAccent }}
            />
          </div>

          {activeImage?.description && (
            <p className="mt-4 text-sm font-semibold leading-6 text-gray-500">
              {activeImage.description}
            </p>
          )}

          {total > 1 && (
            <div className="mt-6">
              <div className="h-1.5 overflow-hidden rounded-full bg-[#E7ECF5]">
                <div
                  key={`${active}-${activeImage?.src}`}
                  className="gallery-progress h-full rounded-full"
                  style={{ backgroundColor: activeAccent }}
                />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1B2D6B]/10 bg-[#F6F8FC] text-[#1B2D6B] transition hover:bg-[#1B2D6B] hover:text-white"
                  aria-label="Imagen anterior"
                  title="Imagen anterior"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1B2D6B] px-4 text-sm font-black text-white shadow-lg shadow-[#1B2D6B]/20 transition hover:bg-[#122257]"
                >
                  Siguiente
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
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {total > 1 && (
            <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-3">
              {images.map((image, i) => (
                <button
                  key={image.src}
                  onClick={() => goTo(i)}
                  className={`relative aspect-[5/4] overflow-hidden rounded-lg bg-[#081a48] transition duration-300 ${
                    i === active
                      ? "ring-2 ring-[#1B2D6B] ring-offset-2"
                      : "opacity-65 hover:opacity-100"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="110px"
                    className="object-cover"
                    style={{ objectPosition: image.position ?? "center" }}
                  />
                </button>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
