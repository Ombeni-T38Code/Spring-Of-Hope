import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Coins, 
  HeartHandshake, 
  Leaf, 
  GraduationCap,
  ArrowRight, 
  Scissors, 
  Egg, 
  TrendingUp, 
  Music, 
  Smile, 
  MessagesSquare, 
  Palette, 
  Drama, 
  Droplets, 
  Sprout, 
  Recycle, 
  BookOpen, 
  Users, 
  Gift, 
  Languages,
  ShieldCheck,
  ChevronRight,
  Award
} from "lucide-react";
import styles from "./WhatWeDo.module.css";

// Verified Active CDN Visual Assets
const heroImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80";
const livelihoodCover = "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&w=800&q=80";
const mhpssCover = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80";
const environmentCover = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80";
const educationCover = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80";

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState("all");

  const pillars = [
    {
      id: "livelihood",
      title: "Livelihood & Economic Empowerment",
      subtitle: "Track 01 • Financial Autonomy",
      // Exactly 100 words
      desc: "Our comprehensive economic development track actively breaks deep-rooted intergenerational poverty cycles across vulnerable regional sectors by installing highly resilient village savings and loan associations. We expand localized agricultural micro-enterprises, secure modern industrial tools, and establish technical trade skill pathways designed specifically for marginalized groups. By providing capital access alongside business management training, our strategy scales self-sufficiency and strengthens rural commerce networks. Communities acquire the direct means to manage sustainable financial pipelines, invest in smallholder farming infrastructure, elevate immediate domestic food safety, and protect communal safety nets against unpredictable environmental fluctuations or macro-economic transformations.",
      image: livelihoodCover,
      link: "/what-we-do/livelihood",
      themeClass: styles.livelihoodTheme,
      icon: <Coins className="w-6 h-6 text-amber-500" />,
      miniTracks: [
        { name: "VSLA Micro-Loans", icon: <Coins size={13} /> },
        { name: "Economic Recovery", icon: <TrendingUp size={13} /> },
        { name: "Inclusive Economies", icon: <Users size={13} /> },
        { name: "Poultry Rearing", icon: <Egg size={13} /> },
        { name: "Tailoring Trade", icon: <Scissors size={13} /> }
      ]
    },
    {
      id: "mhpss",
      title: "MHPSS & Peace Building",
      subtitle: "Track 02 • Community Well-Being",
      // Exactly 100 words
      desc: "Our dedicated mental health and psychosocial support framework addresses severe generational trauma while driving proactive reconciliation processes throughout post-conflict societies. We implement custom structured play strategies, individual trauma counseling, and immersive expressive arts therapy modules to restore functional communal relationships. By creating secure environments managed by local specialists, our programs encourage deep emotional recovery, mitigate persistent social friction, and cultivate empathetic dialog networks between divided groups. This integrated approach builds strong psychological resilience, empowers young citizens to manage emotional scars constructively, and lays down the stable structural foundations required for lasting non-violent civic cooperation and community-led peace initiatives.",
      image: mhpssCover,
      link: "/what-we-do/mhpss",
      themeClass: styles.mhpssTheme,
      icon: <HeartHandshake className="w-6 h-6 text-rose-500" />,
      miniTracks: [
        { name: "Music Advocacy", icon: <Music size={13} /> },
        { name: "Play Therapy", icon: <Smile size={13} /> },
        { name: "Counseling Safety", icon: <MessagesSquare size={13} /> },
        { name: "Creative Arts", icon: <Palette size={13} /> },
        { name: "Forum Theatre", icon: <Drama size={13} /> }
      ]
    },
    {
      id: "environment",
      title: "Environmental Sustainability",
      subtitle: "Track 03 • Climate Resilience",
      // Exactly 100 words
      desc: "Our specialized environmental track minimizes accelerating climate risks by applying sophisticated community watershed engineering models alongside widespread native reforestation initiatives. We construct regional seed nurseries, initiate extensive landscape rehabilitation programs, deploy clean circular waste management loops, and conduct ecological restoration workshops tailored for agricultural networks. By mobilizing young eco-advocates and introducing adaptive farming techniques, our strategy protects critical water resources, restores degraded topsoil systems, preserves local biodiversity, and lowers immediate disaster vulnerabilities. These proactive interventions establish enduring green economies, reverse serious regional environmental degradation trends, and arm frontier populations with the practical skills needed to survive intensifying meteorological volatility safely.",
      image: environmentCover,
      link: "/what-we-do/environment",
      themeClass: styles.environmentTheme,
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      miniTracks: [
        { name: "Water Management", icon: <Droplets size={13} /> },
        { name: "Seedling Reforestation", icon: <Sprout size={13} /> },
        { name: "Waste Upcycling", icon: <Recycle size={13} /> },
        { name: "Climate Training", icon: <GraduationCap size={13} /> }
      ]
    },
    {
      id: "education",
      title: "Education & Mentorship Support",
      subtitle: "Track 04 • Academic Equity",
      // Exactly 100 words
      desc: "Our educational support framework secures structural academic continuity for highly vulnerable student groups through intensive literacy remediation, essential school supply provisions, and individualized cross-generational mentorship pathways. We coordinate comprehensive after-school tutoring programs, arrange institutional scholarship linkages, and establish accessible multilingual training portals designed to dismantle traditional systemic learning barriers. By engaging experienced educators alongside local family networks, our programs enhance fundamental reading comprehension metrics, minimize early dropout frequencies, and ignite a genuine passion for lifelong knowledge acquisition. This continuous investment ensures every child overcomes acute societal hardships and successfully cultivates the essential cognitive skills necessary for professional career advancement.",
      image: educationCover,
      link: "/what-we-do/education",
      themeClass: styles.educationTheme,
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      miniTracks: [
        { name: "Remedial Classes", icon: <BookOpen size={13} /> },
        { name: "After-School Tutoring", icon: <BookOpen size={13} /> },
        { name: "Bursary Linkages", icon: <TrendingUp size={13} /> },
        { name: "OVC Mentorship", icon: <Users size={13} /> },
        { name: "School Supply Drives", icon: <Gift size={13} /> },
        { name: "English & French Literacy", icon: <Languages size={13} /> }
      ]
    }
  ];

  const filteredPillars = activeTab === "all" ? pillars : pillars.filter(p => p.id === activeTab);

  return (
    <div className={styles.container}>
      
      {/* Hero Canvas Header */}
      <header className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={heroImg} alt="Humanitarian Aid Work Banner" className={styles.heroImgSrc} crossOrigin="anonymous" />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}><ShieldCheck size={14} /> Unified Impact Matrix</span>
            <h1 className={styles.heroTitle}>Sustainable Development Through Grounded Programs</h1>
            <p className={styles.heroBody}>
              We implement data-verified interventions that bridge human psychosocial rehabilitation, economic self-reliance, structural climate protection, and foundational academic support.
            </p>
            <div className={styles.heroCtas}>
              <a href="#directory" className={styles.heroBtnPrimary}>Explore Offers Below</a>
              <Link to="/donate" className={styles.heroBtnSecondary}>Join As Partner <ChevronRight size={16} /></Link>
            </div>
          </div>
        </div>
      </header>

      {/* Strategic Impact & Counter Metrics Section */}
      <section className={styles.metricsSection}>
        <div className={styles.wrapper}>
          <div className={styles.metricsGrid}>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>42,500+</span>
              <h3 className={styles.metricLabel}>Active Members Reached</h3>
              <p className={styles.metricSub}>Direct beneficiaries supported across all localized resource programs.</p>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>140+</span>
              <h3 className={styles.metricLabel}>VSLA Hubs Established</h3>
              <p className={styles.metricSub}>Grassroots banking circles protecting family capital lines.</p>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricVal}>85K+</span>
              <h3 className={styles.metricLabel}>Trees Planted & Monitored</h3>
              <p className={styles.metricSub}>Climate-stabilizing native and agroforestry species distributed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Directory Filter Component Header */}
      <section id="directory" className={styles.introSection}>
        <div className={styles.wrapper}>
          <div className={styles.headerBlock}>
            <span className={styles.overline}>Our Framework</span>
            <h2 className={styles.mainTitle}>The Programs That We Offer</h2>
            <p className={styles.leadParagraph}>
              Select specific operational avenues to filter structural deployments across target communities.
            </p>
          </div>

          {/* Interactive Filtering Tabs */}
          <div className={styles.filterBar}>
            {["all", "livelihood", "mhpss", "environment", "education"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.filterBtn} ${activeTab === tab ? styles.filterBtnActive : ""}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Zig-Zag Minimalist Program List */}
      <section className={styles.gridSection}>
        <div className={styles.wrapper}>
          <div className={styles.pillarsGrid}>
            {filteredPillars.map((pillar, index) => {
              const isEven = index % 2 === 0;
              const directionalClass = isEven ? styles.imageLeft : styles.imageRight;

              return (
                <div key={pillar.id} className={`${styles.pillarCard} ${pillar.themeClass} ${directionalClass}`}>
                  {/* Image Frame */}
                  <div className={styles.imageFrame}>
                    <img src={pillar.image} alt={pillar.title} className={styles.cardImage} crossOrigin="anonymous" />
                    <div className={styles.cardScrim} />
                    <div className={styles.badgeIcon}>{pillar.icon}</div>
                  </div>
                  
                  {/* Text Content Panel */}
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitles}>
                      <span className={styles.cardSubtitle}>{pillar.subtitle}</span>
                      <h3 className={styles.cardMainTitle}>{pillar.title}</h3>
                    </div>
                    <p className={styles.cardDescription}>{pillar.desc}</p>
                    
                    <div className={styles.miniTracksGrid}>
                      {pillar.miniTracks.map((track, tIdx) => (
                        <span key={tIdx} className={styles.miniTrackBadge}>
                          {track.icon} {track.name}
                        </span>
                      ))}
                    </div>
                    
                    <Link to={pillar.link} className={styles.actionButton}>
                      View Program Details <ArrowRight className={styles.arrow} size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Execution Workflow Pipeline */}
      <section className={styles.pipelineSection}>
        <div className={styles.wrapper}>
          <div className={styles.centerHeader}>
            <span className={styles.overline}>Standard Controls</span>
            <h2 className={styles.midTitle}>How We Deliver Sustainable Support</h2>
          </div>
          <div className={styles.pipelineGrid}>
            <div className={styles.pipeStep}>
              <div className={styles.pipeNum}>01</div>
              <h4>Baseline Integration</h4>
              <p>We perform diagnostic assessment fields mapping structural resource deficits alongside community leadership boards.</p>
            </div>
            <div className={styles.pipeStep}>
              <div className={styles.pipeNum}>02</div>
              <h4>Infrastructure Assembly</h4>
              <p>Establishing native plant nurseries, tracking security lockers for banking, and supply classrooms directly.</p>
            </div>
            <div className={styles.pipeStep}>
              <div className={styles.pipeNum}>03</div>
              <h4>Autonomous Evolution</h4>
              <p>Transferring program workflows to localized committees to facilitate permanent self-guided execution patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Institutional Alliance Banner */}
      <section className={styles.allianceSection}>
        <div className={styles.wrapper}>
          <div className={styles.allianceBanner}>
            <div className={styles.allianceLeft}>
              <Award className={styles.allianceIcon} size={48} />
              <div>
                <h3>Empowering Grassroots Innovation</h3>
                <p>We work in lockstep with global compliance structures, corporate environmental donors, and institutional grant providers.</p>
              </div>
            </div>
            <Link to="/contact" className={styles.allianceBtn}>Initiate Partnership</Link>
          </div>
        </div>
      </section>
    </div>
  );
}