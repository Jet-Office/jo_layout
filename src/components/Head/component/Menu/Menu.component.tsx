import React, { useEffect, useState } from "react";
import "./Menu.component.css";
import { Navigation } from "../../../Navigation";

type Props = {
  activeLink: string;
  setActiveLink: (name: string) => void;
  setIsClickLink: (isClick: boolean) => void;
};

export const Menu: React.FC<Props> = ({ activeLink, setActiveLink,setIsClickLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
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
      {isOpen && (
        <div className="menu__open">
          <div onClick={handleClose} className="menu__close_container">
            <img
              src="/head-icons/close-icon.svg"
              alt="close menu"
              className="menu__close_icon"
              width={30}
              height={30}
            />
          </div>
          <Navigation
            handleCLose={handleClose}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setIsClickLink={setIsClickLink}
          />
        </div>
      )}
    </>
  );
};
