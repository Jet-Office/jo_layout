import { motion } from "framer-motion";
import { Buttons } from "../Buttons";
import { Head } from "../Head";
import "./SectionHead.component.css";

type Props = {
  homePageRef: React.RefObject<HTMLElement>;
};

const animation = {
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

export const SectionHead: React.FC<Props> = ({homePageRef }) => {
  return (
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="section-head" id="home" ref={homePageRef}>
        <div className="section-head__container">
          <div className="section-head__content_container">
            <div className="section-head_text">
              <motion.h1 custom={1} variants={animation} className="section-head__title title">
                Virtual Assistance <br /> & Business Solutions
              </motion.h1>
              <motion.p custom={2} variants={animation} className="section-head__description">
                Get started with 14 days free trial — no credit card required.
                Experience up to $30 in value and discover how we can help your
                business boost.
              </motion.p>
            </div>
            <Buttons />
          </div>
        </div>
      </motion.section>
  );
};
