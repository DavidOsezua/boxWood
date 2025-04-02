import React from "react";
import styles from "./CoreValues.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const CoreValues = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer`}>
        <div className={`content text-center`}>
          <h2 className={`title bigText`}>Our Core Values Charactarizes Us</h2>
          <p className={`text`}>
            Our mission is to empower individuals and businesses by providing
            expert recovery solutions, ensuring that our clients can reclaim
            their lost investments and achieve financial justice. We envision a
            world where individuals and businesses are protected from fraudulent
            practices, and where financial transparency and integrity are upheld
            across all sectors.
          </p>
        </div>

        <div className={`${styles.cardContainer}`}>
          <motion.div
            className={`${styles.card} flex justify-center px-[1rem] flex-col `}
            variants={fadeIn("up", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="pb-[1rem] pt-[2rem] font-bold">Integrity</p>
            <p className=" leading-[1.8rem] ">
              We operate with the highest ethical standards, ensuring that every
              action we take is in the best interest of our clients.
            </p>
            <div
              className={`${styles.number} flex justify-center items-center`}
            >
              <p className="text-[1.5rem]">1</p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} flex justify-center px-[1rem] flex-col `}
            variants={fadeIn("up", "spring", 1 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="pb-[1rem] pt-[2rem] font-bold">Transparency</p>
            <p className=" leading-[1.8rem] ">
              We maintain clear communication with our clients, offering full
              visibility into our processes and progress.
            </p>
            <div
              className={`${styles.number} flex justify-center items-center`}
            >
              <p className="text-[1.5rem]">2</p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} flex justify-center px-[1rem] flex-col `}
            variants={fadeIn("up", "spring", 2 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="pb-[1rem] pt-[2rem] font-bold">Dedication</p>
            <p className=" leading-[1.8rem] ">
              Our team is committed to securing the best possible outcomes for
              every client. In every position they might be
            </p>
            <div
              className={`${styles.number} flex justify-center items-center`}
            >
              <p className="text-[1.5rem]">3</p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} flex justify-center px-[1rem] flex-col `}
            variants={fadeIn("up", "spring", 3 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="pb-[1rem] pt-[2rem] font-bold">Expertise</p>
            <p className=" leading-[1.8rem] ">
              With years of experience in financial recovery, we are equipped to
              handle complex financial disputes and recovery cases.
            </p>
            <div
              className={`${styles.number} flex justify-center items-center`}
            >
              <p className="text-[1.5rem]">4</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
