import React from "react";
import { MapPin, Phone, Instagram, Facebook, ChevronDown } from "lucide-react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => (
  <section id="kontakt" className={styles.contactSection}>
    <div className={styles.container}>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h2>Kontakt</h2>

          <div className={styles.spaceY10}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <MapPin size={24} />
              </div>
              <div className={styles.contactText}>
                <p>Hlavná ulica 12</p>
                <p>811 01 Bratislava</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <Phone size={24} />
              </div>
              <div className={styles.contactText}>
                <p>+421 900 000 000</p>
                <p>Objednávky telefonicky</p>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#">
              <Instagram size={20} />
            </a>
            <a href="#">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3>Rezervujte si termín</h3>
          <form className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Celé meno</label>
              <input type="text" />
            </div>
            <div className={styles.formGroup}>
              <label>Emailová adresa</label>
              <input type="email" />
            </div>
            <div className={`${styles.formGroup} ${styles.span2}`}>
              <label>O akú službu máte záujem?</label>

              <div className={styles.selectWrapper}>
                <select className={styles.select}>
                  <option>Laserové ošetrenia</option>
                  <option>Hĺbkové čistenie pleti</option>
                  <option>Ošetrenie aknóznej pleti</option>
                  <option>Tattoo removal</option>
                  <option>Iné</option>
                </select>

                <ChevronDown size={18} className={styles.selectIcon} />
              </div>
            </div>
            <div className={`${styles.formGroup} ${styles.span2}`}>
              <label>Správa (nepovinné)</label>
              <textarea rows={4}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Odoslať požiadavku
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
