import React from 'react';
import styles from './PartnerRegister.module.css';

const PartnerRegister = () => {
  return (
    <section className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <span className={styles.tagline}>Alliance</span>
        <h2 className={styles.title}>Partner Registration</h2>
      </div>
      <p className={styles.descriptionText}>
        Connect your institutional group or technical corporate arm directly with our field framework channels. Let's design scalable execution plans together.
      </p>
    </section>
  );
};

export default PartnerRegister;