import React from "react";
import { aboutus, home } from "../assets";
import styles from "./HomeHero.module.css";
import Rating from "./SvgComponents/Rating";
import ArrowRight from "./SvgComponents/ArrowRight";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";
import { NavLink } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className={`section ${styles.heroSection} `}>
      <div className={`sectionContainer`}>
        {/* OUR SERVICES HERO */}
        <div className={`${styles.servicesHero}`}>
          {/* IMAGE */}

          <motion.div
            className={`content`}
            variants={fadeIn("right", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className={`bigText`}>
              Your Path to Financial Justice Starts Here
            </h2>

            <p className={`mdText ${styles.mdText}`}>
              With a proven track record in wealth recovery, we offer
              personalized solutions to help you regain control of your lost
              investments, funds, or assets.
            </p>

            <NavLink to={`/contact`}>
              <motion.button
                className={`${styles.btn} mt-5`}
                variants={fadeIn("up", "spring", 0.2, 0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                Let's Get Started <ArrowRight color={`#fff`} />{" "}
              </motion.button>
            </NavLink>
          </motion.div>

          <motion.div
            className={`${styles.imageContainer} mb-4`}
            variants={fadeIn("left", "spring", 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img src={home} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
