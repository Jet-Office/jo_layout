import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";
import { Button } from "../Button";

import "./Header.component.css";
import { Menu } from "./component/Menu";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
};

export const DEFAULT_ACTIVE_LINK = "Home";

export const Header: React.FC<Props> = ({ windowWidth, activePageRef }) => {
  const [isHome, setIsHome] = useState(true);
  const [activeLink, setActiveLink] = useState(DEFAULT_ACTIVE_LINK);
  const [isClickLink, setIsClickLink] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  useEffect(() => {
    const { current } = activePageRef;

    if (isClickLink && current?.id.toLowerCase() === activeLink.toLowerCase()) {
      setIsClickLink(false);
      return;
    }
    //document.addEventListener("scroll", handleScroll);

    // return () => {
    //   document.removeEventListener("scroll", handleScroll);
    // };
  }, [activeLink, activePageRef, isClickLink]);

  useEffect(() => {
    const listenScrollEvent = () => {
      if ((window.scrollY > 113 && windowWidth > 1000) || window.scrollY > 87 ) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [windowWidth]);

  return (
    <div 
      className={`header ${(!isHome || (activeLink !== "Home")) ? "header--main" : "head--header"}`}
      onMouseLeave={() => {
        console.log(activeLink);
        console.log(DEFAULT_ACTIVE_LINK);
        setActiveLink(DEFAULT_ACTIVE_LINK);
        setSubmenuOpen(false);
        
      }}
    >
      <div className="header__container">
        <a href="#" className="header__logo">
          <img
            src={Logo}
            alt="JetOffice logo"
            width={110}
            height={40}
            srcSet="logo.svg 100%"
            className="header__logo_img"
          />
        </a>
        {windowWidth > 890 ? (    
          <>
            <Navigation
              setIsClickLink={setIsClickLink}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              windowWidth={windowWidth}
              submenuOpen={submenuOpen}
              setSubmenuOpen={setSubmenuOpen} 
              mainMenuSetIsOpen={setMenuIsOpen}
              setActiveMenuLink={setActiveLink}
            />
            <Button
              color="pink"
              text="Start free trial"
              className={'button--nav'}
              onClick={() => console.log("pressed")}
            />
          </> 
        ) : (
          <>
            <Menu
              setIsClickLink={setIsClickLink}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              windowWidth={windowWidth}
              submenuOpen={submenuOpen}
              setMenuIsOpen={setMenuIsOpen}
              menuIsOpen={menuIsOpen}
              setSubmenuOpen={setSubmenuOpen}
              setActiveMenuLink={setActiveLink}
            />
          </>
        )}
      
      </div>
    </div>
  );
};
