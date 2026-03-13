import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>
        netliss <span>beauty</span>
      </div>

      <div className={styles.navLinks}>
        <a href="#sluzby">Služby</a>
        <a href="#laser">Laser</a>
        <a href="#galeria">Galéria</a>
        <a href="#kontakt">Kontakt</a>
      </div>

      <div className={styles.divider}></div>

      <p className={styles.copyright}>
        © 2026 netliss beauty. Všetky práva vyhradené.
      </p>
    </div>
  </footer>
);

export default Footer;