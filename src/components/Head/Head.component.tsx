import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";

import "./Head.component.css";

export const Head: React.FC = () => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY > 113) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`head${isHome ? "" : " head--main"}`}>
      <div className="head__container">
        <a href="#" className="head__logo">
          <img src={Logo} alt="JetOffice logo" className="head__logo_img" />
        </a>
        <Navigation />
      </div>
    </div>
  );
};
