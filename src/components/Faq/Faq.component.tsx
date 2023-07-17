import React, { useState } from "react";
import "./Faq.component.css";
import { faqData } from "../../data/faqData.json";

type FAQItem = {
  id: number;
  question: string;
  text: string;
};

export const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems: FAQItem[] = faqData;

  return (
    <section className="faq">
      <div className="faq__container container">
        <div className="faq__text_container">
          <h2 className="faq__title-text h2">FAQ</h2>
        </div>

        <div className="faq__question">
          {faqItems.map((faq: FAQItem) => (
            <div
              key={faq.id}
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
          ))}
        </div>
      </div>
    </section>
  );
};
