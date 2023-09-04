import React from "react";
import { Contacts } from "../Contacts";
import { ContactForm } from "../ContactForm";
import "./Footer.component.css";

type Props = {
  contactsPageRef: React.RefObject<HTMLElement>;
};

export const Footer: React.FC<Props> = ({ contactsPageRef }) => {
  return (
      <section>
        <div className="container container_footer">
          <div className="footer__contacts">
            <Contacts contactsPageRef={contactsPageRef} />
            <ContactForm />
          </div>
          <div className="footer__label">
            <p className="footer__text">© 2023 JetOffice</p>
          </div>
        </div>
      </section>
  );
};
