import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./GallerySection.module.css";

const images = [
  {
    src: "/public/IMG_0375.webp",
    overlay: "Hydratácia & Jas",
    span2: true
  },
  {
    src: "/public/IMG_0383.webp"
  },
  {
    src: "/public/IMG_0380.webp"
  },
  {
    src: "/public/IMG_0377.webp"
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
            <img src={img.src} referrerPolicy="no-referrer" alt={`Galeria ${i + 1}`} />
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