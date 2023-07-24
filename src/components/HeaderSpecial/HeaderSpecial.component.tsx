import React from "react";

import "./HeaderSpecial.component.css";

import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";
import { Modal } from "../Modal";
import { Menu } from "../Head/component/Menu";
import { Button } from "../Button";
import useHandleClick from "../../helpers/openModal";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};


export const HeaderSpecial: React.FC<Props> = ({ 
  windowWidth, 
  activePageRef,
  active,
  setActive,
}) => {
  const [isHome, setIsHome] = useState(true);
  const [activeLink, setActiveLink] = useState("Home");
  const [isClickLink, setIsClickLink] = useState(false);
  const handleClick = useHandleClick();

  useEffect(() => {
    const { current } = activePageRef;

    if (isClickLink && current?.id.toLowerCase() === activeLink.toLowerCase()) {
      setIsClickLink(false);

      return;
    }

    const handleScroll = () => {
      if (current) {
        const { top } = current.getBoundingClientRect();
        if (top >= 0 && top <= window.innerHeight) {
          setActiveLink(current.id[0].toUpperCase() + current.id.slice(1));
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, activePageRef, isClickLink]);

  useEffect(() => {
    const listenScrollEvent = () => {
      if ((window.scrollY > 113 && windowWidth > 1000) || window.scrollY > 87) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [windowWidth]);

  return (
    <header className="header-special">
      
      <div className={`head${isHome ? " head--header" : " head--main"}`}>
        <div className="head__container">
        <a href="#" className="head__logo">
          <img
            src={Logo}
            alt="JetOffice logo"
            width={110}
            height={40}
            srcSet="logo.svg 100%"
            className="head__logo_img"
          />
        </a>
        {windowWidth > 641 ? (
          <>
          <Navigation
            setIsClickLink={setIsClickLink}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
          <Modal active={active} setActive={setActive} />
          <Button color="pink" text="Start free trial" onClick={handleClick} />
          </>
          
        ) : (
          <Menu
            setIsClickLink={setIsClickLink}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        )}
        </div>
      </div>
    </header>
  )
};