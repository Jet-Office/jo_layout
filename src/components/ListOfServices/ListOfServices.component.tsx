import { Link, useParams } from "react-router-dom";
import { servicesPage } from "../../data/servicesPage.json";

import "./ListOfServices.component.css";
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
        <div className="list-of-services">
          <div
            className="service-item special"
            style={{ backgroundImage: `url(${newSelectedService.background})` }}
          >
            <div className="main-text__container">
              <h2 className="main-text__title">{newSelectedService.title}</h2>
              <p className="main-text__description">
                {t(newSelectedService.description)}
              </p>
            </div>
          </div>
          <div className="top-link-main top-link-list">
            <Link className="top-link__home" to="/">
              {t(`servicesPage.homeLink`)}
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link__services" to="/services">
              {t(`servicesPage.servicesLink`)}
            </Link>{" "}
            &#62; <span>{newSelectedService.title}</span>
          </div>

          <div className="service-list">
            {newSelectedService.list.map((item) => (
              <div key={item.id} className="service-items">
                <div className="list-of-services__container">
                  <img src={item.icon} alt={item.title} />
                  <div className="list-of-services-text-container">
                    <h2 className="list-of-services__title">{item.title}</h2>
                    <p className="list-of-services__description">
                      {item.description}
                    </p>
                  </div>
                  <Link className="list-of-services__link" to={`/services/${newSelectedService.link}/${item.link}`}>
                  {t(`servicesPage.moreButton`)} <img src="/services-page/chevron-right.svg" alt="more" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
