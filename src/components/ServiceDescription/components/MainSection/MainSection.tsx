import React from "react";
import "./MainSection.css";
import { Button } from "../../../Button";
import useHandleClick from "../../../../helpers/openModal";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
          <div className="buttons">
            <Button color="dark" text={t(`servicesPage.conectButton`)} onClick={handleClick} className="button--dark-service" />
            <Button color="pink" text={t(`servicesPage.startButton`)} onClick={handleClick} className="button--pink-service" />
          </div>
        </motion.div>
      </div> 
    </motion.div>
  );
};
