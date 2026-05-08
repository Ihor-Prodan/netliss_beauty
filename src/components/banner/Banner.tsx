import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.promoGlow}></div>

      <div className={styles.promoContent}>
        <span className={styles.promoBadge}>ŠPECIÁLNA PONUKA</span>

        <h3>-50% na prvú návštevu</h3>

        <p>
          Získajte 50% zľavu na vaše prvé ošetrenie a doprajte si
          profesionálnu starostlivosť Netliss Beauty za zvýhodnenú cenu.
        </p>

        <div className={styles.promoFooter}>
          <span className={styles.promoNote}>
            Zľava nie je kombinovateľná s inými zľavami.
          </span>
        </div>
      </div>
    </section>
  );
};
