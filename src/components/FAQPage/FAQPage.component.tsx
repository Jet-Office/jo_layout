import React, { useState, useRef } from "react";
import "./FAQPage.component.css";
import { faqData } from "../../data/faqData.json";
import { FAQItem, FAQItems } from "../../types/faq.type";
import { FAQItemComponent } from "./components/FAQItemComponent";
import useHandleClick from "../../helpers/openModal";

export const FAQPage: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQ, setFilteredFAQ] = useState<FAQItems[]>([]);
  const [highlightedKeywords, setHighlightedKeywords] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const search = () => {

    const filteredData = faqData.map((topic) => {
      const questions = topic.questions.filter((question) => {
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
  
  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      setHighlightedKeywords(event.currentTarget.value.toLowerCase());
      search(); 
    }
  };

  const handleOnClick = () => {
    setSearchQuery(inputRef.current?.value.toLowerCase() || "");
    setHighlightedKeywords(inputRef.current?.value.toLowerCase() || "");
    search();
  }

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = useHandleClick();

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <div className="head_info-container">
          <h1>How we can help you?</h1>
          <div className="search-container">
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
              onKeyDown={handleKeyPress}
              placeholder="Search" />
          </div>
        </div>
        <div className="faq-content-container">
          {(filteredFAQ.length != 0 ? filteredFAQ : faqData).map((topic) => (
            <div key={topic.id} className="content--item">
              <div className="topic_name-container"><h2>{topic.name}</h2></div>
              <div className="faq__question questions--container">

               {topic.questions.map((faq: FAQItem) => (
                  <FAQItemComponent key={faq.id} faq={faq} keywords={highlightedKeywords}/>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="start_trial-container">
          <div className="start_trial-block">
            <div className="text_block-container">
              <div className="text_block">Get started with 14 days free trial — no credit card required.Experience up to 30 $ in value and discover how we can help your business boost.</div>
              <button 
                className="button button--pink button-pink-faq"
                onClick={handleClick}
              >Start free trial</button>
            </div>
          </div>
          <img className="shuttle_image" src="/faq-icon/space_shuttle.png" alt="Space shuttle" />
        </div>
      </div>
    </section>
  );
};
