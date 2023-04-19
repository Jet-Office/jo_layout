import Logo from "../../assets/logo.svg";
import { Navigation } from "../Navigation";
import "./Header.component.css";

type Props = {
  windowWidth: number;
};

export const Header: React.FC<Props> = ({ windowWidth }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top_actions">
          <a href="#" className="header__logo">
            <img src={Logo} alt="JetOffice logo" className="header__logo_img" />
          </a>
          <Navigation />
        </div>
        <div className="header__content_container">
          <p className="header__title">
            Virtual Assistance <br /> & Business Solutions
          </p>
          <p className="header__text">Get started with 14 days free trial — no credit card required. Experience up to $30 in value and discover how we can help your business boost.</p>
        </div>
      </div>
    </header>
  );
};
