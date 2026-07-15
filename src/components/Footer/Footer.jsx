import { Link } from 'react-router-dom';
import logo from '../../assets/logos.png';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.brandColumn}>
          <div className={styles.logoRow}>
            <img
              src={logo}
              alt="Springs Of Hope logo"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Springs Of Hope</span>
          </div>
          <p className={styles.brandDesc}>
            Breaking the cycle of aid dependency by unlocking sustainable pathways to Education, Livelihoods, Well-Being, and Climate Action.
          </p>
        </div>

        <div className={styles.linksGrid}>
          <div className={styles.linkGroup}>
            <h3>Organization</h3>
            <Link to="/about">About Us</Link>
            <Link to="/where-we-work">Where We Work</Link>
            <Link to="/impact">Our Impact</Link>
          </div>

          <div className={styles.linkGroup}>
            <h3>Programs</h3>
            <Link to="/what-we-do">Education</Link>
            <Link to="/pillars/livelihoods">Livelihoods</Link>
            <Link to="/what-we-do">Leadership</Link>
          </div>

          <div className={styles.linkGroup}>
            <h3>Get Involved</h3>
            <Link to="/donate">Donate</Link>
            <Link to="/get-involved/register">Partner With Us</Link>
            <Link to="/get-involved">Careers</Link>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Springs Hope. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;