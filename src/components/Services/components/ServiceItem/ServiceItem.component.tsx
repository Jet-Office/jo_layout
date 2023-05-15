import { Service } from "../../../../types/service.type";

import { Card } from "antd";

import "../../Services.component.css";

type Props = {
  service: Service;
};

export const ServiceItem: React.FC<Props> = ({ service: { name, icon } }) => {
  return (
    <Card className="services__item" style={{fontFamily: "inherit"}}>
      <img
        src={`/services-icons/${icon}`}
        alt="service-icon"
        className="services__icon"
      />
      <p className="services__description">{name}</p>
    </Card>
  );
};
