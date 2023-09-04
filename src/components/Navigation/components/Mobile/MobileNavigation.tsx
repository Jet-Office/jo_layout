import { LINKS } from "../../Navigation.component";
import { ServicesDropdown } from "../../../ServicesDropdown";
import { useCallback, useState } from "react";
import { Links } from "../../../../types/links.type";
import { Link } from "react-router-dom";

type Props = {
  windowWidth: number;
  activeLink: string;
  submenuOpen: boolean;
  setSubmenuOpen: (submenuOpen: boolean) => void;
  setActiveLink: (link: string) => void;
  setIsClickLink: (isClick: boolean) => void;
  handleCLose: () => void;
  mainMenuSetIsOpen: (submenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const MobileNavigation: React.FC<Props> = 
({ windowWidth, activeLink, submenuOpen, setActiveLink, setIsClickLink, handleCLose, setSubmenuOpen, mainMenuSetIsOpen, setActiveMenuLink }) => {
  
  const [hooverLink, setHooverLink] = useState("");
  const [isDropDown, setDropDown] = useState(false);
  const [isActiveSubmenu, setActiveSubmenu] = useState(false);

  const handleClick = useCallback(
    (name: string) => {
      setIsClickLink(true);
      setActiveLink(name);
    },
    [handleCLose, setActiveLink, setIsClickLink]
  );

  const handleMouseEnter = useCallback(
    (link: Links) => {
      if (activeLink === link.name) {
        if (submenuOpen) setSubmenuOpen(false);
        else setSubmenuOpen(true);
      }
      else setSubmenuOpen(true);
      setDropDown(link.isDropDown);
      handleClick(link.name);
      setHooverLink(link.name); 
    }, [setSubmenuOpen, setDropDown, handleClick, setHooverLink]
  )

  return (
    <ul className="navigation__list">
    {LINKS.map((link) => (
      <li
        key={link.id}
        className={`navigation__item_background${
          activeLink.toLowerCase() === link.name.toLowerCase()
            ? " navigation__item_background--active"
            : ""
        }`}
        onClick={() => { setActiveSubmenu(true) }}
      >
        <div className={`navigation__item ${
          activeLink.toLowerCase() === link.name.toLowerCase()
          && link.isDropDown
          ? " navigation__item--active"
          : ""
        }`}>
          <Link
            to={link.href}
          className={`navigation__link ${ activeLink === link.name ? "navigation__link--active" : "" }`}

          onClick={() => { 
            handleMouseEnter(link); 
            if (activeLink !== link.name) setActiveLink(link.name);
            else {
              setActiveLink(""); 
              setHooverLink("");
            }
            
          }}
          >
          {link.name}
          {link.isDropDown
            ? <img
                src={activeLink === link.name
                  ? "/helpers-icons/arrow-down2.svg" 
                  : "/helpers-icons/chevron-down.svg"}
                className="chevron-down"
                alt="Dropdown Icon"
              />
            : null
          }
          </Link>

          {isActiveSubmenu && isDropDown && activeLink === link.name &&
            <ServicesDropdown
              windowWidth={windowWidth}
              activeLink={activeLink}
              handleCLose={handleCLose}
              submenuOpen={submenuOpen}
              mainMenuSetIsOpen={mainMenuSetIsOpen}
              setActiveMenuLink={setActiveMenuLink}
            ></ServicesDropdown>
          } 
        </div>
      </li>
      )
    )}
  </ul>
  );
};
