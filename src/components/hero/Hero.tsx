import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1: MotionValue<number> = useTransform(scrollY, [0, 500], [0, 200]);
  const y2: MotionValue<number> = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.badge}>
            <Sparkles size={14} className="text-brand-gold" />
            <span>Kosmetológia & Laser Aesthetics</span>
          </div>

          <h1 className={styles.heroTitle}>
            Zdravá a <br />
            <span>čistá</span> <br />
            pleť
          </h1>

          <p className={styles.heroText}>
            Vstúpte do sveta netliss beauty, kde sa veda stretáva s krásou. Ponúkame
            špičkové laserové a prístrojové ošetrenia pre vašu krásu.
          </p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Naše Služby <ChevronRight className="ml-2" />
            </button>
            <button className={styles.secondaryButton}>Pozrieť výsledky</button>
          </div>
        </motion.div>

        <div className={styles.imageWrapper}>
          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
            alt="Kozmetické ošetrenie"
            className={styles.mainImage}
            referrerPolicy="no-referrer"
          />
          <motion.img
            style={{ y: y2 }}
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
            alt="Detail pleti"
            className={styles.secondaryImage}
            referrerPolicy="no-referrer"
          />
          <div className={styles.glowCircle} />
        </div>
      </div>
    </section>
  );
};

export default Hero;