import React from "react";

import "./RocketSection.css";
import { motion } from "framer-motion";
import { animationBottom, animationRight } from "../../../AboutPage";

interface RocketSectionProps {
  rocketImage: string;
  rocketTitle: string;
  rocketDescription: string;
}

export const RocketSection: React.FC<RocketSectionProps> = ({
  rocketImage,
  rocketTitle,
  rocketDescription,
}) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="rocket-section">
      <div className="rocket-section__content">
        <motion.div custom={3} variants={animationBottom} className="rocket-section__image-container">
          <img className="rocket-section__image" src={rocketImage} alt={rocketTitle} />
        </motion.div>
        <div className="rocket-section__text-container">
          <motion.h2 custom={1} variants={animationRight} className="rocket-section__title">{rocketTitle}</motion.h2>
          <motion.p custom={2} variants={animationRight} className="rocket-section__description">{rocketDescription}</motion.p>
        </div>
      </div>
    </motion.section>
  );
};
