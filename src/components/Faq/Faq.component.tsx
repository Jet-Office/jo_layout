import React, { useState } from "react";
import "./Faq.component.css";
import { motion } from "framer-motion";

import { animationBottom } from "../AboutPage/AboutPage.component"
import { animationRight } from "../AboutPage/AboutPage.component"
import { animationLeft } from "../AboutPage/AboutPage.component"

type FAQItem = {
  id: number;
  question: string;
  text: string;
};

interface FaqProps {
  faqItems: FAQItem[];
}

export const Faq: React.FC<FaqProps> = ({ faqItems }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="faq">
      <div className="faq__container">
        <div className="faq__text_container">
          <motion.h2 variants={animationLeft} custom={1} className="faq__title-text ">FAQ</motion.h2>
        </div>
        <div className="">
          <div className="faq__question">
            {faqItems.map((faq: FAQItem, index) => (
              <motion.div variants={animationLeft} custom={index + 1} className="faq__item-wrapper" key={faq.id}>
                <div
                  className={`faq-item ${
                    expandedIndex === faq.id ? "expanded" : ""
                  }`}
                >
                  <div className="question" onClick={() => toggleAnswer(faq.id)}>
                    <div className="question__text">
                      {faq.question}
                    </div>
                    <img
                      className={`plus-icon ${
                        expandedIndex === faq.id ? "minus" : "plus"
                      }`}
                      src={
                        expandedIndex === faq.id
                          ? "/faq-icon/minus.svg"
                          : "/faq-icon/plus.svg"
                      }
                      alt={expandedIndex === faq.id ? "Minus Icon" : "Plus Icon"}
                    />
                  </div>
                  {expandedIndex === faq.id && (
                    <div className="answer">{faq.text}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
