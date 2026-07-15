import React from 'react';
import styles from './HomeImportSection.module.css';

const HomeImportSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Get Involved</h2>
        <p className={styles.copy}>Join our programs, partner with us, or donate to support community impact.</p>
        <div className={styles.actions}>
          <a href="/get-involved" className={styles.button}>Ways to Join</a>
          <a href="/donate" className={styles.link}>Donate</a>
        </div>
      </div>
    </section>
  );
};

export default HomeImportSection;
