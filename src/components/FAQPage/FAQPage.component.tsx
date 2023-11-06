import React, { useState, useRef, useEffect, useCallback } from "react";
import "./FAQPage.component.css";
import "../FaqAll/FaqAll.component.css";
import { faqData } from "../../data/faqData.json";
import { FAQItem, FAQItems } from "../../types/faq.type";
import { FAQItemComponent } from "./components/FAQItemComponent";
import useHandleClick from "../../helpers/openModal";
import { motion } from "framer-motion";
import { animationBottom } from "../AboutPage/AboutPage.component"
import { animationRight } from "../AboutPage/AboutPage.component"
import { animationLeft } from "../AboutPage/AboutPage.component"
import { useTranslation } from 'react-i18next';

export const FAQPage: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQ, setFilteredFAQ] = useState<FAQItems[]>([]);
  const [highlightedKeywords, setHighlightedKeywords] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const newFaqData = Object.values(t(`faqPage.faqData`, { returnObjects: true }));

  const search = () => {
    const filteredData = newFaqData.map((topic) => {
      const questions = topic.questions.filter((question: { question: string; text: string; }) => {
        return searchQuery.split(' ').some((word) => {
          return (
            question.question.toLowerCase().includes(word.toLowerCase()) ||
            question.text.toLowerCase().includes(word.toLowerCase())
          );
        });
      });

      if (questions.length != 0)
        return {
          ...topic,
          questions: questions
        };
      else return null;
    }).filter(item => item != null);

    setFilteredFAQ(filteredData as FAQItems[]);
  }
  
  const handleOnClick = useCallback(() => {
    setSearchQuery(inputRef.current?.value.toLowerCase() || "");
    setHighlightedKeywords(inputRef.current?.value.toLowerCase() || "");
    search();
  }, []);

  const handleSearchInputChange = useCallback((event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  }, [])

  useEffect(() => {
    setSearchQuery(inputRef.current?.value.toLowerCase() || "");
    setHighlightedKeywords(inputRef.current?.value.toLowerCase() || "");
    search();
  }, [searchQuery, t])

  const handleClick = useHandleClick();

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="faq-section">
      <div className="container faq-container">
        <div className="head_info-container">
          <motion.h1 variants={animationBottom} custom={1}>
          {t(`faqPage.faqTitle`)}
          </motion.h1>
          <motion.div variants={animationBottom} custom={2} className="search-container">
            <img 
              src="/helpers-icons/search_white.svg" 
              alt="search icon" 
              className="search_img"
              onClick={handleOnClick} />
            <input
              className="search_input"
              ref={inputRef}
              type="text"
              onChange={handleSearchInputChange}
              placeholder={t(`faqPage.faqPlaceholder`)} />
          </motion.div>
        </div>
        <div className="faq-content-container">
          {(filteredFAQ.length !== 0 ? filteredFAQ : newFaqData).map((topic) => (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              key={topic.id} className="content--item">
              <motion.div variants={animationLeft} custom={1} className="topic_name-container"><h2>{topic.name}</h2></motion.div>
              <div className="faq__question questions--container">
               {topic.questions.map((faq: FAQItem, index: number) => (
                  <FAQItemComponent key={faq.id} faq={faq} keywords={highlightedKeywords} index={index}/>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="start_trial-container">
          <div className="start_trial-block">
            <motion.div variants={animationLeft} custom={1} className="text_block-container">
              <div className="text_block">
              {t(`faqPage.faqTrial`)}
              </div>
              <button 
                className="button button--pink button-pink-faq"
                onClick={handleClick}
              >
                {t(`faqPage.faqTrialButton`)}
              </button>
            </motion.div>
          </div>
          <img className="shuttle_image" src="/faq-icon/space_shuttle.png" alt="Space shuttle" />
        </motion.div>
      </div>
    </motion.section>
  );
};
