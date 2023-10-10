import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
      <button 
        className={`scroll-to-top-button animate ${isVisible ? 'appear' : 'disappear'} ${isPressed ? 'pressed_bg' : ''}`} 
        onClick={scrollToTop}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}>
        <p className="scroll-to-top-button-text">Up</p>
        <img
          className="scroll-to-top-button-image"
          src="/backgrounds/top-button.svg"
          alt="Scroll to Top"
        />
      </button>
    );
}

export default ScrollToTopButton;
