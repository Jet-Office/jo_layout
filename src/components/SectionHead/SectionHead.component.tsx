import { Buttons } from "../Buttons";
import { Head } from "../Head";
import "./SectionHead.component.css";

type Props = {
  homePageRef: React.RefObject<HTMLElement>;
};

export const SectionHead: React.FC<Props> = ({homePageRef }) => {
  return (
      <section className="section-head" id="home" ref={homePageRef}>
        <div className="section-head__container">
          <div className="section-head__content_container">
            <div className="section-head_text">
              <h1 className="section-head__title title">
                Virtual Assistance <br /> & Business Solutions
              </h1>
              <p className="section-head__description">
                Get started with 14 days free trial — no credit card required.
                Experience up to $30 in value and discover how we can help your
                business boost.
              </p>
            </div>
            <Buttons />
          </div>
        </div>
      </section>
  );
};
