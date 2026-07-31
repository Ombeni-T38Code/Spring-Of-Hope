import React from 'react';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Want to Make a Difference With Us?</h2>
      <p className={styles.ctaText}>
        Whether you want to volunteer, partner, or contribute, your support empowers real change.
      </p>
      <div className={styles.ctaButtonGroup}>
        <button className={styles.primaryButton}>Get Involved</button>
        <button className={styles.secondaryButton}>Contact Us</button>
      </div>
    </section>
  );
}