import { services } from "../../data/services.json";

import { motion } from "framer-motion";

import "./Services.component.css";

import { ServicesList } from "./components/ServicesList";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 }
  })
}

type Props = {
  activeRef: React.RefObject<HTMLElement>;
};

export const Services: React.FC<Props> = ({ activeRef }) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="services" id="services" ref={activeRef}>
      <div className="container services__container">
        <motion.h2 custom={1} variants={textAnimation} className="services__title h2">Services</motion.h2>
        <div className="text__container">
          <motion.p custom={2} variants={textAnimation} className="paragraph">
            We offer virtual assistants and concierge services trusted by
            companies and businessmen to manage tasks, calendars, shopping,
            events, bills, documents, SMM, and more. In our work, we use process
            automation and artificial intelligence to achieve success and solve
            problems at maximum speed!
          </motion.p>
        </div>
        <ServicesList services={services} />
      </div>
    </motion.section>
  );
};
