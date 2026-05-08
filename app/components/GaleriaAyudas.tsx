import { readdirSync } from "fs";
import path from "path";
import GaleriaCarousel, { type GalleryImage } from "./GaleriaCarousel";

const ayudaDetails: Record<
  number,
  Pick<GalleryImage, "title" | "description" | "position" | "fit" | "accent">
> = {
  1: {
    title: "Inventario listo",
    description:
      "Medicamentos y suministros organizados antes de salir hacia comunidades y centros de atención.",
    position: "50% 58%",
    fit: "contain",
    accent: "#45B8E8",
  },
  2: {
    title: "Suministros esenciales",
    description:
      "Preparación de donaciones con control, orden y enfoque en necesidades reales.",
    position: "50% 58%",
    fit: "contain",
    accent: "#1B2D6B",
  },
  3: {
    title: "Entrega en el hogar",
    description:
      "Apoyo directo a familias, llevando insumos hasta el lugar donde más se necesitan.",
    position: "60% 48%",
    fit: "contain",
    accent: "#F5A52B",
  },
  4: {
    title: "Jornada con aliados",
    description:
      "Voluntarios, instituciones y comunidad trabajando sobre una misma mesa de ayuda.",
    position: "50% 50%",
    fit: "contain",
    accent: "#E8342E",
  },
  5: {
    title: "Centro comunitario",
    description:
      "Entrega de medicamentos junto a equipos locales que conocen de cerca cada necesidad.",
    position: "50% 52%",
    fit: "contain",
    accent: "#45B8E8",
  },
  6: {
    title: "Atención cercana",
    description:
      "Cada donación se acompaña con orientación, escucha y seguimiento humano.",
    position: "50% 50%",
    fit: "contain",
    accent: "#F5A52B",
  },
  7: {
    title: "Movilidad recuperada",
    description:
      "Sillas de ruedas y equipos de apoyo que devuelven independencia y dignidad.",
    position: "50% 42%",
    fit: "contain",
    accent: "#45B8E8",
  },
  8: {
    title: "Acompañamiento familiar",
    description:
      "La ayuda llega mejor cuando se entrega con presencia, respeto y continuidad.",
    position: "50% 50%",
    fit: "contain",
    accent: "#E8342E",
  },
  9: {
    title: "Nueva oportunidad",
    description:
      "Equipos de movilidad entregados para facilitar recuperación, traslado y autonomía.",
    position: "50% 48%",
    fit: "contain",
    accent: "#1B2D6B",
  },
};

function getAyudaImages(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public");

  return readdirSync(publicDir)
    .map((fileName) => {
      const match = /^ayuda(\d+)\.png$/i.exec(fileName);
      if (!match) return null;

      const number = Number(match[1]);
      const detail = ayudaDetails[number] ?? {
        title: `Ayuda ${number}`,
        description:
          "Registro visual de una jornada solidaria de la Fundación Manos que Ayudan.",
        position: "center",
        fit: "contain" as const,
        accent: "#45B8E8",
      };

      return {
        number,
        src: `/${fileName}`,
        alt: `Imagen de ayuda comunitaria ${number}`,
        label: `Ayuda ${number}`,
        ...detail,
      };
    })
    .filter((image): image is GalleryImage => image !== null)
    .sort((a, b) => a.number - b.number);
}

export default function GaleriaAyudas() {
  const images = getAyudaImages();

  return (
    <section id="ayudas" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-[#1B2D6B]/10" />
      <div className="absolute inset-0 section-grid opacity-35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="reveal-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#45B8E8]/20 bg-[#EBF8FF] px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#45B8E8]" />
              <span className="text-sm font-black text-[#1B2D6B]">
                Jornadas de ayuda
              </span>
            </div>
            <h2 className="text-4xl font-black leading-tight text-[#1B2D6B] lg:text-5xl">
              Imágenes con mejor encuadre, contexto y presencia
            </h2>
          </div>

          <p className="max-w-2xl text-lg font-semibold leading-8 text-gray-500 reveal-up reveal-delay-2">
            Las fotos ahora se muestran completas cuando el formato lo pide,
            con fondo difuminado y miniaturas para navegar sin perder el foco
            del momento principal.
          </p>
        </div>

        <div className="reveal-up reveal-delay-3">
          <GaleriaCarousel
            images={images}
            aspectRatio="aspect-[5/6] sm:aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
