export default function Contact() {
  return (
    <main style={{ background: "#C0B7EA", minHeight: "100vh", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <a href="/" style={{ fontSize: "14px", color: "#2A1758", opacity: 0.6, textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
          ← Terug
        </a>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "32px", lineHeight: 1.05 }}>
          Contact
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.75, marginBottom: "32px" }}>
          Heb je een vraag of wil je samenwerken? We horen graag van je.
        </p>
        <a
          href="mailto:hallo@festiv.nl"
          style={{ display: "inline-block", background: "#2A1758", color: "#fff", padding: "16px 32px", borderRadius: "100px", textDecoration: "none", fontSize: "16px", fontWeight: 600 }}
        >
          Stuur ons een mail
        </a>
      </div>
    </main>
  );
}
