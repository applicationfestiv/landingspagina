"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <main style={{ background: "var(--bg)" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(42,23,88,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(192,183,234,0.12)",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "28px",
          fontWeight: 700,
          color: "var(--purple-light)",
          letterSpacing: "-0.5px",
        }}>
          Festiv
        </span>
        <a
          href="#aanmelden"
          style={{
            background: "var(--accent)",
            color: "var(--purple-dark)",
            padding: "10px 26px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 600,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
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
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(192,183,234,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: "760px" }}>
          {/* Big Festiv wordmark */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(80px, 16vw, 160px)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "var(--purple-light)",
            letterSpacing: "-4px",
            marginBottom: "40px",
          }}>
            Festiv
          </h1>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#FFFFFF",
            marginBottom: "20px",
            letterSpacing: "-0.5px",
            fontStyle: "italic",
          }}>
            Vind je match in het echt
          </h2>

          <p style={{
            fontSize: "clamp(16px, 2.2vw, 19px)",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: "560px",
            margin: "0 auto 52px",
          }}>
            Je bent op een feest of evenement met je favoriete mensen, én nu is die persoon er ook! Vind elkaar en maak het een nóg betere dag.
          </p>

          <a
            href="#aanmelden"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--purple-dark)",
              padding: "18px 48px",
              borderRadius: "100px",
              fontSize: "17px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 8px 40px rgba(255,209,102,0.25)",
              transition: "all 0.2s",
              letterSpacing: "-0.2px",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 14px 48px rgba(255,209,102,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 40px rgba(255,209,102,0.25)";
            }}
          >
            Meld je vast aan terwijl wij zorgen dat dit werkelijkheid wordt!
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
          opacity: 0.3,
          fontSize: "11px",
          letterSpacing: "2px",
          color: "var(--purple-light)",
        }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "36px", background: "var(--purple-light)" }} />
        </div>
      </section>

      {/* Hoe het werkt */}
      <section style={{
        background: "var(--bg-mid)",
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", opacity: 0.4, marginBottom: "16px", fontWeight: 600, color: "var(--purple-light)" }}>
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
              { step: "01", title: "Kies je evenementen", desc: "Voeg de feesten en festivals toe waar jij naartoe gaat dit seizoen." },
              { step: "02", title: "Swipe je matches", desc: "Zie wie er ook heen gaat en swipe op mensen die jij interessant vindt." },
              { step: "03", title: "Ontmoet elkaar", desc: "Match, chat en spreek een plek af op het evenement. Het avontuur begint." },
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
                  opacity: 0.25,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "var(--purple-light)",
                }}>
                  {item.step}
                </span>
                <div style={{
                  width: "40px",
                  height: "3px",
                  background: "var(--accent)",
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
                <p style={{ color: "var(--text-muted)", lineHeight: 1.65, fontSize: "15px", fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counter */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center",
        background: "var(--bg)",
        borderTop: "1px solid rgba(192,183,234,0.1)",
        borderBottom: "1px solid rgba(192,183,234,0.1)",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            fontSize: "clamp(80px, 16vw, 120px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "var(--accent)",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginBottom: "16px",
          }}>
            500+
          </div>
          <p style={{
            fontSize: "22px",
            color: "#FFFFFF",
            fontWeight: 400,
            marginBottom: "8px",
          }}>
            Mensen gingen je voor
          </p>
          <p style={{
            fontSize: "15px",
            color: "var(--text-muted)",
          }}>
            Wees er snel bij — de eerste gebruikers krijgen exclusieve early access.
          </p>
        </div>
      </section>

      {/* Aanmelden */}
      <section id="aanmelden" style={{
        padding: "100px 24px 120px",
        background: "var(--bg-mid)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", letterSpacing: "3px", color: "var(--purple-light)", opacity: 0.5, marginBottom: "16px", fontWeight: 600 }}>
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
            color: "var(--text-muted)",
            fontWeight: 300,
            lineHeight: 1.6,
            marginBottom: "40px",
          }}>
            Laat je e-mailadres achter en wij laten je als eerste weten wanneer Festiv live gaat.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
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
                  border: "2px solid rgba(192,183,234,0.2)",
                  background: "rgba(192,183,234,0.08)",
                  fontSize: "17px",
                  color: "#FFFFFF",
                  outline: "none",
                  transition: "border-color 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--purple-light)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(192,183,234,0.2)")}
              />

              {error && (
                <p style={{ color: "var(--accent)", fontSize: "14px" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "rgba(255,209,102,0.5)" : "var(--accent)",
                  color: "var(--purple-dark)",
                  padding: "20px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  if (!loading) e.currentTarget.style.opacity = "0.9";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                {loading ? "Even geduld..." : "Meld je vast aan terwijl wij zorgen dat dit werkelijkheid wordt!"}
              </button>

              <p style={{ fontSize: "13px", color: "var(--text-muted)", opacity: 0.6 }}>
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
                background: "var(--accent)",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "var(--purple-dark)",
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
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
                We laten je als eerste weten wanneer Festiv live gaat.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--purple-dark)",
        borderTop: "1px solid rgba(192,183,234,0.1)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "24px",
          fontWeight: 700,
          color: "var(--purple-light)",
          marginBottom: "8px",
        }}>
          Festiv
        </p>
        <p style={{ opacity: 0.35, fontSize: "13px", color: "#FFFFFF" }}>
          © 2025 Festiv. Vind je match in het echt.
        </p>
      </footer>
    </main>
  );
}
