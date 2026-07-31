import React from 'react';
import styles from './CoreValues.module.css';

export default function CoreValues() {
  const values = [
    {
      number: '01',
      title: 'Integrity & Accountability',
      desc: 'We maintain high ethical standards and full financial transparency in all our operations.',
    },
    {
      number: '02',
      title: 'Community-Centered Action',
      desc: 'Local communities lead the way. We listen, adapt, and build solutions around their actual needs.',
    },
    {
      number: '03',
      title: 'Long-Term Sustainability',
      desc: 'We focus on sustainable projects that continue to generate positive impacts long after initiation.',
    },
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Culture</span>
        <h2>Principles We Stand By</h2>
      </div>

      <div className={styles.valuesList}>
        {values.map((val) => (
          <div key={val.number} className={styles.valueItem}>
            <div className={styles.valueNumber}>{val.number}</div>
            <div>
              <h4 className={styles.valueHeading}>{val.title}</h4>
              <p className={styles.valueDescription}>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}