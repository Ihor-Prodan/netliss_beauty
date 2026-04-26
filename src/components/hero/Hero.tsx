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
            <span>Laserová epilácia & starostlivosť o pokožku</span>
          </div>

          <h1 className={styles.heroTitle}>
            Zamatovo hladká <br />
            <span>pokožka</span> <br />
            bez chĺpkov
          </h1>

          <p className={styles.heroText}>
            Doprajte si dlhodobo hladkú pokožku vďaka modernej laserovej
            epilácii. Bez bolesti, bez podráždenia a bez kompromisov - výsledky,
            ktoré vidíte aj cítite.
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
            src="/netliss_beauty/public/IMG_0381.webp"
            alt="Kozmetické ošetrenie"
            className={styles.mainImage}
            referrerPolicy="no-referrer"
          />
          <motion.img
            style={{ y: y2 }}
            src="/netliss_beauty/public/IMG_0378.webp"
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
