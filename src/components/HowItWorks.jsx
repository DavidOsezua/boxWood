import React from "react";
import { howItWorksImage } from "../assets";
import styles from './HowItWorks.module.css'

const HowItWorks = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer `}>
        <p>HOW IT WORKS</p>

        <img src={howItWorksImage} />
      </div>
    </section>
  );
};

export default HowItWorks;
