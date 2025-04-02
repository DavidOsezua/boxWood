import React from "react";
import styles from "./Ourservices.module.css";
import { services } from "../Data/data";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

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

const ServiceCard = ({ item, index }) => {
  return (
    <motion.div
      className={`${styles.card}`}
      key={item.ID}
      variants={fadeIn("up", "spring", index * 0.03, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`${styles.imgContainer}`}>
        <img src={item.image} className={`${styles.img}`} />
      </div>

      <div className={`${styles.contentCard}`}>
        <p className="font-bold">{item.title}</p>
        <p className={`${styles.text}`}>{item.text}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
