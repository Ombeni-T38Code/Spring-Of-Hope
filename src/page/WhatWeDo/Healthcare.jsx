import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Music, 
  Smile, 
  HeartHandshake, 
  BookOpen, 
  Drama, 
  ArrowRight, 
  ChevronDown 
} from "lucide-react";
import styles from "./MentalHealthPeace.module.css";

// External Image URLs (Verified Formats)
const heroImg = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80";
const musicImg = "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80";
const playImg = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80";
const counselingImg = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80";
const artImg = "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80";
const theatreImg = "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80";

export default function MentalHealthPeace() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const activities = [
    {
      title: "Music for Social Cohesion & Advocacy",
      desc: "Our interactive community music programs use communal songwriting, group drum circles, and public advocacy performances to actively bridge deep ethnic divisions and heal historic generational traumas. By establishing inclusive local musical choirs and hosting collaborative peace concerts, we create shared expressive sanctuaries where marginalized youth comfortably express complex emotions and challenge systemic social injustices. This artistic methodology builds powerful cultural bridges, re-establishes fractured community trust, and transforms raw historical grievances into harmonious, forward-looking expressions of regional solidarity.",
      icon: <Music className="w-5 h-5 text-rose-600" />,
      image: musicImg,
    },
    {
      title: "Play Therapy",
      desc: "Designed specifically for conflict-affected children, our play therapy frameworks utilize specialized recreational spaces to help young trauma survivors process deep psychological distress without relying purely on verbal communication. Trained child psychologists guide participants through therapeutic game structures, cooperative group sports, and emotional regulation exercises that safely restore a vital sense of security and predictable routine. These intentional behavioral interventions help vulnerable infants release repressed anxiety, develop crucial interpersonal problem-solving habits, and rebuild basic cognitive trust with peers.",
      icon: <Smile className="w-5 h-5 text-blue-600" />,
      image: playImg,
    },
    {
      title: "Counseling & Clinical Care",
      desc: "We deliver structured individual psychotherapy and localized trauma-informed support groups led by licensed psychiatric professionals to address complex post-traumatic stress disorders and systemic depression. Our counseling framework blends evidence-based cognitive behavioral strategies with deeply sensitive psychosocial support, targeting rural zones completely abandoned by primary psychiatric infrastructure. By training local community healthcare workers in basic psychological first aid, we create an accessible, sustainable network capable of managing long-term mental health stability and actively preventing deep-seated familial isolation.",
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
      image: counselingImg,
    },
    {
      title: "Storytelling, Drawing & Painting",
      desc: "Our expressive art workshops use structured painting, creative sketching, and oral storytelling traditions to unlock subconscious emotional processing for individuals struggling with severe communication barriers. Participants map out complex life experiences onto physical canvases or share traditional moral narratives that emphasize community reconciliation and personal resilience. These creative artistic mediums allow deep psychological scars to be safely externalized, giving survivors absolute narrative control over painful past experiences while cultivating profound inner peace and long-term self-reflection.",
      icon: <BookOpen className="w-5 h-5 text-amber-600" />,
      image: artImg,
    },
    {
      title: "Community Theatre",
      desc: "Our interactive community theater initiatives stage impactful forum drama performances that directly confront real-world social conflicts, domestic violence dynamics, and historical regional prejudices within localized village squares. Local actors perform relatable everyday scenarios, inviting audience members to step directly into scenes to collaboratively brainstorm alternative, peaceful resolutions to complex disputes. This immersive theatrical methodology strips away intense socio-cultural stigmas, builds deep cross-factional empathy, and provides communities with actionable, non-violent blueprints for handling systemic relational crises.",
      icon: <Drama className="w-5 h-5 text-purple-600" />,
      image: theatreImg,
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Psychosocial First Aid & Needs Mapping",
      desc: "Our community mobilizers conduct local screenings to locate individuals and child survivors showing severe trauma symptoms. We coordinate with healthcare workers to establish custom intake metrics and configure secure therapy cohorts.",
    },
    {
      step: "02",
      title: "Creative Expression & Therapeutic Groups",
      desc: "Beneficiaries access structured artistic modules, play therapy environments, or community music circles. Sessions are tracked via standardized qualitative mental health indicators to ensure steady processing of historical trauma.",
    },
    {
      step: "03",
      title: "Clinical Counseling & Support Network Integration",
      desc: "For deep psychological conditions, psychiatric teams deploy custom trauma-informed counseling frameworks. We concurrently train neighborhood first-responders in localized mental health surveillance to guarantee long-term safety.",
    },
    {
      step: "04",
      title: "Forum Theatre & Social Cohesion Mobilization",
      desc: "Our cohorts stage community-wide interactive forum theater events and peace advocacy pieces. These public gatherings turn shared creative processing into structural reconciliation frameworks that lower localized conflicts.",
    },
  ];

  const faqs = [
    {
      q: "Who qualifies for individual clinical counseling?",
      a: "Our clinical counseling tracks prioritize individuals exhibiting critical trauma symptoms, extreme distress, domestic violence survivors, and displaced persons within unstable regions. Referrals are accepted from local medical centers, community advocates, and self-referral workflows managed at our safe spaces."
    },
    {
      q: "How are community theater themes formulated?",
      a: "Themes are built through cooperative focus groups with village elders, local youth, and community members. We unpack real conflict dynamics—such as systemic resource access, intergroup disputes, or stigma—and mask them within anonymous, relatable scripts to keep dialog safe and productive."
    },
    {
      q: "What materials are utilized within art and play therapy?",
      a: "We procure non-toxic, highly durable artistic supplies including acrylic canvases, clay mediums, sketching materials, and cooperative sports tools. These kits are kept permanently in secure community sanctuaries where children can access them year-round under professional guidance."
    },
    {
      q: "How does MHPSS directly influence local peacebuilding?",
      a: "Unaddressed communal trauma frequently reinforces cycles of reactionary conflict. By offering structured spaces to process historical grievances, build deep interpersonal empathy, and restore baseline cognitive security, we dismantle psychological triggers for violence and lay the foundation for community cohesion."
    }
  ];

  const dynamicMetrics = [
    { value: "12,500+", label: "Individuals Supported", subtext: "Enrolled across group therapy, psychiatric support, and clinical infrastructure tracks." },
    { value: "4,800+", label: "Children in Play Therapy", subtext: "Vulnerable youth accessing safe, trauma-informed recreational spaces." },
    { value: "22,000+", label: "Theatre & Music Audience", subtext: "Engaged in collaborative village squares and public social cohesion advocacy tracks." }
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
            alt="Individuals participating in community healing circles and social cohesion workshops" 
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
            <h1 className={styles.heroTitle}>MHPSS & Peacebuilding</h1>
            <p className={styles.heroDescription}>
              We foster long-term community self-reliance through structural emotional empowerment, trauma-informed clinical care ecosystems, and sustainable social cohesion operations. By dismantling localized barriers and establishing resilient development networks, our programs equip vulnerable individuals with the critical resources and skills necessary to secure psychological independence and build enduring regional peace.
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* SECTION 1: Focus Rows */}
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionMainTitle}>Our Core Support Pillars</h2>
            <p className={styles.sectionSubtitle}>Targeted psychiatric interventions and creative expressions designed to heal and reunite communities.</p>
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
            <h2 className={styles.sectionMainTitle}>How We Support Integration</h2>
            <p className={styles.sectionSubtitle}>A structured, systematic deployment sequence mapped seamlessly across our psychosocial programs.</p>
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
              <h2 className={styles.ctaTitle}>Partner With Our Healing Initiatives</h2>
              <p className={styles.ctaDesc}>
                Collaborate on expanding clinical infrastructure networks, safe space integrations, or artistic trauma recovery models.
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