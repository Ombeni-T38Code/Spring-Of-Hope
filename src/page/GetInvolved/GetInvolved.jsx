import React from 'react';
import styles from './GetInvolved.module.css';

const GetInvolved = () => {
  return (
    <section id="get-involved" className={styles.sectionPage}>
      <div className={styles.sectionHeader}>
        <span className={styles.tagline}>Take Action</span>
        <h2 className={styles.title}>Join the Movement</h2>
      </div>
      
      <div className={styles.gridThreeColumn}>
        <div className={styles.card}>
          <h3>Partner</h3>
          <p>Align your brand or corporate ecosystem with strategic community infrastructure development investments.</p>
        </div>
        <div className={styles.card}>
          <h3>Advocate</h3>
          <p>Utilize your voice, skills, and networks to expand resources and drive awareness for sustainable, localized development.</p>
        </div>
        <div className={styles.card}>
          <h3>Contribute</h3>
          <p>Directly fund sustainable enterprise accelerators, micro-grants, and operational spaces via targeted capital deployment.</p>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;