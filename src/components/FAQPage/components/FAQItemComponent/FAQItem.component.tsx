import React, { useState } from "react";
import "./FAQItem.component.css";
import { FAQItem } from "../../../../types/faq.type";
import { HighlightedText } from "../HighlightedText";

type Props = {
  faq: FAQItem;
  keywords: string;
};

export const FAQItemComponent: React.FC<Props> = ({faq, keywords}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq__item-wrapper">
      <div
        className={`faq-item faq-item-mobile ${expandedIndex === faq.id ? "expanded" : ""}`}
        >
        <div className="question" onClick={() => toggleAnswer(faq.id)}>
          <div className="question__text"><HighlightedText text={faq.question} keywords={keywords} /></div>
          <img
            className={`plus-icon plus-icon-mobile ${expandedIndex === faq.id ? "minus" : "plus"}`}
            src={
              expandedIndex === faq.id
                ? "/faq-icon/minus.svg"
                : "/faq-icon/plus.svg"
            }
            alt={expandedIndex === faq.id ? "Minus Icon" : "Plus Icon"}
          />
        </div>
        {expandedIndex === faq.id && (
          <div className="answer">
            <HighlightedText text={faq.text} keywords={keywords} />
          </div>
        )}
      </div>
  </div>
  );
};
