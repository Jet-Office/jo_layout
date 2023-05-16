import "./Contacts.component.css";

import { contacts } from "../../data/contacts.json";

type Props = {
  contactsPageRef: React.RefObject<HTMLElement>;
};

export const Contacts: React.FC<Props> = ({ contactsPageRef }) => {
  return (
    <section className="contacts" id="contacts" ref={contactsPageRef}>
      <div className="contacts__container container">
        <h2 className="contacts__title h2">Contacts</h2>
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
                width={24}
                height={24}
              />
              <p className="contacts__adress">{contact.address}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
