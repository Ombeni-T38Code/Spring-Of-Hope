import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import styles from "./PillarsSection.module.css";

const PillarsSection = () => {
  const pillars = [
    {
      title: "Livelihood & Economic Empowerment",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
      link: "/what-we-do/livelihoods",
      description:
        "We empower families and communities to achieve sustainable economic independence by expanding diverse livelihood opportunities. Our structured programs support grassroots entrepreneurship, Village Savings and Loan Associations, local vocational training, small poultry projects, and critical economic recovery initiatives. By training individuals, we help people create stable income streams, improve financial resilience, and build much stronger futures for their households. Through hands-on business mentorship and accessible micro-grants, we break cycles of poverty. This targeted support ensures marginalized communities gain the specific tools, resources, and structural confidence necessary to pioneer long-term economic stability and cultivate thriving marketplace ecosystems.",
    },
    {
      title: "Mental Health, Psychosocial Support & Peace Building",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
      link: "/mhpss",
      description:
        "We promote deep healing, emotional wellbeing, and peaceful communities through inclusive mental health frameworks and customized psychosocial support programs. Through professional counseling, cultural storytelling, collaborative creative activities, music integration, play therapy, and active community engagement, we help displaced individuals recover from trauma, reconnect deeply, and strengthen peaceful relationships. Our focus relies on establishing safe, supportive spaces where communal trust can grow and historical wounds can heal together. By combining modern therapeutic approaches with traditional peace-building strategies, we encourage harmony and minimize conflict, enabling diverse populations to build unified, resilient futures rooted firmly in empathy, mutual respect, and collaborative understanding.",
    },
    {
      title: "Environment & Climate Resilience",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1000&q=80",
      link: "/environment",
      description:
        "We encourage proactive environmental protection through sustainable community solutions designed for long-term ecological balance. Our strategic initiatives focus heavily on large-scale tree planting, community water conservation, innovative waste recycling, climate risk awareness, and institutional environmental education. We actively support vulnerable communities to protect fragile natural resources and develop highly practical solutions for pressing climate challenges. By integrating traditional ecological knowledge with contemporary conservation techniques, we prepare local populations to adapt effectively to shifting weather patterns. Our goal remains focused on empowering community members to serve as lifelong guardians of their immediate landscape, securing a clean, green future for generations.",
    },
    {
      title: "Education & Mentorship Support",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80",
      link: "/education",
      description:
        "We dramatically improve access to quality education through customized learning support structures and inspirational mentorship programs. Our daily work includes academic tutoring, specialized remedial classes, distributing vital school supplies, individualized mentorship for vulnerable children, interactive language development, and long-term educational guidance to help learners achieve their highest personal goals. We fundamentally believe that consistent academic assistance opens doors to brighter realities for youth navigating systemic disadvantages. By nurturing critical thinking, creative expression, and strong leadership traits, we prepare young students to step forward confidently as change-makers within their communities, effectively reshaping the future landscape of education and opportunity.",
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.outerContainer}>
        <header className={styles.headerArea}>
          <span className={styles.tagline}>
            The Springs Of Hope Model
          </span>
          <h1 className={styles.heading}>
            Building Resilient Communities Through Our Strategic Pillars
          </h1>
          <p className={styles.description}>
            Springs Of Hope works with refugee and host communities
            to create sustainable pathways through education,
            livelihoods, environmental protection, wellbeing,
            and leadership development.
          </p>
        </header>

        {pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={`${styles.gridWrapper} ${
              index % 2 === 0 ? styles.imageRight : styles.imageLeft
            }`}
          >
            {/* Content Side */}
            <div className={styles.contentSide}>
              <h2 className={styles.mainTitle}>
                {pillar.title}
              </h2>
              <p className={styles.paragraph}>
                {pillar.description}
              </p>
              <Link to={pillar.link} className={styles.learnMoreBtn}>
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Media Side */}
            <div className={styles.mediaSide}>
              <div className={styles.imageCard}>
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className={styles.featureImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}></div>
                <span className={styles.imageCaption}>
                  Springs Of Hope Organization
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;