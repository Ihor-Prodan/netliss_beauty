import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./GallerySection.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
    overlay: "Hydratácia & Jas",
    span2: true
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
  },
  {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=600"
  },
  {
    src: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600"
  }
];

const GallerySection: React.FC = () => (
  <section id="galeria" className={styles.gallerySection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Naša Práca</h2>
          <p>Skutočné výsledky našich klientiek. Veríme v transparentnosť a prirodzený vzhľad.</p>
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