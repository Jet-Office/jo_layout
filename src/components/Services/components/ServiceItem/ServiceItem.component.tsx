import { Service } from "../../../../types/service.type";

import { Card } from "antd";

import "../../Services.component.css";
import { Link } from "react-router-dom";

type Props = {
  service: Service;
};

export const ServiceItem: React.FC<Props> = ({ service: { name, icon, link } }) => {
  return (
    <Card className="services__item" style={{fontFamily: "inherit"}}>
      <Link
        to={link}
      >
      <img
        src={`/services-icons/${icon}`}
        alt="service-icon"
        className="services__icon"
      />
      <p className="services__description">{name}</p>
      </Link>
    </Card>
  );
};
