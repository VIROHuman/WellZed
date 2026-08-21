import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import {
  WHY_PRINCIPLES,
  OWNERSHIP_YOURS,
  OWNERSHIP_WELLZED_RETAINS,
  OWNERSHIP_THIRD_PARTIES,
  ACQUISITION_MODELS,
  HOW_WE_BEHAVE,
  CONTROL_DESIGNED_IN,
  CTA,
} from "../data/site.js";

export default function WhyWellZED() {
  return (
    <>
      <SEO
        title="Why WellZED"
        description="Organisation-first, intelligent, adaptable, owned, supported — why WellZED's model differs from off-the-shelf SaaS or a conventional development agency."
      />

      <section className="section">
        <div className="container hero">
          <div>
            <Eyebrow>Why WellZED</Eyebrow>
            <h1 className="mt-16">Your organisation comes first. The technology follows.</h1>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              That principle shapes what we build, how we build it and what happens after launch.
            </p>
            <div className="btn-row mt-24">
              <Link to={CTA.primary.to} className="btn btn-dark">{CTA.primary.label}</Link>
              <Link to="#ownership" className="btn btn-outline">See how ownership works</Link>
            </div>
            <div className="grid grid-3 mt-32">
              <div style={{ borderTop: "2px solid var(--gold-500)", paddingTop: 10 }}>
                <strong>Fit</strong>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}>Start with the organisation.</p>
              </div>
              <div style={{ borderTop: "2px solid var(--gold-500)", paddingTop: 10 }}>
                <strong>Choice</strong>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}>Use technology deliberately.</p>
              </div>
              <div style={{ borderTop: "2px solid var(--gold-500)", paddingTop: 10 }}>
                <strong>Control</strong>
                <p style={{ fontSize: "0.88rem", color: "var(--ink-soft)" }}>Build without artificial lock-in.</p>
              </div>
            </div>
          </div>

          <div className="divider-list">
            {WHY_PRINCIPLES.map((p) => (
              <div key={p.n} style={{ padding: "18px 0" }}>
                <span className="kicker-index">{p.n}</span>
                <h4 className="mt-8">{p.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OWNERSHIP WITHOUT LOCK-IN — centrepiece */}
      <section className="section section--dark" id="ownership">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>A Different Relationship With Software</Eyebrow>
              <h2>Ownership without lock-in.</h2>
            </div>
            <p className="section-head__aside">
              For bespoke builds, ownership is designed into the relationship from the start. The aim is
              control and portability, without preventing WellZED from reusing its own general technology.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card" style={{ background: "var(--white)", color: "var(--ink)" }}>
              <Eyebrow>Yours</Eyebrow>
              <h3 className="mt-16">Your organisation keeps control.</h3>
              <ul className="badge-list mt-24">
                {OWNERSHIP_YOURS.map((o) => (
                  <li key={o.title}>
                    <span className="check">✓</span>
                    <span><strong>{o.title}</strong><br /><span style={{ color: "var(--ink-soft)" }}>{o.detail}</span></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card--dark">
              <Eyebrow>WellZED retains</Eyebrow>
              <h3 className="mt-16">Reusable capability stays reusable.</h3>
              <ul className="badge-list mt-24">
                {OWNERSHIP_WELLZED_RETAINS.map((o) => (
                  <li key={o}><span className="check">•</span><span>{o}</span></li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ background: "var(--gold-500)", color: "var(--navy-900)" }}>
              <span className="eyebrow" style={{ color: "var(--navy-900)" }}>Third parties</span>
              <h3 className="mt-16">Their rights remain theirs.</h3>
              <ul className="badge-list mt-24">
                {OWNERSHIP_THIRD_PARTIES.map((o) => (
                  <li key={o} style={{ color: "rgba(10,30,51,0.8)" }}><span className="check" style={{ background: "var(--navy-900)", color: "var(--gold-400)" }}>•</span><span>{o}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="callout-strip callout-strip--navy mt-32" style={{ background: "var(--navy-700)" }}>
            <h3>Embedded WellZED technology should not become a trap.</h3>
            <p>Where reusable WellZED technology forms part of your purchased solution, the project terms can provide the enduring rights needed to keep operating and maintaining that solution.</p>
          </div>

          <div className="callout-strip callout-strip--gold mt-24">
            <h3>We want you to stay because we continue providing value, not because leaving has been made difficult.</h3>
            <p>Support is a relationship we keep earning.</p>
          </div>
        </div>
      </section>

      {/* CHOOSING THE RIGHT MODEL */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Choosing The Right Model</Eyebrow>
              <h2>Different ways to acquire technology.</h2>
            </div>
            <p className="section-head__aside">There is no single right model. SaaS can be the best answer. Custom development can be the best answer. Our job is to help work out what genuinely fits.</p>
          </div>

          <div className="grid grid-3">
            {ACQUISITION_MODELS.map((m) => (
              <div
                className={`card ${m.highlight ? "card--dark" : ""}`}
                key={m.title}
                style={m.highlight ? { border: "1px solid var(--gold-500)" } : { background: "var(--white)" }}
              >
                <span className="eyebrow" style={m.highlight ? {} : { color: "var(--gold-600)" }}>{m.tag}</span>
                <h3 className="mt-16">{m.title}</h3>
                <div className="mt-24" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {m.rows.map(([label, val]) => (
                    <div key={label} style={{ borderTop: m.highlight ? "1px solid var(--navy-line)" : "1px solid var(--paper-line)", paddingTop: 10 }}>
                      <strong style={{ fontSize: "0.85rem" }}>{label}</strong>
                      <p style={{ fontSize: "0.85rem", color: m.highlight ? "var(--text-on-dark-soft)" : "var(--ink-soft)" }}>{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--cream mt-32" style={{ borderLeft: "3px solid var(--gold-500)" }}>
            <div>
              <h3>If an existing product genuinely fits, building something new may not make sense.</h3>
              <p className="mt-8">Organisation-first means being willing to recommend the smaller, simpler or already-available answer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE BEHAVE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>How We Behave</Eyebrow>
              <h2>Clear. Careful. Accessible. Independent.</h2>
            </div>
            <p className="section-head__aside">The technology matters, but so does the way it is explained, designed and handed over. These principles shape the working relationship as much as the code.</p>
          </div>

          <div className="grid grid-4">
            {HOW_WE_BEHAVE.map((p, i) => (
              <div className="card" key={p.n} style={{ background: i % 2 === 0 ? "var(--cream-100)" : "var(--white)" }}>
                <span className="kicker-index">{p.n}</span>
                <h4 className="mt-16">{p.title}</h4>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--navy mt-32" style={{ flexDirection: "row", alignItems: "stretch" }}>
            <div style={{ flex: 1 }}>
              <Eyebrow>Built With Responsibility In Mind</Eyebrow>
              <h3 className="mt-16">Control should be designed in.</h3>
              <p className="mt-8">Good systems make it clear who can access information, what happens to it and how important actions can be understood later.</p>
            </div>
            <div className="grid grid-2" style={{ flex: 1.2 }}>
              {CONTROL_DESIGNED_IN.map((c) => (
                <div key={c.title} style={{ background: "var(--navy-800)", padding: 18, borderRadius: 14 }}>
                  <strong style={{ fontSize: "0.9rem" }}>{c.title}</strong>
                  <p style={{ fontSize: "0.82rem", marginTop: 6 }}>{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="callout-strip callout-strip--gold mt-32">
            <div>
              <h3>Built around you. Owned by you. Supported by us.</h3>
              <p>Start with the organisation. Let the technology follow.</p>
            </div>
            <Link to={CTA.primary.to} className="btn btn-dark">{CTA.primary.label}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
