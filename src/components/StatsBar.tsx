const stats = [
  { value: "1999", label: "Founded in Spain" },
  { value: "160+", label: "Employees" },
  { value: "4", label: "Locations" },
  { value: "25+", label: "Years of Expertise" },
  { value: "173", label: "Countries Worldwide" },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "#004c99" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-white/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-10 px-4 text-center"
            >
              <span
                className="text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-wider text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
