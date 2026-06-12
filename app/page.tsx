"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [overOnsOpen, setOverOnsOpen] = useState(false);

  // Intro animation
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Scroll reveal
  const [visible, setVisible] = useState<Set<string>>(new Set());

  // SCROLL indicator verdwijnt na scrollen
  const [hasScrolled, setHasScrolled] = useState(false);


  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 150);
    const t2 = setTimeout(() => setShowSubtitle(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 40) setHasScrolled(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal") ?? "";
            setVisible(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.35 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const navLink = {
    background: "none" as const,
    border: "none",
    cursor: "pointer",
    padding: "8px 12px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#2A1758",
    fontFamily: "'Inter', sans-serif",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block" as const,
    whiteSpace: "nowrap" as const,
  };

  const revealStyle = (id: string) => ({
    opacity: visible.has(id) ? 1 : 0,
    transform: visible.has(id) ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.9s ease, transform 0.9s ease",
  });


  return (
    <main>

      {/* Nav */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: "0 40px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(192,183,234,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(42,23,88,0.1)",
      }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", paddingBottom: "6px" }}>
          <a href="/" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "36px",
            fontWeight: 800,
            color: "#2A1758",
            letterSpacing: "-1px",
            textDecoration: "none",
            marginRight: "16px",
          }}>
            Festiv
          </a>

          {[
            { label: "Meer over Festiv", href: "/meer-over-festiv" },
            { label: "Ervaringen", href: "/ervaringen" },
          ].map(item => (
            <a key={item.label} href={item.href} style={navLink}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              {item.label}
            </a>
          ))}

          <div style={{ position: "relative" }}
            onMouseEnter={() => setOverOnsOpen(true)}
            onMouseLeave={() => setOverOnsOpen(false)}>
            <a href="/over-ons" style={navLink}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              Over ons
            </a>
            {overOnsOpen && (
              <div style={{
                position: "absolute",
                top: "100%", left: 0,
                marginTop: "4px",
                background: "#FFFFFF",
                borderRadius: "12px",
                boxShadow: "0 8px 32px rgba(42,23,88,0.15)",
                padding: "6px",
                width: "max-content",
                zIndex: 300,
              }}>
                {[{ label: "Ons team", href: "/over-ons/ons-team" }, { label: "Werken bij", href: "/over-ons/werken-bij" }].map(item => (
                  <a key={item.label} href={item.href} style={{
                    display: "block",
                    padding: "9px 14px",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#2A1758",
                    textDecoration: "none",
                    borderRadius: "8px",
                    whiteSpace: "nowrap" as const,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(192,183,234,0.35)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/contact" style={navLink}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(42,23,88,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "none")}>
            Contact
          </a>
        </div>

        <a href="#aanmelden" style={{
          background: "#2A1758",
          color: "#FFFFFF",
          padding: "10px 22px",
          borderRadius: "100px",
          fontSize: "14px",
          fontWeight: 700,
          textDecoration: "none",
          flexShrink: 0,
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
          Aanmelden
        </a>
      </nav>

      {/* Hero — intro animatie */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#C0B7EA",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: "30%", left: "50%",
          transform: "translateX(-50%)",
          width: "700px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(80px, 16vw, 160px)",
            fontWeight: 700,
            lineHeight: 0.95,
            color: "#2A1758",
            letterSpacing: "-4px",
            marginBottom: "12px",
            opacity: showTitle ? 1 : 0,
            transform: showTitle ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            Festiv
          </h1>

          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: 400,
            color: "#FFFFFF",
            opacity: showSubtitle ? 1 : 0,
            transform: showSubtitle ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}>
            Voor feestelijke ontmoetingen
          </p>
        </div>

        <div style={{
          position: "absolute",
          bottom: "40px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: hasScrolled ? 0 : showSubtitle ? 0.35 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
          fontSize: "11px",
          letterSpacing: "2px",
          color: "#2A1758",
        }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "36px", background: "#2A1758" }} />
        </div>
      </section>

      {/* Tekst sectie — zelfde achtergrond als hero */}
      <section style={{
        background: "#C0B7EA",
        padding: "160px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div
          data-reveal="tekst"
          style={{
            maxWidth: "480px",
            textAlign: "center",
            ...revealStyle("tekst"),
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 3.5vw, 36px)",
            fontWeight: 500,
            color: "#2A1758",
            lineHeight: 1.65,
          }}>
            Je gaat naar een geweldig festival of evenement met je favoriete mensen. Met Festiv match je van te voren met mensen die ook gaan. Of tijdens. Spreek spontaan af linksvoor bij een stage, of bij dat ene stukje waar je lekker kunt zitten. En wie weet wordt een mooie dag nóg mooier.
          </p>
        </div>
      </section>

      {/* Zo werkt het */}
      <section style={{ background: "#2A1758", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: "64px",
            color: "#FFFFFF",
          }}>
            Zo werkt het
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { step: "01", title: "Kies je evenementen", desc: "Voeg de feesten en festivals toe waar jij naartoe gaat." },
              { step: "02", title: "Swipe je matches", desc: "Zie wie ook gaan en like mensen die jij interessant vindt." },
              { step: "03", title: "Ontmoet elkaar", desc: "Match, chat en spreek spontaan af bij een stage of meet up." },
            ].map(item => (
              <div key={item.step} style={{
                background: "#C0B7EA",
                borderRadius: "24px",
                padding: "40px 32px",
                textAlign: "left",
                position: "relative",
              }}>
                <span style={{ position: "absolute", top: "24px", right: "24px", fontSize: "12px", opacity: 0.3, fontWeight: 700, color: "#FFFFFF" }}>
                  {item.step}
                </span>
                <div style={{ width: "40px", height: "3px", background: "#FFD166", borderRadius: "2px", marginBottom: "24px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.65, fontSize: "15px", fontWeight: 400 }}>
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
            letterSpacing: "-4px",
            marginBottom: "16px",
          }}>
            500+
          </div>
          <p style={{ fontSize: "22px", color: "#2A1758", fontWeight: 700, marginBottom: "8px" }}>
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
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Klaar voor de dag van je leven?
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.6, marginBottom: "40px" }}>
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
                  background: loading ? "rgba(255,209,102,0.5)" : "#FFD166",
                  color: "#2A1758",
                  padding: "20px",
                  borderRadius: "16px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = "0.9"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                {loading ? "Even geduld..." : "Meld je vast aan terwijl wij hard verder bouwen"}
              </button>

              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
                Geen spam. Dat nooit.
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
                width: "56px", height: "56px",
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
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, marginBottom: "12px", color: "#FFFFFF" }}>
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
      <footer style={{ background: "#C0B7EA", borderTop: "1px solid rgba(42,23,88,0.1)", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "#2A1758", marginBottom: "8px" }}>
          Festiv
        </p>
        <p style={{ opacity: 0.45, fontSize: "13px", color: "#2A1758" }}>
          © 2026 Festiv. Vind je match in het echt.
        </p>
      </footer>
    </main>
  );
}
