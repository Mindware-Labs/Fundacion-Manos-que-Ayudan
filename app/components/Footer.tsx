const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Nuestra Labor", href: "#labor" },
  { label: "Ayudas", href: "#ayudas" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: "#1B2D6B" }}
    >
      <div className="absolute inset-0 opacity-10 section-grid" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_1fr]">
          <div>
            <p className="text-lg font-black leading-none text-white">
              Fundación
            </p>
            <p
              className="mt-1 text-4xl font-black leading-none text-[#F5A52B]"
              style={{ fontFamily: "var(--font-dancing)" }}
            >
              Manos que Ayudan
            </p>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/70">
              Dedicados a mejorar la calidad de vida de comunidades vulnerables
              mediante salud, movilidad, acompañamiento y alianzas reales.
            </p>

            <a
              href="https://www.instagram.com/fundacionmanosqueayudan22"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
              aria-label="Instagram"
              title="Instagram"
            >
              <svg
                className="h-5 w-5 text-white"
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
            </a>
          </div>

          <nav>
            <h4 className="text-lg font-black text-white">Navegación</h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-white/65 transition hover:text-[#45B8E8]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <h4 className="text-lg font-black text-white">Contáctanos</h4>
            <p className="mt-5 text-sm font-semibold leading-7 text-white/70">
              Síguenos en Instagram para ver nuestras actividades, campañas y
              el impacto de cada acción.
            </p>

            <a
              href="https://www.instagram.com/fundacionmanosqueayudan22"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition hover:bg-white/15"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-md"
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
              <span className="min-w-0">
                <span className="block truncate text-sm font-black text-white">
                  @fundacionmanosqueayudan22
                </span>
                <span className="mt-1 block text-xs font-semibold text-white/55">
                  Instagram oficial
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm font-semibold text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Fundación Manos que Ayudan. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Aviso legal
            </a>
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
