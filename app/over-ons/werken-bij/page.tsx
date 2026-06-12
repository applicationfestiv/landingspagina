import Nav from "../../components/Nav";

export default function WerkenBij() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/over-ons" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Over ons
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Werken bij Festiv
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            KOM HET TEAM VERSTERKEN
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.8, marginBottom: "32px" }}>
            We zijn een klein team en willen dat zo houden — maar we groeien. Als jij gepassioneerd bent over festivals, mensen verbinden en mooie producten bouwen, horen we graag van je.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px" }}>
            {["Je denkt in gebruikers, niet in features", "Je houdt van festivals (vereiste, niet optioneel)", "Je wilt iets bouwen dat er écht toe doet"].map((punt, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2A1758", marginTop: "8px", flexShrink: 0 }} />
                <p style={{ fontSize: "17px", color: "#2A1758", opacity: 0.75 }}>{punt}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#2A1758", borderRadius: "24px", padding: "48px 40px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#FFFFFF", marginBottom: "12px" }}>
              Stuur ons een bericht
            </h2>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "28px", lineHeight: 1.6 }}>
              Er zijn op dit moment geen open vacatures, maar we zijn altijd benieuwd. Vertel ons wie je bent en wat je wil bijdragen.
            </p>
            <a href="/contact" style={{
              display: "inline-block",
              background: "#FFD166",
              color: "#2A1758",
              padding: "14px 28px",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
            }}>
              Neem contact op
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
