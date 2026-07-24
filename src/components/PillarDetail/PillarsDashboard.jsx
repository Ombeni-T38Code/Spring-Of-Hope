import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// 1. Import your local images from your assets folder
// Adjust the paths ('../../assets/...') to match your project folder structure
import livelihoodImg from "../../assets/livelihood.jpg";
import mentalHealthImg from "../../assets/mental-health.jpg";
import environmentImg from "../../assets/environment.jpg";
import educationImg from "../../assets/education.jpg";

import styles from "./PillarsSection.module.css";

const PillarsSection = () => {
  const pillars = [
    {
      title: "Livelihood & Economic Empowerment",
      image: livelihoodImg, // 2. Assign the imported image variable
      link: "/what-we-do/livelihoods",
      description:
        "Supporting entrepreneurship, VSLAs (Village Savings and Loan Associations), professional tailoring, and poultry farming to build sustainable income streams.",
      isWide: true,
    },
    {
      title: "Mental Health, Psychosocial Support & Peace Building",
      image: mentalHealthImg,
      link: "/mhpss",
      description:
        "Promoting healing through specialized counseling, restorative storytelling, and inter-community dialogue.",
      isWide: false,
    },
    {
      title: "Environment & Climate Resilience",
      image: environmentImg,
      link: "/environment",
      description:
        "Tree planting initiatives, innovative water management, and community-led waste recycling programs.",
      isWide: false,
    },
    {
      title: "Education & Mentorship Support",
      image: educationImg,
      link: "/education",
      description:
        "Empowering the next generation through structured tutoring, professional mentorship, and language learning opportunities.",
      isWide: true,
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.outerContainer}>
        <header className={styles.headerArea}>
          <span className={styles.tagline}>The Springs Of Hope Model</span>
          <h1 className={styles.heading}>
            Building Resilient Communities Through Our Strategic Pillars
          </h1>
          <p className={styles.description}>
            Springs Of Hope works with refugee and host communities to create
            sustainable pathways through education, livelihoods, environmental
            protection, wellbeing, and leadership development.
          </p>
        </header>

        {/* 7-column asymmetrical grid container */}
        <div className={styles.cardsGrid}>
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`${styles.card} ${
                pillar.isWide ? styles.cardWide : styles.cardNormal
              }`}
            >
              <div className={styles.imageCard}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className={styles.featureImage}
                  loading="lazy"
                />
              </div>

              <div className={styles.contentSide}>
                <h2 className={styles.mainTitle}>{pillar.title}</h2>
                <p className={styles.paragraph}>{pillar.description}</p>
                <Link to={pillar.link} className={styles.learnMoreBtn}>
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;