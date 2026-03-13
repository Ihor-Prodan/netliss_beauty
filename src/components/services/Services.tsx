import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Heart, CheckCircle2, Award, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";

interface Service {
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Hĺbkové čistenie",
    desc: "Maska a masáž celej tváre a dekoltu pre dokonalú regeneráciu a čistotu.",
    price: "65€",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Aknózna pleť",
    desc: "Ošetrenie problematickej pleti s odbornou diagnostikou a poradenstvom.",
    price: "75€",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Čistenie & Peeling",
    desc: "Profesionálne čistenie a peeling pre žiarivý a zdravý vzhľad vašej pleti.",
    price: "70€",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Prístrojové ošetrenia",
    desc: "Moderné technológie pre spevnenie, omladenie a hĺbkovú výživu pleti.",
    price: "70€",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const Services: React.FC = () => (
  <section id="sluzby" className={styles.servicesSection}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Naše Služby</h2>
        <div className={styles.cert}>
          <div className={styles.certIcon}>
            <Award size={20} />
          </div>
          <span className={styles.certText}>Certifikovaný salón</span>
        </div>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={styles.serviceCard}
          >
            <div className={styles.serviceIcon}>{s.icon}</div>
            <h3 className={styles.serviceTitle}>{s.title}</h3>
            <p className={styles.serviceDesc}>{s.desc}</p>
            <div className={styles.serviceFooter}>
              <span className={styles.price}>{s.price}</span>
              <button className={styles.arrowButton}>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;