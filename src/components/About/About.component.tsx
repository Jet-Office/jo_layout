import { useCallback, useState } from "react";
import { Buttons } from "../Buttons";
import "./About.component.css";
import classNames from "classnames";

type Props = {
  windowWidth: number;
  aboutPageRef: React.RefObject<HTMLElement>;
};

export const About: React.FC<Props> = ({ windowWidth, aboutPageRef }) => {
  const [isShow, setIsShow] = useState(false);
  const chevronIconClassName = classNames("about__chevron_icon", {
    "about__chevron_icon--open": isShow,
  });
  const firstParagraphCLass = classNames("about__paragraph", {
    "about__paragraph--hidden": windowWidth < 1000 && !isShow,
  });
  const showClass = classNames("about__show_more", {
    "about__show_more--close": !isShow,
  });

  const handleShow = useCallback(() => setIsShow(!isShow), [isShow]);

  return (
    <section id="about" className="about" ref={aboutPageRef}>
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title h2">About us</h2>
          <div className="about__text">
            <p className={firstParagraphCLass}>
              JetOffice — virtual assistance and business solutions that will
              skyrocket your business. We provide everything needed for
              effective management and business development, distinguished by
              high-quality services, flexibility, and a personalized approach to
              each client. Our crew professionally delivers comprehensive
              business solutions, including virtual administrative support,
              consulting, and expertise in the fields of web development, web
              design, web-3, coaching, and more. Let us become your reliable
              flight control center for your business success.
            </p>
            {(isShow || windowWidth > 641) && (
              <p className="about__paragraph">
                Our mission is to provide client-oriented virtual assistance,
                administrative support, and IT solutions through our network of
                partners. We strive to deliver exceptional service, build
                long-lasting relationships with our clients, and continuously
                improve our processes to exceed their expectations.
              </p>
            )}

            {windowWidth <= 641 && (
              <div className={showClass} onClick={handleShow}>
                <p className="about__paragraph">
                  {isShow ? "Show less" : "Show more"}
                </p>
                <div className="about__chevron_wrapper">
                  <img
                    src="/chevron-down.svg"
                    alt=""
                    className={chevronIconClassName}
                  />
                </div>
              </div>
            )}
          </div>
          <Buttons />
        </div>
        <div className="about__earth">
          <img src="/earth.webp" alt="earth" className="about__earth_img" />
        </div>
      </div>
    </section>
  );
};
