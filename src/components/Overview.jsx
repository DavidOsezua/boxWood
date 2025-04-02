import React from "react";
import { overview } from "../assets";
import styles from "./Overview.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Overview = () => {
  return (
    <section className={`section ${styles.overviewSection}`}>
      <div className={`${styles.overviewContainer} sectionContainer`}>
        <motion.div
          className={`content`}
          variants={fadeIn("right", "spring", 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`${styles.title} bigText`}>
            Overview of Boxwood Capital
          </h2>
          <p className={`${styles.text}`}>
            Boxwood Capital is a leading financial recovery firm based in
            London, dedicated to helping clients recover funds lost through
            online scams, fraudulent investments, and financial mismanagement.
            Established in 2012, we have built a solid reputation for delivering
            expert legal and financial recovery services across various sectors.
          </p>
          <p className={`${styles.text}`}>
            {" "}
            Our team is led by Director Raffaella Chiara GIANFILIPPI DE PARENTI,
            with the support of Secretary Andrea Velletrani. Together, they
            bring years of expertise in legal, financial, and corporate
            governance
          </p>
          <p className={`${styles.text}`}>
            At Boxwood Capital, we specialize in wealth recovery, including
            assistance with cryptocurrency losses, trading scams, and regulated
            broker disputes. Our comprehensive solutions are tailored to protect
            your financial interests.
          </p>
        </motion.div>

        <motion.div
          className={`${styles.card}`}
          variants={fadeIn("left", "spring", 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img src={overview} />
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
