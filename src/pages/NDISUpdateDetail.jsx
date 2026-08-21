import { Link, useParams, Navigate } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { NDIS_UPDATES } from "../data/site.js";

const dateFmt = (iso) =>
  new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });

export default function NDISUpdateDetail() {
  const { slug } = useParams();
  const update = NDIS_UPDATES.find((u) => u.slug === slug);

  if (!update) return <Navigate to="/ndis/updates" replace />;

  return (
    <>
      <SEO title={update.title} description={update.summary} />

      <section className="section">
        <div className="container" style={{ maxWidth: "72ch", marginLeft: 0 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--ink-soft)", marginBottom: 8 }}>
            <Link to="/ndis">NDIS</Link> / <Link to="/ndis/updates">Updates</Link>
          </p>
          <Eyebrow>{update.category}</Eyebrow>
          <h1 className="mt-16">{update.title}</h1>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: 12 }}>{dateFmt(update.date)}</p>
          <p className="lede mt-24" style={{ color: "var(--ink-soft)", maxWidth: "70ch" }}>{update.body}</p>

          <div className="btn-row mt-32">
            <Link to="/ndis/updates" className="btn btn-outline">Back to updates</Link>
            <Link to="/contact" className="btn btn-dark">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
