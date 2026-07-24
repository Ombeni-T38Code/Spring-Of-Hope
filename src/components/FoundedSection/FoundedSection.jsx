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
        {/* Left: Image Container */}
        <div className={styles.mediaSide}>
          <div className={styles.imageCard}>
            <img
              src={teamImage}
              alt="Springs of Hope community meeting"
              className={styles.teamImage}
            />
          </div>
        </div>

        {/* Right: Text Container (Aligned with Image) */}
        <div className={styles.contentSide}>
          <h2 className={styles.mainTitle}>
            Founded by Refugees. Driven by Communities. Inspired by Hope.
          </h2>

          <div className={styles.textGroup}>
            <p className={styles.leadParagraph}>
              Springs of Hope is a community-led nonprofit organization
              founded to support refugees and host communities in Kakuma and
              Kalobeyei.
            </p>

            <p className={styles.paragraph}>
              We believe lasting change begins within the community. By working
              alongside local leaders, volunteers, and partners, we create practical
              solutions that strengthen resilience, encourage self-reliance, and
              improve quality of life. Although our journey has just begun, our
              commitment is to serve with integrity, inclusion, collaboration, and
              accountability.
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