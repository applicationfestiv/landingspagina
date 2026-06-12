"use client";

import { useState } from "react";

export default function Nav() {
  const [overOnsOpen, setOverOnsOpen] = useState(false);

  const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#2A1758",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    whiteSpace: "nowrap" as const,
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: "0 40px",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(192,183,234,0.95)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(42,23,88,0.1)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <a href="/" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "30px",
          fontWeight: 800,
          color: "#2A1758",
          letterSpacing: "-0.5px",
          textDecoration: "none",
          marginRight: "16px",
        }}>
          Festiv
        </a>

        <a href="/meer-over-festiv" style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}>
          Meer over Festiv
        </a>

        <a href="/ervaringen" style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}>
          Ervaringen
        </a>

        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOverOnsOpen(true)}
          onMouseLeave={() => setOverOnsOpen(false)}
        >
          <a href="/over-ons" style={linkStyle}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            Over ons
          </a>
          {overOnsOpen && (
            <div style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: "4px",
              background: "#FFFFFF",
              borderRadius: "12px",
              boxShadow: "0 8px 32px rgba(42,23,88,0.15)",
              padding: "6px",
              width: "max-content",
              zIndex: 200,
            }}>
              {[{ label: "Ons team", href: "/over-ons/ons-team" }, { label: "Werken bij", href: "/over-ons/werken-bij" }].map(item => (
                <a key={item.label} href={item.href} style={{
                  display: "block",
                  padding: "9px 14px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#2A1758",
                  textDecoration: "none",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(192,183,234,0.35)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/contact" style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "none")}>
          Contact
        </a>
      </div>

      <a href="/#aanmelden" style={{
        background: "#2A1758",
        color: "#FFFFFF",
        padding: "10px 22px",
        borderRadius: "100px",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration: "none",
        flexShrink: 0,
      }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
        Aanmelden
      </a>
    </nav>
  );
}
