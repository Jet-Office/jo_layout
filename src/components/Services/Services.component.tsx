import { services } from "../../data/services.json";

import "./Services.component.css";

import { Space } from "antd";

import { ServicesList } from "./components/ServicesList";

type Props = {
  activeRef: React.RefObject<HTMLElement>;
};

export const Services: React.FC<Props> = ({ activeRef }) => {
  return (
    <section className="services" id="services" ref={activeRef}>
      <div className="container services__container">
        <h2 className="services__title h2">Services</h2>
        <ServicesList services={services} />
      </div>
    </section>
  );
};
