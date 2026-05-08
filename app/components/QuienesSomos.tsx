import Image from "next/image";

const pilares = [
  {
    title: "Misión",
    color: "#45B8E8",
    bg: "#EBF8FF",
    text: "Mejorar la calidad de vida de comunidades vulnerables mediante programas de salud, donaciones y acompañamiento humano.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"
        />
      </svg>
    ),
  },
  {
    title: "Visión",
    color: "#F5A52B",
    bg: "#FFFBEB",
    text: "Ser una fundación de referencia en República Dominicana por transformar realidades con dignidad y transparencia.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Valores",
    color: "#E8342E",
    bg: "#FFF5F5",
    text: "Empatía, compromiso, respeto y trabajo en equipo. Cada acción nace de la dignidad de cada persona.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function QuienesSomos() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-35" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 h-[420px] w-[420px] rounded-full bg-[#45B8E8]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#F5A52B]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-up">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#45B8E8]/25 bg-gradient-to-r from-[#EBF8FF] to-white px-4 py-2 shadow-sm shadow-[#45B8E8]/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#45B8E8]/60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-[#45B8E8]" />
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.18em] text-[#1B2D6B]">
                Quiénes somos
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-[#1B2D6B] lg:text-[56px] lg:leading-[1.02]">
              Una fundación nacida para{" "}
              <span
                className="bg-gradient-to-r from-[#F5A52B] via-[#FFC061] to-[#F5A52B] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-dancing)", fontWeight: 700 }}
              >
                tender la mano
              </span>
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              <strong className="font-black text-[#1B2D6B]">
                Fundación Manos que Ayudan
              </strong>{" "}
              trabaja junto a hospitales, hogares de ancianos, aliados
              estratégicos y voluntarios para llevar salud, movilidad y
              esperanza a quienes más lo necesitan.
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              Cada jornada combina organización, empatía y seguimiento. No se
              trata solo de entregar insumos, sino de acompañar con respeto y
              presencia.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#labor"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1B2D6B] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#1B2D6B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243879] hover:shadow-xl hover:shadow-[#1B2D6B]/30"
              >
                Conoce nuestra labor
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
              <span className="inline-flex items-center gap-2 text-sm font-black text-gray-500">
                <svg
                  className="h-4 w-4 text-[#F5A52B]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Trabajo cercano y transparente
              </span>
            </div>
          </div>

          <figure className="relative reveal-scale reveal-delay-2">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-[#45B8E8]/15 via-transparent to-[#F5A52B]/15 blur-xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#081a48] shadow-[0_36px_90px_-42px_rgba(27,45,107,0.85)] ring-1 ring-white/40 sm:aspect-[16/11]">
              <Image
                src="/ayuda3.png"
                alt="Entrega de apoyo en una vivienda durante una jornada comunitaria"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover transition duration-[1200ms] hover:scale-[1.03]"
                style={{ objectPosition: "60% 48%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,72,0)_30%,rgba(8,26,72,0.88)_100%)]" />

              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5A52B]" />
                <span className="text-[11px] font-black uppercase tracking-[0.16em] text-white">
                  En jornada
                </span>
              </div>

              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#F5A52B]">
                  Ayuda con presencia
                </p>
                <p className="mt-3 max-w-md text-sm font-medium leading-6 text-white/85">
                  Apoyo directo en hogares y comunidades, cuidando el trato y
                  el contexto de cada familia.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.title}
              className="reveal-up group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl"
              style={
                {
                  ["--card-glow" as string]: `${pilar.color}25`,
                  animationDelay: `${i * 110}ms`,
                } as React.CSSProperties
              }
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top right, ${pilar.color}10, transparent 60%)`,
                }}
              />

              <span
                className="absolute right-5 top-5 text-3xl font-black leading-none text-gray-100 transition-colors duration-300 group-hover:text-gray-200"
                aria-hidden="true"
              >
                0{i + 1}
              </span>

              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: pilar.bg, color: pilar.color }}
              >
                {pilar.icon}
              </div>
              <h3 className="text-xl font-black text-[#1B2D6B]">
                {pilar.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                {pilar.text}
              </p>
              <div
                className="absolute bottom-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-1.5"
                style={{
                  background: `linear-gradient(90deg, ${pilar.color}, ${pilar.color}80)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
