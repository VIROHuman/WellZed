import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import {
  PROCESS_STAGES,
  BUILD_ROUTES,
  DESIGN_FIT_ITEMS,
  DECISION_GATE_ITEMS,
  BUILD_VISIBLY_STEPS,
  TEST_TAGS,
  HANDOVER_ITEMS,
  EVOLVE_ITEMS,
  ENGAGEMENT_MODELS,
  CTA,
} from "../data/site.js";

export default function HowWeWork() {
  return (
    <>
      <SEO
        title="How We Work"
        description="Understand, Design, Build, Evolve — how WellZED engages, from first conversation through to ownership handover and ongoing support."
      />

      {/* HERO WITH TIMELINE SPINE */}
      <section className="section section--cream">
        <div className="container hero">
          <div>
            <Eyebrow>How We Work</Eyebrow>
            <h1 className="mt-16">You don't need a specification. Start with the need.</h1>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              Bring us the outcome, the friction or the idea. We help work out what should change, whether
              anything new needs to be built, and the simplest way to get there.
            </p>
            <div className="btn-row mt-24">
              <Link to={CTA.primary.to} className="btn btn-dark">{CTA.primary.label}</Link>
              <Link to="/what-we-build" className="btn btn-outline">See what we build</Link>
            </div>
          </div>

          <div className="timeline-spine">
            <div className="timeline-spine__line" />
            {PROCESS_STAGES.map((s) => (
              <div className="timeline-spine__item" key={s.n}>
                <span className="timeline-spine__dot">{s.n}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
            <strong style={{ color: "var(--ink)" }}>Four stages. One clear path.</strong> The technology comes after the understanding.
          </p>
        </div>
      </section>

      {/* ORGANISATION FIRST — BUILD ROUTES */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Organisation First</Eyebrow>
              <h2>Build only when building makes sense.</h2>
            </div>
            <p className="section-head__aside">Sometimes the right answer is not new software. We look at the need first, then choose the route that best fits the organisation.</p>
          </div>

          <div className="grid grid-3">
            {BUILD_ROUTES.slice(0, 3).map((r) => (
              <div className="card card--dark" key={r.n}>
                <span className="kicker-index">{r.n}</span>
                <h4 className="mt-16">{r.title}</h4>
                <p>{r.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-3 mt-24" style={{ maxWidth: "66%" }}>
            {BUILD_ROUTES.slice(3).map((r) => (
              <div className="card card--dark" key={r.n}>
                <span className="kicker-index">{r.n}</span>
                <h4 className="mt-16">{r.title}</h4>
                <p>{r.detail}</p>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--gold mt-32">
            <h3>Technology follows the requirement.</h3>
            <p>The best answer is the one that fits your organisation, not the one that creates the biggest project.</p>
          </div>
        </div>
      </section>

      {/* BEFORE WE BUILD — DESIGN */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Before We Build</Eyebrow>
              <h2>Agree the path before the build.</h2>
            </div>
            <p className="section-head__aside">Design should reduce uncertainty. Before development begins, you should know what is being built, what it will cost and what ownership looks like.</p>
          </div>

          <div className="grid grid-2">
            <div className="card card--cream">
              <Eyebrow>Design the simplest fit</Eyebrow>
              <h3 className="mt-16">Enough structure to build well. No unnecessary complexity.</h3>
              <div className="grid grid-2 mt-24">
                {DESIGN_FIT_ITEMS.map((item) => (
                  <div key={item} className="tag" style={{ background: "var(--white)", justifyContent: "flex-start" }}>{item}</div>
                ))}
              </div>
            </div>

            <div className="card card--dark">
              <Eyebrow>Decision gate</Eyebrow>
              <h3 className="mt-16">Before Build, we agree:</h3>
              <div className="grid grid-2 mt-24">
                {DECISION_GATE_ITEMS.map((item) => (
                  <div key={item} className="tag" style={{ background: "var(--navy-600)", justifyContent: "flex-start" }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURING THE BUILD */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>During The Build</Eyebrow>
              <h2>Build visibly.</h2>
            </div>
            <p className="section-head__aside">You should be able to see where the project is going and influence the outcome before too much is built around the wrong assumption.</p>
          </div>

          <div className="grid grid-4">
            {BUILD_VISIBLY_STEPS.map((s) => (
              <div className="card" key={s.n}>
                <span className="kicker-index">{s.n}</span>
                <h4 className="mt-16">{s.title}</h4>
                <p>{s.detail}</p>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--cream mt-32" style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <h3>Test what matters in the real world.</h3>
            <p className="mt-8">Not just whether the code runs.</p>
            <div className="tag-row mt-16">
              {TEST_TAGS.map((t) => (
                <span className="tag" key={t} style={{ background: "var(--white)" }}>{t}</span>
              ))}
            </div>
          </div>
          <p className="mt-16" style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>
            <strong style={{ color: "var(--ink)" }}>Changes are normal. Surprises shouldn't be.</strong> If scope changes, we explain the cost and timing impact before the change is made.
          </p>
        </div>
      </section>

      {/* LAUNCH AND HANDOVER */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Launch And Handover</Eyebrow>
              <h2>Go live with the keys.</h2>
            </div>
            <p className="section-head__aside">A bespoke asset should not become a black box that only its original developer can operate.</p>
          </div>

          <div className="grid grid-2">
            <div className="card" style={{ background: "var(--white)", color: "var(--ink)" }}>
              <Eyebrow>Handover</Eyebrow>
              <h3 className="mt-16">Make ownership practical.</h3>
              <p className="mt-8" style={{ color: "var(--ink-soft)" }}>
                What is handed over depends on the project, but the principle is simple: you should have what
                you need to operate and move your bespoke asset.
              </p>
              <div className="grid grid-2 mt-24">
                {HANDOVER_ITEMS.map((h) => (
                  <div key={h.title} style={{ borderTop: "1px solid var(--paper-line)", paddingTop: 12 }}>
                    <strong style={{ fontSize: "0.9rem" }}>{h.title}</strong>
                    <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)" }}>{h.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card card--dark">
              <Eyebrow>What happens next</Eyebrow>
              <h3 className="mt-16">Evolve if and when you want to.</h3>
              <div className="grid grid-2 mt-24">
                {EVOLVE_ITEMS.map((e) => (
                  <div key={e.title} style={{ borderTop: "1px solid var(--navy-line)", paddingTop: 12 }}>
                    <strong style={{ fontSize: "0.9rem" }}>{e.title}</strong>
                    <p style={{ fontSize: "0.85rem" }}>{e.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-16" style={{ fontSize: "0.85rem" }}>
                Or manage the asset internally, or with another provider. Ongoing WellZED support is available, not compulsory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Stay with WellZED because we keep adding value, not because you have to.</h2>
            </div>
            <p className="section-head__aside">Ownership, portability and support are designed as parts of the relationship from the beginning.</p>
          </div>

          <div className="grid grid-4">
            {ENGAGEMENT_MODELS.map((m) => (
              <div className="card card--dark" key={m.title}>
                <h4>{m.title}</h4>
                <p>{m.detail}</p>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--gold mt-32">
            <div>
              <h3>You bring the need. We help shape the next step.</h3>
              <p>Start with the situation, not the software specification.</p>
            </div>
            <Link to={CTA.primary.to} className="btn btn-dark">{CTA.primary.label}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
