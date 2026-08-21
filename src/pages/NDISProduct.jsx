import { Link, useParams, Navigate } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { NDIS_PRODUCTS, NDIS_INDEPENDENCE_STATEMENT } from "../data/site.js";

export default function NDISProduct() {
  const { slug } = useParams();
  const product = NDIS_PRODUCTS.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/ndis" replace />;

  const others = NDIS_PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO title={product.name} description={product.short} />

      <section className="section section--dark">
        <div className="container">
          <p style={{ fontSize: "0.82rem", color: "var(--text-on-dark-soft)", marginBottom: 8 }}>
            <Link to="/ndis">NDIS</Link> / {product.name}
          </p>
          <Eyebrow>{product.tag}</Eyebrow>
          <h1 className="mt-16" style={{ maxWidth: "18ch" }}>{product.name}</h1>
          <p className="lede mt-16">{product.long}</p>
          <div className="btn-row mt-24">
            <Link to="/contact" className="btn btn-primary">Book a demo</Link>
            <Link to="/ndis" className="btn btn-outline-light">Back to NDIS products</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "flex-start" }}>
          <div>
            <Eyebrow>What it does</Eyebrow>
            <h2 className="mt-16">Built for {product.audience.replace(/^For /i, "")}.</h2>
            <ul className="badge-list mt-24">
              {product.features.map((f) => (
                <li key={f}><span className="check">✓</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="card card--dark">
            <h3>Public information, applied carefully</h3>
            <p className="mt-8">
              Where this product uses NDIS pricing, support catalogue or scheme information, WellZED
              organises and applies public material — it does not claim ownership of the underlying rules
              or guidance.
            </p>
            <div className="btn-row mt-24">
              <Link to="/contact" className="btn btn-primary">Book a demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Explore More</Eyebrow>
              <h2>Other WellZED NDIS products.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {others.map((p) => (
              <div className="card" key={p.slug} style={{ background: "var(--white)" }}>
                <span className="eyebrow" style={{ color: "var(--gold-600)" }}>{p.tag}</span>
                <h4 className="mt-16">{p.name}</h4>
                <p>{p.short}</p>
                <Link to={`/ndis/products/${p.slug}`} style={{ fontWeight: 700, fontSize: "0.88rem", display: "inline-block", marginTop: 16 }}>View product →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <p style={{ fontSize: "0.8rem", color: "var(--ink-soft)", maxWidth: "80ch" }}>
            {NDIS_INDEPENDENCE_STATEMENT.main} {NDIS_INDEPENDENCE_STATEMENT.sub}
          </p>
        </div>
      </section>
    </>
  );
}
