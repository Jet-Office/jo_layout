import { services } from "../../data/services.json";

import "./Services.component.css";

import { ServicesList } from "./components/ServicesList";

type Props = {
  activeRef: React.RefObject<HTMLElement>;
};

export const Services: React.FC<Props> = ({ activeRef }) => {
  return (
    <section className="services" id="services" ref={activeRef}>
      <div className="container services__container">
        <h2 className="services__title h2">Services</h2>
        {/* <div className="text__container">
          <p className="paragraph">
            We offer virtual assistants and concierge services trusted by
            companies <br /> and businessmen to manage tasks, calendars, shopping,
            events, bills, documents, SMM, and more. <br /> In our work, we use process
            automation and artificial intelligence to achieve success and solve
            problems at maximum speed!
          </p>
        </div> */}
        <ServicesList services={services} />
      </div>
    </section>
  );
};
