const footerLinks = {
  Products: ["Air Freight", "Sea Freight", "Road Freight", "Contract Logistics"],
  Industries: ["Automotive", "Fashion", "Consumer Goods", "Renewable Energy"],
  Locations: ["Barcelona", "Madrid", "Bilbao", "Valencia"],
  Company: ["About Hellmann", "Careers", "Press", "Sustainability"],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a1f24" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <p
              className="text-xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              HELLMANN
            </p>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-6">
              Worldwide Logistics
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#b1bdca" }}>
              Moving goods, connecting people, creating opportunity — since 1871.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#b1bdca" }}
              >
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white/80 transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Hellmann Worldwide Logistics España S.A. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Imprint", "Terms & Conditions"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
