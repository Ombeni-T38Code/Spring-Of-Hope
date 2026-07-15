import React from 'react';
import styles from './WhereWeWork.module.css';

const WhereWeWork = () => {
  return (
    <section id="where-we-work" className={styles.sectionPage}>
      <div className={styles.gridTwoColumn}>
        <div className={styles.mediaPlaceholder}>
          <span>[ Interactive Operations Map Container ]</span>
        </div>
        <div>
          <div className={styles.sectionHeader}>
            <span className={styles.tagline}>Global Reach</span>
            <h2 className={styles.title}>Where We Operate</h2>
          </div>
          <p className={styles.descriptionText}>
            We deploy community-led development hubs across multiple global regions, localizing our infrastructure to fit 
            urban settlements, rural communities, and transient settings seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;