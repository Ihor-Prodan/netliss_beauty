import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck } from "lucide-react";
import styles from "./LaserSection.module.css";

interface Feature {
  title: string;
  desc: string;
}

const features: Feature[] = [
  { title: "Omladenie pleti", desc: "Redukcia vrások a obnova kolagénu pomocou najnovších laserových systémov." },
  { title: "Odstránenie pigmentácie", desc: "Efektívne riešenie pre pigmentové škvrny a zjednotenie tónu pleti." },
  { title: "Tattoo removal", desc: "Bezpečné a postupné odstránenie tetovania pomocou špičkovej technológie." }
];

const LaserSection = forwardRef<HTMLElement>((_, ref) => ( 
  <section id="laser" className={styles.laserSection} ref={ref}>
    <div className={styles.backgroundBlobs}>
      <div className={styles.blobGold} />
      <div className={styles.blobOlive} />
    </div>

    <div className={styles.container}>
      <div className={styles.grid}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            <Zap size={20} />
            <span>Laserová Revolúcia</span>
          </div>

          <h2 className={styles.title}>
            Budúcnosť <br />
            <span>bezchybnej</span> pleti
          </h2>

          <p className={styles.text}>
            Používame najmodernejšie laserové systémy svetovej triedy. Naše ošetrenia sú bezpečné, rýchle a s minimálnou dobou rekonvalescencie.
          </p>

          <div className={styles.features}>
            {features.map((item, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <ShieldCheck size={24} />
                </div>
                <div className={styles.featureText}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className={styles.imageWrapper}>
          <div className={styles.aspectBox}>
            <img
              src="/public/IMG_0382.webp"
              alt="Laserové ošetrenie"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className={styles.infoCard}>
            <div className="percent">99%</div>
            <div className="label">Úspešnosť zákrokov</div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default LaserSection;