import { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
// import Stats from "./components/Stats";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

export default function RafaelCastro() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-root">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      {/* <Stats /> */}
      <About />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}
