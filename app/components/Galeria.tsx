import GaleriaCarousel, { type GalleryImage } from "./GaleriaCarousel";

const galleryImages: GalleryImage[] = [
  {
    number: 1,
    src: "/img11.png",
    alt: "Entrega institucional de medicamentos y reunión de coordinación",
    label: "Imagen 1",
    position: "50% 46%",
    fit: "contain",
    accent: "#f8b133",
  },
  {
    number: 2,
    src: "/img22.png",
    alt: "Representantes sosteniendo material de campaña de salud",
    label: "Imagen 2",
    position: "50% 42%",
    fit: "contain",
    accent: "#ed1c24",
  },
  {
    number: 3,
    src: "/img33.png",
    alt: "Grupo de representantes en entrega oficial de apoyo sanitario",
    label: "Imagen 3",
    position: "50% 42%",
    fit: "contain",
    accent: "#55bfe6",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-[#f4f7fb] py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-40" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#dce5f2]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal-up">
          <div className="mb-6 inline-flex items-center gap-3 rounded-md border border-[#dce5f2] bg-white px-4 py-2 text-sm font-extrabold text-[#ed1c24] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ed1c24]" />
            Galería oficial
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.08] text-[#061e5c] lg:text-[54px] lg:leading-[1.03]">
            Evidencia visual de nuestro trabajo institucional.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#64748b]">
            Una mirada cuidada al trabajo diario de la Fundación Manos que
            Ayudan y a las alianzas que hacen posible cada entrega.
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
