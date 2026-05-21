const products = [
  {
    title: "Air Freight",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 24l10-10 4 4 16-10-2 14 6 4-20 4-4-6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 18l4 12" />
      </svg>
    ),
    description:
      "Express and standard air freight solutions connecting Spain's airports to a global network. Barcelona and Madrid serve as our primary hubs for time-sensitive shipments.",
    highlights: [
      "Express door-to-door delivery",
      "Charter options for large volumes",
      "Dangerous goods handling",
      "Real-time track & trace",
    ],
  },
  {
    title: "Sea Freight",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 32l6-18h20l6 18H8z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 38h40" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 14V8h12v6" />
      </svg>
    ),
    description:
      "Full container (FCL) and less-than-container (LCL) services from Bilbao, Valencia, and Barcelona — connecting Spain to the Americas, Asia, and Africa.",
    highlights: [
      "FCL & LCL solutions",
      "Reefer and hazmat cargo",
      "Port-to-port & door-to-door",
      "Customs brokerage included",
    ],
  },
  {
    title: "Road Freight",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="4" y="20" width="40" height="16" rx="2" />
        <path strokeLinecap="round" d="M4 28h40" />
        <circle cx="13" cy="38" r="4" />
        <circle cx="35" cy="38" r="4" />
        <path strokeLinecap="round" d="M36 20l-6-10H14" />
      </svg>
    ),
    description:
      "Full-truck (FTL) and groupage (LTL) services across Spain and Europe. Our Madrid hub coordinates national distribution networks for daily deliveries.",
    highlights: [
      "FTL & LTL groupage",
      "Temperature-controlled transport",
      "Cross-docking services",
      "European network coverage",
    ],
  },
  {
    title: "Contract Logistics",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="6" y="10" width="36" height="28" rx="2" />
        <path strokeLinecap="round" d="M6 18h36" />
        <path strokeLinecap="round" d="M16 10v8" />
        <path strokeLinecap="round" d="M32 10v8" />
        <path strokeLinecap="round" d="M14 28h8M14 33h14" />
      </svg>
    ),
    description:
      "End-to-end warehousing, fulfilment, and value-added services — designed around your supply chain. Flexible contracts from shared to dedicated warehouse setups.",
    highlights: [
      "Bonded & public warehousing",
      "Pick, pack & co-packing",
      "Returns management",
      "WMS integration & reporting",
    ],
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24"
      style={{ backgroundColor: "#343a3f" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sm font-medium uppercase tracking-[0.2em] mb-3"
            style={{ color: "#b1bdca" }}
          >
            Our Products
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Comprehensive Logistics
            <br />
            <span style={{ color: "#b1bdca" }}>Under One Roof</span>
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {products.map((product) => (
            <div
              key={product.title}
              className="group p-8 flex flex-col transition-colors duration-300 cursor-pointer bg-[#343a3f] hover:bg-[#004c99]"
            >
              {/* Icon */}
              <div className="mb-6 text-white/40 group-hover:text-white transition-colors duration-300">
                {product.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {product.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: "#b1bdca" }}
              >
                {product.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white/30 group-hover:bg-white transition-colors duration-300"
                    />
                    <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors duration-300">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
