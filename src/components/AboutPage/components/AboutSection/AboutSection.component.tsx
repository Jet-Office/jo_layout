import { useCallback, useState } from "react";
import "../../../About/About.component.css";
import classNames from "classnames";
import { motion } from "framer-motion";
import { animationBottom } from "../../AboutPage.component";
import { useTranslation } from 'react-i18next';

type Props = {
  windowWidth: number;
  aboutPageRef: React.RefObject<HTMLElement>;
};

const animationLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

const animationRight = {
  hidden: {
    opacity: 0
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}


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
  const { t } = useTranslation();

  return (
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        id="about" className="about" ref={aboutPageRef}>
        <div className="about__container">
          <div className="container about__content">
            <motion.h2  variants={animationLeft} custom={2} className="about__title ">{t(`aboutPage.aboutSectionTitle`)}</motion.h2>
            <div className="about__text">
              <motion.p variants={animationLeft} custom={3} className={firstParagraphCLass}>
              {t(`aboutPage.aboutSectionText`)}
              </motion.p>
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
                <motion.div variants={animationBottom} custom={4} className={showClass} onClick={handleShow}>
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
                </motion.div>
              )}
            </div>
          </div>
          <div className="about__earth">
            <motion.img
              custom={3}
              variants={animationRight}
              viewport={{ amount: 0.2, once: true }}
              src="/backgrounds/earth.webp"
              width={793}
              height={820}
              alt="earth"
              className="about__earth_img"
            />
          </div>
        </div>
      </motion.section>
  );
};
