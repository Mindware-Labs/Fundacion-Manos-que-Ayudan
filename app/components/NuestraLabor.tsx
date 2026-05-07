const servicios = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10m0 0H5a2 2 0 00-2 2v4a2 2 0 002 2h4m0-6h10m0 0a2 2 0 012 2v4a2 2 0 01-2 2H9m4-6v6"
        />
      </svg>
    ),
    color: "#45B8E8",
    bg: "#EBF8FF",
    title: "Donación de Medicamentos",
    text: "Proporcionamos medicinas esenciales a quienes más lo necesitan, colaborando con hospitales como El Buen Samaritano.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-10 h-10"
      >
        <circle cx="12" cy="4" r="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12h6m0 0l1.5 6H8.5M12 12V8m6 4a2 2 0 100-4 2 2 0 000 4zm0 0v8"
        />
      </svg>
    ),
    color: "#F5A52B",
    bg: "#FFFBEB",
    title: "Equipos de Movilidad",
    text: "Sillas de ruedas, muletas y bastones para devolver la independencia a quienes más lo necesitan.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    color: "#E8342E",
    bg: "#FFF5F5",
    title: "Apoyo a la Vejez",
    text: "Asistencia integral a hogares de ancianos, como Nuestra Señora del Carmen en Higüey.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "#1B2D6B",
    bg: "#EEF0F8",
    title: "Alianzas Estratégicas",
    text: "Trabajando junto a Fundación Montilla y otras instituciones para un mayor impacto comunitario.",
  },
];

export default function NuestraLabor() {
  return (
    <section id="labor" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EBF8FF] rounded-full px-4 py-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#45B8E8]" />
            <span className="text-sm font-bold text-[#45B8E8]">
              Nuestra Labor
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1B2D6B] mb-5 leading-tight">
            Transformando Vidas con{" "}
            <span
              style={{
                fontFamily: "var(--font-dancing)",
                color: "#F5A52B",
                fontSize: "1.05em",
              }}
            >
              Salud y Dignidad
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada acción que realizamos es un paso hacia una sociedad más justa y
            equitativa para todos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-10 -translate-y-10 translate-x-10 pointer-events-none"
                style={{ background: s.color }}
              />

              {/* Icon container */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.bg, color: s.color }}
              >
                {s.icon}
              </div>

              <h3 className="text-[1.05rem] font-extrabold text-[#1B2D6B] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.text}</p>

              {/* Bottom hover bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                style={{
                  background: `linear-gradient(90deg, ${s.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
