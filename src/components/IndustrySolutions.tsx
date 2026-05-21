import Image from "next/image";

const industries = [
  {
    name: "Automotive",
    tagline: "Just-in-time, every time",
    description:
      "Time-critical parts supply, inbound logistics for assembly lines, and finished vehicle distribution across the Iberian Peninsula and beyond.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&q=80",
  },
  {
    name: "Fashion",
    tagline: "Speed meets precision",
    description:
      "Season-aligned transport cycles, temperature-aware handling, and end-to-end visibility for apparel, footwear, and luxury goods.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
  },
  {
    name: "Consumer Goods",
    tagline: "Reliable at any volume",
    description:
      "High-frequency replenishment logistics, omnichannel fulfilment, and last-mile delivery solutions tailored to Spain's retail landscape.",
    image:
      "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=700&q=80",
  },
  {
    name: "Renewable Energy",
    tagline: "Moving the energy transition",
    description:
      "Oversized and project cargo expertise for wind turbines, solar panels, and energy infrastructure — from port to installation site.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",
  },
];

export default function IndustrySolutions() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                {[1, 0.6, 0.3].map((o, i) => (
                  <svg key={i} width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path d="M1 1L6 6L1 11" stroke="#004C99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: o }} />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "#004C99" }}>
                Industry Solutions
              </p>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)", color: "#343a3f" }}
            >
              Deep Expertise
              <br />
              <span style={{ color: "#004c99" }}>in Your Sector</span>
            </h2>
            <div className="w-12 h-[3px] rounded-full mt-4" style={{ background: "#E32119" }} />
          </div>
          <p className="max-w-md text-base leading-relaxed" style={{ color: "#3c5b7b", fontWeight: 300 }}>
            We don't offer one-size-fits-all logistics. Our Spain team combines
            global best practices with local market knowledge to build solutions
            that fit your industry's unique demands.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <article
              key={ind.name}
              className="group relative overflow-hidden flex flex-col"
              style={{ minHeight: "380px", border: "1.5px solid #ECEFF2" }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  priority={ind.name === "Automotive"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,76,153,0.92) 100%)" }}
                />
                <h3
                  className="absolute bottom-5 left-6 text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {ind.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#004C99" }}>
                  {ind.tagline}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#3c5b7b", fontWeight: 300 }}>
                  {ind.description}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#004C99" }}>
                    Learn More
                  </span>
                  <svg
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    width="14" height="14" viewBox="0 0 48 48" fill="#004C99"
                  >
                    <path d="M28.047 3.025l.102.091 19.699 19.699a1.256 1.256 0 01.274.412l.012.032a1.245 1.245 0 01.08.44v.02c0 .027-.002.054-.004.08l.004-.1a1.262 1.262 0 01-.245.744l-.03.038-.007.008a1.259 1.259 0 01-.004.005l-.08.089-19.699 19.699a1.25 1.25 0 01-1.859-1.667l.091-.101 17.565-17.566H1a1.25 1.25 0 01-.128-2.493L1 22.45l42.946-.001L26.381 4.884a1.25 1.25 0 011.666-1.859z" />
                  </svg>
                </div>
              </div>

              {/* Hover bar — Engine Red */}
              <div
                className="h-[3px] w-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: "#E32119" }}
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}