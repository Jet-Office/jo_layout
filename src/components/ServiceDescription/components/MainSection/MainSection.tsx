import React from "react";
import "./MainSection.css";
import { Button } from "../../../Button";
import useHandleClick from "../../../../helpers/openModal";
import { motion } from "framer-motion";
import { animationLeft } from "../../../AboutPage";


interface MainSectionProps {
  mainImage: string;
  mainTitle: string;
  mainDescription: string;
}

export const MainSection: React.FC<MainSectionProps> = ({
  mainImage,
  mainTitle,
  mainDescription,
}) => {
  const handleClick = useHandleClick();
  
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className="main-section">
      <motion.div
        variants={animationLeft}
        custom={2}
        className="main-section__image"
        style={{ backgroundImage: `url(${mainImage})` }}
      ></motion.div>
      <div className="main-section__content">
        <motion.h2 variants={animationLeft} custom={1} className="h2 main-section__title">{mainTitle}</motion.h2>
        <motion.p variants={animationLeft} custom={2} className="main-section__description">{mainDescription}</motion.p>
        <motion.div variants={animationLeft} custom={3} className="buttons">
          <Button color="dark" text="connect with us" onClick={handleClick} className="button--dark-service" />
          <Button color="pink" text="start free trial" onClick={handleClick} className="button--pink-service" />
        </motion.div>
      </div> 
    </motion.div>
  );
};
