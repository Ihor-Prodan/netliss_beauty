import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => (
  <section id="o-nas" className={styles.aboutSection}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBox}>
            <img
              src="/public/IMG_0379.webp"
              alt="Fotografia"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={styles.experienceCard}>
            <div className={styles.number}>1000+</div>
            <div className={styles.label}>Spokojných klientov</div>
          </div>
        </div>

        <div className={styles.textWrapper}>
          <h2>
            Hladká pokožka <br />
            <span>bez kompromisov</span>
          </h2>

          <div className={styles.textWrapper}>
            <p>
              V netliss beauty sa špecializujeme na modernú laserovú epiláciu,
              ktorá prináša dlhodobé výsledky bez podráždenia a zarastania
              chĺpkov. Každé ošetrenie prispôsobujeme individuálne podľa typu
              pokožky a chĺpkov.
            </p>
            <p>
              Pracujeme s overenými technológiami a kladieme dôraz na
              bezpečnosť, komfort a viditeľné výsledky. Naším cieľom nie je len
              ošetrenie, ale reálna zmena, ktorú pocítite aj uvidíte.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div>
              <h4>Technológia</h4>
              <p>Moderné laserové zariadenia pre maximálnu účinnosť a bezpečnosť.</p>
            </div>
            <div>
              <h4>Individuálny prístup</h4>
              <p>Konzultácia a nastavenie ošetrenia podľa vašich potrieb.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
