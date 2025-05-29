import React from "react";
import { image1, ourServices } from "../assets";
import styles from "./Ourservices.module.css";
import { services } from "../Data/data";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import MainLayout from "../layout/MainLayout";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Ourservices = () => {
  return (
    <MainLayout>
      <section className={`section transition`}>
        <div className={`sectionContainer`}>
          {/* OUR SERVICES HERO */}
          <div className={`${styles.servicesHero}`}>
            {/* IMAGE */}
            <motion.div
              className={`${styles.imageContainer}  mb-4`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={ourServices} />
            </motion.div>

            <motion.div
              className={`content`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`smallText w-[250px]`}>
                <div className="line"></div>
                Boxwood Capital is at your service
              </span>

              <h2 className={`bigText`}>
                Expert Legal Solutions for Recovering Your Lost Investments
              </h2>

              <p className="mdText">
                At Boxwood Capital, we help individuals and businesses recover
                funds lost to fraud, scams, and mismanagement. Our expert legal
                team uses effective strategies to track, reclaim, and secure
                your assets, offering full support to resolve financial disputes
                and restore peace of mind.
              </p>
            </motion.div>
          </div>

          <motion.h2
            className={`text-center bigText text-[2rem]`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileInview="show"
            transition={{ duration: 0.5 }}
          >
            Here Are Our Services
          </motion.h2>

          <motion.div className={`${styles.cardContainer}`}>
            {services.map((item, i) => (
              <ServiceCard key={i} index={i} item={item} />
            ))}
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Ourservices;
