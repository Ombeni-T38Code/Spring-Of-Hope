import React from 'react';
import styles from './WaysToJoin.module.css';

const WaysToJoin = () => {
  return (
    <section className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <span className={styles.tagline}>Community Onboarding</span>
        <h2 className={styles.title}>Ways to Join</h2>
      </div>
      <p className={styles.descriptionText}>
        Whether you are looking to volunteer technical skills, organize local chapters, or contribute seed resources, discover your alignment vector here.
      </p>
    </section>
  );
};

export default WaysToJoin;