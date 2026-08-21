import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import WhatWeBuild from "./pages/WhatWeBuild.jsx";
import HowWeWork from "./pages/HowWeWork.jsx";
import WhyWellZED from "./pages/WhyWellZED.jsx";
import NDIS from "./pages/NDIS.jsx";
import NDISProduct from "./pages/NDISProduct.jsx";
import NDISUpdates from "./pages/NDISUpdates.jsx";
import NDISUpdateDetail from "./pages/NDISUpdateDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let in-page anchor links (e.g. #products) behave normally
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-build" element={<WhatWeBuild />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/why-wellzed" element={<WhyWellZED />} />
          <Route path="/ndis" element={<NDIS />} />
          <Route path="/ndis/products/:slug" element={<NDISProduct />} />
          <Route path="/ndis/updates" element={<NDISUpdates />} />
          <Route path="/ndis/updates/:slug" element={<NDISUpdateDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
