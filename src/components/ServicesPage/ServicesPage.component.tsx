import React from "react";
import "./ServicesPage.component.css";
import { HeaderSpecial } from "../HeaderSpecial/HeaderSpecial.component";
import { MainContent } from "./component/MainContent";


type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ServicesPage: React.FC<Props> = ({
  windowWidth,
  activePageRef,
  active,
  setActive,
}) => {



  return (
  <>
    <HeaderSpecial
      windowWidth={windowWidth}
      activePageRef={activePageRef}
      active={active}
      setActive={setActive}
    />
    <div className="services-page">
      <MainContent />
    </div>
  </>
  )
};