import { useCallback, useState } from "react";
import "../../../About/About.component.css";
import classNames from "classnames";

type Props = {
  windowWidth: number;
  aboutPageRef: React.RefObject<HTMLElement>;
};

export const AboutSection: React.FC<Props> = ({ windowWidth, aboutPageRef }) => {
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
          <div className="container about__content">
            <h2 className="about__title h2">About JetOffice</h2>
            <div className="about__text">
              <p className={firstParagraphCLass}>
                JetOffice provides administrative support and outsourced assistants. Additional service — business solutions: design and development, business process automation, SMM, copywriting, coaching, management. We provide business solutions using our own resources and with the help of a network of partners.
                <br />
                <br />
                A proprietary development of JetOffice is an AI-based chatbot that helps businesses automate routine processes: task and meeting creation, calendar management, content creation, purchases, and payments.
                <br />
                <br />
                Our virtual assistants are quite independent. Each client is assigned a personal account manager who monitors the quality and acts as the client's advocate. Account managers and assistants are fully immersed in business tasks, understand the client's goals and needs.
              </p>
              {/* {(isShow || windowWidth > 641) && (
                <p className="about__paragraph">
                  Our mission is to provide client-oriented virtual assistance,
                  administrative support, and IT solutions through our network of
                  partners. We strive to deliver exceptional service, build
                  long-lasting relationships with our clients, and continuously
                  improve our processes to exceed their expectations.
                </p>
              )} */}

              {windowWidth <= 641 && (
                <div className={showClass} onClick={handleShow}>
                  <p className="about__paragraph">
                    {isShow ? "Show less" : "Show more"}
                  </p>
                  <div className="about__chevron_wrapper">
                    <img
                      src="/helpers-icons/chevron-down.svg"
                      alt=""
                      className={chevronIconClassName}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="about__earth">
            <img
              src="/backgrounds/earth.webp"
              width={793}
              height={820}
              alt="earth"
              className="about__earth_img"
            />
          </div>
        </div>
      </section>
  );
};
