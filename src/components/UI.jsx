import { Link } from "react-router-dom";

export function Eyebrow({ children }) {
  return <span className="eyebrow">{children}</span>;
}

export function CTALink({ to, children, variant = "primary", href }) {
  const cls = `btn btn-${variant}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export function NumberedRow({ n, title, detail }) {
  return (
    <div className="numbered-row">
      <span className="numbered-row__n">{n}</span>
      <div>
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </div>
  );
}

export function StatBand({ items }) {
  return (
    <div className="stat-band">
      {items.map((item) => (
        <div className="stat-band__item" key={item.title}>
          <span className="stat-band__title">{item.title}</span>
          <span className="stat-band__detail">{item.detail}</span>
        </div>
      ))}
    </div>
  );
}

export function SEO({ title, description }) {
  // Lightweight SEO helper — updates document title/description on mount.
  if (typeof document !== "undefined") {
    document.title = title ? `${title} | WellZED` : "WellZED";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    if (description) meta.content = description;
  }
  return null;
}
