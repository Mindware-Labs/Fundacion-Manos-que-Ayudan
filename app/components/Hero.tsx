export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFF8ED 0%, #FFF0D6 30%, #FDE8C8 60%, #FFDFC0 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-24 right-10 w-72 h-72 rounded-full opacity-25 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #F5A52B 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-24 right-48 w-56 h-56 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #45B8E8 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-48 left-8 w-40 h-40 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #E8342E 0%, transparent 70%)",
        }}
      />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1B2D6B 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Texto ── */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm border border-white/60">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8342E] animate-pulse" />
              <span className="text-sm font-bold text-[#1B2D6B]">
                Organización Sin Fines de Lucro
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-[#1B2D6B] leading-tight mb-6">
              Mano a mano,{" "}
              <span
                style={{
                  fontFamily: "var(--font-dancing)",
                  background: "linear-gradient(90deg, #F5A52B, #E8342E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                construyendo
              </span>
              <br />
              un futuro mejor.
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              <strong className="text-[#1B2D6B] font-extrabold">
                Fundación Manos que Ayudan
              </strong>
              , es una organización sin fines de lucro dedicada a mejorar la
              calidad de vida de comunidades más vulnerables.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#labor"
                className="inline-flex items-center gap-2 bg-[#45B8E8] text-white font-extrabold px-8 py-4 rounded-full hover:bg-[#35a8d8] hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
              >
                Descubre Nuestra Misión
                <svg
                  className="w-5 h-5"
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
              <a
                href="#nosotros"
                className="inline-flex items-center gap-2 bg-white text-[#1B2D6B] font-extrabold px-8 py-4 rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-200 shadow-md text-base border border-[#1B2D6B]/15"
              >
                Conócenos
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-black text-[#F5A52B]">500+</div>
                <div className="text-sm text-gray-500 font-semibold mt-0.5">
                  Familias Ayudadas
                </div>
              </div>
              <div className="w-px bg-gray-300" />
              <div>
                <div className="text-4xl font-black text-[#45B8E8]">10+</div>
                <div className="text-sm text-gray-500 font-semibold mt-0.5">
                  Aliados Estratégicos
                </div>
              </div>
              <div className="w-px bg-gray-300" />
              <div>
                <div className="text-4xl font-black text-[#E8342E]">5+</div>
                <div className="text-sm text-gray-500 font-semibold mt-0.5">
                  Años de Servicio
                </div>
              </div>
            </div>
          </div>

          {/* ── Logo / imagen ── */}
          <div className="flex justify-center items-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Main card */}
              <div
                className="relative h-[320px] sm:h-[400px] lg:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, #FDEEC8 0%, #FFDDB0 50%, #FFC990 100%)",
                }}
              >
                {/* Logo centrado */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                  <img
                    src="/logo.png"
                    alt="Fundación Manos que Ayudan"
                    className="w-full max-w-[280px] object-contain drop-shadow-lg"
                  />
                </div>

                {/* Decorative circles */}
                <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-[#45B8E8]/25" />
                <div className="absolute bottom-10 right-6 w-12 h-12 rounded-full bg-[#E8342E]/20" />
                <div className="absolute bottom-6 left-10 w-8 h-8 rounded-full bg-[#F5A52B]/30" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#E8342E]/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-[#E8342E]"
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
                  <p className="text-[#1B2D6B] font-extrabold text-sm">
                    Impacto Real
                  </p>
                  <p className="text-gray-400 text-xs">
                    Comunidades transformadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 72L60 64C120 56 240 40 360 36C480 32 600 40 720 44C840 48 960 48 1080 40C1200 32 1320 16 1380 8L1440 0V72H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
