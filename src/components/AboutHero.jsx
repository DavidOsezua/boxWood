import React from "react";
import styles from "./AboutHero.module.css";
import { motion } from "framer-motion";
import { aboutus } from "../assets";
import { slideIn } from "../Animation/utils";

const AboutHero = () => {
  return (
    <section className={`section ${styles.heroSection} `}>
      <div className={`sectionContainer`}>
        {/* OUR SERVICES HERO */}
        <div className={`${styles.servicesHero}`}>
          {/* IMAGE */}
          <motion.div
            className={`${styles.imageContainer} mb-4`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutus} />
          </motion.div>

          <motion.div
            className={`content`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`smallText w-[130px]`}>
              <span className="line"></span>
              Our Company
            </span>

            <h2 className={`bigText`}>
              Your Trusted Partner in Financial Recovery
            </h2>

            <p className="mdText">
              At Boxwood Capital, we are committed to helping individuals and
              businesses navigate complex financial challenges. With years of
              experience in investment recovery and fraud prevention, our
              dedicated team works tirelessly to reclaim lost funds and provide
              expert guidance. We prioritize transparency, integrity, and client
              satisfaction, ensuring that every step of the recovery process is
              handled with the utmost professionalism and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
