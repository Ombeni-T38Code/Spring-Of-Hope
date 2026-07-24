import React, { useEffect, useRef, useState } from 'react';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.whyUsSection} ${isVisible ? styles.animateIn : ''}`}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>WHY US? WHY NOW?</h2>

        <h3 className={styles.subtitle}>
          We believe every displaced person deserves the opportunity to learn, earn,
          <br className={styles.desktopBr} />
          thrive, and lead change.
        </h3>

        <div className={styles.divider}></div>

        <p className={styles.description}>
          We are a refugee-led organization committed to creating pathways for displaced people and host communities to access quality education, digital inclusion, sustainable livelihoods, environmental stewardship, and community-led advocacy. By investing in people, strengthening local leadership, and promoting social enterprise, we empower communities to become self-reliant, resilient, and equipped to build a future filled with dignity, opportunity, and hope.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;