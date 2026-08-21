import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { NDIS_UPDATES } from "../data/site.js";

const dateFmt = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

export default function NDISUpdates() {
  return (
    <>
      <SEO title="NDIS Updates" description="Plain-language NDIS scheme, pricing and WellZED product updates, clearly separated from WellZED's own opinion." />

      <section className="section">
        <div className="container page-hero">
          <div>
            <p style={{ fontSize: "0.82rem", color: "var(--ink-soft)", marginBottom: 8 }}>
              <Link to="/ndis">NDIS</Link> / Updates
            </p>
            <Eyebrow>NDIS Updates</Eyebrow>
            <h1>Keep the sector content where it belongs.</h1>
          </div>
          <p className="page-hero__aside">
            Industry and scheme information, WellZED's interpretation, and WellZED product updates are kept
            clearly separate, never blurred together.
          </p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="grid grid-3">
            {NDIS_UPDATES.map((u) => (
              <Link to={`/ndis/updates/${u.slug}`} className="card" key={u.slug} style={{ display: "block" }}>
                <span className="eyebrow" style={{ color: "var(--gold-600)" }}>{u.category}</span>
                <h3 className="mt-16">{u.title}</h3>
                <p className="mt-8">{u.summary}</p>
                <p className="mt-16" style={{ fontSize: "0.8rem", color: "var(--ink-soft)" }}>{dateFmt(u.date)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
