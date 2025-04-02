import React from "react";
import { ourCompany } from "../assets";
import Button from "./Button";
import ArrowRight from "./SvgComponents/ArrowRight";
import styles from "./OurCompany.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";
import { NavLink } from "react-router-dom";

const OurCompany = () => {
  return (
    <section className={`section px-0`}>
      <div className={`${styles.ourCompanyContainer}`}>
        <div>
          <img src={ourCompany} />
        </div>

        <div className={`${styles.card}`}>
          <motion.h2
            className={`${styles.title} text-[1.8rem] font-bold`}
            variants={fadeIn("down", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Trusted Experts in Wealth Recovery
          </motion.h2>

          <motion.p
            className={`${styles.text}`}
            variants={fadeIn("down", "spring", 1 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            Boxwood Capital Limited is a trusted London-based firm specializing
            in investment fraud recovery. Our team of legal experts and fraud
            lawyers is dedicated to helping clients recover money lost through
            online trading and investments.
          </motion.p>

          <NavLink to={`/aboutus`}>
            <motion.div
              variants={fadeIn("up", "spring", 0 * 0.2, 0.8)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <Button
                text={`Our Company`}
                svg={<ArrowRight color={`#fff`} />}
                radius={`rounded-md`}
                width={`w-[200px]`}
              />
            </motion.div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
