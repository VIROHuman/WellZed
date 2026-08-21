import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BRAND, NAV_LINKS, CTA } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  if (location.pathname !== lastPath) {
    setLastPath(location.pathname);
    if (open) setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link to="/" className="brand" aria-label={`${BRAND.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <rect x="1" y="1" width="30" height="30" rx="8" fill="none" stroke="var(--gold-500)" strokeWidth="1.4" />
              <path d="M10 10 L22 10 L10 22 L22 22" fill="none" stroke="var(--navy-800)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand__name">{BRAND.name}</span>
        </Link>

        <nav className={`main-nav ${open ? "main-nav--open" : ""}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={CTA.primary.to} className="btn btn-primary main-nav__cta">
            {CTA.primary.label}
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
