import { Link } from "react-router-dom";
import { SEO, Eyebrow } from "../components/UI.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="This page could not be found." />
      <section className="section section--dark" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container text-center">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-16">This page doesn't exist yet.</h1>
          <p className="lede mt-16" style={{ margin: "16px auto 0" }}>
            The page you're looking for may have moved, or the link may be out of date.
          </p>
          <div className="btn-row mt-32" style={{ justifyContent: "center" }}>
            <Link to="/" className="btn btn-primary">Back to home</Link>
            <Link to="/contact" className="btn btn-outline-light">Start a conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
