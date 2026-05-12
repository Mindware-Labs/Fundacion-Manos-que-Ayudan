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
        <div className="mx-auto mb-12 max-w-3xl text-center reveal-up sm:mb-14">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#dce5f2] bg-white px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-wide text-[#ed1c24] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ed1c24]" />
            Galería oficial
          </div>
          <h2 className="text-[32px] font-extrabold leading-[1.1] text-[#061e5c] sm:text-4xl md:text-[44px] md:leading-[1.06] lg:text-[54px] lg:leading-[1.03]">
            Evidencia visual de nuestro trabajo institucional.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-[#64748b] sm:mt-6 sm:text-lg sm:leading-8">
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
