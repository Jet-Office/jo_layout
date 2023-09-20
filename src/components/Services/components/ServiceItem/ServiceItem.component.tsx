import { Service } from "../../../../types/service.type";

import { Card } from "antd";

import "../../Services.component.css";
import { Link } from "react-router-dom";

import parser from 'html-react-parser';

type Props = {
  service: Service;
};

export const ServiceItem: React.FC<Props> = ({ service: { nameWithWrap, icon, link } }) => {
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
      <p className="services__description">{parser(nameWithWrap)}</p>
      </Link>
    </Card>
  );
};
