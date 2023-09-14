import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isVisible) {
    return (
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        <p className="scroll-to-top-button-text">UP</p>
        <img
          className="scroll-to-top-button-image"
          src="/backgrounds/top-button.png"
          alt="Scroll to Top"
        />
      </button>
    );
  } else {
    return null;
  }
}

export default ScrollToTopButton;
