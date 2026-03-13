import React, { useRef } from "react";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import LaserSection from "./components/laser-section/LaserSection";
import GallerySection from "./components/gallery/GallerySection";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  const laserRef = useRef<HTMLElement | null>(null);

  return (
    <div className={styles.app}>
      <Navbar darkSectionRef={laserRef}/>
      <Hero />
      <Services />
      <LaserSection ref={laserRef} />
      <GallerySection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;