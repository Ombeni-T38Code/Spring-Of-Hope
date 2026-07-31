import React from 'react';
import styles from './Pillars.module.css';

export default function Pillars() {
  return (
    <section className={styles.pillarsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Our Foundation</span>
        <h2>What Guides Our Work</h2>
      </div>
      
      <div className={styles.gridSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>🎯</div>
          <h3 className={styles.cardTitle}>Our Mission</h3>
          <p className={styles.cardText}>
            To serve vulnerable populations by providing essential support, fostering education, 
            and creating self-sustaining community development models.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>👁️</div>
          <h3 className={styles.cardTitle}>Our Vision</h3>
          <p className={styles.cardText}>
            A world where every individual has access to opportunity, dignity, and the resources 
            necessary to build a brighter future for themselves and their family.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>🤝</div>
          <h3 className={styles.cardTitle}>Our Commitment</h3>
          <p className={styles.cardText}>
            We operate with absolute transparency, integrity, and deep respect for the cultures 
            and people we serve around the globe.
          </p>
        </div>
      </div>
    </section>
  );
}