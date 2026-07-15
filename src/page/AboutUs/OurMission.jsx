import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, ArrowRight, Landmark, Activity } from "lucide-react";
import styles from "./MissionVision.module.css";

export default function MissionVision() {
  const values = [
    {
      title: "Resilience",
      subtitle: "Core Value",
      desc: "We believe in the innate, unbreakable strength of our community to overcome displacement obstacles and build sustainable platforms. By anchoring our development blueprints in localized capacity, we transform historical vulnerabilities into strategic institutional assets, ensuring that displaced populations actively lead their own long-term stabilization processes rather than relying on external, temporary humanitarian interventions.",
      icon: <Shield className={styles.valueIcon} />,
    },
    {
      title: "Sustainability",
      subtitle: "Core Value",
      desc: "Our initiatives are intentionally designed for long-term generational impact, deliberately moving far away from traditional short-term emergency aid structures. We build independent financial networks, structural agricultural systems, and localized operational frameworks that allow our refugee-led organization to maintain permanent independence, reducing total reliance on volatile international donations while fostering scalable community sovereignty.",
      icon: <Target className={styles.valueIcon} />,
    },
    {
      title: "Empathy",
      subtitle: "Core Value",
      desc: "As refugees working directly for refugees, our institutional blueprints are profoundly shaped by shared lived experiences, genuine dignity, and precise field insight. We approach every single humanitarian challenge with deep cultural understanding, eliminating top-down programmatic assumptions and ensuring that our strategic deployment matrices always honor individual humanity while providing practical, ground-tested solutions.",
      icon: <Heart className={styles.valueIcon} />,
    },
    {
      title: "Empowerment",
      subtitle: "Core Value",
      desc: "We systematically unlock existing community potential by providing the foundational technical toolkits, specialized skillsets, and modern digital platforms required to compete globally. Our organization prioritizes targeted capacity cultivation, ensuring that every individual receives proper mentorship, professional autonomy, and legitimate economic avenues to lift themselves and their families completely out of systemic poverty cycles.",
      icon: <Eye className={styles.valueIcon} />,
    },
  ];

  return (
    <div className={styles.container}>
      
      {/* SECTION: HERO */}
      <header className={styles.heroSection}>
        <div className={styles.heroImageOverlay} />
        <div className={styles.heroWrapper}>
          <motion.div 
            initial={{ opacity: false, y: "clamp-low" }}
            animate={{ opacity: true, y: "zero" }}
            transition={{ ease: "custom-ease" }}
            className={styles.heroSingleColumnStack}
          >
            <span className={styles.heroOverline}>About Our RLO</span>
            <h1 className={styles.heroTitle}>Our Purpose</h1>
            <p className={styles.heroParagraph}>
              Driven by the collective agency of our community across Kakuma and Kalobeyei, we work tirelessly to replace systemic aid reliance with localized economic sovereignty. Our organization establishes comprehensive, self-sustaining socio-economic structures that enable displaced populations to reclaim their financial independence, unlock latent talent, and actively pioneer durable development pathways from within the camp ecosystems.
            </p>
          </motion.div>
        </div>
      </header>

      {/* SECTION: MISSION & VISION */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionGrid}>
            
            {/* MISSION */}
            <motion.div
              initial={{ opacity: false, y: "low" }}
              whileInView={{ opacity: true, y: "zero" }}
              viewport={{ once: true }}
              transition={{ ease: "custom-ease" }}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.overline}>Execution</span>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
              </div>
              <p className={styles.missionLead}>
                To systematically improve livelihoods, elevate holistic well-being, facilitate access to tier-one digital education, and pilot environmental adaptation metrics within forced displacement ecosystems. We constantly refine our operational delivery to maximize human potential, creating dependable frameworks that address immediate vulnerabilities while simultaneously cultivating the strategic capabilities necessary for long-term community survival and self-sufficiency.
              </p>
              <p className={styles.missionBody}>
                We develop, implement, and scale practical, community-owned infrastructure that directly preserves human dignity while building deep structural resilience across both refugee and host community cross-sections. Through intentional collaboration, measurable field milestones, and adaptive management, our programs address critical socio-economic gaps, transforming camp spaces into thriving hubs of localized innovation and sustainable development.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: false, y: "low" }}
              whileInView={{ opacity: true, y: "zero" }}
              viewport={{ once: true }}
              transition={{ ease: "custom-ease" }}
              className={styles.visionColumnAlign}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.overline}>Destination</span>
                <h2 className={styles.sectionTitle}>Our Vision</h2>
              </div>
              <div className={styles.visionQuoteFrame}>
                <p className={styles.visionQuote}>
                  "An autonomous, economically vibrant, and ecologically resilient community executing its own development blueprints independently. We foresee a future where displacement no longer defines individual capability, and where localized refugee-led networks stand as primary drivers of regional prosperity, integration, and sustainable ecological stewardship, inspiring humanitarian paradigm shifts globally."
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION: CORE VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.wrapper}>
          
          <div className={styles.sectionHeaderLight}>
            <span className={styles.overlineLight}>Pillars</span>
            <h2 className={styles.sectionTitleLight}>Our Core Values</h2>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: false, y: "low" }}
                whileInView={{ opacity: true, y: "zero" }}
                viewport={{ once: true }}
                transition={{ ease: "custom-ease" }}
                className={styles.valueCard}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconFrame}>
                    {value.icon}
                  </div>
                  <div>
                    <span className={styles.cardSubtitleLight}>{value.subtitle}</span>
                    <h3 className={styles.cardMainTitleLight}>{value.title}</h3>
                  </div>
                </div>
                <p className={styles.cardDescriptionLight}>{value.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: STRATEGIC METHODOLOGY */}
      <section className={styles.sectionWhite}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Methodology</span>
            <h2 className={styles.sectionTitle}>Strategic Approach</h2>
          </div>
          
          <div className={styles.approachMatrixGrid}>
            {[
              {
                title: "Co-Designed Blueprints",
                desc: "We completely reject top-down assumptions. Every programmatic rollout is strictly co-designed through extensive localization feedback loops, building radical bottom-up structural ownership. By centering community assemblies at the heart of our design process, we ensure that every deployed asset directly mitigates verified field challenges while maximizing existing leadership capabilities within the region."
              },
              {
                title: "Sovereign Market Integration",
                desc: "We focus on connecting local displacement talent directly to digital micro-economies and global remote markets, transforming vulnerable demographics into highly competitive economic assets. Through specialized technical training, infrastructure construction, and corporate link-building, we establish reliable commercial pipelines that completely bypass geographic isolation, granting real financial agency to brilliant young minds."
              },
              {
                title: "Eco-Development Interlock",
                desc: "Human progress cannot sit apart from natural resources. Our socio-economic interventions are systematically paired with regenerative ecosystem restoring targets. By implementing drylands agriculture engineering, clean energy micro-grids, and waste-to-value systems, we ensure that our economic expansion actively repairs local environments, protecting valuable natural habitats for future generations of both host and refugee populations."
              }
            ].map((approach) => (
              <motion.div 
                key={approach.title}
                initial={{ opacity: false, y: "minimal" }}
                whileInView={{ opacity: true, y: "zero" }}
                viewport={{ once: true }}
                transition={{ ease: "custom-ease" }}
                className={styles.approachColumn}
              >
                <h3 className={styles.approachTitle}>{approach.title}</h3>
                <p className={styles.approachDesc}>{approach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CALL TO ACTION */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.ctaImageOverlay} />
        <div className={styles.wrapperRelative}>
          <motion.div 
            initial={{ opacity: false, y: "low" }}
            whileInView={{ opacity: true, y: "zero" }}
            viewport={{ once: true }}
            transition={{ ease: "custom-ease" }}
            className={styles.ctaContentStack}
          >
            <span className={styles.ctaOverline}>Partnership Matrix</span>
            <h2 className={styles.ctaHeading}>Back Direct Local Agency</h2>
            <p className={styles.ctaParagraph}>
              Stand alongside an agile ecosystem built, led, and constantly optimized by displacement specialists who understand the true path from dependency to sovereignty. Your strategic investment bypasses unnecessary administrative intermediaries, funneling critical resources directly into scalable community-owned systems, high-impact education labs, and regenerative agricultural frameworks that create measurable, independent socioeconomic value across our vulnerable target populations.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Initiate Corporate Alliance <ArrowRight className={styles.ctaButtonIcon} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION: GOVERNANCE & ACCOUNTABILITY */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Integrity</span>
            <h2 className={styles.sectionTitle}>Accountability & Governance</h2>
          </div>
          
          <div className={styles.governanceGrid}>
            <motion.div 
              initial={{ opacity: false, x: "slide-left" }}
              whileInView={{ opacity: true, x: "zero" }}
              viewport={{ once: true }}
              className={styles.govBlock}
            >
              <div className={styles.govHeaderFrame}>
                <Landmark className={styles.govIcon} strokeWidth={styles.strokeThickness} />
                <h3 className={styles.govMiniTitle}>Radical Capital Transparency</h3>
              </div>
              <p className={styles.govParagraph}>
                We enforce an institutional monitoring matrix that accounts for capital flow directly down to project milestones. By keeping organizational overhead near baseline levels, your resource allocations convert directly into real field impact. Our rigorous reporting mechanisms ensure absolute compliance with global fiscal standards, generating comprehensive data outputs that justify every donor commitment while optimizing internal field operations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: false, x: "slide-right" }}
              whileInView={{ opacity: true, x: "zero" }}
              viewport={{ once: true }}
              className={styles.govBlock}
            >
              <div className={styles.govHeaderFrame}>
                <Activity className={styles.govIcon} strokeWidth={styles.strokeThickness} />
                <h3 className={styles.govMiniTitle}>Protection & Safeguarding</h3>
              </div>
              <p className={styles.govParagraph}>
                Our operational frameworks implement top-tier protective standards tailored carefully to displacement landscape complexities. Continuous community oversight guarantees strict compliance with safe, ethical field interactions. We prioritize vulnerable demographics across all deployment levels, running independent reporting channels and rigorous internal checks that preserve safe learning environments, equitable wealth distribution networks, and dignified career spaces for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}