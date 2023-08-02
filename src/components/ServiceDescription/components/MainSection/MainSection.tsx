import React from "react";
import "./MainSection.css";
import { Button } from "../../../Button";
import useHandleClick from "../../../../helpers/openModal";


interface MainSectionProps {
  mainImage: string;
  mainTitle: string;
  mainDescription: string;
}

export const MainSection: React.FC<MainSectionProps> = ({
  mainImage,
  mainTitle,
  mainDescription,
}) => {
  const handleClick = useHandleClick();
  
  return (
    <div className="main-section">
      <div
        className="main-section__image"
        style={{ backgroundImage: `url(${mainImage})` }}
      ></div>
      <div className="main-section__content">
        <h2 className="main-section__title">{mainTitle}</h2>
        <p className="main-section__description">{mainDescription}</p>
        <div className="buttons">
          <Button color="dark" text="Get in touch" onClick={handleClick} />
          <Button color="pink" text="get a service" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};