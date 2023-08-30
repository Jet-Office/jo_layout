import React, { useState } from "react";
import "./Faq.component.css";

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
    <section className="faq">
      <div className="faq__container">
        <div className="faq__text_container">
          <h2 className="faq__title-text ">FAQ</h2>
        </div>
        <div className="">
          <div className="faq__question">
            {faqItems.map((faq: FAQItem) => (
              <div className="faq__item-wrapper" key={faq.id}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
