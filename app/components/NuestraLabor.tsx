import Image from "next/image";

const servicios = [
  {
    image: "/ayuda1.png",
    imageAlt: "Mesa organizada con medicamentos e insumos de salud",
    position: "50% 58%",
    color: "#45B8E8",
    label: "Salud",
    title: "Donación de medicamentos",
    text: "Proporcionamos medicinas esenciales a personas y centros que necesitan apoyo inmediato.",
  },
  {
    image: "/ayuda7.png",
    imageAlt: "Entrega de silla de ruedas a una persona mayor",
    position: "50% 42%",
    color: "#F5A52B",
    label: "Movilidad",
    title: "Equipos de movilidad",
    text: "Sillas de ruedas, muletas y bastones para recuperar independencia y mejorar traslados.",
  },
  {
    image: "/ayuda5.png",
    imageAlt: "Equipo comunitario en una entrega de medicamentos",
    position: "50% 52%",
    color: "#E8342E",
    label: "Comunidad",
    title: "Apoyo a centros locales",
    text: "Trabajamos con equipos comunitarios para entregar ayuda de forma organizada y cercana.",
  },
  {
    image: "/img33.png",
    imageAlt: "Representantes en una entrega institucional",
    position: "50% 42%",
    color: "#1B2D6B",
    label: "Alianzas",
    title: "Gestión institucional",
    text: "Creamos alianzas estratégicas para sostener programas con mayor alcance e impacto.",
  },
];

export default function NuestraLabor() {
  return (
    <section
      id="labor"
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F8FC] via-[#F6F8FC] to-white py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-45" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#45B8E8]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center reveal-up">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#F5A52B]/25 bg-white px-4 py-2 shadow-sm shadow-[#F5A52B]/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5A52B]/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#F5A52B]" />
            </span>
            <span className="text-[12px] font-black uppercase tracking-[0.18em] text-[#1B2D6B]">
              Nuestra labor
            </span>
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-[#1B2D6B] lg:text-[56px] lg:leading-[1.02]">
            Programas con{" "}
            <span
              className="bg-gradient-to-r from-[#F5A52B] via-[#FFC061] to-[#F5A52B] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-dancing)", fontWeight: 700 }}
            >
              impacto visible
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-500">
            Organizamos cada entrega para que la ayuda llegue con orden,
            contexto y continuidad a quienes más la necesitan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((servicio, i) => (
            <article
              key={servicio.title}
              className="reveal-up group relative overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#1B2D6B]/15"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#081a48]">
                <Image
                  src={servicio.image}
                  alt={servicio.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  style={{ objectPosition: servicio.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,72,0)_25%,rgba(8,26,72,0.78)_100%)]" />

                <span
                  className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#1B2D6B] shadow-sm backdrop-blur-md"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                <span
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-white shadow-lg"
                  style={{ backgroundColor: servicio.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  {servicio.label}
                </span>
              </div>

              <div className="relative p-6">
                <h3 className="text-lg font-black leading-snug text-[#1B2D6B]">
                  {servicio.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                  {servicio.text}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.14em] text-gray-400 transition-colors duration-300 group-hover:text-[#1B2D6B]">
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
                className="absolute top-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  background: `linear-gradient(90deg, ${servicio.color}, ${servicio.color}80)`,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
