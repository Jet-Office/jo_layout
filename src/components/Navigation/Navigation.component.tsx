import "./Navigation.component.css";
import { Link } from "../../types/link.type";
import { useCallback } from "react";

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

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {links.map((link) => (
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
        ))}
      </ul>
    </nav>
  );
};
