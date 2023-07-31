import { LINKS } from "../../Navigation.component";
import { ServicesDropdown } from "../../../ServicesDropdown";
import { ResourcesDropdown } from "../../../ResourcesDropdown";
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
  mainMenuSetIsOpen: (mainMenu: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const DesktopNavigation: React.FC<Props> = 
({ windowWidth, activeLink, submenuOpen, setActiveLink, setIsClickLink, handleCLose, setSubmenuOpen, mainMenuSetIsOpen, setActiveMenuLink }) => {
  
  const [hooverLink, setHooverLink] = useState("");
  const [isDropDown, setDropDown] = useState(false);

  const handleClick = useCallback(
    (name: string) => {
      setIsClickLink(true);
      setActiveLink(name);
      handleCLose && handleCLose();
    },
    [handleCLose, setActiveLink, setIsClickLink]
  );

  const handleMouseEnter = useCallback(
    (link: Link) => {
      if (activeLink === link.name) {
        if (submenuOpen) {
          setSubmenuOpen(false);
          setActiveLink("");
        }
        else setSubmenuOpen(true);
      }
      else {
        setSubmenuOpen(true);
        setActiveLink(link.name);
      }
      setDropDown(link.isDropDown);
      handleClick(link.name);
      setHooverLink(link.name); 
    }, [setSubmenuOpen, setDropDown, handleClick, setHooverLink]
  )


  return (
    <>
        <ul className="navigation__list">
          {LINKS.map((link) => (
            <li
              className={`navigation__item_background${
                activeLink.toLowerCase() === link.name.toLowerCase()
                  ? " navigation__item_background--active"
                  : ""
              }`}
              key={link.id}
              onClick={() => {
                handleMouseEnter(link);
                
              }}
            >
              <div className="navigation__item">
                <a
                  className={`navigation__link ${ activeLink === link.name ? "navigation__link--active" : "" }`}

                  onMouseEnter={() => { handleMouseEnter(link) }}
                  onMouseLeave={() => { setHooverLink("") }}
                >
                  {link.name}
                  {link.isDropDown
                    ? <img
                        src={activeLink === link.name || hooverLink === link.name
                          ? "/helpers-icons/chevron-down-pink.svg" 
                          : "/helpers-icons/chevron-down.svg"}
                        className="chevron-down"
                        alt="Dropdown Icon"
                      />
                    : null
                  }
                </a>
              </div>
            </li>
          ))}

        </ul>
        {submenuOpen && isDropDown && 
          ((activeLink === "Services" &&
            <ServicesDropdown
              windowWidth={windowWidth}
              activeLink={activeLink}
              submenuOpen={submenuOpen}
              mainMenuSetIsOpen={mainMenuSetIsOpen} 
              setActiveMenuLink={setActiveMenuLink}
            ></ServicesDropdown>))
        }
      </>
  );
};
