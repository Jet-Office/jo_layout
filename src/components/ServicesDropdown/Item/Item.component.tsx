import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Description, Service } from "../../../types/servicesDropdown.type";
import { Descriptions } from "../Descriptions/Descriptions.component";
import "../ServicesDropdown.component.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

type Props = {
  item: Service;
  setDescriptions: (descriptions: Description[]) => void;
  activeId: number;
  setActiveId: (id: number) => void;
  windowWidth: number;
  handleCLose: () => void;
  submenuOpen: boolean;
  mainMenuSetIsOpen: (mainMenuOpen: boolean) => void;
  setActiveMenuLink: (activeMenuLink: string) => void;
};

export const Item: React.FC<Props> = ({
  item: { id, name, icon, descriptions, link},
  setDescriptions,
  activeId,
  setActiveId,
  windowWidth,
  mainMenuSetIsOpen,
  setActiveMenuLink,
  handleCLose
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardClassName = classNames("sidebar__card", {
    active: id === activeId,
  });

  useEffect(() => {
    if (activeId === id) {
      setDescriptions(descriptions);
    }
  }, [id, activeId, setDescriptions, descriptions]);

  const backgroundClass = classNames("slidebar--active", {
    "slidebar__card--active": id === activeId,
    opened: isOpen,
  });

  const handleMouse = useCallback(
    (currentId: number) => {
      setActiveId(currentId);

      if (windowWidth <= 890) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setActiveId, windowWidth]
  );

  const handleClickBack = useCallback(
    () => {
      setActiveId(0);
      //setActiveMenuLink("");
    },
    [setActiveId, setActiveMenuLink]
  );

  const handleClickClose = useCallback(
    () => {
      setIsOpen(false);
      setActiveId(0);
      mainMenuSetIsOpen(false);
      setActiveMenuLink("");

    },
    [ setIsOpen,setActiveId, mainMenuSetIsOpen, setActiveMenuLink]
  );
  const { t } = useTranslation();

  const serviceIndex = id; 
  const serviceName = t(`services.service${serviceIndex}.title`);

  return (
    <> {
      windowWidth > 890 
      ? <div className={cardClassName} 
          onMouseEnter={ () => handleMouse(id) }
          >
          <div className="left">
            <img src={`/services-icons/${icon}`} alt="dropdown-icons" className="services-icons--svg" />
            <Link 
              className="dropdown__links" 
              to={link || ''}
              onClick={handleClickClose}
            >
              {serviceName}
            </Link>
          </div>
        </div>
      : (
        <>
        <div className={cardClassName} 
          onClick={ () => {
            setTimeout(() => handleMouse(id), 100);
          }}
          >
          <div className={`left`}>
            <img src={`/services-icons/${icon}`} alt="dropdown-icons" className="services-icons--svg"
            />
            <span>{serviceName}</span>
          </div>
          <img
          alt=""
            src={activeId === id ? `/helpers-icons/arrow-right-pink.svg` : `/helpers-icons/arrow-right.svg`}
            className="arrow-right--svg"></img>
        </div>
        <div className="content-container scroll"> {          
          activeId !== 0 && id === activeId ? (
            <div className="content">
              <div className="content-top">
                <div 
                  className="back_arrow--svg"
                  onClick={() => handleClickBack()}
                  >
                  <img
                  alt=""
                  src="/head-icons/arrow-left-gradient.svg"
                  className="menu__back_icon"></img>
                </div>
                <span className="submenu_name">{name}</span>
                <div 
                  className="close--svg"
                  onClick={() => handleClickClose()}
                  >
                  <img 
                  alt=""
                  src="/head-icons/close-icon.svg"
                  className="menu__close_icon"></img>
                </div>
              </div>
              <div className="content-description">
                  <Descriptions
                    handleCLose={handleCLose}
                    descriptions={descriptions}
                    windowWidth={windowWidth}
                    activeId={activeId}
                  ></Descriptions>
                <div className="button--container">
                  <Button
                    color="pink"
                    className="menu"
                    text={t('navigation.button')} 
                    onClick={() => console.log("pressed")}
                  />  
                </div>
              </div>

          </div>
          ) : null
        }
        </div>
        </>
      )
    }
    </>
  );
};