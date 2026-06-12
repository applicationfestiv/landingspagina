"use client";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Terug
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Contact
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            NEEM CONTACT OP
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.75, marginBottom: "64px" }}>
            Heb je een vraag, idee, of wil je samenwerken? We lezen alles en proberen binnen twee werkdagen te reageren.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { label: "Algemeen", email: "hallo@festiv.nl", omschrijving: "Vragen over de app of Festiv in het algemeen." },
              { label: "Pers & media", email: "pers@festiv.nl", omschrijving: "Interviews, samenwerkingen of mediaverzoeken." },
              { label: "Werken bij", email: "team@festiv.nl", omschrijving: "Kom het team versterken." },
            ].map((item, i) => (
              <div key={i} style={{
                background: i === 0 ? "#2A1758" : "rgba(42,23,88,0.08)",
                border: i !== 0 ? "1px solid rgba(42,23,88,0.15)" : "none",
                borderRadius: "20px",
                padding: "32px",
              }}>
                <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", color: i === 0 ? "#FFD166" : "#2A1758", opacity: i !== 0 ? 0.5 : 1, marginBottom: "8px" }}>
                  {item.label.toUpperCase()}
                </p>
                <a href={`mailto:${item.email}`} style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: i === 0 ? "#FFFFFF" : "#2A1758",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                }}>
                  {item.email}
                </a>
                <p style={{ fontSize: "14px", color: i === 0 ? "rgba(255,255,255,0.55)" : "rgba(42,23,88,0.55)" }}>
                  {item.omschrijving}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
