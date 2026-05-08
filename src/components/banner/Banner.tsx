import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.promoGlow}></div>

      <div className={styles.promoContent}>
        <span className={styles.promoBadge}>ŠPECIÁLNA PONUKA</span>

        <h3>-50% na druhé balíčkové ošetrenie</h3>

        <p>
          Pri zakúpení prvého balíčkového ošetrenia získate druhé s 50% zľavou.
          Doprajte si profesionálnu starostlivosť Netliss Beauty za zvýhodnenú
          cenu.
        </p>

        <div className={styles.promoFooter}>
          <span className={styles.promoNote}>
            Ponuka platí pre balíčkové ošetrenia.
          </span>
        </div>
      </div>
    </section>
  );
};
