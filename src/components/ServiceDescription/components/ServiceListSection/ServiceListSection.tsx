import React from "react";
import "./ServiceListSection.css"

import { animationBottom } from "../../../AboutPage/AboutPage.component"
import { animationRight } from "../../../AboutPage/AboutPage.component"
import { animationLeft } from "../../../AboutPage/AboutPage.component"
import { motion } from "framer-motion";

interface ServiceItem {
  id: number,
  icon: string,
  title: string,
  description: string,
}

interface ServiceListProps {
  list: ServiceItem[];
}

export const ServiceListSection: React.FC<ServiceListProps> = ({ list }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="service-list-section">
      {list.map((item, index) => (
        <motion.div variants={animationBottom} custom={index+1} className="service-list-section__item" key={item.id}>
          <img className="service-list-section__icon" src={item.icon} alt={item.title} />
          <h3 className="h3 service-list-section__title">{item.title}</h3>
          <p className="service-list-section__description">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};