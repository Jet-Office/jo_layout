import { Buttons } from "../Buttons";
import { Head } from "../Head";
import "./Header.component.css";

type Props = {
  windowWidth: number;
};

export const Header: React.FC<Props> = ({ windowWidth }) => {
  return (
    <header className="header" id="home">
      <div className="header__container">
        <Head windowWidth={windowWidth} />
        <div className="header__content_container">
          <h1 className="header__title title">
            Virtual Assistance <br /> & Business Solutions
          </h1>
          <p className="header__text">
            Get started with 14 days free trial — no credit card required.
            Experience up to $30 in value and discover how we can help your
            business boost.
          </p>
          <Buttons />
        </div>
      </div>
    </header>
  );
};
