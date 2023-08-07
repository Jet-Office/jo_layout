import React from "react";
import "./MainContent.component.css";
import { servicesPage } from "../../../../data/servicesPage.json";
import { Link } from "react-router-dom";

export const MainContent: React.FC = () => {
  return (
    <div className="container">
      <div className="top-link-main">
        <Link className="top-link__home" to="/">Home</Link> &#62; <span>Services</span>
      </div>
      <div className="main-content">
      {servicesPage.map((service) => (
        <div
          className="service-item"
          style={{ backgroundImage: `url(${service.background})` }}
          key={service.id}
        >
          <div className="main-text__container">
            <h2 className="main-text__title">{service.title}</h2>
            <p className="main-text__description">{service.description}</p>
            <Link className="main-text__link" to={`/services/${service.link}`}>More <img src="./services-page/chevron-right.svg" alt="more" /> </Link>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};