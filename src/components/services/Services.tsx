import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Award, ArrowRight } from "lucide-react";
import styles from "./Services.module.css";
import "swiper/css";
import { services } from "./servicesMap";
import { Banner } from "../banner/Banner";

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="sluzby" className={styles.servicesSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2>Naše ošetrenia</h2>

          <div className={styles.cert}>
            <div className={styles.certIcon}>
              <Award size={20} />
            </div>
            <span className={styles.certText}>Certifikovaný salón</span>
          </div>
        </div>

        <Banner />

        {/* TABS (CONTROL SWIPER) */}
        <div className={styles.tabs}>
          {services.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => {
                setActive(i);
                swiperRef.current?.slideToLoop(i);
              }}
              className={`${styles.tab} ${active === i ? styles.activeTab : ""}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* SWIPER */}
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActive(s.realIndex)}
          slidesPerView={1}
          loop={true}
          spaceBetween={24}
          className={styles.swiper}
        >
          {services.map((category) => (
            <SwiperSlide key={category.title}>
              <div className={styles.sliderInner}>
                {category.services.map((s, idx) => (
                  <div key={idx} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>{s.icon}</div>

                    <h3 className={styles.serviceTitle}>{s.title}</h3>
                    <p className={styles.serviceDesc}>{s.desc}</p>

                    <div className={styles.serviceFooter}>
                      <span className={styles.price}>{s.price}</span>
                      <button className={styles.arrowButton}>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
