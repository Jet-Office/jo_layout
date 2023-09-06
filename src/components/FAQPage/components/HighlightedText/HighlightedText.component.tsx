import React, { useState } from "react";
import "./HighlightedText.component.css";

import parser from 'html-react-parser';

type Props = {
  text: string;
  keywords: string;
};

export const HighlightedText: React.FC<Props> = ({text, keywords}) => {
  const keywordsArr = keywords.split(' ');

  if (keywords == '') {
      return <div className="highlighted-text">{parser(text)}</div>;
  }
  
  const keywordRegex = new RegExp(keywordsArr.join('|'), 'gi');
  const highlightedText = text.replace(keywordRegex, match => `<span class="highlighted">${match}</span>`);

  return (
    <div
      className="highlighted-text"
    >{parser(highlightedText)}</div>
  );
};
