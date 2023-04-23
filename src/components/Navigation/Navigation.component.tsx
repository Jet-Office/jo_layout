import "./Navigation.component.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#services" className="navigation__link">
            Services
          </a>
        </li>
        <li className="navigation__item">
          <a href="#pricing" className="navigation__link">
            Pricing
          </a>
        </li>
        <li className="navigation__item">
          <a href="#cases" className="navigation__link">
            Cases
          </a>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__link">
            About
          </a>
        </li>
        <li className="navigation__item">
          <a href="#contacts" className="navigation__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
