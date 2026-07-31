import React from 'react';
import styles from './Journey.module.css';

// Ensure this path matches where your image is saved in your project structure
import communityProjectImg from '../../../assets/community-project.jpg';

export default function Journey() {
  return (
    <section className={styles.journeySection}>
      <div className={styles.container}>
        
        {/* Header Content */}
        <div className={styles.headerBlock}>
          <h2 className={styles.title}>Every Journey Begins with Hope</h2>
          
          <div className={styles.paragraphs}>
            <p>
              Our journey began with a simple observation: the most sustainable solutions come from
              within. Born from the collective aspiration of displaced people in Turkana West, Springs of
              Hope was founded to bridge the gap between aid and agency.
            </p>
            <p>
              Starting as a small volunteer group, we focused on immediate peer support. Over time, we
              realized that we could achieve much more by formalizing our efforts and creating
              structured programs that address the root causes of vulnerability.
            </p>
            <p>
              Today, we stand as a beacon of resilience, proving that with the right support and local
              leadership, refugee communities can drive their own development and contribute
              meaningfully to their host regions.
            </p>
          </div>
        </div>

        {/* Bottom Grid: Image & Timeline Items */}
        <div className={styles.contentGrid}>
          
          {/* Left Side: Image Container */}
          <div className={styles.imageFrame}>
            <img 
              src={communityProjectImg} 
              alt="Community project" 
              className={styles.image}
            />
          </div>

          {/* Right Side: Milestones */}
          <div className={styles.milestoneList}>
            
            {/* The Seed */}
            <div className={styles.milestoneItem}>
              <div className={`${styles.iconBadge} ${styles.badgeGreen}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>The Seed</h3>
                <p className={styles.milestoneDesc}>
                  A grassroots gathering of community members seeking to create their own livelihoods and educational opportunities.
                </p>
              </div>
            </div>

            {/* The Growth */}
            <div className={styles.milestoneItem}>
              <div className={`${styles.iconBadge} ${styles.badgeOrange}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>The Growth</h3>
                <p className={styles.milestoneDesc}>
                  Formalizing our commitment through registration and the establishment of local partnerships with UNHCR and other stakeholders.
                </p>
              </div>
            </div>

            {/* The Vision */}
            <div className={styles.milestoneItem}>
              <div className={`${styles.iconBadge} ${styles.badgeBlue}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className={styles.milestoneContent}>
                <h3 className={styles.milestoneTitle}>The Vision</h3>
                <p className={styles.milestoneDesc}>
                  Creating a model of refugee-led development that can be replicated across displacement contexts worldwide.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}