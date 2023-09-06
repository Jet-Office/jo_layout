import "./Navigation.component.css";
import { Links } from "../../types/links.type";
import { useCallback, useState } from "react";
import { ServicesDropdown } from "../ServicesDropdown";
import React from "react";
import { DesktopNavigation } from "./components/Desktop";
import { MobileNavigation } from "./components/Mobile";

type Props = {
  handleCLose: () => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
  setIsClickLink: (isClick: boolean) => void;
  windowWidth: number;
  submenuOpen: boolean;
  setSubmenuOpen: (submenuOpen: boolean) => void;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const LINKS: Links[] = [
  {
    id: 1,
    name: "Services",
    isDropDown: true,
    href: "/services",
  },
  {
    id: 2,
    name: "Pricing",
    isDropDown: false,
    href: "/pricing",
  },
  {
    id: 3,
    name: "FAQ",
    isDropDown: false,
    href: "#faq",
  },
  {
    id: 4,
    name: "Articles",
    isDropDown: false,
    href: "#articles",
  },
  {
    id: 5,
    name: "About",
    isDropDown: false,
    href: "/about",
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
          handleCLose={handleCLose}
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


