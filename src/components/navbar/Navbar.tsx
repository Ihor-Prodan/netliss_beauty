import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

type Props = {
  darkSectionRef: React.RefObject<HTMLElement>;
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

      <button className={styles.button}>Rezervovať</button>
    </nav>
  );
};

export default Navbar;
