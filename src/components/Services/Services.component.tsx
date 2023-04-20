import { services } from "../../api/services.json";
import "./Services.component.css";
import { ServicesList } from "./ServicesList";

export const Services = () => {
  console.log(services);
  
  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Services</h2>
        <ServicesList services={services} />
      </div>
    </section>
  );
};
