import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, BarChart3, FileSpreadsheet, Eye, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import styles from "./TransparentAuditing.module.css";

// Sample audit ledger items representing Springs of Hope's radical data transparency
const auditLedger = [
  {
    id: "AUD-2026-004",
    pillar: "Livelihood",
    activity: "VSLA Seed Capital Injection",
    location: "Kalobeyei Settlement",
    status: "Verified",
    date: "July 2026",
    details: "100% of micro-loans successfully distributed to group leadership councils; zero intermediary transaction friction."
  },
  {
    id: "AUD-2026-003",
    pillar: "Environment",
    activity: "Seedling Delivery & Planting Log",
    location: "Kakuma Camp & Host Communities",
    status: "Verified",
    date: "June 2026",
    details: "Physical counts confirmed across regional nurseries; localized tracking maps updated for indigenous drought-resistant models."
  },
  {
    id: "AUD-2026-002",
    pillar: "Education",
    activity: "Scholastic Distribution Audit",
    location: "Kakuma Camp (Schools Hub)",
    status: "Verified",
    date: "May 2026",
    details: "Receipts, local textbooks, and basic uniform sets audited against vulnerable student enrollment rosters."
  },
  {
    id: "AUD-2026-001",
    pillar: "MHPSS",
    activity: "Expressive Art Therapy Logistics",
    location: "Kalobeyei Village 1 Center",
    status: "In Review",
    date: "April 2026",
    details: "Processing final community field registers and evaluating total paint/drawing material consumption margins."
  }
];

export default function TransparentAuditing() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedRow, setExpandedRow] = useState(null);

  const filteredLedger = activeTab === "all" 
    ? auditLedger 
    : auditLedger.filter(item => item.status.toLowerCase() === activeTab);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <div className={styles.container}>
      
      {/* SECTION 1: HERO CONTAINER WITH BRANDED GRADIENT BLUR */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackgroundImage} />
        <div className={styles.heroGridOverlay} />
        <div className={styles.heroWrapper}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroContent}
          >
            <span className={styles.heroOverline}>Radical Accountability Standard</span>
            <h1 className={styles.heroTitle}>Transparent Auditing</h1>
            <p className={styles.heroParagraph}>
              We replace standard structural waste with decentralized, visible resource allocations. Track real operational metrics, supply registers, and project validations directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: METRICS & SYSTEMIC ASSURANCE MATRICES */}
      <section className={styles.assuranceSection}>
        <div className={styles.wrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Operational Rigor</span>
            <h2 className={styles.sectionTitle}>Metrics & Data Verification</h2>
          </div>

          <div className={styles.matrixGrid}>
            <div className={styles.matrixCard}>
              <div className={styles.matrixIconBox}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.matrixLabel}>Direct Field Validation</h3>
              <p className={styles.matrixDesc}>
                All asset drops, tailoring tool distributions, and seedling configurations are visually logged and physically cross-checked by program leads before system validation.
              </p>
            </div>

            <div className={styles.matrixCard}>
              <div className={styles.matrixIconBox}>
                <BarChart3 size={24} />
              </div>
              <h3 className={styles.matrixLabel}>Decentralized Management</h3>
              <p className={styles.matrixDesc}>
                As a Refugee-Led Organization, ledger balances are openly evaluated during monthly public review blocks to ensure total resource coordination across Turkana County.
              </p>
            </div>

            <div className={styles.matrixCard}>
              <div className={styles.matrixIconBox}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 className={styles.matrixLabel}>Open-Access Documentation</h3>
              <p className={styles.matrixDesc}>
                We maintain streamlined programmatic reporting standards, making raw target benchmarks and impact frameworks readily available to external auditing bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE FIELD LEDGER */}
      <section className={styles.ledgerSection}>
        <div className={styles.wrapper}>
          <div className={styles.ledgerHeaderBlock}>
            <div>
              <span className={styles.overline}>Live Verification</span>
              <h2 className={styles.sectionTitle}>Programmatic Deployment Log</h2>
            </div>
            
            {/* Ledger Filter Tabs */}
            <div className={styles.tabFilters}>
              <button 
                className={`${styles.filterBtn} ${activeTab === "all" ? styles.activeTab : ""}`}
                onClick={() => { setActiveTab("all"); setExpandedRow(null); }}
              >
                All Checks
              </button>
              <button 
                className={`${styles.filterBtn} ${activeTab === "verified" ? styles.activeTab : ""}`}
                onClick={() => { setActiveTab("verified"); setExpandedRow(null); }}
              >
                Verified
              </button>
              <button 
                className={`${styles.filterBtn} ${activeTab === "in review" ? styles.activeTab : ""}`}
                onClick={() => { setActiveTab("in review"); setExpandedRow(null); }}
              >
                In Review
              </button>
            </div>
          </div>

          {/* Interactive Ledger Board */}
          <div className={styles.ledgerContainer}>
            <div className={styles.ledgerHeaderRow}>
              <div>Log ID</div>
              <div>Strategic Pillar</div>
              <div>Target Activity</div>
              <div>Regional Zone</div>
              <div>Status</div>
              <div style={{ textAlign: "right" }}>Actions</div>
            </div>

            <div className={styles.ledgerBody}>
              {filteredLedger.map((item) => (
                <div key={item.id} className={styles.rowWrapper}>
                  <div 
                    className={`${styles.ledgerRow} ${expandedRow === item.id ? styles.rowSelected : ""}`}
                    onClick={() => toggleRow(item.id)}
                  >
                    <div className={styles.cellId}>{item.id}</div>
                    <div><span className={styles.pillarTag}>{item.pillar}</span></div>
                    <div className={styles.cellActivity}>{item.activity}</div>
                    <div className={styles.cellLocation}>{item.location}</div>
                    <div>
                      <span className={`${styles.statusBadge} ${item.status === "Verified" ? styles.statusVerified : styles.statusReview}`}>
                        {item.status === "Verified" ? <CheckCircle2 size={12} /> : <RefreshCw size={12} className={styles.spinIcon} />}
                        {item.status}
                      </span>
                    </div>
                    <div className={styles.cellAction}>
                      <button className={styles.viewDetailsBtn} aria-label="Toggle Details">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Details Tray */}
                  <AnimatePresence initial={false}>
                    {expandedRow === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.detailsTray}
                      >
                        <div className={styles.detailsInner}>
                          <div className={styles.detailsHeader}>
                            <AlertCircle size={16} color="#059669" />
                            <strong>Auditing Summary Details ({item.date}):</strong>
                          </div>
                          <p className={styles.detailsText}>{item.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}