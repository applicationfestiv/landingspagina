"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const json = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else if (res.status === 409) {
        setError("Dit e-mailadres staat al op de wachtlijst!");
      } else {
        setError(json.error ?? "Er ging iets mis. Probeer het opnieuw.");
      }
    } catch {
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  const navItems = [
    {
      label: "Meer over Festiv",
      items: ["Het ontstaan van Festiv"],
    },
    {
      label: "Over ons",
      items: ["Ons team", "Werken bij", "Contact"],
    },
    {
      label: "Vragen",
      items: ["Hoe werkt het?", "Waarom Festiv?", "Wat kost Festiv?"],
    },
    {
      label: "Contact",
      items: null,
    },
  ];

  return (
    <main>

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 48px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(192,183,234,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(42,23,88,0.1)",
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "26px",
          fontWeight: 700,
          color: "#2A1758",
          letterSpacing: "-0.5px",
          flexShrink: 0,
        }}>
          Festiv
        </span>

        {/* Nav links met dropdowns */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {navItems.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item.items && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 14px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#2A1758",
                  fontFamily: "'Inter', sans-serif",
                  borderRadius: "8px",
                  transition: "background 0.15s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "none")}
              >
                {item.label}
                {item.items && (
                  <span style={{ marginLeft: "4px", fontSize: "10px", opacity: 0.5 }}>▾</span>
                )}
              </button>

              {/* Dropdown */}
              {item.items && openDropdown === item.label && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "4px",
                  background: "#FFFFFF",
                  borderRadius: "14px",
                  boxShadow: "0 8px 32px rgba(42,23,88,0.15)",
                  padding: "8px",
                  minWidth: "190px",
                  zIndex: 100,
                }}>
                  {item.items.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        fontSize: "14px",
                        color: "#2A1758",
                        textDecoration: "none",
                        borderRadius: "8px",
                        fontWeight: 400,
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = "rgba(192,183,234,0.35)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "none")}
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA knop */}
        <a
          href="#aanmelden"
          style={{
            background: "#2A1758",
            color: "#FFFFFF",
            padding: "10px 22px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Aanmelden
        </a>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "140px 24px 100px",
        background: "#C0B7EA",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: "780px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(80px, 16vw, 160px)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "#2A1758",
            letterSpacing: "-4px",
            marginBottom: "16px",
          }}>
            Festiv
          </h1>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(20px, 3.5vw, 32px)",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "#FFFFFF",
            marginBottom: "40px",
            letterSpacing: "-0.3px",
            fontStyle: "normal",
          }}>
            Voor feestelijke ontmoetingen
          </h2>

          <p style={{
            fontSize: "clamp(16px, 2.2vw, 18px)",
            color: "#FFFFFF",
            lineHeight: 1.75,
            fontWeight: 400,
            maxWidth: "560px",
            margin: "0 auto 52px",
            opacity: 0.85,
          }}>
            Je gaat naar een geweldig festival of evenement met je favoriete mensen. Match van te voren al met mensen die ook gaan. Of tijdens. Spreek spontaan linksvoor af bij een stage, of bij dat ene stukje waar je lekker kunt zitten. En wie weet wordt een mooie dag nóg mooier.
          </p>

          <a
            href="#aanmelden"
            style={{
              display: "inline-block",
              background: "#2A1758",
              color: "#FFFFFF",
              padding: "18px 48px",
              borderRadius: "100px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 40px rgba(42,23,88,0.25)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 48px rgba(42,23,88,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(42,23,88,0.25)";
            }}
          >
            Meld je vast aan terwijl wij hard verder bouwen
          </a>
        </div>

        <div style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.35,
          fontSize: "11px",
          letterSpacing: "2px",
          color: "#2A1758",
        }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "36px", background: "#2A1758" }} />
        </div>
      </section>

      {/* Hoe het werkt */}
      <section style={{ background: "#2A1758", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", opacity: 0.4, marginBottom: "16px", fontWeight: 600, color: "#FFFFFF" }}>
            HOE HET WERKT
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-1px",
            marginBottom: "64px",
            lineHeight: 1.1,
            color: "#FFFFFF",
          }}>
            Zo simpel is het
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {[
              { step: "01", title: "Kies je evenementen", desc: "Voeg de feesten en festivals toe waar jij naartoe gaat." },
              { step: "02", title: "Swipe je matches", desc: "Zie wie ook gaan en like mensen die jij interessant vindt." },
              { step: "03", title: "Ontmoet elkaar", desc: "Match, chat en spreek spontaan af bij een stage of meet up." },
            ].map((item) => (
              <div key={item.step} style={{
                background: "rgba(192,183,234,0.08)",
                border: "1px solid rgba(192,183,234,0.15)",
                borderRadius: "24px",
                padding: "40px 32px",
                textAlign: "left",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute",
                  top: "24px",
                  right: "24px",
                  fontSize: "12px",
                  opacity: 0.2,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "#FFFFFF",
                }}>
                  {item.step}
                </span>
                <div style={{
                  width: "40px",
                  height: "3px",
                  background: "#FFD166",
                  borderRadius: "2px",
                  marginBottom: "24px",
                }} />
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#FFFFFF",
                }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.65, fontSize: "15px", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section style={{ padding: "100px 24px", textAlign: "center", background: "#C0B7EA" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            fontSize: "clamp(80px, 16vw, 120px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "#2A1758",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginBottom: "16px",
          }}>
            500+
          </div>
          <p style={{ fontSize: "22px", color: "#2A1758", fontWeight: 500, marginBottom: "8px" }}>
            Mensen gingen je al voor
          </p>
          <p style={{ fontSize: "15px", color: "#2A1758", opacity: 0.6 }}>
            Wees er snel bij — de eerste gebruikers krijgen een half jaar gratis premium.
          </p>
        </div>
      </section>

      {/* Aanmelden */}
      <section id="aanmelden" style={{ padding: "100px 24px 120px", background: "#2A1758", textAlign: "center" }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#C0B7EA", opacity: 0.5, marginBottom: "16px", fontWeight: 600 }}>
            WACHTLIJST
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Klaar voor de dag van je leven?
          </h2>
          <p style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 300,
            lineHeight: 1.6,
            marginBottom: "40px",
          }}>
            Laat je e-mailadres achter en wij laten je als eerste weten wanneer Festiv live gaat.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="email"
                name="email"
                required
                placeholder="jouw@email.nl"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  borderRadius: "16px",
                  border: "2px solid rgba(192,183,234,0.25)",
                  background: "rgba(192,183,234,0.08)",
                  fontSize: "17px",
                  color: "#FFFFFF",
                  outline: "none",
                  transition: "border-color 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "#C0B7EA")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(192,183,234,0.25)")}
              />

              {error && <p style={{ color: "#FFD166", fontSize: "14px" }}>{error}</p>}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "rgba(42,23,88,0.5)" : "#2A1758",
                  color: "#FFFFFF",
                  padding: "20px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "2px solid rgba(192,183,234,0.2)",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {loading ? "Even geduld..." : "Meld je vast aan terwijl wij hard verder bouwen"}
              </button>

              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                Geen spam. Nooit.
              </p>
            </form>
          ) : (
            <div style={{
              background: "rgba(192,183,234,0.1)",
              border: "1px solid rgba(192,183,234,0.2)",
              borderRadius: "24px",
              padding: "48px 40px",
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "#FFD166",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                color: "#2A1758",
                fontWeight: 700,
              }}>
                ✓
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 600,
                marginBottom: "12px",
                color: "#FFFFFF",
              }}>
                Je staat op de lijst!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                We laten je als eerste weten wanneer Festiv live gaat.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#C0B7EA",
        borderTop: "1px solid rgba(42,23,88,0.1)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "24px",
          fontWeight: 700,
          color: "#2A1758",
          marginBottom: "8px",
        }}>
          Festiv
        </p>
        <p style={{ opacity: 0.45, fontSize: "13px", color: "#2A1758" }}>
          © 2025 Festiv. Vind je match in het echt.
        </p>
      </footer>
    </main>
  );
}
