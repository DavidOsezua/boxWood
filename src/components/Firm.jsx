import React from "react";
import { cheshire, guardian, lawSociety, theTimes } from "../assets";
import styles from "./Firm.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Firm = () => {
  return (
    <section className={`${styles.firmSection} pb-[1rem]  section pt-0`}>
      <div className={`${styles.firmContainer} `}>
        <motion.div
          className={`${styles.image}`}
          variants={fadeIn("down", "spring", 0 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img src={lawSociety} />
        </motion.div>
        <motion.div
          className={`${styles.image}`}
          variants={fadeIn("down", "spring", 1 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img src={cheshire} />
        </motion.div>
        <motion.div
          className={`${styles.image}`}
          variants={fadeIn("down", "spring", 2 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img src={guardian} />
        </motion.div>
        <motion.div
          className={`${styles.image}`}
          variants={fadeIn("down", "spring", 3 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img src={theTimes} />
        </motion.div>
      </div>
    </section>
  );
};

export default Firm;
