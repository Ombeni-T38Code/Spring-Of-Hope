import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './ExploreProgramsBar.module.css';

const ExploreProgramsBar = () => {
  return (
    <div className={styles.barContainer}>
      <Link to="/what-we-do/all" className={styles.exploreLink}>
        <span>EXPLORE ALL PROGRAMMES</span>
        <ArrowRight size={18} className={styles.arrowIcon} />
      </Link>
    </div>
  );
};

export default ExploreProgramsBar;