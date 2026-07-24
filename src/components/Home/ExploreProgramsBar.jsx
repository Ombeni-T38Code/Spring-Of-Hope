import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          Building Resilient Communities Together
        </h1>
        
        <p className={styles.description}>
          At Springs of Hope, we believe lasting change begins within the community. Join us as we
          build a future defined by opportunity and dignity.
        </p>

        <div className={styles.buttonGroup}>
          <Link to="/about-us" className={styles.btnOutline}>
            Learn More About Us
          </Link>

          <Link to="/what-we-do/all" className={styles.btnOutline}>
            Explore All Programmes
          </Link>

          <Link to="/get-involved" className={styles.btnText}>
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;