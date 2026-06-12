import Nav from "../components/Nav";

export default function OverOns() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Terug
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Over ons
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            WIE WE ZIJN
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.8, marginBottom: "32px" }}>
            Wij zijn een klein team van festival lovers, designers en developers. We delen één ding: de overtuiging dat de beste ontmoetingen die zijn waarbij je al iets deelt.
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: 0.7, marginBottom: "64px" }}>
            Festiv is ons antwoord op een simpele vraag — waarom is het zo moeilijk om nieuwe mensen te ontmoeten op een plek waar iedereen voor hetzelfde is gekomen?
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              { title: "Ons team", desc: "Leer de mensen kennen achter Festiv.", href: "/over-ons/ons-team" },
              { title: "Werken bij", desc: "Ben jij de volgende die aansluit?", href: "/over-ons/werken-bij" },
            ].map(item => (
              <a key={item.title} href={item.href} style={{
                background: "#2A1758",
                borderRadius: "20px",
                padding: "32px",
                textDecoration: "none",
                display: "block",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
                  {item.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
