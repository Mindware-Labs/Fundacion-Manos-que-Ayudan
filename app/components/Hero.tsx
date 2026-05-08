import Image from "next/image";

const focusItems = [
  { label: "Medicamentos", icon: "M19 8h-2V6a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6-2a2 2 0 1 1 4 0v2h-4V6zm-4 9h3v3h2v-3h3v-2h-3v-3h-2v3h-3v2z" },
  { label: "Movilidad", icon: "M17 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2 14.5h-2v-3.5L9.5 14 7 16.5 5.5 15l3-3 1.5-1.5L13 9c.5-.3 1.1-.3 1.6 0l2.4 2 2.5 1-.7 1.7-2.6-1L15 12v8zm-7-9c-.7 0-1.3-.4-1.6-1l-1.7.5L4 9.5l2-.6c.4-.5 1-.9 1.7-1l3.5-1c.7-.2 1.5.1 1.9.7l1.4 2.4-1.7 1L11.5 9 8 11z" },
  { label: "Acompañamiento", icon: "M12 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-7 13c0-3 4-4.5 7-4.5s7 1.5 7 4.5V20H5v-1.5z" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#040d2c] via-[#071641] to-[#0C1A4A] text-white"
    >
      <div className="absolute inset-0 hero-texture opacity-25" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-[#45B8E8]/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#F5A52B]/22 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] left-[20%] h-[360px] w-[360px] rounded-full bg-[#1B2D6B]/40 blur-3xl"
      />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-32 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-40">
          <div className="reveal-up">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 pl-2 pr-4 shadow-xl shadow-black/20 backdrop-blur-md">
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A52B]/60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#F5A52B] shadow-[0_0_12px_rgba(245,165,43,0.8)]" />
              </span>
              <span className="text-[13px] font-black tracking-wide text-white/95">
                Salud · Movilidad · Acompañamiento
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[76px] lg:leading-[0.98]">
              <span className="block">Manos que</span>
              <span className="relative inline-block">
                <span
                  className="bg-gradient-to-r from-[#F5A52B] via-[#FFC061] to-[#F5A52B] bg-clip-text text-transparent"
                  style={{
                    fontFamily: "var(--font-dancing)",
                    fontWeight: 700,
                  }}
                >
                  transforman
                </span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-3 left-0 h-3 w-full text-[#F5A52B]/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 2, 100 6 T 198 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <span className="block">vidas con dignidad.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-medium leading-8 text-white/85 sm:text-xl">
              Llevamos medicamentos, equipos de movilidad y acompañamiento a las
              comunidades que más lo necesitan — con cariño, sin condiciones.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#ayudas"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-[#F5A52B] via-[#F5A52B] to-[#E89518] px-7 py-4 text-sm font-black text-[#10235f] shadow-xl shadow-[#F5A52B]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#F5A52B]/40"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Ver nuestras jornadas</span>
                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </a>
              <a
                href="#nosotros"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-black text-white shadow-xl shadow-black/15 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white hover:text-[#1B2D6B]"
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
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Conoce la fundación
              </a>
            </div>

            <div className="mt-12 reveal-up reveal-delay-2">
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent sm:flex-none sm:w-12" />
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-white/60">
                  Áreas de impacto
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/30 via-white/30 to-transparent" />
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {focusItems.map((item) => (
                  <li
                    key={item.label}
                    className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F5A52B]/40 hover:bg-white/12"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#F5A52B]/25 to-[#F5A52B]/10 text-[#F5A52B] ring-1 ring-[#F5A52B]/30">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d={item.icon} />
                      </svg>
                    </span>
                    <span className="text-sm font-black text-white">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-center reveal-scale reveal-delay-2">
            <div className="relative aspect-square w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[560px]">
              <div
                aria-hidden="true"
                className="hero-logo-pulse absolute inset-0 rounded-full bg-gradient-to-br from-[#F5A52B]/35 via-[#45B8E8]/20 to-transparent blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm"
              />
              <div
                aria-hidden="true"
                className="hero-logo-spin absolute inset-[6%] rounded-full border border-dashed border-white/15"
              />
              <div
                aria-hidden="true"
                className="hero-logo-spin-rev absolute inset-[18%] rounded-full border border-white/10"
              />

              <div className="hero-logo-float absolute inset-[18%] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Fundación Manos que Ayudan"
                  width={520}
                  height={520}
                  className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(245,165,43,0.4)]"
                  preload
                />
              </div>

              <span
                aria-hidden="true"
                className="absolute left-[8%] top-[20%] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#45B8E8]" />
                Salud
              </span>
              <span
                aria-hidden="true"
                className="absolute right-[6%] top-[42%] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A52B]" />
                Movilidad
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-[14%] left-[16%] inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E8342E]" />
                Acompañamiento
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_88%)]" />
    </section>
  );
}
