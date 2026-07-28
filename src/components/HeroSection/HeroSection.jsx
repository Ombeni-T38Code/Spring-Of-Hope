import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBg} />

      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>

          <h1 className={styles.mainHeading}>
            Empowering Refugees and <br />
            <span className={styles.greenText}>
              Host Communities for a Better Future
            </span>
          </h1>

          <div className={styles.blockquoteBlock}>
            <p className={styles.paragraphText}>
              Springs Of Hope is a community-rooted organization operating at the intersection of livelihoods, education, and environmental resilience in Kakuma and Kalobeyei settlements.
              We are dedicated to empowering refugees and host communities through sustainable initiatives that foster self-reliance, promote education, and enhance environmental sustainability.
            </p>  
          </div>

          <div className={styles.buttonGroup}>
            <Link to="/donate" className={styles.primaryBtn}>
              Support Our Mission
              <ArrowRight size={18} className={styles.arrowIcon} />
            </Link>

            <Link to="/what-we-do" className={styles.secondaryBtn}>
              Explore Our Work
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;