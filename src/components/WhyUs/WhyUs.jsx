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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.container} ${
        isVisible ? styles.animateVisible : ''
      }`}
      ref={sectionRef}
    >
      <div className={styles.innerContent}>
        <span className={styles.tagline}>Our Focus Areas</span>

        <h2 className={styles.heading}>
          Creating opportunities for refugees and host communities to learn,
          grow, and build sustainable livelihoods.
        </h2>

        <p className={styles.descriptionText}>
          Through livelihoods, education, and environmental action, we empower
          individuals with skills, opportunities, and support to achieve
          self-reliance, resilience, and lasting community impact.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;