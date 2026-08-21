import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { BRAND, CAPABILITIES, CTA } from "../data/site.js";

const ORBIT_CAPS = [
  { title: "Workflow", detail: "Actions, approvals and operations.", pos: "tl" },
  { title: "AI + Knowledge", detail: "Approved knowledge put to work.", pos: "tr" },
  { title: "Portals", detail: "Clear digital processes for people.", pos: "bl" },
  { title: "Insight", detail: "Dashboards, reporting and analysis.", pos: "br" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Intelligent digital assets designed around the way your organisation actually works — built around you, owned by you, supported by us."
      />

      {/* HERO */}
      <section className="section section--dark hero-section">
        <div className="container hero">
          <div>
            <Eyebrow>{BRAND.signature}</Eyebrow>
            <h1 className="mt-16">
              Built around you.
              <br />
              Owned by you.
              <br />
              Supported by us.
            </h1>
            <p className="lede">
              Intelligent digital assets designed around the way your organisation actually works.
            </p>
            <p className="lede mt-8">
              From AI and automation to workflows, portals, dashboards and purpose-built applications.
            </p>
            <div className="btn-row">
              <Link to={CTA.primary.to} className="btn btn-primary">{CTA.primary.label}</Link>
              <Link to="/what-we-build" className="btn btn-outline-light">See what we build</Link>
            </div>
          </div>

          <div className="orbit" aria-hidden="false">
            <div className="orbit__ring" />
            <div className="orbit__center">
              <span className="orbit__center-title">Your organisation</span>
              <span className="orbit__center-sub">Technology fits around it.</span>
            </div>
            {ORBIT_CAPS.map((c) => (
              <div className={`orbit__node orbit__node--${c.pos}`} key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="stat-band mt-48" style={{ borderTop: "1px solid var(--navy-line)", paddingTop: 32 }}>
            <div className="stat-band__item">
              <span className="stat-band__title">Fit</span>
              <span className="stat-band__detail">Start with the organisation, not the product.</span>
            </div>
            <div className="stat-band__item">
              <span className="stat-band__title">Own</span>
              <span className="stat-band__detail">Build capability without artificial lock-in.</span>
            </div>
            <div className="stat-band__item">
              <span className="stat-band__title">Evolve</span>
              <span className="stat-band__detail">Keep improving as your organisation changes.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>What We Build</Eyebrow>
              <h2>Capabilities, not a catalogue.</h2>
            </div>
            <p className="section-head__aside">
              WellZED builds digital assets around the way your organisation works — capabilities can stand
              alone or combine into one coherent digital asset.
            </p>
          </div>

          <div className="grid grid-3">
            {CAPABILITIES.map((cap) => (
              <div className="card" key={cap.key}>
                <h3>{cap.title}</h3>
                <p>{cap.long}</p>
              </div>
            ))}
          </div>

          <div className="btn-row mt-32">
            <Link to="/what-we-build" className="btn btn-dark">See what we build</Link>
          </div>
        </div>
      </section>

      {/* OWNERSHIP CALLOUT */}
      <section className="section section--dark">
        <div className="container">
          <div className="callout-strip callout-strip--navy" style={{ background: "transparent", padding: 0 }}>
            <div>
              <Eyebrow>Ownership</Eyebrow>
              <h2 className="mt-16">Build capability, not dependency.</h2>
              <p className="lede mt-8">Ownership is part of the conversation from the beginning, not an afterthought at handover.</p>
              <div className="btn-row mt-24">
                <Link to="/why-wellzed" className="btn btn-primary">How ownership works</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK PREVIEW */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>How It Starts</Eyebrow>
              <h2>Start with what you want to improve.</h2>
            </div>
            <p className="section-head__aside">You do not need a technical specification. Bring us the situation and we work out the right fit.</p>
          </div>

          <div className="grid grid-4">
            {[
              { n: "01", t: "Understand", d: "Learn how things work today and what you want to achieve." },
              { n: "02", t: "Design", d: "Choose the simplest technology that properly fits the need." },
              { n: "03", t: "Build", d: "Develop, test and refine the agreed digital asset with you." },
              { n: "04", t: "Evolve", d: "Keep improving it with WellZED, internally or elsewhere." },
            ].map((s) => (
              <div className="card card--cream" key={s.n}>
                <span className="kicker-index">{s.n}</span>
                <h4 className="mt-16">{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-2 mt-32" style={{ alignItems: "stretch" }}>
            <div className="card" style={{ background: "var(--white)" }}>
              <Eyebrow>Proven in complex environments</Eyebrow>
              <h3 className="mt-16">WellZED for NDIS</h3>
              <p className="mt-8">
                Our NDIS work has shaped technology for changing rules, high-volume administration, complex
                workflows and the need for accuracy. Explore dedicated products or discuss a bespoke build.
              </p>
              <div className="btn-row mt-24">
                <Link to="/ndis" className="btn btn-outline">Explore WellZED for NDIS</Link>
              </div>
            </div>
            <div className="callout-strip callout-strip--gold" style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
              <h3>Public rules. Private operations.</h3>
              <p className="mt-8">We build around the organisation's own workflows and data while using public NDIS guidance appropriately.</p>
            </div>
          </div>

          <div className="callout-strip callout-strip--cream mt-32">
            <div>
              <h3>Your organisation does not need another piece of software.</h3>
              <p className="mt-8">It needs technology that earns its place.</p>
            </div>
            <Link to={CTA.primary.to} className="btn btn-primary">{CTA.primary.label}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
