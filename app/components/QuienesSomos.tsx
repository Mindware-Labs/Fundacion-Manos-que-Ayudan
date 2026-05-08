import Image from "next/image";

const pilares = [
  {
    title: "Misión",
    color: "#55bfe6",
    bg: "#eaf7fd",
    text: "Mejorar la calidad de vida de comunidades vulnerables mediante salud, donaciones y acompañamiento humano.",
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
    color: "#f8b133",
    bg: "#fff4da",
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
    color: "#ed1c24",
    bg: "#fdeaea",
    text: "Empatía, compromiso, respeto y trabajo en equipo. Cada acción parte de la dignidad de cada persona.",
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
      <div className="absolute inset-0 section-grid opacity-30" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#dce5f2]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-[#dce5f2] bg-[#f8fafe] px-4 py-2 text-sm font-extrabold text-[#55bfe6] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#55bfe6]" />
              Quiénes somos
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] text-[#061e5c] lg:text-[54px] lg:leading-[1.03]">
              Una fundación con enfoque humano y administración responsable.
            </h2>

            <p className="mt-6 text-lg font-semibold leading-8 text-[#4b5568]">
              <strong className="font-extrabold text-[#061e5c]">
                Fundación Manos que Ayudan
              </strong>{" "}
              trabaja junto a hospitales, hogares de ancianos, aliados
              estratégicos y voluntarios para llevar salud, movilidad y apoyo a
              comunidades vulnerables.
            </p>

            <p className="mt-4 leading-8 text-[#64748b]">
              Cada jornada se organiza con criterio, respeto y seguimiento. La
              ayuda se entrega desde una relación cercana con las familias y las
              instituciones que conocen cada caso.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#labor"
                className="inline-flex items-center gap-2 rounded-md bg-[#061e5c] px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-[#061e5c]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#03154a]"
              >
                Conoce nuestra labor
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
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#4b5568]">
                <svg
                  className="h-4 w-4 text-[#f8b133]"
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#061e5c] shadow-[0_34px_78px_-50px_rgba(6,30,92,0.9)] ring-1 ring-[#dce5f2] sm:aspect-[16/11]">
              <Image
                src="/ayuda3.png"
                alt="Entrega de apoyo en una vivienda durante una jornada comunitaria"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover transition duration-[1200ms] hover:scale-[1.03]"
                style={{ objectPosition: "60% 48%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,92,0)_32%,rgba(6,30,92,0.9)_100%)]" />

              <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/20 px-3 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f8b133]" />
                <span className="text-[11px] font-extrabold uppercase text-white">
                  En jornada
                </span>
              </div>

              <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-[11px] font-extrabold uppercase text-[#f8b133]">
                  Ayuda con presencia
                </p>
                <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-white/90">
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
              className="reveal-up group relative overflow-hidden rounded-lg border border-[#dce5f2] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span
                className="absolute right-5 top-5 text-3xl font-extrabold leading-none text-[#eef3fa] transition-colors duration-300 group-hover:text-[#e5edf8]"
                aria-hidden="true"
              >
                0{i + 1}
              </span>

              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-md transition-all duration-300 group-hover:scale-105"
                style={{ background: pilar.bg, color: pilar.color }}
              >
                {pilar.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#061e5c]">
                {pilar.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#64748b]">
                {pilar.text}
              </p>
              <div
                className="absolute bottom-0 left-0 h-1 w-full"
                style={{ background: pilar.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
