"use client";
import Nav from "../components/Nav";

const ervaringen = [
  { naam: "Lisa, 26", festival: "Dekmantel", tekst: "Ik had nooit gedacht dat ik mijn vriend via een app zou ontmoeten, laat staan op een festival. Maar hier zijn we dan. We stonden allebei bij hetzelfde podium en hadden al een week gechat via Festiv." },
  { naam: "Joris, 29", festival: "DGTL", tekst: "Super relaxed. Je matcht met mensen die er ook heen gaan, je spreekt iets af bij de ingang, en voor je het weet heb je een groep nieuwe vrienden. Deed me denken aan hoe spontaan festivals vroeger voelden." },
  { naam: "Noa, 23", festival: "Awakenings", tekst: "Festiv is het enige dat echt aanvoelt als voor festivalgangers gemaakt. Geen onzin, gewoon: wie gaat er ook naartoe, en wil je afspreken?" },
  { naam: "Tom, 31", festival: "Lowlands", tekst: "Ik ben een beetje introvert, maar via Festiv had ik al contact voor het festival begon. Dat scheelt zoveel drempel. We spraken af bij een foodkraam en de rest was geweldig." },
];

export default function Ervaringen() {
  return (
    <>
      <Nav />
      <main style={{ background: "#C0B7EA", minHeight: "100vh", paddingTop: "64px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px" }}>
          <a href="/" style={{ fontSize: "14px", fontWeight: 600, color: "#2A1758", opacity: 0.5, textDecoration: "none", display: "inline-block", marginBottom: "48px" }}>
            ← Terug
          </a>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700, color: "#2A1758", letterSpacing: "-2px", marginBottom: "16px", lineHeight: 1.05 }}>
            Ervaringen
          </h1>
          <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "2px", color: "#2A1758", opacity: 0.4, marginBottom: "16px" }}>
            WAT ANDEREN ZEGGEN
          </p>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#2A1758", opacity: 0.7, marginBottom: "64px" }}>
            Festiv is nog in opbouw, maar dit zijn de verhalen die ons elke dag motiveren om door te gaan.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {ervaringen.map((e, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "#2A1758" : "rgba(42,23,88,0.08)",
                borderRadius: "24px",
                padding: "40px",
                border: i % 2 !== 0 ? "1px solid rgba(42,23,88,0.15)" : "none",
              }}>
                <p style={{
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: i % 2 === 0 ? "rgba(255,255,255,0.85)" : "#2A1758",
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}>
                  "{e.tekst}"
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "15px", color: i % 2 === 0 ? "#FFD166" : "#2A1758", marginBottom: "2px" }}>
                    {e.naam}
                  </p>
                  <p style={{ fontSize: "13px", color: i % 2 === 0 ? "rgba(255,255,255,0.4)" : "rgba(42,23,88,0.45)", fontWeight: 600 }}>
                    {e.festival}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "64px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", color: "#2A1758", opacity: 0.7, marginBottom: "24px" }}>
              Jouw verhaal begint hier.
            </p>
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
