import { Service } from "../../../../types/service.type";

import { Card } from "antd";

import "../../Services.component.css";
import { Link } from "react-router-dom";

import parser from 'html-react-parser';
import { motion } from "framer-motion";

type Props = {
  service: Service;
};

const servicesAnimation = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }
  })
}

export const ServiceItem: React.FC<Props> = ({ service: { id, nameWithWrap, icon, link } }) => {
  return (
    <MCard 
      custom={id + 1}
      variants={servicesAnimation}
      className="services__item" 
      style={{fontFamily: "inherit"}}>
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
    </MCard>
  );
};

const MCard = motion(Card);