import React from "react";

import "./RocketSection.css";

interface RocketSectionProps {
  rocketImage: string;
  rocketTitle: string;
  rocketDescription: string;
}

export const RocketSection: React.FC<RocketSectionProps> = ({
  rocketImage,
  rocketTitle,
  rocketDescription,
}) => {
  return (
    <section className="rocket-section">
      <div className="rocket-section__content">
        <div className="rocket-section__image-container">
          <img className="rocket-section__image" src={rocketImage} alt={rocketTitle} />
        </div>
        <div className="rocket-section__text-container">
          <h2 className="rocket-section__title">{rocketTitle}</h2>
          <p className="rocket-section__description">{rocketDescription}</p>
        </div>
      </div>
    </section>
  );
};
