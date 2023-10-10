import "./Descriptions.component.css";
import { Description } from "../../../types/servicesDropdown.type";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

type Props = {
  descriptions: Description[];
  windowWidth: number;
  handleCLose: () => void;
  activeId: number;
};

export const Descriptions: React.FC<Props> = ({ 
  descriptions, 
  windowWidth, 
  handleCLose,
  activeId
}) => {
  const [ activeDescriptionId, setActiveDescriptionId ] = useState(0);
  const { t } = useTranslation();

    const serviceDescription =  Object.values(t(`services.service${activeId}.descriptions`,{ returnObjects: true })) as Description[];

  return (
    <div className="content-grid">
      {serviceDescription.map(({ id, icon, attachment, name, text, link }) => (
        <Link
          to={link} 
          key={id} 
          className={`services__card ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}
          onClick={() => {
            setActiveDescriptionId(id);
            handleCLose()
          }}
          onMouseEnter={() => {setActiveDescriptionId(id)}}
          onMouseLeave={() => {setActiveDescriptionId(0)}}
          >
          <div className="top-part">
            <div className="top-part--first">
              <img 
                className="icons_scale"
                src={ activeDescriptionId === id ? `/dropdown-icons/gradient/${icon}` : `/dropdown-icons/${icon}`} alt="" />
              <span className={`services__card__title ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}>
              {t(`${name}`)}

              </span>
            </div>
            {attachment !== "" && (
              <span className="attachment">{attachment}</span>
            )}
          </div>
          <div className={`bottom-part ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}>
            <span className="services__card__desc">
            {t(`${text}`)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
