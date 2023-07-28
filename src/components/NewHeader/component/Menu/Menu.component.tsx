import React, { useEffect, useState } from "react";
import "./Menu.component.css";
import { Navigation } from "../../../Navigation";
import { Button } from "../../../Button";

type Props = {
  activeLink: string;
  setActiveLink: (name: string) => void;
  setIsClickLink: (isClick: boolean) => void;
  windowWidth: number;
  submenuOpen: boolean;
  setSubmenuOpen: (submenuOpen: boolean) => void;
  menuIsOpen: boolean;
  setMenuIsOpen: (menuIsOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const Menu: React.FC<Props> = ({ 
  activeLink, 
  setActiveLink, 
  setIsClickLink, 
  windowWidth, 
  submenuOpen, 
  setSubmenuOpen, 
  menuIsOpen, 
  setMenuIsOpen,
  setActiveMenuLink }) => {

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuIsOpen]);

  const handleOpen = () => {
    setMenuIsOpen(true);
  };

  const handleClose = () => {
    setMenuIsOpen(false);
    setActiveLink("");
  };

  return (
    <>
      <div className="menu" onClick={handleOpen}>
        <div className="menu__icon_container">
          <img
            src="/head-icons/menu.svg"
            alt="menu"
            className="menu__icon"
            width={30}
            height={30}
          />
        </div>
      </div>
      {menuIsOpen && (
        <div className="menu__open">
          <div onClick={handleClose} className="menu__top_container"> 
            <span>Menu</span>
            <img
              src="/head-icons/close-icon.svg"
              alt="close menu"
              className="menu__close_icon"
            />
          </div>
          <Navigation
            handleCLose={handleClose}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setIsClickLink={setIsClickLink}
            windowWidth={windowWidth}
            submenuOpen={submenuOpen}
            setSubmenuOpen={setSubmenuOpen}
            mainMenuSetIsOpen={setMenuIsOpen} 
            setActiveMenuLink={setActiveMenuLink}
          />
          <div className="button--container">
            <Button
              color="pink"
              text="Start free trial"
              onClick={() => console.log("pressed")}
              className="menu"
            />  
          </div>
        </div>
      )}
    </>
  );
};
