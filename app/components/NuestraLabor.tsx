import Image from "next/image";

const servicios = [
  {
    image: "/ayuda1.png",
    imageAlt: "Mesa organizada con medicamentos e insumos de salud",
    position: "50% 58%",
    color: "#55bfe6",
    label: "Salud",
    title: "Donación de medicamentos",
    text: "Proporcionamos medicinas esenciales a personas y centros que necesitan apoyo inmediato.",
  },
  {
    image: "/ayuda7.png",
    imageAlt: "Entrega de silla de ruedas a una persona mayor",
    position: "50% 42%",
    color: "#f8b133",
    label: "Movilidad",
    title: "Equipos de movilidad",
    text: "Sillas de ruedas, muletas y bastones para mejorar traslados, autonomía y calidad de vida.",
  },
  {
    image: "/ayuda5.png",
    imageAlt: "Equipo comunitario en una entrega de medicamentos",
    position: "50% 52%",
    color: "#ed1c24",
    label: "Comunidad",
    title: "Apoyo a centros locales",
    text: "Trabajamos con equipos comunitarios para entregar ayuda de forma organizada y cercana.",
  },
  {
    image: "/img33.png",
    imageAlt: "Representantes en una entrega institucional",
    position: "50% 42%",
    color: "#061e5c",
    label: "Alianzas",
    title: "Gestión institucional",
    text: "Creamos alianzas estratégicas para sostener programas con mayor alcance e impacto.",
  },
];

export default function NuestraLabor() {
  return (
    <section
      id="labor"
      className="relative overflow-hidden bg-[#f4f7fb] py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#dce5f2]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center reveal-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-[#dce5f2] bg-white px-4 py-2 text-sm font-extrabold text-[#f8b133] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#f8b133]" />
            Nuestra labor
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.08] text-[#061e5c] lg:text-[54px] lg:leading-[1.03]">
            Programas con impacto visible y procesos claros.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#64748b]">
            Organizamos cada entrega para que los recursos lleguen con orden,
            contexto y continuidad a quienes más los necesitan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio, i) => (
            <article
              key={servicio.title}
              className="reveal-up group relative overflow-hidden rounded-lg border border-[#dce5f2] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#061e5c]">
                <Image
                  src={servicio.image}
                  alt={servicio.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  style={{ objectPosition: servicio.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,30,92,0)_25%,rgba(6,30,92,0.78)_100%)]" />

                <span
                  className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[10px] font-extrabold uppercase text-[#061e5c] shadow-sm backdrop-blur-md"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                <span
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-extrabold uppercase text-white shadow-md"
                  style={{ backgroundColor: servicio.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  {servicio.label}
                </span>
              </div>

              <div className="relative p-6">
                <h3 className="text-lg font-extrabold leading-snug text-[#061e5c]">
                  {servicio.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#64748b]">
                  {servicio.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[12px] font-extrabold uppercase text-[#7b8794] transition-colors duration-300 group-hover:text-[#061e5c]">
                  <span
                    className="h-px flex-1 transition-colors duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${servicio.color}, transparent)`,
                    }}
                  />
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: servicio.color }}
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
                </div>
              </div>

              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ background: servicio.color }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
