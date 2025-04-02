import React from "react";
import styles from "./Subcribe.module.css";
import { Circle } from "./SvgComponents";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Subcribe = () => {
  return (
    <section className={`section px-0`}>
      <motion.div
        className={` ${styles.card} sectionContainer pb-0`}
        variants={fadeIn("up", "spring", 0.5, 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Circle />

        <div className={`${styles.content}`}>
          <h2>Ready to Start Your Journey with Boxwood Capital? </h2>
          <p>
            Stay informed with the latest updates, expert tips, and success
            stories from Boxwood Capital.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Subcribe;
