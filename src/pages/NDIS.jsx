import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { NDIS_PRODUCTS, NDIS_INDEPENDENCE_STATEMENT, NDIS_UPDATES } from "../data/site.js";

const OPERATIONAL_LAYER = [
  { label: "Public", detail: "Pricing, support catalogue, guidance and scheme information." },
  { label: "Your org", detail: "Workflows, controls, data and approved internal knowledge." },
  { label: "WellZED", detail: "Products and bespoke digital assets that connect the two." },
];

const BEYOND_SUITE = [
  { title: "AI & Knowledge", detail: "Approved knowledge assistants, search and AI-supported reporting." },
  { title: "Workflow & Operations", detail: "Track work, events, approvals, actions and exceptions." },
  { title: "Portals & Onboarding", detail: "Digital forms, submissions, documents and approvals." },
  { title: "Dashboards", detail: "Operational visibility, trends, exceptions and management views." },
  { title: "Automation & Integration", detail: "Connect systems and remove repetitive handling." },
  { title: "Purpose-built Applications", detail: "Complete applications when off-the-shelf does not fit." },
];

const OPERATIONAL_NEEDS = [
  { title: "Invoicing", detail: "Structure, validation and exceptions" },
  { title: "Budgets", detail: "Planning, utilisation and visibility" },
  { title: "Pricing", detail: "Public catalogue and price information" },
  { title: "Workflow", detail: "Actions, approvals and operational control" },
  { title: "Knowledge", detail: "Public guidance + approved internal content" },
  { title: "Reporting", detail: "Operational data into useful information" },
];

