import { Link, useParams } from "react-router-dom";
import { servicesPage } from "../../data/servicesPage.json";

import "./ListOfServices.component.css";
import { useTranslation } from 'react-i18next';

import { animationBottom } from "../AboutPage/AboutPage.component"
import { animationRight } from "../AboutPage/AboutPage.component"
import { animationLeft } from "../AboutPage/AboutPage.component"
import { motion } from "framer-motion";

type ListService = {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
};

type Service = {
  id: number;
  title: string;
  description: string;
  background: string;
  link: string;
  list: ListService[];
};

export const ListOfServices: React.FC = () => {
  const { link } = useParams<{ link: string }>();
  const selectedService = servicesPage.find((service) => service.link === link);
  const { t } = useTranslation();

  const newServicesPage = Object.values(t(`servicesPage.servicesList`, { returnObjects: true })) as Service[];


  const newSelectedService = newServicesPage.find((service) => service.link === link);


  if (!newSelectedService) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1, once: true }}
          className="list-of-services">
          <motion.div
            variants={animationBottom}
            custom={1}
            className="service-item special"
            style={{ backgroundImage: `url(${newSelectedService.background})` }}
          >
            <div className="main-text__container">
              <h2 className="main-text__title">{newSelectedService.title}</h2>
              <p className="main-text__description">
                {t(newSelectedService.description)}
              </p>
            </div>
          </motion.div>
          <motion.div custom={2} variants={animationLeft} className="top-link-main top-link-list">
            <Link className="top-link__home" to="/">
              {t(`servicesPage.homeLink`)}
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link__services" to="/services">
              {t(`servicesPage.servicesLink`)}
            </Link>{" "}
            &#62; <span>{newSelectedService.title}</span>
          </motion.div>

          <div 
            className="service-list">
            {newSelectedService.list.map((item, index) => (
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
                key={item.id} className="service-items">
                <div className="list-of-services__container">
                  <motion.img custom={index+1} variants={animationLeft} src={item.icon} alt={item.title} />
                  <div className="list-of-services-text-container">
                    <motion.h2 custom={index} variants={animationLeft} className="list-of-services__title">{item.title}</motion.h2>
                    <motion.p custom={index+1} variants={animationLeft} className="list-of-services__description">
                      {item.description}
                    </motion.p>
                  </div>
                  <motion.div custom={index + 2} variants={animationRight}>
                    <Link className="list-of-services__link" to={`/services/${newSelectedService.link}/${item.link}`}>
                    {t(`servicesPage.moreButton`)} <img src="/services-page/chevron-right.svg" alt="more" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};
