import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const timeline = [
  {
    year: "Foundation",
    title: "Refugee-Led Response",
    desc: "Our foundational journey began inside the Kakuma Refugee Camp when a dedicated group of displaced visionary leaders established Springs Of Hope as a grassroots organization to address critical community needs through direct, displacement-informed solutions. Recognizing severe operational gaps in traditional international aid distribution systems, we pioneered local infrastructure networks that prioritized dignity, self-determination, and immediate protection for arriving families. This original community-rooted framework empowered camp residents to claim agency over their futures, establish critical emergency support structures, and design sustainable humanitarian interventions that perfectly aligned with the complex sociocultural realities of camp life during those incredibly challenging initial developmental years.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop"
  },
  {
    year: "Integration",
    title: "Bridging Communities",
    desc: "We expanded our reach to the Kalobeyei settlement and surrounding host communities in Turkana County, fostering harmony and shared progress. By building integrated frameworks that intentionally combined resources for both refugees and local residents, we dismantled historical barriers and reduced regional systemic friction. This strategic expansion allowed our cross-cultural field teams to deploy collaborative infrastructure projects, establish shared marketplaces, and design inclusive educational forums. Through this model of mutual growth, we successfully transformed potential division into enduring social cohesion, ensuring that both displaced populations and host neighbors advanced together with shared socio-economic prosperity throughout the wider northern Kenyan frontier regions.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop"
  },
  {
    year: "Pillar Growth",
    title: "Strategic Impact",
    desc: "We systematically developed our highly multi-faceted operational model by directly focusing on sustainable livelihoods, protective education, environmental engineering, and vital mental wellbeing. Recognizing that human trauma and financial dependency are deeply interconnected, our specialized leadership designed integrated programs that simultaneously treated internal vulnerabilities while constructing external economic opportunities. We established active grassroots banking micro-loans, launched extensive agroforestry nurseries, and created remedial educational centers within underserved regional sectors. This deliberate expansion completely transformed our targeted field interventions from simple emergency relief operations into an enduring, highly coordinated holistic framework built to sustain thousands of families facing prolonged structural and systemic hardships.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop"
  },
  {
    year: "Today",
    title: "Empowering Change",
    desc: "Today, Springs Of Hope stands proud as a fully recognized, completely autonomous Refugee-Led Organization that actively breaks outdated aid dependency cycles and unlocks highly sustainable future pathways for thousands. By demonstrating that displaced populations possess the localized expertise needed to execute sophisticated long-term programs, we successfully challenge traditional paternalistic humanitarian distribution methodologies globally. Our direct community governance model ensures full operational accountability, drives efficient resource utilization, and maximizes localized social impacts. Moving forward, we continue expanding strategic institutional partnerships to solidify permanent structural equality, restore human dignity, and foster complete self-reliance across all vulnerable marginalized populations within East Africa's borders.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop"
  }
];

const philosophy = [
  {
    title: "Localization & Agency",
    desc: "We operate on the fundamental conviction that displaced populations possess the complete intellectual capacity, native resourcefulness, and cultural wisdom required to pioneer their own developmental solutions. By shifting standard paternalistic humanitarian hierarchies into direct, community-owned models, our organization empowers grassroots leaders to execute sophisticated regional programs autonomously. This strategic structural change replaces systemic vulnerability with profound institutional independence, enabling local populations to manage complex capital, construct sustainable communal infrastructure, and claim sovereign ownership over their generational futures while permanently breaking historical patterns of aid dependency throughout sub-Saharan borderland zones."
  },
  {
    title: "Holistic Restorations",
    desc: "Our strategic interventions treat human development as an deeply interconnected ecosystem where psychological rehabilitation, financial autonomy, environmental protection, and academic equity depend entirely on one another. We recognize that clinical trauma cannot be overcome without establishing immediate economic security, nor can educational advancement thrive when climate instability constantly threatens fundamental household nutrition. By implementing custom frameworks that target these overlapping vulnerabilities simultaneously, our synchronized track methodology permanently repairs fragile communal fabrics, builds immense socio-ecological resilience, and safeguards human dignity from severe economic disruptions or worsening meteorological realities across frontier spaces."
  }
];

export default function AboutUs() {
  return (
    <div className={styles.container}>
      
      {/* HERO SECTION */}
      <header className={styles.heroSection}>
        {/* Separated background container to run the custom cinematic zoom animation */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroBackground}
        />
        <div className={styles.heroImageOverlay} />
        
        <div className={styles.heroWrapper}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroContentColumn}
          >
            <span className={styles.heroOverline}>About Our RLO</span>
            <h1 className={styles.heroTitle}>
              Springs of <span className={styles.heroHighlight}>Hope</span>
            </h1>
            <p className={styles.heroParagraph}>
              An independent, community-rooted Refugee-Led Organization working within Turkana County to engineer self-reliance and sustainable alternatives to structural aid dependency. By pioneering direct, displacement-informed solutions, we establish inclusive community networks that restore absolute human dignity, elevate local governance, and champion localized socio-economic independence to transform traditional humanitarian archetypes and rewrite the global narrative of forced migration.
            </p>
          </motion.div>
        </div>
      </header>

      {/* CHRONOLOGY TIMELINE */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Chronology</span>
            <h2 className={styles.sectionTitle}>Historical Milestones</h2>
          </div>
          
          <div className={styles.timelineGrid}>
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const directionalClass = isEven ? styles.imageLeft : styles.imageRight;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-160px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`${styles.pillarCard} ${directionalClass}`}
                >
                  <div className={styles.imageFrame}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className={styles.cardImage}
                      crossOrigin="anonymous"
                    />
                  </div>
                  
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitles}>
                      <span className={styles.cardSubtitle}>{item.year}</span>
                      <h3 className={styles.cardMainTitle}>{item.title}</h3>
                    </div>
                    <p className={styles.cardDescription}>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPERATING PHILOSOPHY */}
      <section className={styles.philosophySection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overlineLight}>Framework</span>
            <h2 className={styles.sectionTitleLight}>Operating Philosophy</h2>
          </div>
          
          <div className={styles.philosophyGrid}>
            {philosophy.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={styles.philosophyBlock}
              >
                <div className={styles.cardTitles}>
                  <span className={styles.cardSubtitleLight}>Operational Pillar</span>
                  <h3 className={styles.philosophyTitle}>{item.title}</h3>
                </div>
                <p className={styles.cardDescriptionLight}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}