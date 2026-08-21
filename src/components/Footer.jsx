import { Link } from "react-router-dom";
import { BRAND, FOOTER } from "../data/site.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true">
                <svg viewBox="0 0 32 32" width="26" height="26">
                  <rect x="1" y="1" width="30" height="30" rx="8" fill="none" stroke="var(--gold-500)" strokeWidth="1.4" />
                  <path d="M10 10 L22 10 L10 22 L22 22" fill="none" stroke="#f2ece0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="brand__name">{BRAND.name}</span>
            </Link>
            <p>{FOOTER.description}</p>
          </div>

          <div className="site-footer__col">
            <h4>Explore</h4>
            <ul>
              {FOOTER.explore.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li>{BRAND.location}</li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Legal</h4>
            <ul>
              {FOOTER.legal.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} {BRAND.name}. All rights reserved.</span>
          <span className="site-footer__signature">{BRAND.name.toUpperCase()} — INTELLIGENT. INTEGRATED. IMPACTFUL.</span>
        </div>
      </div>
    </footer>
  );
}
