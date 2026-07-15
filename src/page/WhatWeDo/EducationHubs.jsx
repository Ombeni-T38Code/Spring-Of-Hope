import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  School, 
  PenTool, 
  Globe, 
  ArrowRight, 
  HeartHandshake, 
  ChevronDown 
} from "lucide-react";
import styles from "./Education.module.css";

// External Image URLs (Verified Formats)
// External Image URLs
const heroImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80";
const remedialImg = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80";
const tutoringImg = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80";
const bursaryImg = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"; // FIXED
const mentorshipImg = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80";
const suppliesImg = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80";
const languageImg = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80";

export default function Education() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const activities = [
    {
      title: "Remedial Classes",
      desc: "Our structural academic recovery program provides intensive remedial interventions designed for students facing significant learning gaps in core subjects. Utilizing customized diagnostic testing, our expert educators deliver targeted modules that reinforce basic literacy, mathematical concepts, and problem-solving skills. By maintaining a highly supportive, low-ratio classroom environment, we provide the personalized attention necessary to ensure every child catches up to standard national curriculum expectations. This early academic support rebuilds confidence, helping vulnerable children avoid school dropout risks.",
      icon: <School className="w-5 h-5 text-emerald-600" />,
      image: remedialImg,
    },
    {
      title: "After-school Tutoring",
      desc: "Designed to expand classroom learning hours, this program establishes a safe, quiet afternoon environment for students to master complex homework assignments and review daily curriculum topics. Our dedicated tutors offer customized guidance across diverse subjects, helping students build healthy independent study habits, organizational routines, and analytical confidence. This consistent community structure prevents disadvantaged children from falling behind in their classes due to a total lack of academic support, quiet spaces, and educational resources at home.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      image: tutoringImg,
    },
    {
      title: "Bursary Linkage",
      desc: "This operational initiative connects promising, financially disadvantaged students with transparent scholarship pipelines and essential higher education financial aid systems. We work closely with regional academic bodies, corporate philanthropic groups, and individual sponsors to systematically remove secondary and tertiary tuition barriers. Beyond tracking direct scholarship applications, our team provides candidates with vital university preparation tracks, thorough application guidance, and interview coaching to ensure their long-term academic enrollment, structural retention, and successful graduation into global professional spaces.",
      icon: <Globe className="w-5 h-5 text-amber-600" />,
      image: bursaryImg,
    },
    {
      title: "Mentorship for Orphans and Vulnerable Children (OVCs)",
      desc: "Our specialized mentorship network delivers continuous psychological support, vital life skills training, and structural child protection monitoring tracks for highly vulnerable children. Every child is carefully matched with a trained community mentor who consistently tracks their academic progress, emotional well-being, and social safety. By creating an empathetic and reliable support system, we help these young individuals build deep emotional resilience, process systemic trauma, and safely navigate complex socioeconomic barriers that threaten their future development.",
      icon: <GraduationCap className="w-5 h-5 text-rose-600" />,
      image: mentorshipImg,
    },
    {
      title: "School Supply Drives",
      desc: "To eliminate material barriers to education, our logistics teams execute extensive seasonal resource distribution campaigns across marginalized communities. We provide complete student toolkits containing curriculum-aligned textbooks, writing stationery, mathematical instruments, and durable, locally-produced school uniforms. By outfitting every student with these necessary learning tools, we effectively restore their dignity, eliminate classroom shame, drastically improve regular daily school attendance, and build a lasting framework of academic equality for children who lack basic financial resources.",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      image: suppliesImg,
    },
    {
      title: "Language Training (English & French)",
      desc: "This comprehensive language immersion framework offers intensive literacy and communication modules in English and French to significantly boost long-term career opportunities. Led by specialized language instructors, the curriculum emphasizes spoken dialogue, complex grammar composition, and professional business correspondence. Developing conversational and written proficiency in these essential global trade languages enables our youth to access highly competitive regional employment hubs, international university placement systems, and diverse cross-border professional opportunities in an interconnected world.",
      icon: <PenTool className="w-5 h-5 text-indigo-600" />,
      image: languageImg,
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Diagnostic Educational Assessments",
      desc: "Our field coordinators partner with local primary and secondary institutions to identify students trailing behind age-standardized baselines. We deploy comprehensive literacy and mathematical diagnostic tools to map exact learning gaps and configure specialized cohort placements.",
    },
    {
      step: "02",
      title: "Structured Tutoring & Resource Provisioning",
      desc: "Students enter their scheduled afternoon tutoring frameworks while receiving a full suite of materials from our supply drives. Progress is systematically documented in individual academic trackers to ensure rapid learning recovery and high classroom engagement.",
    },
    {
      step: "03",
      title: "Holistic Care & OVC Tracking",
      desc: "For children categorized as vulnerable, our social workers integrate dedicated local mentors to oversee security and emotional resilience. This layer works alongside our bursary team, which actively aligns qualified senior students with high-impact secondary and tertiary scholarship boards.",
    },
    {
      step: "04",
      title: "Language Immersion & Global Readiness",
      desc: "Advanced students enter intensive English and French communication tracks designed to prepare them for global opportunities. Program completion is benchmarked through practical oral examinations, composition reviews, and career pathing workshops.",
    },
  ];

  const faqs = [
    {
      q: "Who qualifies for the OVC Mentorship program?",
      a: "Our OVC Mentorship framework prioritizes orphans, child-headed households, and children from severely marginalized backgrounds experiencing structural instability. Candidates are identified through combined baseline metrics from local school boards, community social workers, and administrative leadership assessments to guarantee resources reach those in deepest need."
    },
    {
      q: "How are the school supplies and uniforms sourced?",
      a: "All school supplies and uniforms are sourced through sustainable procurement pipelines. We contract local tailors and vendors to manufacture durable uniforms, which directly stimulates the regional economy. Textbooks and stationery are assembled into complete kits by volunteers and distributed transparently at community hubs."
    },
    {
      q: "What is the structure of the language training program?",
      a: "The English and French language modules run in parallel with the standard school calendar year. They are broken down into beginner conversational, intermediate reading, and advanced professional levels. We focus on building communication self-reliance so students can comfortably apply for regional higher education tracks and corporate jobs."
    },
    {
      q: "How does the bursary linkage operation work?",
      a: "Springs of Hope does not operate as a direct insulation fund; instead, we serve as a strategic linkage clearinghouse. We identify exceptional, under-resourced students, build verified academic profiles, and connect them directly with international scholarship foundations, corporate grants, and government funding pipelines."
    }
  ];

  const dynamicMetrics = [
    { value: "1,200+", label: "Students Supported", subtext: "Enrolled across remedial and afternoon tutoring infrastructure tracks." },
    { value: "85%", label: "Academic Advancement Rate", subtext: "Documented improvement in core literacy and mathematics metrics." },
    { value: "350+", label: "OVC Mentorship Pairs", subtext: "Active pairings receiving continuous emotional and academic monitoring." }
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
            alt="Students engaged in structured collaborative group learning and peer mentorship" 
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
            <p className={styles.heroOverline}>What We Do</p>
            <h1 className={styles.heroTitle}>Education & Mentorship Support</h1>
            <p className={styles.heroDescription}>
              We foster long-term community self-reliance through structural educational empowerment, bilingual vocational training ecosystems, and sustainable childhood mentorship operations. By dismantling localized barriers and establishing resilient development networks, our programs equip vulnerable individuals with the critical resources and skills necessary to secure financial independence and build enduring regional prosperity.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* SECTION 1: Focus Rows */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>Our Core Education Pillars</h2>
            <p className={styles.sectionSubtitle}>Targeted academic interventions and safety structures designed to empower the next generation.</p>
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
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className={styles.rowImage} 
                    loading="lazy" 
                    crossOrigin="anonymous"
                  />
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

      {/* SECTION 3: Blueprint Process Rows */}
      <section className={styles.timelineSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>How We Support Development</h2>
            <p className={styles.sectionSubtitle}>A structured, systematic deployment sequence mapped seamlessly across our educational programs.</p>
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

      {/* SECTION 4: FAQ Accordion */}
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
              <h2 className={styles.ctaTitle}>Partner With Our Education Initiatives</h2>
              <p className={styles.ctaDesc}>
                Collaborate on expanding infrastructure networks, equipment integration, or school supply distribution models.
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