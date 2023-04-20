import { Service } from "../../../types/service.type";
import "../Services.component.css";

type Props = {
  service: Service;
};

export const ServiceItem: React.FC<Props> = ({ service: { description, icon } }) => {
  return (
    <a
      href="https://t.me/jetoffice_bot"
      target="_blank"
      className="services__item"
    >
        <img src={`src/assets/${icon}`} alt="service-icon" className="services__icon" />
        <p className="services__description">{description}</p>
    </a>
  );
};
