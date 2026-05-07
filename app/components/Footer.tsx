export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#1B2D6B] text-white">
      {/* Wave top */}
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: 60 }}
        >
          <path
            d="M0 0L60 8C120 16 240 32 360 36C480 40 600 32 720 28C840 24 960 24 1080 32C1200 40 1320 56 1380 64L1440 72V0H0Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ── Izquierda: Logo + Descripción + Redes ── */}
          <div>
            {/* Brand text */}
            <div className="mb-5">
              <p className="text-white font-black text-lg leading-none tracking-tight">
                Fundación
              </p>
              <p
                className="text-white font-black leading-tight"
                style={{
                  fontFamily: "var(--font-dancing)",
                  fontSize: "2rem",
                  lineHeight: 1.1,
                }}
              >
                Manos que Ayudan
              </p>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Dedicados a mejorar la calidad de vida de las comunidades más
              vulnerables, un paso a la vez.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fundacionmanosqueayudan22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-white"
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
          </div>

          {/* ── Centro: Navegación rápida ── */}
          <div className="text-center">
            <h4 className="text-white font-black text-lg mb-6">Navegación</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Nuestra Labor", href: "#labor" },
                { label: "Galería", href: "#galeria" },
                { label: "Contacto", href: "#contacto" },
                { label: "Aviso Legal", href: "#" },
                { label: "Privacidad", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-[#45B8E8] transition-colors text-sm font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Derecha: Contacto Instagram ── */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Contáctanos</h4>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Síguenos en Instagram para ver nuestras actividades, campañas y el
              impacto de cada acción.
            </p>

            <a
              href="https://www.instagram.com/fundacionmanosqueayudan22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-4 transition-all duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              >
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-extrabold text-sm">
                  @fundacionmanosqueayudan22
                </p>
                <p className="text-white/50 text-xs mt-0.5">
                  Síguenos en Instagram
                </p>
              </div>
              <svg
                className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Fundación Manos que Ayudan. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors font-semibold"
            >
              Aviso Legal
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm transition-colors font-semibold"
            >
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
