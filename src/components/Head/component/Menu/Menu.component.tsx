import React, { useEffect, useState } from "react";
import "./Menu.component.css";
import { Navigation } from "../../../Navigation";

type Props = {
  activeLink: string;
  setActiveLink: (name: string) => void;
};

export const Menu: React.FC<Props> = ({ activeLink, setActiveLink }) => {
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
          <img src="./menu.svg" alt="menu" className="menu__icon" />
        </div>
      </div>
      {isOpen && (
        <div className="menu__open">
          <div onClick={handleClose} className="menu__close_container">
            <img
              src="./close-icon.svg"
              alt="close menu"
              className="menu__close_icon"
            />
          </div>
          <Navigation
            handleCLose={handleClose}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      )}
    </>
  );
};
