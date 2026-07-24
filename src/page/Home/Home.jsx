import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import PillarsDashboard from '../../components/PillarDetail/PillarsDashboard';
import styles from './Home.module.css';
import WhyUs from '../../components/WhyUs/WhyUs';
import ExploreProgramsBar from '../../components/Home/ExploreProgramsBar';
import FoundedSection from '../../components/FoundedSection/FoundedSection';
// import ContactSection from '../../components/Home/ContactSection';
import ConnectSection from '../../components/ConnectSection/ConnectSection';
import ImpactFoundation from '../../components/Home/ImpactFoundation';
import JoinJourneySection from '../../components/Home/JoinJourneySection';

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <WhyUs />
      <FoundedSection />
      <PillarsDashboard />
    <ImpactFoundation />
    <ExploreProgramsBar />
    <JoinJourneySection />
    <ConnectSection />
    {/* <ContactSection /> */}
    </div>
  );
};

export default Home;
