import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Heart, Leaf, MapPin, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./OurImpact.module.css";

const impactStats = [
  {
    id: 1,
    value: "100%",
    label: "Refugee-Led Autonomy",
    desc: "Every strategic program is designed, governed, and deployed directly by resident community councils on the ground.",
    icon: <Compass size={24} strokeWidth={1.5} />,
  },
  {
    id: 2,
    value: "4+",
    label: "Core Programs Running",
    desc: "Active field deployments across Livelihoods, MHPSS, Climate Resilience, and Vulnerable Youth Mentorship.",
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
  },
  {
    id: 3,
    value: "3+",
    label: "Regional Jurisdictions",
    desc: "Comprehensive operational coverage serving Kakuma Camp, Kalobeyei Settlement, and Turkana host communities.",
    icon: <MapPin size={24} strokeWidth={1.5} />,
  },
  {
    id: 4,
    value: "25k+",
    label: "Seedlings & Frameworks",
    desc: "Empowering vulnerable families with vocational skill sets while actively scaling climate resilience arrays.",
    icon: <Leaf size={24} strokeWidth={1.5} />,
  },
];

export default function OurImpact() {
  return (
    <div className={styles.container}>
      
      {/* SECTION 1: HERO WITH IMAGE BACKGROUND */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackgroundImage} />
        <div className={styles.heroGridOverlay} />
        <div className={styles.heroWrapper}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroContent}
          >
            <span className={styles.heroOverline}>Measurable Transformation</span>
            <h1 className={styles.heroTitle}>Our Impact</h1>
            <p className={styles.heroParagraph}>
              Moving beyond traditional, short-term emergency aid to implement transparent, self-governing models that foster true economic, mental, and ecological resilience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: IMPACT STATISTICS GRID */}
      <section className={styles.statsSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Operational Benchmarks</span>
            <h2 className={styles.sectionTitle}>Impact Statistics</h2>
          </div>

          <div className={styles.statsGrid}>
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={styles.statCard}
                tabIndex="0"
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    {stat.icon}
                  </div>
                  <span className={styles.statValue}>{stat.value}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.statLabel}>{stat.label}</h3>
                  <p className={styles.statDesc}>{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC ACCOUNTABILITY FOCUS */}
      <section className={styles.focusSection}>
        <div className={styles.wrapper}>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.focusBox}
          >
            <div className={styles.focusIcon}>
              <Heart size={32} strokeWidth={1.5} />
            </div>
            <div className={styles.focusText}>
              <h3 className={styles.focusTitle}>Accountability & Systemic Growth</h3>
              <p className={styles.focusParagraph}>
                Our performance benchmarks measure the true transition from community dependency to local sovereignty. By routing resources directly to community-led structures across Turkana County, we maintain radical financial transparency and verifiable regional growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGridOverlay} />
        <div className={styles.ctaWrapper}>
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.ctaContent}
          >
            <span className={styles.ctaOverline}>Expand the Blueprint</span>
            <h2 className={styles.ctaHeading}>Support Our Initiatives</h2>
            <p className={styles.ctaParagraph}>
              Partner with Springs of Hope to scale these proven, community-governed operational frameworks and unlock sustainable opportunities across refugee and host communities.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Join the Ecosystem
              <TrendingUp size={16} className={styles.ctaIcon} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}