export default function NDIS() {
  return (
    <>
      <SEO
        title="WellZED for NDIS"
        description="Technology built for the realities of the NDIS — invoicing, budgets, pricing, workflows and operational systems, built on public NDIS information."
      />

      {/* HERO */}
      <section className="section section--dark">
        <div className="container hero" style={{ gridTemplateColumns: "1.15fr 0.85fr" }}>
          <div>
            <Eyebrow>WellZED for NDIS</Eyebrow>
            <h1 className="mt-16">Technology built for the realities of the NDIS.</h1>
            <p className="lede mt-16">
              WellZED combines sector understanding with digital capability across invoicing, budgets,
              pricing, workflows and operational systems.
            </p>
            <div className="btn-row mt-24">
              <Link to="#products" className="btn btn-primary">Explore NDIS products</Link>
              <Link to="/contact" className="btn btn-outline-light">Discuss a custom build</Link>
            </div>
            <div className="tag-row mt-32">
              <span className="tag">Public NDIS information stays public</span>
              <span className="tag">Client data stays client-controlled</span>
              <span className="tag">Independent of the NDIA</span>
            </div>
          </div>

          <div className="card card--dark">
            <h4>NDIS operational layer</h4>
            <div className="divider-list mt-24">
              {OPERATIONAL_LAYER.map((l) => (
                <div key={l.label} style={{ padding: "14px 0", display: "flex", gap: 16 }}>
                  <strong style={{ minWidth: 84, fontSize: "0.85rem", color: "var(--gold-400)" }}>{l.label.toUpperCase()}</strong>
                  <p style={{ fontSize: "0.88rem" }}>{l.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO WAYS TO WORK */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Two Ways To Work With Us</Eyebrow>
              <h2>Use what exists. Or build what fits.</h2>
            </div>
            <p className="section-head__aside">Choose a WellZED product for a common NDIS task, or build a bespoke digital asset around your organisation.</p>
          </div>

          <div className="grid grid-2">
            <div className="card" style={{ background: "var(--white)", borderLeft: "4px solid var(--gold-500)" }}>
              <Eyebrow>WellZED Product</Eyebrow>
              <h3 className="mt-16">Use a purpose-built NDIS tool.</h3>
              <p className="mt-8">
                Ready-made WellZED products for recurring NDIS tasks such as invoicing, budgets, pricing and
                location-based claiming.
              </p>
              <hr className="rule mt-16" />
              <p className="mt-16" style={{ fontSize: "0.85rem" }}>Standard WellZED products remain WellZED IP and are provided under their product terms.</p>
            </div>
            <div className="card" style={{ background: "var(--white)", borderLeft: "4px solid var(--navy-700)" }}>
              <Eyebrow>Bespoke Build</Eyebrow>
              <h3 className="mt-16">Build around your organisation.</h3>
              <p className="mt-8">
                When the workflow does not fit an existing product, combine AI, portals, dashboards,
                automation and purpose-built applications around the need.
              </p>
              <hr className="rule mt-16" />
              <p className="mt-16" style={{ fontSize: "0.85rem" }}>Bespoke builds follow the WellZED ownership model agreed for the project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>NDIS Product Suite</Eyebrow>
              <h2>Tools for work the sector does every day.</h2>
            </div>
            <p className="section-head__aside">Built around public NDIS pricing and support information, with each product focused on a specific operational task.</p>
          </div>

          <div className="tag-row mt-8" style={{ marginBottom: 32 }}>
            {["Rules evolve", "Prices change", "Claims are detailed", "Budgets matter", "Admin compounds"].map((t) => (
              <span className="tag" key={t} style={{ background: "var(--navy-800)", color: "var(--white)", borderColor: "var(--navy-800)" }}>{t}</span>
            ))}
          </div>

          <div className="grid grid-2">
            {NDIS_PRODUCTS.map((p) => (
              <div className="card" key={p.slug}>
                <span className="eyebrow" style={{ color: "var(--gold-600)" }}>{p.tag}</span>
                <h3 className="mt-16">{p.name}</h3>
                <p className="mt-8">{p.short}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--ink-soft)", fontWeight: 600 }}>{p.audience}</span>
                  <Link to={`/ndis/products/${p.slug}`} style={{ fontWeight: 700, fontSize: "0.88rem" }}>View product →</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="callout-strip callout-strip--navy mt-32">
            <h3>One public information base. Multiple focused tools.</h3>
            <p>Where products use NDIS pricing, support catalogue or scheme information, WellZED organises and applies public material. It does not claim ownership of the underlying rules or guidance.</p>
          </div>
        </div>
      </section>

      {/* BEYOND THE PRODUCT SUITE */}
      <section className="section section--cream">
        <div className="container grid grid-2" style={{ alignItems: "flex-start" }}>
          <div>
            <Eyebrow>Beyond The Product Suite</Eyebrow>
            <h2 className="mt-16">Need something that doesn't exist yet?</h2>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              Start with the operational need. WellZED can combine capabilities into a bespoke digital asset
              for your organisation.
            </p>
            <div className="btn-row mt-24">
              <Link to="/contact" className="btn btn-dark">Discuss a custom build</Link>
            </div>
          </div>
          <div className="grid grid-2">
            {BEYOND_SUITE.map((b) => (
              <div className="card" key={b.title} style={{ background: "var(--white)" }}>
                <h4>{b.title}</h4>
                <p>{b.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container grid grid-2 mt-32">
          <div className="card" style={{ background: "var(--cream-100)", border: "1px solid var(--paper-line)" }}>
            <Eyebrow>Public Stays Public</Eyebrow>
            <h3 className="mt-16">NDIS rules are not proprietary knowledge.</h3>
            <p className="mt-8">Legislation, NDIA guidance, pricing arrangements, support catalogues and other public NDIS material remain public information.</p>
            <ul className="badge-list mt-24">
              <li><span className="check">✓</span><span>WellZED may organise, search, analyse or apply public material within a tool.</span></li>
              <li><span className="check">✓</span><span>Neither WellZED nor a client gains ownership of public NDIS rules by using them in a system.</span></li>
              <li><span className="check">✓</span><span>Sources and update processes should remain transparent where public information drives functionality.</span></li>
            </ul>
          </div>
          <div className="card card--dark">
            <Eyebrow>Your Organisation Stays Yours</Eyebrow>
            <h3 className="mt-16">The value is in how it works for you.</h3>
            <p className="mt-8">Your workflows, controls, business data and approved internal knowledge are different from the public rules around them.</p>
            <ul className="badge-list mt-24">
              <li><span className="check">✓</span><span>Your organisational data remains client-controlled.</span></li>
              <li><span className="check">✓</span><span>Bespoke client IP can be owned under the agreed WellZED project terms.</span></li>
              <li><span className="check">✓</span><span>Public information can be combined with internal knowledge without blurring who owns what.</span></li>
            </ul>
          </div>
        </div>

        <div className="container text-center mt-32">
          <p style={{ fontWeight: 700 }}>Public information + your operational context + the right digital design.</p>
          <p className="mt-8" style={{ color: "var(--ink-soft)", maxWidth: "56ch", margin: "8px auto 0" }}>
            That distinction keeps the ownership promise accurate while still allowing WellZED to build genuinely useful NDIS technology.
          </p>
        </div>
      </section>

      {/* BUILT FROM OPERATIONAL NEEDS */}
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <Eyebrow>Built From Operational Needs</Eyebrow>
            <h2 className="mt-16">Our NDIS work began with the work itself.</h2>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              Invoices, budgets, pricing, workflows, reporting and administration created the need. The
              technology followed.
            </p>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              That is the same organisation-first approach WellZED now applies across every sector we work in.
            </p>
          </div>
          <div className="card card--dark">
            <div className="divider-list">
              {OPERATIONAL_NEEDS.map((n) => (
                <div key={n.title} style={{ padding: "14px 0", display: "flex", gap: 16, justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "0.9rem" }}>{n.title}</strong>
                  <p style={{ fontSize: "0.85rem", textAlign: "right", maxWidth: "26ch" }}>{n.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NDIS UPDATES PREVIEW */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>NDIS Updates</Eyebrow>
              <h2>Keep the sector content where it belongs.</h2>
            </div>
            <Link to="/ndis/updates" className="btn btn-outline">View NDIS updates</Link>
          </div>
          <div className="grid grid-3">
            {NDIS_UPDATES.map((u) => (
              <div className="card" key={u.slug} style={{ background: "var(--white)" }}>
                <span className="eyebrow" style={{ color: "var(--gold-600)" }}>{u.category}</span>
                <h4 className="mt-16">{u.title}</h4>
                <p>{u.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="section section--dark">
        <div className="container callout-strip callout-strip--navy" style={{ background: "var(--navy-700)" }}>
          <div>
            <Eyebrow>Working In The NDIS?</Eyebrow>
            <h3 className="mt-16">Use a product. Or build what fits.</h3>
            <p className="mt-8">Start with the task you want to make easier.</p>
          </div>
          <div className="btn-row">
            <Link to="#products" className="btn btn-primary">Explore NDIS products</Link>
            <Link to="/contact" className="btn btn-outline-light">Start a conversation</Link>
          </div>
        </div>

        <div className="container mt-24">
          <p style={{ fontSize: "0.8rem", color: "var(--text-on-dark-soft)", maxWidth: "80ch" }}>
            {NDIS_INDEPENDENCE_STATEMENT.main} {NDIS_INDEPENDENCE_STATEMENT.sub}
          </p>
        </div>
      </section>
    </>
  );
}
