import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

type Props = {
  darkSectionRef: React.RefObject<HTMLElement | null>;
};

const Navbar: React.FC<Props> = ({ darkSectionRef }) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (!darkSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setDark(entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      },
    );

    observer.observe(darkSectionRef.current);

    return () => observer.disconnect();
  }, [darkSectionRef]);

  return (
    <nav className={`${styles.navbar} ${dark ? styles.dark : ""}`}>
      <div className={styles.logo}>
        netliss <span>beauty</span>
      </div>

      <div className={styles.navLinks}>
        <a href="#sluzby">Služby</a>
        <a href="#laser">Laser</a>
        <a href="#galeria">Galéria</a>
        <a href="#o-nas">O nás</a>
        <a href="#kontakt">Kontakt</a>
      </div>

      <a
        className={styles.button}
        href="https://www.notino.sk/salony/oasis/?utm_source=salon_mkt&utm_medium=qr&utm_campaign=booking_promo&utm_content=92e6a588-c4e6-43f0-89a1-926d0d5c274c&fbclid=PAZnRzaARlplhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaek5mk9UyzM_8D4lXQCEcthHIcAWI-W49Q6D_7OOf9dUWzccz7mzAZFhlvrBQ_aem_oosoQWbHoJSTu7ben9OF7w"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rezervovať
      </a>
    </nav>
  );
};

export default Navbar;
