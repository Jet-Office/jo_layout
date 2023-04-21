import { Service } from "../../../../types/service.type";
import { ServiceItem } from "../ServiceItem";
import "../../Services.component.css";

type Props = {
  services: Service[];
};

export const ServicesList: React.FC<Props> = ({ services }) => {
  return (
    <div className="services__list_container">
      <div className="services__list">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
