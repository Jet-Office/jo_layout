import React, { useState } from "react";
import "./ResourcesDropdown.component.css";
import { List } from "./List";

type Props = {
  windowWidth: number;
  activeLink: string;
  handleCLose?: () => void;
  submenuOpen: boolean;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
  //casesPageRef: React.RefObject<HTMLElement>;
};

export const ResourcesDropdown: React.FC<Props> = ({
  windowWidth,
  activeLink,
  handleCLose,
  submenuOpen,
  mainMenuSetIsOpen,
  setActiveMenuLink
}) => {
  //const [descriptions, setDescriptions] = useState<Description[]>([]);
  //const [activeIdForMobile, setActiveIdForMobile] = useState(0);
  const [activeId, setActiveId]  = useState(1);

  return (
    <List
      windowWidth={windowWidth}
      cases={activeLink}
      setActiveId={setActiveId}
      //setDescriptions={setDescriptions}
      activeId={activeId}
      handleCLose={handleCLose}
      submenuOpen={submenuOpen}
      mainMenuSetIsOpen={mainMenuSetIsOpen}
      setActiveMenuLink={setActiveMenuLink}
    />
  );
};
