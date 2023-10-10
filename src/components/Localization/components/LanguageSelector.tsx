import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./LanguageSelector.css"

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Закрити випадаючий список після вибору мови
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-selector">
      <button onClick={toggleDropdown}>Select Language</button>
      {isOpen && (
        <div className="language-dropdown">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('ru')}>Русский</button>
          {/* Додайте кнопки для інших мов */}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
