import { Buttons } from "../Buttons";
import { Head } from "../Head";
import "./Header.component.css";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
  homePageRef: React.RefObject<HTMLElement>;
};

export const Header: React.FC<Props> = ({ windowWidth, activePageRef, homePageRef }) => {
  return (
    <header className="header" id="home" ref={homePageRef}>
      <div className="header__container">
        <Head activePageRef={activePageRef} windowWidth={windowWidth} />
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
