import React from "react";
import "./MainContent.component.css";
import { servicesPage } from "../../../../data/servicesPage.json";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import { animationBottom } from "../../../AboutPage/AboutPage.component"
import { animationRight } from "../../../AboutPage/AboutPage.component"
import { animationLeft } from "../../../AboutPage/AboutPage.component"

type ListService = {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  background: string;
  link: string;
  list: ListService[];
};

export const MainContent: React.FC = () => {  
  const { t } = useTranslation();

  const newServicesPage = Object.values(t(`servicesPage.servicesList`, { returnObjects: true })) as Service[];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="container">
      <motion.div variants={animationLeft} custom={1} className="top-link-main">
        <Link className="top-link__home" to="/">
          {t(`servicesPage.homeLink`)}
        </Link> &#62; 
          <span>
          {t(`servicesPage.servicesLink`)}
          </span>
      </motion.div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className="main-content">
      {newServicesPage.map((service, index) => (
        <motion.div
          custom={index+1}
          variants={animationBottom}
          className="service-item"
          style={{ backgroundImage: `url(${service.background})` }}
          key={service.id}
        >
          <div className="main-text__container">
            <h2 className="main-text__title">{service.title}</h2>
            <p className="main-text__description">{service.description}</p>
            <Link className="main-text__link" to={`${service.link}`}>{t(`servicesPage.moreButton`)} <img src="./services-page/chevron-right.svg" alt="more" /> </Link>
          </div>
        </motion.div>
      ))}
      </motion.div>
    </motion.div>
  );
};