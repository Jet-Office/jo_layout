import "./Contacts.component.css";

import { contacts } from "../../data/contacts.json";

type Props = {
  contactsPageRef: React.RefObject<HTMLElement>;
};

export const Contacts: React.FC<Props> = ({ contactsPageRef }) => {
  return (
    <section className="contacts" id="contacts" ref={contactsPageRef}>
      <div className="contacts__container">
        <h2 className="contacts__title h2" id="contacts__title">
          Contacts
        </h2>
        <div className="contacts__info_container">
          {contacts.map((contact) => (
            <a
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="contacts__info"
              key={contact.id}
            >
              <img
                src={`/contacts-icons/${contact.icon}`}
                alt=""
                className="contacts__icon"
                width={32}
                height={32}
              />
              <p className="contacts__adress">{contact.address}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="socials_container">
        <h2 className="contacts__title h2" id="socials__title">
          Socials
        </h2>
        <div className="contacts__socials">
          <div className="icon__container">
            <a
              href="https://www.instagram.com/jet.office/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="socials__icon"
                src="/socials-icons/🦆 icon _instagram_.svg"
                alt="icon _instagram"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="icon__container">
            <a href="https://twitter.com/JetOffice23" target="_blank" rel="noreferrer">
              <img
                className="socials__icon"
                src="/socials-icons/🦆 icon _twitter_.svg"
                alt="icon _twitter"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="icon__container">
            <a href="https://www.linkedin.com/company/jetoffice-ua" target="_blank" rel="noreferrer">
              <img
                className="socials__icon"
                src="/socials-icons/🦆 icon _linkedin_.svg"
                alt="icon _linkedin"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
