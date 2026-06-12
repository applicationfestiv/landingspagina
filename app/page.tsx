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
    <main style={{ background: "var(--cream)" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(245,240,232,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(28,56,41,0.08)",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "24px",
          fontWeight: 700,
          color: "var(--green-dark)",
          letterSpacing: "-0.5px",
        }}>
          Festiv
        </span>
        <a
          href="#aanmelden"
          style={{
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "10px 24px",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--green-mid)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--green-dark)")}
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
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,138,92,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "5%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,130,106,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: "680px" }}>
          <div style={{
            display: "inline-block",
            background: "var(--green-dark)",
            color: "var(--cream)",
            padding: "6px 16px",
            borderRadius: "100px",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            marginBottom: "28px",
          }}>
            🎪 Coming soon
          </div>

          <h1 style={{
            fontSize: "clamp(52px, 9vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "var(--green-dark)",
            marginBottom: "24px",
            letterSpacing: "-2px",
            fontFamily: "'Playfair Display', serif",
          }}>
            Vind je match{" "}
            <span style={{ fontStyle: "italic", color: "var(--rose)" }}>
              op het festival
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-mid)",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "500px",
            margin: "0 auto 48px",
          }}>
            Festiv koppelt mensen die naar dezelfde evenementen gaan. Swipe, match en ontmoet elkaar op de dansvloer.
          </p>

          <a
            href="#aanmelden"
            style={{
              display: "inline-block",
              background: "var(--rose)",
              color: "#fff",
              padding: "18px 48px",
              borderRadius: "100px",
              fontSize: "17px",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(232,130,106,0.35)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--rose-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(232,130,106,0.45)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--rose)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,130,106,0.35)";
            }}
          >
            Meld je aan voor de wachtlijst
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
          color: "var(--text-mid)",
          opacity: 0.4,
          fontSize: "12px",
          letterSpacing: "1px",
        }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "var(--green-mid)" }} />
        </div>
      </section>

      {/* Hoe het werkt */}
      <section style={{
        background: "var(--green-dark)",
        padding: "100px 24px",
        color: "var(--cream)",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: "13px", letterSpacing: "2px", opacity: 0.5, marginBottom: "16px", fontWeight: 500 }}>
            HOE HET WERKT
          </p>
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-1px",
            marginBottom: "64px",
            lineHeight: 1.1,
            fontFamily: "'Playfair Display', serif",
          }}>
            Zo simpel is het
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {[
              { step: "01", icon: "🎟️", title: "Kies je festivals", desc: "Voeg de evenementen en festivals toe waar jij naartoe gaat dit seizoen." },
              { step: "02", icon: "👀", title: "Swipe je matches", desc: "Zie wie er ook heen gaat en swipe op mensen die jij interessant vindt." },
              { step: "03", icon: "🔥", title: "Ontmoet elkaar", desc: "Match, chat en spreek een plek af op het festival. Het avontuur begint." },
            ].map((item) => (
              <div key={item.step} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
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
                  opacity: 0.3,
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}>
                  {item.step}
                </span>
                <div style={{ fontSize: "36px", marginBottom: "20px" }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}>
                  {item.title}
                </h3>
                <p style={{ opacity: 0.65, lineHeight: 1.6, fontSize: "15px", fontWeight: 300 }}>
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
        background: "var(--cream-dark)",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            marginBottom: "32px",
          }}>
            {["😍", "🎉", "🥳", "💃", "🕺"].map((emoji, i) => (
              <div key={i} style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "var(--green-light)",
                border: "3px solid var(--cream-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                marginLeft: i > 0 ? "-14px" : "0",
              }}>
                {emoji}
              </div>
            ))}
          </div>

          <div style={{
            fontSize: "clamp(72px, 14vw, 112px)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "var(--green-dark)",
            lineHeight: 1,
            letterSpacing: "-4px",
            marginBottom: "12px",
          }}>
            500+
          </div>
          <p style={{
            fontSize: "20px",
            color: "var(--text-mid)",
            fontWeight: 400,
            marginBottom: "8px",
          }}>
            festival lovers staan al op de wachtlijst
          </p>
          <p style={{
            fontSize: "14px",
            color: "var(--text-mid)",
            opacity: 0.55,
          }}>
            Wees er snel bij — de eerste gebruikers krijgen exclusieve early access.
          </p>
        </div>
      </section>

      {/* Aanmelden */}
      <section id="aanmelden" style={{
        padding: "100px 24px 120px",
        background: "var(--cream)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ fontSize: "13px", letterSpacing: "2px", color: "var(--text-mid)", opacity: 0.5, marginBottom: "16px", fontWeight: 500 }}>
            WACHTLIJST
          </p>
          <h2 style={{
            fontSize: "clamp(32px, 6vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            color: "var(--green-dark)",
            lineHeight: 1.1,
            marginBottom: "16px",
            fontFamily: "'Playfair Display', serif",
          }}>
            Klaar voor het festival van je leven?
          </h2>
          <p style={{
            fontSize: "17px",
            color: "var(--text-mid)",
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
                  border: "2px solid rgba(28,56,41,0.15)",
                  background: "#fff",
                  fontSize: "17px",
                  color: "var(--text-dark)",
                  outline: "none",
                  transition: "border-color 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={e => (e.currentTarget.style.borderColor = "var(--green-mid)")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(28,56,41,0.15)")}
              />

              {error && (
                <p style={{ color: "var(--rose-dark)", fontSize: "14px" }}>{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? "var(--green-light)" : "var(--green-dark)",
                  color: "var(--cream)",
                  padding: "20px",
                  borderRadius: "16px",
                  fontSize: "17px",
                  fontWeight: 600,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  if (!loading) {
                    e.currentTarget.style.background = "var(--green-mid)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = loading ? "var(--green-light)" : "var(--green-dark)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {loading ? "Even geduld..." : "Zet me op de wachtlijst →"}
              </button>

              <p style={{ fontSize: "13px", color: "var(--text-mid)", opacity: 0.45 }}>
                Geen spam. Nooit. Wij haten het zelf ook.
              </p>
            </form>
          ) : (
            <div style={{
              background: "var(--green-dark)",
              color: "var(--cream)",
              borderRadius: "24px",
              padding: "48px 40px",
            }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎉</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 600,
                marginBottom: "12px",
              }}>
                Je staat op de lijst!
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                We laten je als eerste weten wanneer Festiv live gaat. Get ready voor het festival van je leven.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: "var(--green-dark)",
        color: "var(--cream)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "8px",
        }}>
          Festiv
        </p>
        <p style={{ opacity: 0.4, fontSize: "13px" }}>
          © 2025 Festiv. Vind je match op het festival.
        </p>
      </footer>
    </main>
  );
}
