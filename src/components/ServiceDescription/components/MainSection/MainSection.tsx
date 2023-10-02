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
        <h2 className="h2 main-section__title">{mainTitle}</h2>
        <p className="main-section__description">{mainDescription}</p>
        <div className="buttons">
          <Button color="dark" text="connect with us" onClick={handleClick} className="button--dark-service" />
          <Button color="pink" text="start free trial" onClick={handleClick} className="button--pink-service" />
        </div>
      </div>
    </div>
  );
};
