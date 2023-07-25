import "./Navigation.component.css";
import { Link } from "../../types/link.type";
import { useCallback, useState } from "react";
import { ServicesDropdown } from "../ServicesDropdown";
import React from "react";
import { DesktopNavigation } from "./components/Desktop";
import { MobileNavigation } from "./components/Mobile";

type Props = {
  handleCLose?: () => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
  setIsClickLink: (isClick: boolean) => void;
  windowWidth: number;
  submenuOpen: boolean;
  setSubmenuOpen: (submenuOpen: boolean) => void;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const LINKS: Link[] = [
  {
    id: 1,
    name: "Services",
    isDropDown: true,
    href: "#services",
  },
  {
    id: 2,
    name: "Pricing",
    isDropDown: false,
    href: "#pricing",
  },
  {
    id: 3,
    name: "Cases",
    isDropDown: false,
    href: "#cases",
  },
  {
    id: 4,
    name: "About",
    isDropDown: false,
    href: "#about",
  },
  {
    id: 5,
    name: "Contacts",
    isDropDown: false,
    href: "#contacts",
  },
];

export const Navigation: React.FC<Props> = ({
  handleCLose,
  activeLink,
  setActiveLink,
  setIsClickLink,
  windowWidth,
  submenuOpen,
  setSubmenuOpen,
  mainMenuSetIsOpen,
  setActiveMenuLink
}) => {

  return (
    <nav className="navigation"> {
      windowWidth > 890 ? (
        <DesktopNavigation
          windowWidth={windowWidth}
          activeLink={activeLink}
          submenuOpen={submenuOpen}
          setActiveLink={setActiveLink}
          setIsClickLink={setIsClickLink}
          setSubmenuOpen={setSubmenuOpen}
          mainMenuSetIsOpen={mainMenuSetIsOpen}
          setActiveMenuLink={setActiveMenuLink}
        />)
       : (
        <MobileNavigation
          windowWidth={windowWidth}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          submenuOpen={submenuOpen}
          setIsClickLink={setIsClickLink}
          setSubmenuOpen={setSubmenuOpen}
          handleCLose={handleCLose}
          mainMenuSetIsOpen={mainMenuSetIsOpen}
          setActiveMenuLink={setActiveMenuLink}
        />)
    } </nav> 
  );
};


