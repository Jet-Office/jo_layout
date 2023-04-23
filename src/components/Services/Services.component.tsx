import { services } from "../../data/services.json";
import "./Services.component.css";
import { ServicesList } from "./components/ServicesList";

export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title h2">Services</h2>
        <ServicesList services={services} />
      </div>
    </section>
  );
};
