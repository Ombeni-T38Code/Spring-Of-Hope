import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Droplets, 
  Sprout, 
  Recycle, 
  GraduationCap, 
  ArrowRight, 
  ChevronDown,
  Globe
} from "lucide-react";
import styles from "./Environment.module.css";

// External Environment Visuals (Ultra-Stable, High-Cache Live CDN Links)
const heroImg = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80";
const waterImg = "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=800&q=80";
const afforestationImg = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80";
const recyclingImg = "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80";
const climateTrainingImg = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80";

export default function Environment() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const tracks = [
    {
      title: "Water Management & Conservation",
      desc: "Our structural water management programs secure fragile community supply lines through rainwater harvesting infrastructure, local borehole rehabilitation, and natural sand dam filtering ecosystems. By pairing infrastructural developments with the formation of decentralized water user associations, we help rural farming communities design balanced distribution limits and establish localized, low-cost maintenance schedules. This prevents seasonal resource exhaustion, balances local water table health, and stabilizes climate-stressed livestock and domestic water reserves during extended droughts.",
      icon: <Droplets className="w-5 h-5 text-blue-600" />,
      image: waterImg,
    },
    {
      title: "Afforestation Seedlings & Landscape Restorations",
      desc: "We establish scalable indigenous tree nurseries that propagate thousands of highly climate-adapted seedlings each season to restore degraded community biomes and counter rapid soil erosion. Local youth cohorts handle and distribute these nurseries, planting critical windbreaks, protecting sensitive riverbanks, and scaling agroforestry systems that integrate fruit and nitrogen-fixing varieties directly into household farmlands. This methodology recovers native biodiversity, improves soil moisture retention, and builds productive microclimates.",
      icon: <Sprout className="w-5 h-5 text-emerald-600" />,
      image: afforestationImg,
    },
    {
      title: "Waste Recycling & Circular Economy Initiatives",
      desc: "Our community waste recycling projects clear environmental pollutants from vulnerable semi-urban sectors by organizing community collection systems and setting up localized upcycling micro-hubs. Organic waste streams are processed directly into premium agricultural compost, while post-consumer plastics are systematically gathered, sorted, and processed into structural construction materials or market-viable artisanal designs. This mitigates community disease vectors associated with open-air landfills and generates regular green streams of revenue for underemployed women and youth.",
      icon: <Recycle className="w-5 h-5 text-teal-600" />,
      image: recyclingImg,
    },
    {
      title: "Climate Awareness Trainings & Community Mobilization",
      desc: "We organize extensive climate literacy and adaptive farming workshops targeting grassroots community associations, regional cooperatives, and rural academic institutions. Utilizing localized vulnerability maps, our curriculum breaks down actionable micro-climate variables, extreme weather emergency routines, and sustainable land-use patterns. These strategic informational tracks convert complex meteorological findings into clear, community-led land management models, empowering generations to proactively adapt to changing rain cycles.",
      icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
      image: climateTrainingImg,
    },
  ];

  const deploymentSteps = [
    {
      step: "01",
      title: "Ecological Vulnerability Assessment",
      desc: "Our field technicians analyze regional hydrological networks, soil structural depletion rates, and local waste accumulation densities to co-design customized, community-supported baseline targets.",
    },
    {
      step: "02",
      title: "Infrastructural Set-Up & Nurseries",
      desc: "We source regional seed stocks, construct secure water harvesting frames, and establish waste processing hubs alongside localized project committees who oversee daily logistics.",
    },
    {
      step: "03",
      title: "Capacity Training & Skill Transfer",
      desc: "Community groups undergo specialized climate literacy instruction, training in upcycling safety standards, and practical agroforestry courses to achieve independent program oversight.",
    },
    {
      step: "04",
      title: "Long-Term Monitoring & Scale",
      desc: "We run periodic survivability checks on reforestation zones, sample local water quality levels, and connect waste management micro-enterprises directly with stable regional raw material buyers.",
    },
  ];

  const faqs = [
    {
      q: "How are seedling species selected for your afforestation projects?",
      a: "We exclusively prioritize native and highly climate-resilient varieties tailored to regional soil compositions. Our nurseries emphasize deep-rooted species that excel at securing shifting topsoil, nitrogen-fixing varieties that naturally boost agricultural outputs, and multi-purpose fruit trees that diversify family nutritional pipelines."
    },
    {
      q: "What mechanisms keep your clean water systems operational long-term?",
      a: "Every water system is paired with an elected Community Water Committee. We train these groups in mechanical upkeep, resource budgeting, and basic transparent accounting. Community members contribute modest, structured user fees to maintain an emergency repair fund, ending reliance on external aid."
    },
    {
      q: "How does the waste recycling program support local green jobs?",
      a: "Our recycling hubs operate on a circular entrepreneurial model. Collectors are compensated per kilogram of sorted material brought to the facility. Additionally, we provide advanced vocational training to youth groups, showing them how to operate plastic compressors and compost processors to convert raw waste into high-margin, market-ready goods."
    },
    {
      q: "Can local community groups request customized climate trainings?",
      a: "Yes. We coordinate with cooperative leadership, schools, and village administrative bodies to tailor our curriculum to specific local challenges—whether that involves addressing severe soil erosion on hillsides or teaching adaptive irrigation tools in arid lowland environments."
    }
  ];

  const ecologicalMetrics = [
    { value: "85,000+", label: "Seedlings Propagated", subtext: "Indigenous and agroforestry species distributed and tracked across target zones." },
    { value: "140 Metric Tons", label: "Waste Safely Recycled", subtext: "Plastic and organic waste materials diverted from open community dumpsites." },
    { value: "35,000+", label: "Clean Water Beneficiaries", subtext: "Individuals gaining reliable access to managed catchment systems and water tables." }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className={styles.container}>
      {/* Hero Banner Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.heroSection}
      >
        <div className={styles.heroImageWrapper}>
          <img 
            src={heroImg} 
            alt="Environmental protection" 
            className={styles.heroImage}
            crossOrigin="anonymous"
          />
          <div className={styles.heroScrim} />
        </div>
        
        <div className={styles.wrapper}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroContent}
          >
            <p className={styles.heroOverline}>Our Stewardship</p>
            <h1 className={styles.heroTitle}>Environmental Sustainability & Resilience</h1>
            <p className={styles.heroDescription}>
              We build functional climate defenses through community-driven watershed management, expansive native tree propagation, circular economic recycling, and grassroots climate literacy networks. By restoring ecological systems and securing vital resources, we shield vulnerable communities against changing weather patterns and lay down permanent foundations for green growth.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* SECTION 1: Focus Rows */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>Core Environmental Tracks</h2>
            <p className={styles.sectionSubtitle}>Practical, field-tested interventions designed to restore biomes and optimize resources.</p>
          </div>

          <div className={styles.rowList}>
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className={styles.rowItem}
              >
                <div className={styles.rowImgContainer}>
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className={styles.rowImage} 
                    loading="lazy" 
                    crossOrigin="anonymous"
                  />
                </div>
                <div className={styles.rowContent}>
                  <div className={styles.rowHeader}>
                    <span className={styles.rowIcon}>{track.icon}</span>
                    <h3 className={styles.rowTitle}>{track.title}</h3>
                  </div>
                  <p className={styles.rowDesc}>{track.desc}</p>
                  <Link to="/donate" className={styles.rowDonateButton}>
                    <Globe size={16} className="mr-2 text-emerald-600" /> Support This Track
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Metrics Banner */}
      <section className={styles.metricsSection}>
        <div className={styles.wrapper}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={styles.metricsGrid}
          >
            {ecologicalMetrics.map((metric, idx) => (
              <motion.div key={idx} variants={fadeInUpVariants} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <h4 className={styles.metricLabel}>{metric.label}</h4>
                <p className={styles.metricSubtext}>{metric.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Blueprint Process Rows */}
      <section className={styles.timelineSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>Our Framework In Action</h2>
            <p className={styles.sectionSubtitle}>A practical and structured method deployed to ensure self-sustaining local project lifecycle operations.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={styles.blueprintRowList}
          >
            {deploymentSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUpVariants}
                whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                className={styles.blueprintRowCard}
              >
                <div className={styles.stepBadgeColumn}>
                  <span className={styles.stepRowNumber}>{step.step}</span>
                </div>
                <div className={styles.stepTextColumn}>
                  <h3 className={styles.stepRowTitle}>{step.title}</h3>
                  <p className={styles.stepRowDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: FAQ Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.wrapper}>
          <div className={styles.faqLayout}>
            <div className={styles.faqLeftColumn}>
              <h2 className={styles.sectionMainTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>Have technical questions about our environmental resource management or green operations?</p>
            </div>
            <div className={styles.faqRightColumn}>
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`${styles.faqRow} ${isOpen ? styles.faqRowOpen : ""}`}>
                    <button 
                      className={styles.faqQuestionButton}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <h3 className={styles.faqQuestion}>{faq.q}</h3>
                      <ChevronDown 
                        className={`${styles.faqChevron} ${isOpen ? styles.chevronRotate : ""}`} 
                        size={18}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={styles.faqAnswerContainer}
                        >
                          <p className={styles.faqAnswer}>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Partnership Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.wrapper}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.ctaBanner}
          >
            <div className={styles.ctaHeaderBlock}>
              <h2 className={styles.ctaTitle}>Support Global Green Restorations</h2>
              <p className={styles.ctaDesc}>
                Partner with us to fund tree nursery expansions, fund community clean water distribution works, or expand local climate leadership training circles.
              </p>
            </div>
            <Link to="/donate" className={styles.ctaButton}>
              Initiate Eco-Partnership <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}