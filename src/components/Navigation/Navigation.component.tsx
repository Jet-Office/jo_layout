import "./Navigation.component.css";
import { Link } from "./types/link.type";
import { useCallback, useState } from "react";

export const Navigation = () => {
  const links: Link[] = [
    {
      id: 1,
      name: "Home",
      href: "#",
    },
    {
      id: 2,
      name: "Services",
      href: "#services",
    },
    {
      id: 3,
      name: "Pricing",
      href: "#pricing",
    },
    {
      id: 4,
      name: "Cases",
      href: "#cases",
    },
    {
      id: 5,
      name: "About",
      href: "#about",
    },
    {
      id: 6,
      name: "Contacts",
      href: "#contacts",
    },
  ];
  const [activeLink, setActiveLink] = useState("Home");
  const handleClick = useCallback((name: string) => setActiveLink(name), []);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map((link) => (
          <li className="navigation__item" key={link.id}>
            <a
              href={link.href}
              className={`navigation__link${
                activeLink === link.name ? " navigation__link--active" : ""
              }`}
              onClick={() => handleClick(link.name)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
