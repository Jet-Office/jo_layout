import "./Descriptions.component.css";
import { Description } from "../../../types/servicesDropdown.type";
import { useState } from "react";

type Props = {
  descriptions: Description[];
  windowWidth: number;
};

export const Descriptions: React.FC<Props> = ({ descriptions, windowWidth }) => {

  const [ activeDescriptionId, setActiveDescriptionId ] = useState(0);

  return (
    <div className="content-grid">
      {descriptions.map(({ id, icon, attachment, name, text }) => (
        <div 
          key={id} 
          className={`services__card ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}
          onClick={() => {setActiveDescriptionId(id)}}
          >
          <div className="top-part">
            <div className="top-part--first">
              <img 
                className="icons_scale"
                src={ windowWidth <= 890 && activeDescriptionId === id ? `/dropdown-icons/gradient/${icon}` : `/dropdown-icons/${icon}`} alt="" />
              <span className={`services__card__title ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}>{name}</span>
            </div>
            {attachment !== "" && (
              <span className="attachment">{attachment}</span>
            )}
          </div>
          <div className={`bottom-part ${windowWidth <= 890 && activeDescriptionId === id ? "active" : ""}`}>
            <span className="services__card__desc">{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
