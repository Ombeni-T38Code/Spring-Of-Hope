import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import PillarsDashboard from '../../components/PillarDetail/PillarsDashboard';
import styles from './Home.module.css';
import WhyUs from '../../components/WhyUs/WhyUs';
import HomeVentures from '../../components/Home/HomeVentures';
import ExploreProgramsBar from '../../components/Home/ExploreProgramsBar';
import ImpactMetrics from '../../components/Home/ImpactMetrics';
import FoundedSection from '../../components/FoundedSection/FoundedSection';
// import ContactSection from '../../components/Home/ContactSection';
import ConnectSection from '../../components/ConnectSection/ConnectSection';

const Home = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <WhyUs />
      <FoundedSection />
      <PillarsDashboard />
    <HomeVentures />
    <ExploreProgramsBar />
    <ImpactMetrics />
    <ConnectSection />
    {/* <ContactSection /> */}
    </div>
  );
};

export default Home;
