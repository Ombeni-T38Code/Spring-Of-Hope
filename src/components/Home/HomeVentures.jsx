import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './HomeVentures.module.css';

const HomeVentures = () => {
  return (
    <section className={styles.sectionContainer}>
      {/* Background and Overlay */}
      <div className={styles.backgroundImageLayer} />
      <div className={styles.overlayLayer} />

      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
  Building Resilient
  <br />
  Communities Together
</h2>

<p className={styles.description}>
  At Springs Of Hope, we believe lasting change begins within the
  community. We empower refugees and host communities through education,
  economic opportunities, social inclusion, and environmental stewardship.
  By investing in people, strengthening local capacities, and fostering
  collaboration, we help communities move beyond challenges and build a
  future defined by dignity, resilience, and opportunity.
</p>

<a href="/about" className={styles.ctaButton}>
  <span>LEARN MORE ABOUT US</span>
  <ArrowRight size={18} />
</a>
      </div>
    </section>
  );
};

export default HomeVentures;