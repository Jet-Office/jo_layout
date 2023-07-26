import { Link, useParams } from "react-router-dom";
import { servicesPage } from "../../data/servicesPage.json";
import { HeaderSpecial } from "../HeaderSpecial/HeaderSpecial.component";

import "./ListOfServices.component.css";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ListOfServices: React.FC<Props> = ({
  windowWidth,
  activePageRef,
  active,
  setActive,
}) => {
  const { link } = useParams<{ link: string }>();
  const selectedService = servicesPage.find((service) => service.link === link);
  

  if (!selectedService) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <HeaderSpecial
        windowWidth={windowWidth}
        activePageRef={activePageRef}
        active={active}
        setActive={setActive}
      />
      <div className="container">
        <div className="list-of-services">
          <div
            className="service-item"
            style={{ backgroundImage: `url(${selectedService.background})` }}
          >
            <div className="main-text__container">
              <h2 className="main-text__title">{selectedService.title}</h2>
              <p className="main-text__description">
                {selectedService.description}
              </p>
            </div>
          </div>
          <div className="top-link">
            <Link className="top-link__home" to="/">
              Home
            </Link>{" "}
            &#62;{" "}
            <Link className="top-link__services" to="/services">
              Services
            </Link>{" "}
            &#62; <span>{selectedService.title}</span>
          </div>

          <div className="service-list">
            {selectedService.list.map((item) => (
              <div key={item.id} className="service-items">
                <div className="list-of-services__container">
                  <img src={item.icon} alt={item.title} />
                  <div className="list-of-services-text-container">
                    <h2 className="list-of-services__title">{item.title}</h2>
                    <p className="list-of-services__description">
                      {item.description}
                    </p>
                  </div>
                  <Link className="list-of-services__link" to={`/services/${selectedService.link}/${item.link}`}>
                    Explore <img src="/services-page/chevron-right.svg" alt="more" />
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
