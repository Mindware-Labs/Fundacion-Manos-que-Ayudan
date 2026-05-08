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
    <section id="labor" className="relative overflow-hidden bg-[#F6F8FC] py-24 sm:py-28">
      <div className="absolute inset-0 section-grid opacity-45" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5A52B]/20 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#F5A52B]" />
            <span className="text-sm font-black text-[#1B2D6B]">
              Nuestra labor
            </span>
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#1B2D6B] lg:text-5xl">
            Programas con impacto visible
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-gray-500">
            Organizamos cada entrega para que la ayuda llegue con orden,
            contexto y continuidad a quienes más la necesitan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 reveal-up reveal-delay-2">
          {servicios.map((servicio) => (
            <article
              key={servicio.title}
              className="group overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#1B2D6B]/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#081a48]">
                <Image
                  src={servicio.image}
                  alt={servicio.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: servicio.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,72,0)_30%,rgba(8,26,72,0.72)_100%)]" />
                <span
                  className="absolute bottom-3 left-3 rounded-lg px-3 py-1.5 text-xs font-black text-white shadow-lg"
                  style={{ backgroundColor: servicio.color }}
                >
                  {servicio.label}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-black leading-snug text-[#1B2D6B]">
                  {servicio.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-gray-500">
                  {servicio.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
