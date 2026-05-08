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
    <section id="nosotros" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute inset-0 section-grid opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="reveal-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#45B8E8]/20 bg-[#EBF8FF] px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#45B8E8]" />
              <span className="text-sm font-black text-[#1B2D6B]">
                Quiénes somos
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight text-[#1B2D6B] lg:text-5xl">
              Una fundación nacida para tender la mano
            </h2>

            <p className="mt-6 text-lg font-semibold leading-8 text-gray-600">
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
          </div>

          <figure className="relative reveal-up reveal-delay-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#081a48] shadow-[0_28px_80px_-42px_rgba(27,45,107,0.8)] sm:aspect-[16/11]">
              <Image
                src="/ayuda3.png"
                alt="Entrega de apoyo en una vivienda durante una jornada comunitaria"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
                style={{ objectPosition: "60% 48%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,72,0)_35%,rgba(8,26,72,0.82)_100%)]" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                <p className="text-sm font-black text-[#F5A52B]">
                  Ayuda con presencia
                </p>
                <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-white/78">
                  Apoyo directo en hogares y comunidades, cuidando el trato y
                  el contexto de cada familia.
                </p>
              </figcaption>
            </div>
          </figure>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 reveal-up reveal-delay-3">
          {pilares.map((pilar) => (
            <div
              key={pilar.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1B2D6B]/10"
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105"
                style={{ background: pilar.bg, color: pilar.color }}
              >
                {pilar.icon}
              </div>
              <h3 className="text-xl font-black text-[#1B2D6B]">
                {pilar.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">
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
