import GaleriaCarousel, { type GalleryImage } from "./GaleriaCarousel";

const galleryImages: GalleryImage[] = [
  {
    number: 1,
    src: "/img11.png",
    alt: "Entrega institucional de medicamentos y reunión de coordinación",
    label: "Imagen 1",
    title: "Coordinación institucional",
    description:
      "Medicamentos, insumos y aliados reunidos para ampliar el alcance de cada jornada solidaria.",
    position: "50% 46%",
    fit: "contain",
    accent: "#F5A52B",
  },
  {
    number: 2,
    src: "/img22.png",
    alt: "Representantes sosteniendo material de campaña de salud",
    label: "Imagen 2",
    title: "Alianzas por la salud",
    description:
      "Acciones junto a instituciones públicas y privadas para llevar recursos donde más se necesitan.",
    position: "50% 42%",
    fit: "contain",
    accent: "#E8342E",
  },
  {
    number: 3,
    src: "/img33.png",
    alt: "Grupo de representantes en entrega oficial de apoyo sanitario",
    label: "Imagen 3",
    title: "Entrega oficial",
    description:
      "Trabajo coordinado con aliados estratégicos para multiplicar el impacto comunitario.",
    position: "50% 42%",
    fit: "contain",
    accent: "#45B8E8",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#F6F8FC] py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-55" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center reveal-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8342E]/15 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#E8342E]" />
            <span className="text-sm font-black text-[#E8342E]">
              Galería oficial
            </span>
          </div>
          <h2 className="text-4xl font-black leading-tight text-[#1B2D6B] lg:text-5xl">
            Momentos que respaldan la misión
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-gray-500">
            Una mirada cuidada a entregas, acuerdos y jornadas que sostienen el
            trabajo de la Fundación Manos que Ayudan.
          </p>
        </div>

        <div className="reveal-up reveal-delay-2">
          <GaleriaCarousel
            images={galleryImages}
            aspectRatio="aspect-[5/6] sm:aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
