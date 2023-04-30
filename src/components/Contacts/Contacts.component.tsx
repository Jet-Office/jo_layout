import "./Contacts.component.css";

import { contacts } from "../../data/contacts.json";

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__container">
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
                src={`./contacts-icons/${contact.icon}`}
                alt=""
                className="contacts__icon"
              />
              <p className="contacts__adress">{contact.address}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
