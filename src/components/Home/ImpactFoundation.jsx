import React from 'react';
import { Star } from 'lucide-react';

// 1. Import your local images from your assets folder
// Adjust relative paths ('../../assets/...') to match your file structure
import communityHandshakeImg from '../../assets/community-handshake.jpg';
import teamMeetingImg from '../../assets/team-meeting.jpg';

import styles from './ImpactFoundation.module.css';

const ImpactFoundation = () => {
  const highlights = [
    "Officially established as a Refugee-Led Organization",
    "Engaged with refugees, host communities, and local stakeholders",
    "Developed our core program plans",
    "Started building partnerships and volunteer networks",
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroLayout}>
        
        {/* Left Content Side */}
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            Building the Foundation for Lasting Change
          </h1>
          
          <p className={styles.subText}>
            During our first month, Springs of Hope has focused on building strong relationships, understanding community priorities, and preparing for long-term impact.
          </p>

          <ul className={styles.checkList}>
            {highlights.map((item, index) => (
              <li key={index} className={styles.checkListItem}>
                <span className={styles.iconContainer}>
                  <Star size={12} fill="currentColor" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Images Side (Wider Layout) */}
        <div className={styles.mediaGallery}>
          <div className={`${styles.galleryCard} ${styles.galleryCardLeft}`}>
            <img 
              src={communityHandshakeImg} 
              alt="Handshake in community" 
              loading="lazy"
            />
          </div>

          <div className={`${styles.galleryCard} ${styles.galleryCardRight}`}>
            <img 
              src={teamMeetingImg} 
              alt="Team meeting at table" 
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactFoundation;