import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './FoundedSection.module.css';
import teamImage from '../../assets/springs-hope.jpg';

const FoundedSection = () => {
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
      className={`${styles.sectionContainer} ${
        isVisible ? styles.animateVisible : ''
      }`}
      ref={sectionRef}
    >
      <div className={styles.gridWrapper}>
        <div className={styles.mediaSide}>
          <div className={styles.imageCard}>
            <img
              src={teamImage}
              alt="Springs Hope Organization"
              className={styles.teamImage}
            />
            <span className={styles.imageCaption}>
              Springs Of Hope
            </span>
          </div>
        </div>
        <div className={styles.contentSide}>
          <span className={styles.tagline}>Who We Are</span>

         <h2 className={styles.mainTitle}>
            Founded by refugees to strengthen communities.
        </h2>

          <div className={styles.textGroup}>
            <p className={styles.paragraph}>
              Springs Hope Organization is a community-led nonprofit based in
              Kakuma, Kenya, dedicated to empowering refugees and host
              communities through education, sustainable livelihoods, and
              environmental action.
            </p>

            <p className={styles.paragraph}>
              We work alongside communities to strengthen resilience, promote
              self-reliance, and create lasting impact through skills
              development, entrepreneurship, climate initiatives, and inclusive
              learning opportunities.
            </p>
          </div>

          <Link to="/about" className={styles.learnMoreBtn}>
            Learn Our Story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoundedSection;