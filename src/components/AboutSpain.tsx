import Image from "next/image";
import IndustrialPhoto from "../../public/assets/industrial_logicistic_image.webp";

export default function AboutSpain() {
  return (
    <section id="about" className="py-24 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[1, 0.6, 0.3].map((o, i) => (
                  <svg key={i} width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M1 1L6 6L1 11" stroke="#004C99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: o }} />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "#004C99" }}>
                Who We Are
              </p>
            </div>

            <h2
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "#343a3f" }}
            >
              Your Logistics Partner
              <br />
              <span style={{ color: "#004c99" }}>in Spain</span>
            </h2>

            <div className="w-12 h-[3px] rounded-full mb-8" style={{ background: "#E32119" }} />

            <p className="text-base leading-relaxed mb-5" style={{ color: "#3c5b7b", fontWeight: 300 }}>
              Hellmann Worldwide Logistics España has been at the heart of
              Spanish trade since 1999. Part of a global network spanning 173
              countries and 489 branches, we bring the full power of an
              international logistics group to local businesses across Spain.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#3c5b7b", fontWeight: 300 }}>
              With 160 dedicated professionals operating from Barcelona, Madrid,
              Bilbao, and Valencia, we cover Spain's key economic hubs — giving
              your supply chain the reach, reliability, and flexibility it needs
              to compete globally.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {[
                { label: "Barcelona", detail: "HQ & Air Freight Hub" },
                { label: "Madrid", detail: "Road & Contract Logistics" },
                { label: "Bilbao", detail: "Sea Freight Gateway" },
                { label: "Valencia", detail: "Mediterranean Trade Hub" },
              ].map((loc) => (
                <div key={loc.label} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-[3px] h-8 rounded-full" style={{ background: "#004C99" }} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wide" style={{ color: "#343a3f", fontFamily: "var(--font-heading)" }}>
                      {loc.label}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#B1BDCA" }}>
                      {loc.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Offset background block */}
            <div
              className="absolute -bottom-6 -right-6 w-full h-full rounded-sm"
              style={{ background: "#ECEFF2" }}
            />
            <div className="relative h-96 lg:h-[540px] rounded-sm overflow-hidden">
              <Image
                src={IndustrialPhoto}
                alt="Hellmann Spain operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              {/* Stats overlay — bottom left */}
              <div
                className="absolute bottom-0 left-0 right-0 px-8 py-6"
                style={{ background: "linear-gradient(to top, rgba(0,76,153,0.92) 0%, transparent 100%)" }}
              >
                <div className="flex gap-8">
                  {[
                    { value: "25+", label: "Years in Spain" },
                    { value: "160", label: "Specialists" },
                    { value: "4", label: "Locations" },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>{value}</div>
                      <div className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}