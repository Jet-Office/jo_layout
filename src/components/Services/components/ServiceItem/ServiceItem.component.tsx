import { Service } from "../../../../types/service.type";
import "../../Services.component.css";

type Props = {
  service: Service;
};

export const ServiceItem: React.FC<Props> = ({ service: { description, icon } }) => {
  return (
    <a
      className="services__item"
    >
        <img src={`./services-icons/${icon}`} alt="service-icon" className="services__icon" />
        <p className="services__description">{description}</p>
    </a>
  );
};
