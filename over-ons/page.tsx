export default function OverOns() {
  return (
    <main style={{ background: "#C0B7EA", minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <a href="/" style={{ fontSize: "14px", color: "#2A1758", opacity: 0.6, textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
          ← Terug
        </a>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "32px", lineHeight: 1.05 }}>
          Over ons
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.75, marginBottom: "24px" }}>
          Wij zijn een klein team met een grote passie voor festivals en het verbinden van mensen.
        </p>
        <div style={{ display: "flex", gap: "16px", marginTop: "40px" }}>
          <a href="/over-ons/ons-team" style={{ background: "#2A1758", color: "#fff", padding: "12px 24px", borderRadius: "100px", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
            Ons team
          </a>
          <a href="/over-ons/werken-bij" style={{ background: "transparent", color: "#2A1758", border: "2px solid #2A1758", padding: "12px 24px", borderRadius: "100px", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
            Werken bij
          </a>
        </div>
      </div>
    </main>
  );
}
