import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";

import "./Head.component.css";
import { Menu } from "./component/Menu";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
};

export const Head: React.FC<Props> = ({ windowWidth, activePageRef }) => {
  const [isHome, setIsHome] = useState(true);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const { current } = activePageRef;
      if (current !== null) {
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
  }, [activeLink, activePageRef, setActiveLink]);

  useEffect(() => {
    const listenScrollEvent = () => {
      if (
        (window.scrollY > 113 && windowWidth > 1000) ||
        window.scrollY > 87
      ) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [windowWidth]);

  return (
    <div className={`head${isHome ? " head--header" : " head--main"}`}>
      <div className="head__container">
        <a href="#" className="head__logo">
          <img src={Logo} alt="JetOffice logo" className="head__logo_img" />
        </a>
        {windowWidth > 641 ? (
          <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
        ) : (
          <Menu activeLink={activeLink} setActiveLink={setActiveLink} />
        )}
      </div>
    </div>
  );
};
