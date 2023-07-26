import React from "react";
/* import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesPage.json";
 */
import "./ServiceDescription.component.css";


export const ServiceDescription: React.FC = () => {
/*   const { link, subLink } = useParams<{ link: string; subLink: string }>();

  const selectedServicePage = servicesData.servicesPage.find(
    (servicePage) => servicePage.link === link
  );

  if (!selectedServicePage) {
    return <div>Послуга не знайдена</div>;
  }

  const chousenSubService = selectedServicePage.list.find(
    (subService) => subService.link === subLink
  );
 */
  // Якщо не знайдено підпослугу, повернемо підказку
/*   if (!chousenSubService) {
    return <div>Підпослуга не знайдена</div>;
  } */

  /* const chousenSubServiceList = chousenSubService.list[0];
  console.log(chousenSubServiceList);
  const heroTitle = chousenSubServiceList["hero-title"];
  const heroDescription = chousenSubServiceList["hero-description"];
  const heroBackground = chousenSubServiceList["hero-background"];
console.log(heroBackground); */
  return (
    <>
      <section className="hero-section">
        {/* <div
          className="hero-section__background"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="hero-section__container">
            <h2 className="hero-section__title">
              {heroTitle}
            </h2>
            <p className="hero-section__description">
              {heroDescription}
            </p>
          </div>
        </div> */}
      </section>
      <div className="service-description">

      </div>
    </>
  );
};