import Nav from "../../components/Nav";

const team = [
  { naam: "Mark", rol: "Oprichter & CEO", bio: "Festivalliefhebber en ondernemer. Gelooft dat de beste ervaringen gedeeld zijn." },
  { naam: "Sara", rol: "Design & Product", bio: "Maakt complexe dingen simpel en mooi. Heeft Lowlands drie jaar op rij niet gemist." },
  { naam: "Daan", rol: "Tech lead", bio: "Bouwt de app van de grond af op. Houdt van techno en schone code, in willekeurige volgorde." },
];

export default function OnsTeam() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/over-ons" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Over ons
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Ons team
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            DE MENSEN ACHTER FESTIV
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {team.map((lid, i) => (
              <div key={i} style={{
                background: "#2A1758",
                borderRadius: "20px",
                padding: "36px",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "#FFD166",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#2A1758",
                  flexShrink: 0,
                }}>
                  {lid.naam[0]}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>
                    {lid.naam}
                  </h2>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "#FFD166", letterSpacing: "1px", marginBottom: "12px" }}>
                    {lid.rol.toUpperCase()}
                  </p>
                  <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                    {lid.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
