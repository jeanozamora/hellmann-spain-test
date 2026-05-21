import Image from "next/image";

const locations = [
  {
    city: "Barcelona",
    role: "Headquarters & Air Freight Hub",
    description:
      "Our Spanish headquarters and primary air freight hub, connecting Catalonia's industrial export base to global markets.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80",
  },
  {
    city: "Madrid",
    role: "Road & Contract Logistics",
    description:
      "Central Spain's logistics nerve centre, managing road distribution networks and customised contract logistics solutions.",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80",
  },
  {
    city: "Bilbao",
    role: "Sea Freight Gateway",
    description:
      "Gateway to Atlantic trade routes, handling bulk and containerised sea freight through one of Spain's busiest ports.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    city: "Valencia",
    role: "Mediterranean Trade Hub",
    description:
      "Strategically positioned on the Mediterranean corridor for rapid access to European and North African markets.",
    image: "https://images.unsplash.com/photo-1549921296-3b0f9a35af35?w=600&q=80",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24" style={{ backgroundColor: "#ECEFF2" }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1, 0.6, 0.3].map((o, i) => (
                <svg key={i} width="7" height="12" viewBox="0 0 7 12" fill="none">
                  <path d="M1 1L6 6L1 11" stroke="#004C99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: o }} />
                </svg>
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "#004C99" }}>
              Where We Operate
            </p>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold"
            style={{ fontFamily: "var(--font-heading)", color: "#343a3f" }}
          >
            4 Strategic Locations
            <br />
            <span style={{ color: "#004c99" }}>Across Spain</span>
          </h2>
          <div className="w-12 h-[3px] rounded-full mx-auto mt-4" style={{ background: "#E32119" }} />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="group bg-white overflow-hidden flex flex-col"
              style={{ border: "1.5px solid #ECEFF2" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={loc.image}
                  alt={loc.city}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,76,153,0.85) 0%, transparent 60%)" }} />
                <h3
                  className="absolute bottom-4 left-4 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {loc.city}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#004C99" }}>
                  {loc.role}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#3c5b7b", fontWeight: 300 }}>
                  {loc.description}
                </p>
              </div>

              {/* Engine Red hover bar — consistent with IndustrySolutions */}
              <div
                className="h-[3px] w-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: "#E32119" }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}