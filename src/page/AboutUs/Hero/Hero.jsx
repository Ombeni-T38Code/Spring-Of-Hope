import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background image layer covering the entire top viewport */}
      <div className={styles.heroBackground} />

      {/* Main Content Container */}
      <div className={styles.heroContainer}>
        <div className={styles.heroBody}>
          {/* Heading */}
          <h1 className={styles.heroTitle}>
            Building Hope Through{' '}
            <span className={styles.heroHighlight}>Community Leadership</span>
          </h1>

          {/* Paragraph (Exactly 70 words) */}
          <p className={styles.heroDescription}>
            Springs of Hope is a dedicated refugee-led organization transforming vulnerable communities across Kakuma and Kalobeyei through grassroots innovation and inclusive global partnerships. We believe those who have experienced displacement hold the unique resilience needed to drive lasting social change. By providing access to education, economic empowerment, and skill-building initiatives, we support local leaders in solving key challenges—creating dynamic opportunities, nurturing dignity, and building a brighter, self-reliant future for all.
          </p>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <a href="#programs" className={styles.heroPrimaryButton}>
              <span>Explore Our Programs</span>
              <svg 
                className={styles.heroButtonIcon} 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="#contact" className={styles.heroSecondaryButton}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}