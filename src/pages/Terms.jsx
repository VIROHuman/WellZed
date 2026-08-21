import { SEO, Eyebrow } from "../components/UI.jsx";
import { BRAND } from "../data/site.js";

export default function Terms() {
  return (
    <>
      <SEO title="Terms" description="Terms of use for the WellZED website." />
      <section className="section">
        <div className="container" style={{ maxWidth: "76ch" }}>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-16">Terms</h1>
          <p style={{ color: "var(--ink-soft)", marginTop: 12 }}>Last updated: 21 August 2026</p>

          <div className="legal-copy mt-32">
            <p>
              These terms govern general use of the {BRAND.name} website. They are separate from, and do not
              replace, any agreement between WellZED and a client covering a specific engagement.
            </p>

            <h2>Website use</h2>
            <p>
              This website is provided for general information about WellZED's services. Content on this
              website does not constitute a specific proposal, quote or commitment unless confirmed in
              writing as part of a defined engagement.
            </p>

            <h2>WellZED products</h2>
            <p>
              Standard WellZED products (including the NDIS product suite) remain WellZED intellectual
              property and are provided under their own relevant product terms, which take precedence over
              these general website terms for matters they cover.
            </p>

            <h2>Bespoke development agreements</h2>
            <p>
              Ownership, licensing, data handling, and other commercial and intellectual property
              arrangements for bespoke development work are set out in the relevant client agreement, not in
              these general website terms. Where there is any inconsistency, the specific client agreement
              governs.
            </p>

            <h2>Third-party services</h2>
            <p>
              Where WellZED's products or bespoke solutions rely on third-party services (such as cloud
              hosting, commercial software, AI or API services, or open-source components), those
              third-party terms and licences continue to apply.
            </p>

            <h2>NDIS information</h2>
            <p>
              References on this website to NDIS legislation, guidance, pricing arrangements, support
              catalogues and other public material are references to publicly available information. They do
              not imply ownership of that public material by WellZED or its clients. WellZED is not
              affiliated with, endorsed by or part of the National Disability Insurance Agency (NDIA).
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, WellZED is not liable for any loss arising from reliance
              on general information published on this website.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be directed to <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
            </p>

            <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: 32 }}>
              This page is a general-purpose starting point and is not legal advice. Have it reviewed by your
              legal advisor before relying on it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
