import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => (
  <section id="o-nas" className={styles.aboutSection}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBox}>
            <img
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1000"
              alt="Fotografia"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.number}>10+</div>
            <div className={styles.label}>Rokov skúseností</div>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h2>
            Váš relax, <br />
            <span>naša vášeň</span>
          </h2>

          <div className={styles.textWrapper}>
            <p>
              V salóne netliss beauty veríme, že krása nie je len o povrchu, ale o pocite sebavedomia a zdravia. Každé ošetrenie prispôsobujeme individuálnym potrebám vašej pleti.
            </p>
            <p>
              Naším cieľom je vytvoriť oázu pokoja v rušnom dni, kde si nielen oddýchnete, ale uvidíte aj reálne výsledky vďaka špičkovej technológii a odbornej diagnostike.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div>
              <h4>Certifikáty</h4>
              <p>Pravidelne sa vzdelávame u svetových lídrov v estetike.</p>
            </div>
            <div>
              <h4>Prístup</h4>
              <p>Konzultácia a diagnostika pleti pred každým zákrokom.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;