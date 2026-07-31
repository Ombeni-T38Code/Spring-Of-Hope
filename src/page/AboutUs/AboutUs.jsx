import React from 'react';
import styles from './About.module.css';

import Hero from './Hero/Hero';
import Story from './Story/Story';
import Journey from './Journey/Journey';
import Pillars from './Pillars/Pillars';
import CoreValues from './CoreValues/CoreValues';
import CallToAction from './CallToAction/CallToAction';

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <Hero />
      <Story />
      <Journey />
      <Pillars />
      <CoreValues />
      <CallToAction />
    </main>
  );
}