import { Link } from "react-router-dom";
import { Eyebrow, SEO } from "../components/UI.jsx";
import {
  CAPABILITIES,
  TECH_STACK,
  CTA,
} from "../data/site.js";

const EXAMPLES = [
  { title: "AI Knowledge Assistant", detail: "Search approved organisational knowledge, surface answers and support everyday decisions." },
  { title: "Operational Tracker", detail: "Track work, relationships, actions, exceptions and responsibilities in one place." },
  { title: "Digital Onboarding", detail: "Capture information, documents, approvals and acknowledgements through a structured workflow." },
  { title: "Claims & Reimbursement Workflow", detail: "Collect submissions, validate information, route approvals and maintain an audit trail." },
  { title: "Workflow Dashboard", detail: "See status, bottlenecks, priorities and exceptions as work moves through the organisation." },
  { title: "Analytics & AI Reporting", detail: "Turn operational information into summaries, trends and useful management reporting." },
];

const SITUATIONS = [
  "The process that takes too long",
  "The spreadsheet that has become too important",
  "The information nobody can easily find",
  "The systems that do not quite work together",
  "The report that takes hours",
  "The idea you want to explore",
];

export default function WhatWeBuild() {
  return (
    <>
      <SEO
        title="What We Build"
        description="Capability areas WellZED combines into bespoke digital assets: AI & knowledge, workflow, portals, dashboards, automation and purpose-built applications."
      />

      <section className="section">
        <div className="container page-hero">
          <div>
            <Eyebrow>Capabilities, not a catalogue</Eyebrow>
            <h1>Your workflow isn't off-the-shelf. Your software shouldn't be either.</h1>
            <p className="lede mt-16">WellZED builds digital assets around the way your organisation works.</p>
            <div className="btn-row mt-24">
              <Link to={CTA.primary.to} className="btn btn-dark">{CTA.primary.label}</Link>
              <Link to="/how-we-work" className="btn btn-outline">See how we work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="grid grid-3">
            {CAPABILITIES.map((cap, i) => (
              <div className="card" key={cap.key}>
                <span className="kicker-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-16">{cap.title}</h3>
                <p>{cap.long}</p>
              </div>
            ))}
          </div>
          <p className="mt-24 max-w-prose" style={{ color: "var(--ink-soft)" }}>
            Not sure which box you fit into? That's fine. Start with the need.
          </p>
        </div>
      </section>

      {/* HOW CAPABILITIES COMBINE */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>How Capabilities Combine</Eyebrow>
              <h2>One need rarely fits one box.</h2>
            </div>
            <p className="section-head__aside">The right digital asset may combine several capabilities into one connected experience.</p>
          </div>

          <div className="combine-diagram">
            <div className="combine-diagram__node combine-diagram__node--tl card--dark card">
              <h4>Portal</h4>
              <p>Collect information and documents.</p>
            </div>
            <div className="combine-diagram__node combine-diagram__node--tc card--dark card">
              <h4>AI &amp; Knowledge</h4>
              <p>Answer common questions from approved material.</p>
            </div>
            <div className="combine-diagram__node combine-diagram__node--tr card--dark card">
              <h4>Integration</h4>
              <p>Move approved information into existing systems.</p>
            </div>
            <div className="combine-diagram__center">
              <strong>Digital Onboarding</strong>
              <span>One digital asset</span>
            </div>
            <div className="combine-diagram__node combine-diagram__node--bl card--dark card">
              <h4>Workflow</h4>
              <p>Route reviews, approvals and tasks.</p>
            </div>
            <div className="combine-diagram__node combine-diagram__node--br card--dark card">
              <h4>Dashboard</h4>
              <p>Show progress, exceptions and completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Examples</Eyebrow>
              <h2>What this can look like in practice.</h2>
            </div>
            <p className="section-head__aside">These are examples of capability, not a fixed product catalogue.</p>
          </div>
          <div className="grid grid-3">
            {EXAMPLES.map((ex, i) => (
              <div className={`card ${i % 3 === 0 ? "card--cream" : ""}`} key={ex.title}>
                <h3>{ex.title}</h3>
                <p>{ex.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START WITH THE NEED */}
      <section className="section section--cream section--tight">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Start With The Need</Eyebrow>
              <h2>You don't need a technical specification.</h2>
            </div>
            <p className="section-head__aside">Bring us the situation. We help work out what, if anything, should be built.</p>
          </div>
          <div className="grid grid-3">
            {SITUATIONS.map((s) => (
              <div className="tag" key={s} style={{ justifyContent: "flex-start", padding: "16px 20px", borderRadius: "var(--radius-md)", background: "var(--white)" }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK / OWNERSHIP */}
      <section className="section">
        <div className="container grid grid-2">
          <div>
            <Eyebrow>Technology Follows The Requirement</Eyebrow>
            <h2 className="mt-16">The stack is a means, not the offer.</h2>
            <p className="lede mt-16" style={{ color: "var(--ink-soft)" }}>
              We choose technology around the requirement, existing environment and long-term maintainability.
            </p>
            <div className="tag-row mt-24">
              {TECH_STACK.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="card--dark card">
            <Eyebrow>Ownership</Eyebrow>
            <h3 className="mt-16">Built for your organisation. Built to become part of it.</h3>
            <p className="mt-8">
              For bespoke builds, ownership is designed into the relationship. Your data stays yours, your
              freedom to move is preserved, and reusable WellZED technology is licensed where needed.
            </p>
            <div className="btn-row mt-24">
              <Link to="/why-wellzed" className="btn btn-primary">How ownership works</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container callout-strip callout-strip--cream">
          <div>
            <h3>Start with what you want to improve.</h3>
            <p className="mt-8">You do not need to know what technology you need yet.</p>
          </div>
          <Link to={CTA.primary.to} className="btn btn-primary">{CTA.primary.label}</Link>
        </div>
      </section>
    </>
  );
}
