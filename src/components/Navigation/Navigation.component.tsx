import "./Navigation.component.css";
import { Link } from "../../types/link.type";
import { useCallback } from "react";
import { ServicesDropdown } from "../ServicesDropdown";
import React from "react";

type Props = {
  handleCLose?: () => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
  setIsClickLink: (isClick: boolean) => void;
};

export const Navigation: React.FC<Props> = ({
  handleCLose,
  activeLink,
  setActiveLink,
  setIsClickLink,
}) => {
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

  const handleClick = useCallback(
    (name: string) => {
      setIsClickLink(true);
      setActiveLink(name);
      handleCLose && handleCLose();
    },
    [handleCLose, setActiveLink, setIsClickLink]
  );

  const [servicesOpen, setServicesOpen] = React.useState(false);

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {/* {links.map((link) => (
          <li
            className={`navigation__item_background${
              activeLink.toLowerCase() === link.name.toLowerCase()
                ? " navigation__item_background--active"
                : ""
            }`}
            key={link.id}
          >
            <div className="navigation__item">
              <a
                href={link.href}
                className={`navigation__link${
                  activeLink === link.name ? " navigation__link--active" : ""
                }`}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
              </a>
            </div>
          </li>
        ))} */}

        <a className={`navigation__link`}>Home</a>
        <div
          className="menu-container"
          onMouseEnter={() => setServicesOpen(true)}
        >
          <div className="menu-trigger">
            <a className={`navigation__link`}>Services</a>
          </div>
          {servicesOpen && (
            <div
              className="dropdown-menu"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <ul>
                <ServicesDropdown />
              </ul>
            </div>
          )}
        </div>
        <a className={`navigation__link`}>Pricing</a>
        <a className={`navigation__link`}>Cases</a>
        <a className={`navigation__link`}>About</a>
        <a className={`navigation__link`}>Contacts</a>
      </ul>
    </nav>
  );
};
