"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hellmanLogo from "../../public/assets/Logo Hellmann Worldwide Logistics RGB.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={hellmanLogo}
              alt="Hellmann Worldwide Logistics"
              height={36}
              priority
              loading="eager"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-[#343a3f] hover:text-[#004c99] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white bg-[#004c99] hover:bg-[#3c5b7b] transition-colors duration-150"
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
            <span className="block w-6 h-0.5 bg-gray-700 mb-1.5" />
            <span className="block w-6 h-0.5 bg-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-bold uppercase tracking-wider border-b border-gray-100"
              style={{ color: "#343a3f" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-4 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white text-center"
            style={{ backgroundColor: "#004c99" }}
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}