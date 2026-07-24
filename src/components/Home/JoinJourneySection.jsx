import React from 'react';
// 1. Import your local image from your assets folder
// Adjust relative paths ('../../assets/...') to match your file structure
import joinJourneyImg from '../../assets/join-journey.jpg';

import styles from './JoinJourneySection.module.css';

const JoinJourneySection = () => {
  return (
    <section className={styles.journeySection}>
      <div className={styles.journeyContainer}>
        
        {/* Left Column: Text Content */}
        <div className={styles.journeyContent}>
          <h2 className={styles.journeyTitle}>Join Our Journey</h2>
          
          <p className={styles.journeyDescription}>
            Whether you are a volunteer, partner, donor, or advocate — your support matters.
          </p>

          <div className={styles.journeyActions}>
            <button type="button" className={`${styles.btn} ${styles.btnPrimary}`}>
              Volunteer
            </button>
            <button type="button" className={`${styles.btn} ${styles.btnSecondary}`}>
              Partner With Us
            </button>
            <a href="#support" className={styles.btnLink}>
              Support Our Mission &rarr;
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className={styles.journeyImageWrapper}>
          <img
            // 2. Replace Unsplash URL with the imported variable
            src={joinJourneyImg}
            alt="Community volunteers shaking hands"
            className={styles.journeyImage}
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default JoinJourneySection;