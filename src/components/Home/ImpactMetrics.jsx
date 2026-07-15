import React, { useEffect, useState, useRef } from "react";
import {
  Users,
  Briefcase,
  Wallet,
  GraduationCap,
  Leaf,
} from "lucide-react";
import styles from "./ImpactMetrics.module.css";

// Animated Counter
const AnimatedNumber = ({ target, duration = 1500, startAnim }) => {
  const [count, setCount] = useState(0);

  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const suffix = target.replace(/[0-9,]/g, "");
  const isCommaFormatted = target.includes(",");

  useEffect(() => {
    if (!startAnim) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(
        easeOutQuad(progress) * numericTarget
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [numericTarget, duration, startAnim]);

  const formattedCount = isCommaFormatted
    ? count.toLocaleString()
    : count;

  return (
    <span>
      {startAnim ? `${formattedCount}${suffix}` : `0${suffix}`}
    </span>
  );
};

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metricsData = [
    {
      id: 1,
      icon: <GraduationCap size={28} />,
      stat: "300+",
      label: "Learners Empowered",
      subtext: "Youth and adults trained in digital and vocational skills.",
    },
    {
      id: 2,
      icon: <Briefcase size={28} />,
      stat: "120+",
      label: "Livelihood Opportunities",
      subtext: "People supported through entrepreneurship and income generation.",
    },
    {
      id: 3,
      icon: <Users size={28} />,
      stat: "1K+",
      label: "Community Members Reached",
      subtext: "Refugees and hosts reached through education and inclusion.",
    },
    {
      id: 4,
      icon: <Leaf size={28} />,
      stat: "5+",
      label: "Community-Led Projects",
      subtext: "Local initiatives advancing resilience and sustainable growth.",
    },
    {
      id: 5,
      icon: <Wallet size={28} />,
      stat: "2+",
      label: "Sustainable Programs",
      subtext: "Programs strengthening education, livelihoods, and wellbeing.",
    },
  ];

  return (
    <section ref={sectionRef} className={styles.metricsSection}>
      <div className={styles.backgroundLayer}></div>
      <div className={styles.overlayLayer}></div>

      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.headerArea} ${
            isVisible ? styles.fadeInUp : styles.hidden
          }`}
        >
          <span className={styles.upperSubtitle}>
            OUR IMPACT SINCE 2026
          </span>

          <h2 className={styles.mainHeading}>
            Creating Community Impact
          </h2>

          <p className={styles.headerText}>
            Springs Of Hope expands access to education, strengthens livelihoods,
            promotes social inclusion, and supports sustainable community growth.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className={styles.metricsGrid}>
          {metricsData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.metricCard} ${
                isVisible ? styles.fadeInUp : styles.hidden
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.iconBox}>{item.icon}</div>

              <h3 className={styles.statNumber}>
                <AnimatedNumber
                  target={item.stat}
                  startAnim={isVisible}
                />
              </h3>

              <h4 className={styles.statLabel}>
                {item.label}
              </h4>

              <p className={styles.statSubtext}>
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;