import { services } from "../../data/services.json";
import { motion } from "framer-motion";
import "./Services.component.css";
import { ServicesList } from "./components/ServicesList";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const newServices = Object.values(t(`main.services.services`, { returnObjects: true }));

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="services" id="services" ref={activeRef}>
      <div className="container services__container">
        <motion.h2 custom={1} variants={textAnimation} className="services__title h2">{t(`main.services.title`)}</motion.h2>
        <div className="text__container">
          <motion.p custom={2} variants={textAnimation} className="paragraph">
          {t(`main.services.description`)}
          </motion.p>
        </div>
        <ServicesList services={newServices} />
      </div>
    </motion.section>
  );
};
