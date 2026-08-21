import { useState } from "react";
import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import { CONTACT_REASONS, CONTACT_NEXT_STEPS, NDIS_PRODUCTS, BRAND } from "../data/site.js";

export default function Contact() {
  const [reason, setReason] = useState("build");
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // --- Mailto fallback ---------------------------------------------------
    // For production, swap this handler for a fetch() call to your backend
    // (e.g. POST /api/contact) or a form service (Formspree, AWS SES via
    // API Gateway/Lambda, etc). Keeping the same field names is enough.
    const subject = encodeURIComponent(`WellZED enquiry — ${form.name || "New contact"}`);
    const lines = [
      `Name: ${form.name}`,
      `Organisation: ${form.organisation}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `What brings you here: ${CONTACT_REASONS.find((r) => r.key === reason)?.title}`,
      reason === "ndis-product" ? `Product of interest: ${form.product || "-"}` : null,
      "",
      "Message:",
      form.message,
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <SEO title="Contact" description="Start with the situation. Tell WellZED what you're trying to improve, simplify or explore — you don't need a technical specification." />

      <section className="section section--cream">
        <div className="container grid grid-2" style={{ alignItems: "flex-start", gap: 48 }}>
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-16">Start with the situation.</h1>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              You don't need to know what to build yet. Tell us what you're trying to improve, simplify or explore.
            </p>

            <div className="divider-list mt-32">
              {CONTACT_REASONS.map((r, i) => (
                <div key={r.key} style={{ display: "flex", gap: 16, padding: "18px 0" }}>
                  <span className="kicker-index" style={{ minWidth: 24 }}>{i + 1}</span>
                  <div>
                    <h4>{r.title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>{r.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="card card--dark contact-form" onSubmit={handleSubmit}>
            <h3>What are you trying to achieve?</h3>
            <p style={{ fontSize: "0.85rem", marginTop: 4 }}>A few lines are enough to start.</p>

            <div className="grid grid-2 mt-24">
              <label className="field">
                <span>Your name</span>
                <input required type="text" placeholder="Name" value={form.name} onChange={update("name")} />
              </label>
              <label className="field">
                <span>Organisation</span>
                <input type="text" placeholder="Organisation" value={form.organisation} onChange={update("organisation")} />
              </label>
            </div>

            <div className="grid grid-2 mt-16">
              <label className="field">
                <span>Email</span>
                <input required type="email" placeholder="you@organisation.com.au" value={form.email} onChange={update("email")} />
              </label>
              <label className="field">
                <span>Phone (optional)</span>
                <input type="tel" placeholder="Phone" value={form.phone} onChange={update("phone")} />
              </label>
            </div>

            <div className="mt-24">
              <span className="field-label">What brings you here?</span>
              <div className="reason-toggle mt-8">
                {CONTACT_REASONS.map((r) => (
                  <button
                    type="button"
                    key={r.key}
                    className={`reason-toggle__btn ${reason === r.key ? "is-active" : ""}`}
                    onClick={() => setReason(r.key)}
                  >
                    {r.title}
                  </button>
                ))}
              </div>
            </div>

            {reason === "ndis-product" && (
              <label className="field mt-16">
                <span>Which product are you interested in?</span>
                <select value={form.product} onChange={update("product")}>
                  <option value="">Select a product</option>
                  {NDIS_PRODUCTS.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                </select>
              </label>
            )}

            <label className="field mt-16">
              <span>Tell us a little about it</span>
              <textarea
                rows={4}
                placeholder="What are you trying to improve, simplify or explore?"
                value={form.message}
                onChange={update("message")}
              />
            </label>

            <div className="mt-24" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
              <button type="submit" className="btn btn-primary">Send enquiry</button>
              <p style={{ fontSize: "0.78rem", maxWidth: "32ch" }}>
                We use this information to respond to your enquiry. See our{" "}
                <Link to="/privacy" style={{ color: "var(--gold-400)", textDecoration: "underline" }}>Privacy Policy</Link>{" "}
                for how we handle personal information.
              </p>
            </div>

            {sent && (
              <p role="status" style={{ marginTop: 16, fontSize: "0.85rem", color: "var(--gold-400)" }}>
                Thanks — your email client should now be open with your enquiry ready to send. Prefer to
                write directly? Email {BRAND.email}.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="section--tight">
        <div className="container grid grid-2" style={{ gap: 32 }}>
          <div className="card">
            <Eyebrow>What Happens Next</Eyebrow>
            <h3 className="mt-16">A conversation before a specification.</h3>
            <hr className="rule mt-16" />
            <div className="grid grid-3 mt-24">
              {CONTACT_NEXT_STEPS.map((s) => (
                <div key={s.n}>
                  <span className="kicker-index">{s.n}</span>
                  <h4 className="mt-8">{s.title}</h4>
                  <p style={{ fontSize: "0.86rem", color: "var(--ink-soft)" }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card card--cream">
            <Eyebrow>Direct</Eyebrow>
            <h3 className="mt-16">Prefer to reach us directly?</h3>
            <div className="mt-24">
              <span className="eyebrow" style={{ color: "var(--gold-600)" }}>Email</span>
              <p className="mt-8"><a href={`mailto:${BRAND.email}`} style={{ fontWeight: 700 }}>{BRAND.email}</a></p>
            </div>
            <div className="mt-24">
              <span className="eyebrow" style={{ color: "var(--gold-600)" }}>Based in</span>
              <p className="mt-8" style={{ fontWeight: 700 }}>{BRAND.location}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
