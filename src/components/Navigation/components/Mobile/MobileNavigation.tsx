import { LINKS } from "../../Navigation.component";
import { ServicesDropdown } from "../../../ServicesDropdown";
import { useCallback, useState } from "react";
import { Link } from "../../../../types/link.type";

type Props = {
  windowWidth: number;
  activeLink: string;
  submenuOpen: boolean;
  setSubmenuOpen: (submenuOpen: boolean) => void;
  setActiveLink: (link: string) => void;
  setIsClickLink: (isClick: boolean) => void;
  handleCLose?: () => void;
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
    (link: Link) => {
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
      <>
        <li
          className={`navigation__item_background${
            activeLink.toLowerCase() === link.name.toLowerCase()
              ? " navigation__item_background--active"
              : ""
          }`}
          key={link.id}
          onClick={() => { setActiveSubmenu(true); }}
        >
          <div className={`navigation__item ${
            activeLink.toLowerCase() === link.name.toLowerCase()
            && link.isDropDown
            ? " navigation__item--active"
            : ""
          }`}>
            <a
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
            </a>

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
      </>
      )
    )}
  </ul>
  );
};
