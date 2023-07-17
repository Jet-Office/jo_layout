import "../ServicesDropdown.component.css";
import { Description } from "../../../types/servicesDropdown.type";

type Props = {
  descriptions: Description[];
};

export const Descriptions: React.FC<Props> = ({ descriptions }) => {
  return (
    <div className="content-grid">
      {descriptions.map(({ id, icon, attachment, name, text }) => (
        <div key={id} className="services__card">
          <div className="top-part">
            <img src={`./dropdown-icons/${icon}`} alt="" />
            <span className="services__card__title">{name}</span>
            {attachment !== "" && (
              <span className="attachment">{attachment}</span>
            )}
          </div>
          <div className="bottom-part">
            <span className="services__card__desc">{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
