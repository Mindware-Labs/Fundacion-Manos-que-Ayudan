import Image from "next/image";

const focusItems = [
  {
    label: "Salud",
    text: "Medicamentos e insumos priorizados por necesidad.",
    icon: "M19 8h-2V6a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6-2a2 2 0 1 1 4 0v2h-4V6zm-4 9h3v3h2v-3h3v-2h-3v-3h-2v3h-3v2z",
  },
  {
    label: "Movilidad",
    text: "Equipos de apoyo para autonomía y traslado seguro.",
    icon: "M17 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2 14.5h-2v-3.5L9.5 14 7 16.5 5.5 15l3-3 1.5-1.5L13 9c.5-.3 1.1-.3 1.6 0l2.4 2 2.5 1-.7 1.7-2.6-1L15 12v8zm-7-9c-.7 0-1.3-.4-1.6-1l-1.7.5L4 9.5l2-.6c.4-.5 1-.9 1.7-1l3.5-1c.7-.2 1.5.1 1.9.7l1.4 2.4-1.7 1L11.5 9 8 11z",
  },
  {
    label: "Acompañamiento",
    text: "Seguimiento cercano con familias, centros y aliados.",
    icon: "M12 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-7 13c0-3 4-4.5 7-4.5s7 1.5 7 4.5V20H5v-1.5z",
  },
];

const highlights = [
  { value: "01", label: "Diagnóstico" },
  { value: "02", label: "Entrega" },
  { value: "03", label: "Seguimiento" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#f8fafe] text-[#17213a]"
    >
      <div className="absolute inset-0 hero-texture opacity-70" />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-full w-[38%] bg-[#eaf7fd] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0)_100%)]"
      />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-20 pt-28 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:pt-36">
          <div className="reveal-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#dce5f2] bg-white/70 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-wide text-[#061e5c] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#f8b133]" />
              Fundación Manos que Ayudan
            </div>

            <h1 className="max-w-3xl text-[40px] font-extrabold leading-[1.06] text-[#061e5c] sm:text-5xl md:text-6xl lg:text-[68px] lg:leading-[1.02] xl:text-[72px]">
              Ayuda comunitaria con gestión{" "}
              <span className="relative inline-block text-[#f8b133]">
                responsable
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-1 h-[6px] rounded-full bg-[#f8b133]/25 sm:-bottom-1.5 sm:h-2"
                />
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-[#4b5568] sm:mt-7 sm:text-lg sm:leading-8 md:text-xl">
              Coordinamos medicamentos, equipos de movilidad y acompañamiento
              para que la ayuda llegue con orden, dignidad y transparencia a
              quienes más lo necesitan.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <a
                href="#ayudas"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#061e5c] px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#061e5c]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#03154a] active:translate-y-0 active:scale-[0.98] sm:px-7 sm:py-4"
              >
                Ver jornadas
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#061e5c]/20 bg-white/80 px-6 py-3.5 text-sm font-extrabold text-[#061e5c] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#061e5c]/50 hover:bg-white active:translate-y-0 active:scale-[0.98] sm:px-7 sm:py-4"
              >
                Conocer la fundación
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3">
              {focusItems.map((item) => (
                <li
                  key={item.label}
                  className="group rounded-lg border border-[#dce5f2] bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f8b133]/50 hover:shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eaf7fd] text-[#55bfe6]">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={item.icon} />
                    </svg>
                  </span>
                  <span className="mt-4 block text-base font-extrabold text-[#061e5c]">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-[#64748b]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(85,191,230,0.25),transparent_65%)] blur-2xl sm:-inset-8"
            />
            <div className="hero-logo-panel relative mx-auto max-w-[480px] rounded-lg border border-[#dce5f2] bg-white/90 p-5 shadow-[0_30px_70px_-48px_rgba(6,30,92,0.85)] backdrop-blur sm:max-w-[540px] sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#f8b133]" />

              <div className="flex min-h-[320px] items-center justify-center py-6 sm:min-h-[420px] sm:py-8 lg:min-h-[460px]">
                <Image
                  src="/logo.png"
                  alt="Fundación Manos que Ayudan"
                  width={520}
                  height={520}
                  className="hero-logo-image h-full max-h-[320px] w-full object-contain drop-shadow-[0_24px_44px_rgba(6,30,92,0.18)] sm:max-h-[400px] lg:max-h-[430px]"
                  preload
                />
              </div>

              <div className="grid grid-cols-3 border-t border-[#dce5f2] pt-4 sm:pt-5">
                {highlights.map((item) => (
                  <div
                    key={item.value}
                    className="border-[#dce5f2] px-2 py-2 first:border-l-0 sm:border-l sm:px-4 sm:py-3"
                  >
                    <span className="block text-xs font-extrabold text-[#f8b133] sm:text-sm">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-[13px] font-bold leading-tight text-[#061e5c] sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        aria-label="Desplazar hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center text-[#061e5c]/40 transition hover:text-[#061e5c] lg:flex"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-current pt-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-current" />
        </span>
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,rgba(248,250,254,0)_0%,#fff_92%)]" />
    </section>
  );
}
