import React from "react";
import { MisleadingAdvice } from "./SvgComponents/MisleadingAdvice";
import styles from "./Recovery.module.css";
import Button from "./Button";
import ArrowRight from "./SvgComponents/ArrowRight";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";
import { NavLink } from "react-router-dom";

const Recovery = () => {
  return (
    <section className={`section bg-[#f8f8f8]`}>
      <div className={`sectionContainer`}>
        <motion.div
          className={`content `}
          variants={fadeIn("right", "spring", 0 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`title font-bold`}>
            Comprehensive Wealth Recovery Solutions
          </h2>
          <p className={`text`}>
            From resolving misleading advice and aggressive sales tactics to
            managing major losses and withdrawal restrictions, our services are
            designed to provide comprehensive support at every stage of your
            financial recovery journey.
          </p>
        </motion.div>

        {/* Card 1 */}
        <div className={`${styles.cardContainer}`}>
          <motion.div
            className={`${styles.card}`}
            variants={fadeIn("down", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MisleadingAdvice />

            <h2 className={`font-bold`}>Misleading Advice and Promises</h2>

            <p>
              Victims are often deceived by false advice, guaranteed profits, or
              new account managers who lead them into making poor financial
              decisions, causing significant losses.
            </p>

            <div className={`content`}>
              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Guaranteed profit
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                New account manager
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Aggressive sales tactics
              </span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={`${styles.card}`}
            variants={fadeIn("down", "spring", 1 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MisleadingAdvice />

            <h2 className={` font-extrabold`}>Aggressive Sales Tactics</h2>

            <p>
              Fraudulent firms use high-pressure tactics, urging investors to
              deposit more or engage in risky trades, often under the pretense
              of offering professional account upgrades.
            </p>

            <div className={`content`}>
              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Trading Pressure
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Proffessional Account
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Account mismanagement and losses
              </span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className={`${styles.card}`}
            variants={fadeIn("down", "spring", 2 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <MisleadingAdvice />

            <h2 className={`font-bold`}>Account Mismanagement and Losses</h2>

            <p>
              Poor or dishonest account management results in major financial
              losses, with victims frequently prevented from withdrawing funds,
              leaving them unable to recover their investments.
            </p>

            <div className={`content`}>
              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Major Losses
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Prevented Withdrawals
              </span>

              <span className={`smallText w-[270px] bg-[#F9F9F9] px-0`}>
                <span className="line"></span>
                Unauthorized trades or transactions
              </span>
            </div>
          </motion.div>
        </div>

        <NavLink to={`/ourservices`}>
          <motion.div
            className="flex justify-center mt-5"
            variants={fadeIn("up", "spring", 0 * 0.2, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Button
              text={`Our Services`}
              svg={<ArrowRight color={`#fff`} />}
              radius={`rounded-md`}
            />
          </motion.div>
        </NavLink>
      </div>
    </section>
  );
};

export default Recovery;
