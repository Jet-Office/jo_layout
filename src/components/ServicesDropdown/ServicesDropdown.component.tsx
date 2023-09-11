import React, { useState } from "react";
import "./ServicesDropdown.component.css";
import { List } from "./List";

type Props = {
  windowWidth: number;
  activeLink: string;
  handleCLose: () => void;
  submenuOpen: boolean;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
  //casesPageRef: React.RefObject<HTMLElement>;
};

export const ServicesDropdown: React.FC<Props> = ({
  windowWidth,
  activeLink,
  handleCLose,
  submenuOpen,
  mainMenuSetIsOpen,
  setActiveMenuLink
}) => {
  //const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeIdForMobile, setActiveIdForMobile] = useState(0);
  const [activeId, setActiveId]  = useState(1);

  return (
    <List
      windowWidth={windowWidth}
      cases={activeLink}
      setActiveId={windowWidth > 890 ? setActiveId : setActiveIdForMobile}
      //setDescriptions={setDescriptions}
      activeId={windowWidth > 890 ? activeId : activeIdForMobile}
      handleCLose={handleCLose}
      submenuOpen={submenuOpen}
      mainMenuSetIsOpen={mainMenuSetIsOpen}
      setActiveMenuLink={setActiveMenuLink}
    />
  );
};
