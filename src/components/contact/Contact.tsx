import React from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import styles from "./Contact.module.css";
// import { services } from "../services/servicesMap";

const Contact: React.FC = () => {
  return (
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
                  <p>Hradska 78/B</p>
                  <p>821 07 Bratislava</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={24} />
                </div>
                <div className={styles.contactText}>
                  <p>+421 914 477 711</p>
                  <p>Objednávky telefonicky</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/netliss_beauty?igsh=ZzUyMzZnODcxMDAx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/share/1P5tLwhWGu/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h3>Rezervácia termínu</h3>

            <p className={styles.contactText}>
              Termín si môžete rezervovať cez telefón, Instagram alebo
              jednoducho kliknutím na tlačidlo nižšie. Ozveme sa vám čo najskôr.
            </p>

            <a
              href="https://www.notino.sk/salony/oasis/?utm_source=salon_mkt&utm_medium=qr&utm_campaign=booking_promo&utm_content=92e6a588-c4e6-43f0-89a1-926d0d5c274c&fbclid=PAZnRzaARlplhleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaek5mk9UyzM_8D4lXQCEcthHIcAWI-W49Q6D_7OOf9dUWzccz7mzAZFhlvrBQ_aem_oosoQWbHoJSTu7ben9OF7w"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bigCtaButton}
            >
              Rezervovať termín
            </a>
          </div>

          {/* <div className={styles.contactForm}>
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
              <input type="text" name="website" style={{ display: "none" }} />
              <div className={`${styles.formGroup} ${styles.span2}`}>
                <label>O akú službu máte záujem?</label>

                <div className={styles.selectWrapper}>
                  <select className={styles.select}>
                    <option value="">Vyberte službu</option>

                    {services.map((cat) => (
                      <optgroup key={cat.title} label={cat.title}>
                        {cat.services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title} — {s.price}
                          </option>
                        ))}
                      </optgroup>
                    ))}
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
