import React from 'react';
import styles from './Story.module.css';
import communityCenterImg from '../../../assets/community-center.jpg'; // Adjust path based on your folder structure

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        {/* Left Column: Text Content */}
        <div className={styles.textColumn}>
          <span className={styles.subHeading}>ABOUT US</span>
          
          <h2 className={styles.heading}>
            A Community-Led Organization Creating Lasting Opportunities
          </h2>

          <p className={styles.paragraph}>
            Springs of Hope is a newly established Refugee-Led Organization (RLO) and Community-Based Organization (CBO) working in Kakuma Refugee Camp, Kalobeyei Settlement, and surrounding host communities in Turkana County, Kenya. Founded by members of the refugee community, our organization believes that sustainable change begins with local leadership and active community participation.
          </p>

          <p className={styles.paragraph}>
            We collaborate with refugees, host communities, youth, women, local leaders, volunteers, and development partners to create practical solutions that improve lives and strengthen community resilience.
          </p>

          {/* Highlights / Badges */}
          <div className={styles.badgeContainer}>
            <div className={`${styles.badge} ${styles.blueBadge}`}>
              <span className={styles.badgeValue}>100%</span>
              <span className={styles.badgeLabel}>Refugee Led</span>
            </div>

            <div className={`${styles.badge} ${styles.greenBadge}`}>
              <span className={styles.badgeValue}>Local</span>
              <span className={styles.badgeLabel}>Insights</span>
            </div>
          </div>
        </div>

        {/* Right Column: Image with Overlaid Quote Box */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img 
              src={communityCenterImg} 
              alt="Springs of Hope Community Center" 
              className={styles.image}
            />

            {/* Overlaid Quote Box */}
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                "We don't just provide aid; we build the foundations for self-reliance."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}