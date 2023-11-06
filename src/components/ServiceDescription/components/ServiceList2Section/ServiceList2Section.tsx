import React from "react";


import "./ServiceList2Section.css";
import { motion } from "framer-motion";
import { animationBottom } from "../../../AboutPage";

interface ServiceList2Item {
  id: number,
  number?: string,
  title: string,
  description: string,
}

interface Props {
  list: ServiceList2Item[];
}

export const ServiceList2Section: React.FC<Props> = ({ list }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="service-list2-section">
      {list.map((item, index) => (
        <motion.div 
          custom={index}
          variants={animationBottom}
          key={item.id} className="service-list2-item">
          <div className="h3 service-list2-item-number">{item.number}</div>
          <div className="service-list2-item-about">
            <div className="h3 service-list2-item-title">{item.title}</div>
            <div className="service-list2-item-description">{item.description}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

