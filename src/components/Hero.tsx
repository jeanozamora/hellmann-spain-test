"use client";

import Image from "next/image";
import heroBanner from "../../public/assets/hero_banner.jpg";
import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Staggered word reveal on mount
  useEffect(() => {
    const words = headingRef.current?.querySelectorAll<HTMLSpanElement>(".word");
    words?.forEach((w, i) => {
      w.style.animationDelay = `${0.1 + i * 0.12}s`;
      w.classList.add("word-visible");
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ── Background image ───────────────────────────────────────────── */}
      <Image
        src={heroBanner}
        alt="Hellmann logistics operations in Spain"
        fill
        priority
        className="object-cover object-center"
        loading="eager"
      />

      {/* ── Multi-layer overlay ────────────────────────────────────────── */}
      {/* Deep blue wash from left, fades to transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,76,153,0.97) 0%, rgba(0,76,153,0.82) 40%, rgba(60,91,123,0.45) 70%, transparent 100%)",
        }}
      />
      {/* Bottom fade to white for smooth section transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* ── Chevron grid — brand motif ─────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <ChevronGrid />
      </div>
      
      {/* ── Main content ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full pt-28 pb-24">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div
              className="hero-eyebrow flex items-center gap-3 mb-8"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <svg key={i} width="8" height="13" viewBox="0 0 8 13" fill="none"
                    style={{ opacity: 1 - i * 0.3 }}>
                    <path d="M1 1L7 6.5L1 12" stroke="#B1BDCA" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ))}
              </div>
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: "#B1BDCA", fontFamily: "var(--font-heading, sans-serif)" }}
              >
                Hellmann Worldwide Logistics
              </span>
            </div>

            {/* Heading — word-by-word reveal */}
            <h1
              ref={headingRef}
              className="font-bold leading-[1.02] mb-8 text-white overflow-hidden"
              style={{
                fontFamily: "var(--font-heading, sans-serif)",
                fontSize: "clamp(3rem, 6.5vw, 5.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {["Logistics", "Excellence"].map((word, wi) => (
                <span key={wi} className="block overflow-hidden">
                  <span className="word inline-block" style={{ opacity: 0 }}>
                    {word}
                  </span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <span
                  className="word inline-block"
                  style={{ opacity: 0, color: "#B1BDCA" }}
                >
                  in Spain.
                </span>
              </span>
            </h1>

            {/* Red rule */}
            <div
              className="hero-rule-h mb-8"
              style={{ background: "#E32119", height: "3px", width: "48px", borderRadius: "2px" }}
            />

            {/* Body */}
            <p
              className="hero-body text-base md:text-lg leading-relaxed mb-12 max-w-md"
              style={{ color: "rgba(255,255,255,0.75)", fontWeight: 300 }}
            >
              Connecting Spanish businesses to the world since&nbsp;1999.
              160&nbsp;logistics experts across four strategic locations —
              built to move what matters.
            </p>

            {/* CTA row */}
            <div className="hero-cta flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-200"
                style={{ background: "#E32119" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#b81a13")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E32119")}
              >
                Our Services
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                  <path d="M1 1L7 6.5L1 12" stroke="white" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-200"
                style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar — pinned to bottom of hero ──────────────────────── */}
      <div className="relative z-10 hero-stats"
        style={{ background: "rgba(0,76,153,0.92)", backdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1999", label: "Founded in Spain" },
              { value: "160", label: "Specialists" },
              { value: "4", label: "Strategic Locations" },
              { value: "173", label: "Countries Worldwide" },
            ].map(({ value, label }) => (
              <div key={label} className="px-8 py-5 first:pl-0">
                <div
                  className="text-2xl font-bold text-white mb-0.5"
                  style={{ fontFamily: "var(--font-heading, sans-serif)" }}
                >
                  {value}
                </div>
                <div className="text-xs uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.55)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll cue ────────────────────────────────────────────────── */}
      <div className="absolute bottom-24 right-10 flex flex-col items-center gap-2 z-10 hero-scroll">
        <div className="w-px h-14" style={{ background: "rgba(255,255,255,0.25)" }} />
        <span
          className="text-[10px] uppercase tracking-[0.25em]"
          style={{
            color: "rgba(255,255,255,0.4)",
            writingMode: "vertical-rl",
            letterSpacing: "0.25em",
          }}
        >
          Scroll
        </span>
      </div>

      {/* ── Inline animation styles ────────────────────────────────────── */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ruleGrow {
          from { transform: scaleY(0); transform-origin: top; }
          to   { transform: scaleY(1); transform-origin: top; }
        }
        @keyframes ruleGrowH {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }

        .hero-rule {
          animation: ruleGrow 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .hero-rule-h {
          animation: ruleGrowH 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both;
        }
        .hero-eyebrow {
          animation: heroFadeIn 0.6s ease 0.05s both;
        }
        .word-visible {
          animation: wordReveal 0.75s cubic-bezier(0.16,1,0.3,1) both !important;
        }
        .hero-body {
          animation: heroFadeUp 0.7s ease 0.55s both;
        }
        .hero-cta {
          animation: heroFadeUp 0.7s ease 0.7s both;
        }
        .hero-stats {
          animation: heroFadeUp 0.7s ease 0.85s both;
        }
        .hero-scroll {
          animation: heroFadeIn 1s ease 1.2s both;
        }
      `}</style>
    </section>
  );
}

// ── Chevron grid — brand motif ─────────────────────────────────────────────
function ChevronGrid() {
  // Right-side cluster only, fading left
  return (
    <div
      className="absolute top-0 right-0 h-full"
      style={{ width: "55%", opacity: 0.07 }}
    >
      <div
        className="h-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "1.5rem",
          padding: "4rem 3rem",
          maskImage: "linear-gradient(to right, transparent 0%, white 35%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, white 35%)",
        }}
      >
      </div>
    </div>
  );
}