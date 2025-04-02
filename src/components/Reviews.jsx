import React from "react";
import Star from "./SvgComponents/Star";
import styles from "./Reviews.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/utils";

const Reviews = () => {
  return (
    <section className={`section`}>
      <div className={`sectionContainer ${styles.cardContainer}`}>
        <motion.div
          className={`${styles.card} content`}
          variants={fadeIn("right", "spring", 0 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="content flex items-center gap-4 ">
            <div className={`${styles.initials}`}>
              <p className="font-bold">B.S</p>
            </div>

            <div>
              <p className="font-bold">Bobby S.</p>
              <Star />
            </div>
          </div>

          <hr className="bg-[#BCBCBC]" />

          <p className={`${styles.text}`}>
            I thought my investment was lost forever after being scammed by an
            online trading platform. I had no idea where to turn and felt
            completely helpless. Boxwood Capital stepped in and helped me
            recover a substantial portion of my funds. Their team was supportive
            throughout the entire process, explaining every step and giving me
            hope when I thought all was lost. Their professionalism, expertise,
            and dedication truly made all the difference, and I’m so grateful to
            have found them.
          </p>

          <p className="flex justify-end italic font-[300]">
            Manchester. August 9, 2024
          </p>
        </motion.div>

        <motion.div
          className={`${styles.card} content`}
          variants={fadeIn("left", "spring", 0 * 0.2, 0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="content flex items-center gap-4 ">
            <div className={`${styles.initials}`}>
              <p className="font-bold">B.S</p>
            </div>

            <div>
              <p className="font-bold">Bobby S.</p>
              <Star />
            </div>
          </div>

          <hr className="bg-[#BCBCBC]" />

          <p className={`${styles.text}`}>
            I thought my investment was lost forever after being scammed by an
            online trading platform. I had no idea where to turn and felt
            completely helpless. Boxwood Capital stepped in and helped me
            recover a substantial portion of my funds. Their team was supportive
            throughout the entire process, explaining every step and giving me
            hope when I thought all was lost. Their professionalism, expertise,
            and dedication truly made all the difference, and I’m so grateful to
            have found them.
          </p>

          <p className="flex justify-end italic font-[300]">
            Manchester. August 9, 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
