import React, { useState, useEffect, useRef } from "react";
import { languages } from "../../data/languages.json";
import "./SwitchLanguageButton.css";

function SwitchLanguageButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectLangId, setLangId] = useState(1);
  const [selectLang, setLang] = useState(languages[0]);
  const [selectLangIcon, setLangIcon] = useState(`/languages_icons/en-icon.svg`);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const openOnClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const switchLanguageOnClick = (id: number) => {
    setLangId(id);
    setLang(selectLang);
    setIsOpen((isVisible) => !isVisible);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
      if (window.pageYOffset <= 300) {
        setIsOpen(false);
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    languages.forEach((item) => {
      if (item.id === selectLangId)  {
        setLang(item);
        setLangId(item.id);
      }
    })
  })

  return (
    <button 
      ref={buttonRef}
      className={`switch_lang-button ${isOpen ? 'animate-lang' : ''} animate ${isVisible ? 'appear' : 'disappear'}`} onClick={openOnClick}>
      {
        <div className="lang-container">
          <p className="lang-name">{selectLang.name}</p>
          <div className="lang-list">
            <img className="lang-icon" src={`/languages_icons/${selectLang.icon}`} alt={`${selectLang.alt}`} />
            {
              languages.map((lang, id) => (
                  isOpen && lang.id !== selectLangId ? 
                  <div 
                    className={`lang-item animate appear`}
                    key={id} 
                    onClick={() => switchLanguageOnClick(lang.id)}>
                    <img src={`/languages_icons/${lang.icon}`} alt={`${lang.alt}`} />
                  </div>
                  : null
              ))
            }
          </div> 
        </div>
      }
    </button>
  );
}

export default SwitchLanguageButton;
