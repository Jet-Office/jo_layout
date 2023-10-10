import { Service } from "../../../../types/service.type";
import { ServiceItem } from "../ServiceItem";
import "../../Services.component.css";
import { motion } from "framer-motion";
import { forwardRef } from "react";

type Props = {
  services: Service[];
};

const servicesAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const ServicesList: React.FC<Props> = ({ services }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="services__list_container">
      <div className="services__list">
        {services.map((service, index) => (
          <ServiceItem
            key={service.id} 
            service={service} />
        ))}
      </div>
    </motion.div>
  );
};

const MServiceItem = motion(ServiceItem)
