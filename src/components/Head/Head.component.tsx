import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";

import "./Head.component.css";
import { Menu } from "./component/Menu";

type Props = {
  windowWidth: number;
};

export const Head: React.FC<Props> = ({ windowWidth }) => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const listenScrollEvent = () => {
      if ((window.scrollY > 113 && windowWidth > 1000) || window.scrollY > 100) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    };
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className={`head${isHome ? " head--header" : " head--main"}`}>
      <div className="head__container">
        <a href="#" className="head__logo">
          <img src={Logo} alt="JetOffice logo" className="head__logo_img" />
        </a>
        {windowWidth > 1000 ? <Navigation /> : <Menu />}
      </div>
    </div>
  );
};
