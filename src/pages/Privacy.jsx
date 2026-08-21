import { SEO, Eyebrow } from "../components/UI.jsx";
import { BRAND } from "../data/site.js";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How WellZED collects, uses and protects personal information." />
      <section className="section">
        <div className="container" style={{ maxWidth: "76ch" }}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-16">Privacy Policy</h1>
          <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>Last updated: 21 August 2026</p>

          <div className="legal-copy mt-32">
            <p>
              This Privacy Policy explains how {BRAND.name} ("WellZED", "we", "us") collects, uses, discloses
              and protects personal information in connection with our website and our own business
              operations as a software and digital services company.
            </p>

            <h2>What this policy covers</h2>
            <p>
              This policy governs WellZED's own handling of personal information — for example, information
              submitted through our contact form, or collected when you correspond with us by email. Where
              WellZED builds or operates a system on behalf of another organisation, that organisation's own
              privacy notices, and any contractual privacy arrangements between WellZED and that
              organisation, may also apply to information handled within that system.
            </p>

            <h2>Information we collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul>
              <li>your name, organisation, email address and phone number, where you provide them;</li>
              <li>details you share about what you are trying to achieve, improve or explore; and</li>
              <li>any other information you choose to include in correspondence with us.</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>respond to your enquiry and communicate with you about it;</li>
              <li>understand your situation well enough to have a useful conversation; and</li>
              <li>maintain records of our correspondence for legitimate business purposes.</li>
            </ul>

            <h2>Disclosure of information</h2>
            <p>
              We do not sell personal information. We may disclose personal information to trusted service
              providers who help us operate our business (for example, email or hosting providers), and
              where required by law.
            </p>

            <h2>Data security</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, interference, loss and
              unauthorised access, modification or disclosure.
            </p>

            <h2>Access and correction</h2>
            <p>
              You may ask us to access, correct or delete personal information we hold about you by
              contacting us at <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
            </p>

            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: 32 }}>
              This page is a general-purpose starting point and is not legal advice. Review it with your
              legal advisor before relying on it, particularly regarding requirements under the Privacy Act
              1988 (Cth) and the Australian Privacy Principles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
