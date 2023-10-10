import React from "react";
import "./MainContent.component.css";
import { servicesPage } from "../../../../data/servicesPage.json";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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

export const MainContent: React.FC = () => {  
  const { t } = useTranslation();

  const newServicesPage = Object.values(t(`servicesPage.servicesList`, { returnObjects: true })) as Service[];

  return (
    <div className="container">
      <div className="top-link-main">
        <Link className="top-link__home" to="/">
          {t(`servicesPage.homeLink`)}
        </Link> &#62; 
          <span>
          {t(`servicesPage.servicesLink`)}
          </span>
      </div>
      <div className="main-content">
      {newServicesPage.map((service) => (
        <div
          className="service-item"
          style={{ backgroundImage: `url(${service.background})` }}
          key={service.id}
        >
          <div className="main-text__container">
            <h2 className="main-text__title">{service.title}</h2>
            <p className="main-text__description">{service.description}</p>
            <Link className="main-text__link" to={`${service.link}`}>{t(`servicesPage.moreButton`)} <img src="./services-page/chevron-right.svg" alt="more" /> </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};