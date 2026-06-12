import Nav from "../components/Nav";

export default function MeerOverFestiv() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Terug
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Het ontstaan van Festiv
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "48px" }}>
            HET VERHAAL
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              "Het idee voor Festiv ontstond op een warme avond op een festival in Nederland. We stonden met een groep vrienden bij een podium, en iemand vroeg: 'zou het niet geweldig zijn als je van tevoren wist wie er ook naartoe ging — en daar al een beetje contact mee had?'",
              "We keken om ons heen. Duizenden mensen, elk met hun eigen verhaal, elk met hun eigen reden om hier te zijn. En ergens daartussen — iemand die perfect bij je past. Maar hoe vind je die persoon in een zee van mensen?",
              "Dat is waar Festiv voor is gebouwd. Niet om de magie van een festival te vervangen, maar om haar te versterken. Je gaat al naar een geweldige dag — wij zorgen dat je er misschien iemand bijzonders ontmoet.",
              "We zijn een klein team, we bouwen hard, en we geloven oprecht dat de beste ontmoetingen die zijn waarbij je al iets deelt. Een liefde voor dezelfde muziek. Dezelfde sfeer. Hetzelfde festival.",
            ].map((tekst, i) => (
              <p key={i} style={{ fontSize: "18px", lineHeight: 1.8, color: "#2A1758", opacity: i === 0 ? 1 : 0.72, fontWeight: i === 0 ? 500 : 400 }}>
                {tekst}
              </p>
            ))}
          </div>

          <div style={{ marginTop: "64px", padding: "40px", background: "#2A1758", borderRadius: "24px" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "#FFD166", marginBottom: "12px", fontStyle: "italic" }}>
              "De beste dag wordt nóg beter als je er iemand bijzonders ontmoet."
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
              — Het Festiv team
            </p>
          </div>

          <div style={{ marginTop: "48px" }}>
            <a href="/#aanmelden" style={{
              display: "inline-block",
              background: "#2A1758",
              color: "#FFFFFF",
              padding: "16px 32px",
              borderRadius: "100px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
            }}>
              Meld je aan voor de wachtlijst
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
