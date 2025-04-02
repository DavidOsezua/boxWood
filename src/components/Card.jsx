import React from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

const Card = ({ children }) => {
  return (
    <motion.div
      className={`${styles.card}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
