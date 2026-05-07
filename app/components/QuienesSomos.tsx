const pilares = [
  {
    title: "Misión",
    color: "#45B8E8",
    bg: "#EBF8FF",
    text: "Mejorar la calidad de vida de las comunidades más vulnerables a través de programas de salud, donaciones y acompañamiento humano.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z"
        />
      </svg>
    ),
  },
  {
    title: "Visión",
    color: "#F5A52B",
    bg: "#FFFBEB",
    text: "Ser una fundación de referencia en República Dominicana, reconocida por transformar realidades con dignidad, transparencia y amor.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Valores",
    color: "#E8342E",
    bg: "#FFF5F5",
    text: "Empatía, transparencia, compromiso y trabajo en equipo. Cada acción nace del respeto por la dignidad de cada persona.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="relative py-28 bg-white overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #45B8E8 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 -right-20 w-96 h-96 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #F5A52B 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left: heading & story */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EBF8FF] rounded-full px-4 py-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#45B8E8]" />
              <span className="text-sm font-bold text-[#45B8E8]">
                Quiénes Somos
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-[#1B2D6B] leading-tight mb-6">
              Una fundación nacida del{" "}
              <span
                style={{
                  fontFamily: "var(--font-dancing)",
                  color: "#E8342E",
                  fontSize: "1.05em",
                }}
              >
                corazón
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              <strong className="text-[#1B2D6B] font-extrabold">
                Fundación Manos que Ayudan
              </strong>{" "}
              nace con la convicción de que ningún gesto solidario es pequeño.
              Trabajamos junto a hospitales, hogares de ancianos y aliados
              estratégicos para llevar salud, dignidad y esperanza a quien más
              lo necesita.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Cada jornada, cada donación y cada voluntario son un eslabón en
              esta cadena de bienestar que crece día a día.
            </p>
          </div>

          {/* Right: visual quote card */}
          <div className="relative">
            <div
              className="relative rounded-[2rem] p-10 shadow-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(140deg, #1B2D6B 0%, #2D4F9E 70%, #45B8E8 100%)",
              }}
            >
              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1.4px, transparent 1.4px)",
                  backgroundSize: "26px 26px",
                }}
              />

              {/* Floating circles */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#F5A52B]/30 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#E8342E]/20 blur-xl" />

              <svg
                className="relative w-12 h-12 text-[#F5A52B] mb-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391C9.983 16.095 6.444 19.6 1.5 20.5L.5 18.5c2.7-1.1 4.5-3.4 4.5-5.6H1V3h8.983zm12.017 0v7.391c0 5.704-3.539 9.209-8.483 10.109l-1-2c2.7-1.1 4.5-3.4 4.5-5.6h-4V3h8.983z" />
              </svg>

              <p className="relative text-white text-xl lg:text-2xl font-bold leading-relaxed mb-6">
                Creemos que tender la mano es el acto más poderoso para
                transformar una comunidad.
              </p>

              <div className="relative flex items-center gap-3 pt-5 border-t border-white/15">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-extrabold text-sm">
                    Equipo Manos que Ayudan
                  </p>
                  <p className="text-white/60 text-xs font-semibold">
                    Familia, voluntarios y aliados
                  </p>
                </div>
              </div>
            </div>

            {/* Floating mini-card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-xl px-5 py-3.5 flex items-center gap-3 border border-gray-100">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#45B8E8] border-2 border-white" />
                <div className="w-9 h-9 rounded-full bg-[#F5A52B] border-2 border-white" />
                <div className="w-9 h-9 rounded-full bg-[#E8342E] border-2 border-white" />
              </div>
              <div>
                <p className="text-[#1B2D6B] font-extrabold text-sm leading-none">
                  Comunidad activa
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Voluntarios y aliados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Misión / Visión / Valores ── */}
        <div className="grid sm:grid-cols-3 gap-6">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white rounded-3xl p-7 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1.5 overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-10 translate-x-10 pointer-events-none"
                style={{ background: p.color }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: p.bg, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="text-[#1B2D6B] font-black text-xl mb-3">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.text}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://www.instagram.com/fundacionmanosqueayudan22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1B2D6B] text-white font-extrabold px-8 py-4 rounded-full hover:bg-[#162556] hover:scale-[1.04] transition-all duration-200 shadow-lg text-sm"
          >
            Conócenos en Instagram
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
