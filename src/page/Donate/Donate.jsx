import React, { useState } from 'react';
import { Heart, DollarSign, ArrowRight } from 'lucide-react';
import styles from './Donate.module.css';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const tiers = [
    { amount: 25, label: 'Provides foundational learning materials for one student.' },
    { amount: 50, label: 'Funds micro-grants for emerging enterprise initiatives.' },
    { amount: 100, label: 'Sustains a localized digital academy hub for a week.' },
    { amount: 250, label: 'Accelerates infrastructure and leadership training nodes.' },
  ];

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className={styles.sectionPage}>
      <div className={styles.gridTwoColumn}>
        
        {/* Left Side: Context & Mission Value Callout */}
        <div>
          <div className={styles.sectionHeader}>
            <span className={styles.tagline}>Support Our Mission</span>
            <h2 className={styles.title}>Invest directly in human potential.</h2>
          </div>
          <p className={styles.descriptionText}>
            By shifting capital into localized development programs, you are actively moving communities past aid dependency. 100% of your contribution directly funds real education, direct micro-enterprise assets, and civic leadership programs.
          </p>
          
          <div className={styles.guaranteeCard}>
            <div className={styles.guaranteeHeader}>
              <Heart size={20} className={styles.greenText} />
              <h4>Our Transparency Commitment</h4>
            </div>
            <p>Every dollar deployed is fully trackable, auditable, and carefully targeted toward sustainable community-led asset building pipelines.</p>
          </div>
        </div>

        {/* Right Side: Donation Tier Form Component Box */}
        <div className={styles.formContainer}>
          {/* Toggle switches for billing recurring timelines */}
          <div className={styles.toggleRow}>
            <button 
              className={`${styles.toggleBtn} ${frequency === 'monthly' ? styles.activeToggle : ''}`}
              onClick={() => setFrequency('monthly')}
            >
              Give Monthly
            </button>
            <button 
              className={`${styles.toggleBtn} ${frequency === 'once' ? styles.activeToggle : ''}`}
              onClick={() => setFrequency('once')}
            >
              One-Time
            </button>
          </div>

          {/* Grid selections for predefined amount configurations */}
          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                className={`${styles.tierCard} ${selectedAmount === tier.amount ? styles.activeTier : ''}`}
                onClick={() => handleAmountClick(tier.amount)}
              >
                <span className={styles.tierValue}>${tier.amount}</span>
              </button>
            ))}
          </div>

          {/* Optional fallback field for user custom variable inputs */}
          <div className={styles.inputWrapper}>
            <div className={styles.inputIcon}>
              <DollarSign size={18} />
            </div>
            <input 
              id="donation-custom-amount"
              name="customAmount"
              autoComplete="off"
              type="number" 
              placeholder="Enter custom amount" 
              className={styles.customInput}
              value={customAmount}
              onChange={handleCustomChange}
            />
          </div>

          {/* Active summary selection contextual response printout */}
          <div className={styles.impactPreview}>
            <p>
              <strong>Impact:</strong> {
                customAmount 
                  ? "Directly scales local structural capacity and operational program layers." 
                  : tiers.find(t => t.amount === selectedAmount)?.label || "Select an amount to view impact framework details."
              }
            </p>
          </div>

          <button className={styles.submitDonateBtn}>
            Proceed to Payment 
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Donate;