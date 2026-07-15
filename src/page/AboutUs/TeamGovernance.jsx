import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react"; 
import { Link } from "react-router-dom";
import styles from "./TeamGovernance.module.css";

const team = [
  {
    name: "Baraka Makano",
    role: "Chairman",
    bio: "A visionary leader dedicated to empowering refugee and host communities through sustainable development and community-led solutions.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/executive-director-5a4591c4-1781863379582.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Francoise",
    role: "Vice Chair",
    bio: "Coordinates programs and ensures effective implementation of community initiatives and partnerships.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/operations-manager-993b87e6-1781863379316.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Joshua Mlongeca",
    role: "Secretary",
    bio: "Passionate about creating educational opportunities and empowering young people through learning.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/education-coordinator-37ce05b2-1781863380006.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Lydia Asumani",
    role: "Vice Secretary",
    bio: "Supports entrepreneurship, vocational training, and economic empowerment initiatives.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/livelihood-lead-7fbc0d17-1781863379874.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Anna Kahamba Rachele",
    role: "Treasurer",
    bio: "Provides strategic financial oversight, management of resources, and fiscal transparency frameworks.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/mhpss-specialist-9653cb5a-1781863380604.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Sango N'iteelo",
    role: "Advisor",
    bio: "Leads environmental conservation and climate resilience initiatives across communities.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/environment-lead-b1d5a6e4-1781863380074.webp",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  {
    name: "Unduelo Saleh",
    role: "Advisor & Founder",
    bio: "Establishes long-term organizational strategy and grounds foundational goals within active community integration models.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400", 
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
];

export default function TeamGovernance() {
  return (
    <div className={styles.container}>
      
      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4579a543-a759-4cd2-9cd5-865f854d33f0/team-members-ce3b9fdf-1781853096761.webp"
          alt="Team Landscape"
          className={styles.heroImage}
        />
        {/* Shadow Overlay Anchor */}
        <div className={styles.heroOverlay} />
        
        <div className={styles.heroWrapper}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroStack}
          >
            <span className={styles.heroOverline}>Human Infrastructure</span>
            <h1 className={styles.heroTitle}>Meet Our <span>Team</span></h1>
            <p className={styles.heroParagraph}>
              Our core platform empowers multi-disciplinary enterprise operations by unifying disparate technical ecosystems into single pane environments. We build adaptive infrastructure frameworks meant to accelerate system delivery lifecycle benchmarks while driving down baseline transactional overhead. Through carefully managed architectural scaling and intuitive layout systems, your engineering branches can collaborate seamlessly across international zones without experiencing structural deployment delays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE TEAM GRID */}
      <section className={styles.gridSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.overline}>Personnel Blueprint</span>
              <h2 className={styles.sectionTitle}>Leadership & Staff</h2>
            </div>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={styles.memberNode}
                tabIndex="0"
              >
                <div className={styles.interactiveBox}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />

                  <div className={styles.textStrip}>
                    <span className={styles.memberRole}>{member.role}</span>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberBio}>{member.bio}</p>
                  </div>

                  <div className={styles.infoOverlay}>
                    <div className={styles.actionRow}>
                      <a href={`mailto:${member.name.toLowerCase().replace(/[^a-z0-9]/g, "")}@rlo.org`} className={styles.iconCircleLink} title="Email Contact">
                        <Mail size={16} strokeWidth={1.75} />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.iconCircleLink} title="LinkedIn Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      </a>
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className={styles.iconCircleLink} title="Facebook Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CALL TO ACTION */}
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
            <span className={styles.ctaOverline}>Alignment Matrix</span>
            <h2 className={styles.ctaHeading}>Interested in Working With Us?</h2>
            <p className={styles.ctaParagraph}>
              We welcome strategic cross-border partnerships with institutions, forward-thinking donors, and community ecosystem architects who share our vision for baseline systemic displacement autonomy.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Initiate Operational Alliance 
              <ArrowUpRight size={16} className={styles.ctaIcon} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}