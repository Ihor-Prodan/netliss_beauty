import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./GallerySection.module.css";

const images = [
  {
    src: "IMG_0375.webp",
    overlay: "Hydratácia & Jas",
    alt: "Hydratovaná a rozjasnená pokožka po ošetrení v Netliss Beauty",
    span2: true
  },
  {
    src: "IMG_0383.webp",
    alt: "Výsledok laserovej epilácie - hladká pokožka"
  },
  {
    src: "IMG_0380.webp",
    alt: "Kozmetické ošetrenie pleti v salóne Netliss Beauty"
  },
  {
    src: "IMG_0377.webp",
    alt: "Starostlivosť o pokožku v salóne Netliss Beauty"
  }
];

const GallerySection: React.FC = () => (
  <section id="galeria" className={styles.gallerySection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Naša Práca</h2>
          <p>Skutočné výsledky našich klientov. Veríme v transparentnosť a prirodzený vzhľad.</p>
        </div>
        <button className={styles.viewAllButton}>
          Celá galéria <ArrowRight />
        </button>
      </div>

      <div className={styles.bentoGrid}>
        {images.map((img, i) => (
          <div
            key={i}
            className={styles.gridItem}
            style={{
              gridColumn: img.span2 ? "span 2" : undefined,
              gridRow: img.span2 ? "span 2" : undefined
            }}
          >
            <img src={img.src} referrerPolicy="no-referrer" alt={img.alt} />
            {img.overlay && (
              <div className={styles.overlay}>
                <span>{img.overlay}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;