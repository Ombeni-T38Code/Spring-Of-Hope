import React from 'react';
import styles from './SuccessStories.module.css';

const SuccessStories = () => {
  return (
    <section className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <span className={styles.tagline}>Voices</span>
        <h2 className={styles.title}>Success Stories</h2>
      </div>
      <div className={styles.storyCard}>
        <blockquote>"The structural business asset grants allowed our agricultural coop to procure tools independently without rely on traditional micro-loans."</blockquote>
        <cite>— Elena R., Cooperative Lead</cite>
      </div>
    </section>
  );
};

export default SuccessStories;