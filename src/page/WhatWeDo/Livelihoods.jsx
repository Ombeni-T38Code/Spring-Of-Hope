import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Coins, 
  TrendingUp, 
  Zap, 
  Scissors, 
  ArrowRight, 
  HeartHandshake, 
  ChevronDown 
} from "lucide-react";
import styles from "./Livelihoods.module.css";

// Local Asset Imports
import heroImg from "../../assets/Livelihoods/hero.jpg";
import vslaImg from "../../assets/Livelihoods/vsla.jpg";
import recoveryImg from "../../assets/Livelihoods/recovery.jpg";
import poultryImg from "../../assets/Livelihoods/poultry.jpg";
import tailoringImg from "../../assets/Livelihoods/tailoring.jpg";

export default function Livelihoods() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const activities = [
    {
      title: "Village Savings Loans and Association (VSLA)",
      desc: "Our community-driven microfinance initiative forms autonomous savings groups of 15 to 30 self-selected individuals, prioritizing women and marginalized household heads. Members systematically pool institutional savings via structured weekly equity purchases, creating a localized internal credit asset capital fund. This fund provides low-interest, short-term loans to members for starting businesses or covering unexpected emergency expenses. By establishing explicit group-governed interest rates and mutually agreed-upon repayment schedules, our VSLA frameworks bypass predatory external lending systems altogether.",
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
      image: vslaImg,
    },
    {
      title: "Inclusive Economic Recovery",
      desc: "Designed for communities recovering from systemic crises, this program rebuilds local markets while actively dismantling structural barriers that keep youth, women, and persons with disabilities out of the workforce. We provide targeted cash injections, asset replacements, and accessible employment tracks to help small merchants and vulnerable workers restore their income streams. By connecting rural producers directly with urban buyers and advocating for fair workplace protections, we cut out exploitative practices and maximize profit margins. This systematic stabilization approach revitalizes local trade, moves participants from informal labor into secure jobs, and fosters a diverse, resilient economy.",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      image: recoveryImg,
    },
    {
      title: "Poultry Rearing",
      desc: "This project transforms backyard poultry raising into a commercially viable business through comprehensive technical training and modern husbandry methods. Participants complete intensive courses covering flock management, veterinary care, biosecurity protocols, and market-driven pricing models. Upon graduation, each participant receives a complete starter kit containing fortified coops, high-nutrient feed, and healthy, day-old chicks. We provide regular veterinary support and organized vaccination campaigns to prevent diseases and protect communal flock investments.",
      icon: <Zap className="w-5 h-5 text-rose-600" />,
      image: poultryImg,
    },
    {
      title: "Tailoring",
      desc: "Our industrial tailoring program offers an immersive vocational track designed to turn creative passion into an independent, profitable business. Students complete hands-on modules in pattern drafting, textile selection, advanced garment construction, and sewing machine maintenance. In addition to technical craft skills, the curriculum includes core business training in product pricing, cost accounting, and customer management. Graduates receive a commercial-grade manual sewing machine and a professional startup kit.",
      icon: <Scissors className="w-5 h-5 text-purple-600" />,
      image: tailoringImg,
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "VSLA Group Formation",
      desc: "Our field officers initiate community outreach to bring together 15–30 motivated individuals into a structured savings group. We supply comprehensive startup ledger kits, calculating instruments, and heavy-duty, triple-locked steel cashboxes. Over an eight-week training phase, members learn group self-governance, democratic constitution drafting, record-keeping, and the ethics of mutual financial accountability.",
    },
    {
      step: "02",
      title: "Inclusive Asset & Hiring Pipelines",
      desc: "We conduct exhaustive, market-specific baseline assessments to identify micro-enterprises destabilized by local crises, offering asset-replenishment grants to supply foundational inventory. Simultaneously, we collaborate with regional commercial entities to map labor vacancies and design technical training that establishes specialized corporate hiring tracks for youth, women, and persons with disabilities.",
    },
    {
      step: "03",
      title: "Poultry Startup Kits",
      desc: "Following technical training, our logistics teams construct secure, ventilated, pest-resistant poultry coops customized for regional weather extremes. We deliver healthy, vaccinated chicks alongside a two-month supply of nutrient-dense feed to support early growth stages. Field veterinarians provide ongoing on-site monitoring and scheduled vaccination cycles.",
    },
    {
      step: "04",
      title: "Tailoring Workstations",
      desc: "Graduates of our advanced garment design program receive commercial-grade, heavy-duty manual sewing machines that perform reliably without access to electrical grids. We supplement these machines with start-up kits containing versatile textiles, pattern templates, heavy-duty cutting tools, and essential notions alongside business registry assistance.",
    },
  ];

  const faqs = [
    {
      q: "How safe are the community VSLA funds?",
      a: "The safety of community VSLA funds relies on a multi-tiered, physical and social security protocol. Every group cashbox is constructed from reinforced steel and secured with three separate, heavy-duty padlocks. The unique keys to these locks are held by three distinct, democratically elected group officials, while a fourth official stores the cashbox itself at a separate location. This system means the box can only be opened during official group meetings with all keyholders present."
    },
    {
      q: "What does the Inclusive Economic Recovery program offer?",
      a: "Our Inclusive Economic Recovery program provides tailored structural support designed to stabilize micro-enterprises facing market instability while prioritizing workforce entry tracks for youth, women, and persons with disabilities. We replace generic cash handouts with conditional, asset-replenishment grants used to buy core inventory and essential equipment. Our team conducts localized market assessments and coordinates with regional employers to build permanent, inclusive hiring pipelines."
    },
    {
      q: "Are the poultry farming models protected against local diseases?",
      a: "Yes, our poultry farming models use strict biosecurity measures and regular veterinary care to protect communal investments from disease. Before receiving their birds, participants complete training in coop sanitization, feed storage, and early symptom detection. Our field teams coordinate with regional veterinary services to deliver timely vaccinations against common threats like Newcastle disease and Fowl Pox."
    },
    {
      q: "Can tailoring graduates retain their training tools?",
      a: "Yes, graduates who successfully complete our training course gain full ownership of their professional tailoring workstations. We treat these tools as long-term investments in community self-reliance rather than temporary loans. To qualify for tool ownership, students must maintain a 90% attendance record, pass practical garment assembly exams, and complete a basic business plan."
    }
  ];

  const dynamicMetrics = [
    { value: "15+", label: "Active Savings Hubs", subtext: "Self-regulated community financial ecosystems." },
    { value: "450+", label: "Micro-Businesses Formed", subtext: "Independent tailoring and poultry setups launched." },
    { value: "85%", label: "Income Recovery Rate", subtext: "Documented financial stabilization baseline metrics." }
  ];

  // Animation variants shared across container sub-elements
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
      {/* Hero Banner Section with initial smooth fade-in */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.heroSection}
      >
        <div className={styles.heroImageWrapper}>
          <img 
            src={heroImg} 
            alt="Community members collaborating on regional micro-enterprise development planning" 
            className={styles.heroImage}
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
            <p className={styles.heroOverline}>What We Do</p>
            <h1 className={styles.heroTitle}>Livelihoods & Economic Recovery</h1>
            <p className={styles.heroDescription}>
              Empowering vulnerable communities, our initiatives foster sustainable self-reliance through localized vocational ecosystems, comprehensive micro-lending operations, and structural economic development frameworks. By building resilient market linkages and prioritizing financial inclusion, we dismantle systemic barriers to unlock long-term independence and prosperity.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* SECTION 1: Focus Rows with Scroll Trigger */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>Our Core Livelihood Pillars</h2>
            <p className={styles.sectionSubtitle}>Targeted socio-economic operations designed to foster resilient local networks.</p>
          </div>

          <div className={styles.rowList}>
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                className={styles.rowItem}
              >
                <div className={styles.rowImgContainer}>
                  <img src={activity.image} alt={activity.title} className={styles.rowImage} loading="lazy" />
                </div>
                <div className={styles.rowContent}>
                  <div className={styles.rowHeader}>
                    <span className={styles.rowIcon}>{activity.icon}</span>
                    <h3 className={styles.rowTitle}>{activity.title}</h3>
                  </div>
                  <p className={styles.rowDesc}>{activity.desc}</p>
                  <Link to="/donate" className={styles.rowDonateButton}>
                    <HeartHandshake size={16} className="mr-2" /> Support This Program
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
            {dynamicMetrics.map((metric, idx) => (
              <motion.div key={idx} variants={fadeInUpVariants} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <h4 className={styles.metricLabel}>{metric.label}</h4>
                <p className={styles.metricSubtext}>{metric.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: Step-by-Step Growth Rows with Staggered Scroll Animation */}
      <section className={styles.timelineSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>How We Support Growth</h2>
            <p className={styles.sectionSubtitle}>A structured, systematic deployment sequence mapped seamlessly across each program specialization.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={styles.blueprintRowList}
          >
            {timelineSteps.map((step, idx) => (
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

      {/* SECTION 4: Two-Column FAQ Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.wrapper}>
          <div className={styles.faqLayout}>
            <div className={styles.faqLeftColumn}>
              <h2 className={styles.sectionMainTitle}>Frequently Asked Questions</h2>
              <p className={styles.sectionSubtitle}>Have more specific compliance or infrastructural procedural questions? Let us know.</p>
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

      {/* SECTION 5: High Contrast Partnership Banner */}
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
              <h2 className={styles.ctaTitle}>Partner With Our Livelihood Initiatives</h2>
              <p className={styles.ctaDesc}>
                Collaborate on expanding infrastructure networks, equipment integration, or rural structural banking systems.
              </p>
            </div>
            <Link to="/donate" className={styles.ctaButton}>
              Initiate Partnership <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}