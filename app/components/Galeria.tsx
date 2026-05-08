import GaleriaCarousel, { type GalleryImage } from "./GaleriaCarousel";

const galleryImages: GalleryImage[] = [
  {
    number: 1,
    src: "/img11.png",
    alt: "Entrega institucional de medicamentos y reunión de coordinación",
    label: "Imagen 1",
    position: "50% 46%",
    fit: "contain",
    accent: "#F5A52B",
  },
  {
    number: 2,
    src: "/img22.png",
    alt: "Representantes sosteniendo material de campaña de salud",
    label: "Imagen 2",
    position: "50% 42%",
    fit: "contain",
    accent: "#E8342E",
  },
  {
    number: 3,
    src: "/img33.png",
    alt: "Grupo de representantes en entrega oficial de apoyo sanitario",
    label: "Imagen 3",
    position: "50% 42%",
    fit: "contain",
    accent: "#45B8E8",
  },
];

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F8FC] via-[#F6F8FC] to-white py-24 sm:py-28"
    >
      <div className="absolute inset-0 section-grid opacity-55" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-[#E8342E]/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#F5A52B]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center reveal-up">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#E8342E]/20 bg-white px-4 py-2 shadow-sm shadow-[#E8342E]/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8342E]/60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#E8342E]" />
            </span>
            <span className="text-[12px] font-black uppercase tracking-[0.18em] text-[#1B2D6B]">
              Galería oficial
            </span>
          </div>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-[#1B2D6B] lg:text-[56px] lg:leading-[1.02]">
            Imágenes que{" "}
            <span
              className="bg-gradient-to-r from-[#E8342E] via-[#FF6A6A] to-[#E8342E] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-dancing)", fontWeight: 700 }}
            >
              hablan por sí solas
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-500">
            Una mirada cuidada al trabajo diario de la Fundación Manos que
            Ayudan.
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
