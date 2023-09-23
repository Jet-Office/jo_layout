import React from "react";
import { Contacts } from "../Contacts";
import { ContactForm } from "../ContactForm";
import "./Footer.component.css";
import { motion } from "framer-motion";

type Props = {
  contactsPageRef: React.RefObject<HTMLElement>;
};


const animationBottomBlock = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const Footer: React.FC<Props> = ({ contactsPageRef }) => {
  return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        >
        <div className="container container_footer">
          <div className="footer__contacts">
            <Contacts contactsPageRef={contactsPageRef} />
            <ContactForm />
          </div>
          <div className="footer__label">
            <motion.p custom={2} variants={animationBottomBlock} className="footer__text">© 2023 JetOffice</motion.p>
          </div>
        </div>
      </motion.section>
  );
};
