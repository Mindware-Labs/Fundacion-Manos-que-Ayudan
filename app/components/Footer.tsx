const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Nuestra Labor", href: "#labor" },
  { label: "Ayudas", href: "#ayudas" },
  { label: "Galería", href: "#galeria" },
];

const focusAreas = [
  { label: "Salud", color: "#55bfe6" },
  { label: "Movilidad", color: "#f8b133" },
  { label: "Acompañamiento", color: "#ed1c24" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-[#061e5c] text-white"
    >
      <div className="absolute inset-0 opacity-10 section-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_1.1fr]">
          <div className="reveal-up">
            <p className="text-[11px] font-extrabold uppercase text-white/60">
              Fundación
            </p>
            <p className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Manos que Ayudan
            </p>
            <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-white/70">
              Dedicados a mejorar la calidad de vida de comunidades vulnerables
              mediante salud, movilidad, acompañamiento y alianzas reales.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white/90 backdrop-blur-md"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: area.color }}
                  />
                  {area.label}
                </span>
              ))}
            </div>
          </div>

          <nav className="reveal-up reveal-delay-2">
            <h4 className="text-[11px] font-extrabold uppercase text-white/60">
              Navegación
            </h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm font-extrabold text-white/75 transition-colors duration-200 hover:text-white"
                >
                  <span className="h-px w-3 bg-white/30 transition-all duration-300 group-hover:w-6 group-hover:bg-[#f8b133]" />
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="reveal-up reveal-delay-3">
            <h4 className="text-[11px] font-extrabold uppercase text-white/60">
              Contáctanos
            </h4>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/70">
              Síguenos en Instagram para ver nuestras actividades, campañas y
              el impacto de cada acción.
            </p>

            <a
              href="https://www.instagram.com/fundacionmanosqueayudan22"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 flex items-center gap-4 overflow-hidden rounded-lg border border-white/20 bg-white/10 px-5 py-4 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/20 active:translate-y-0 active:scale-[0.99]"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              <span className="relative min-w-0 flex-1">
                <span className="block truncate text-sm font-extrabold text-white">
                  @fundacionmanosqueayudan22
                </span>
                <span className="mt-1 block text-[11px] font-extrabold uppercase text-white/60">
                  Instagram oficial
                </span>
              </span>
              <svg
                className="relative h-4 w-4 shrink-0 text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm font-semibold text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[#f8b133]" />
            © 2026 Fundación Manos que Ayudan. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-extrabold text-white/70 transition hover:text-white"
            >
              Aviso legal
            </a>
            <a
              href="#"
              className="font-extrabold text-white/70 transition hover:text-white"
            >
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
