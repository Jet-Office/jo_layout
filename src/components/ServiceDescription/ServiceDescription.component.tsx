import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../../data/servicesPage.json";

import "./ServiceDescription.component.css";

// Оголошення типу даних для об'єкта підпослуги (list)


interface ListItem {
  id: number;
  title: string;
  icon: string;
  description: string;
  link: string;
}

// Оголошення типу даних для об'єкта послуги
interface SubService {
  id: number;
  "hero-title": string;
  "hero-description": string;
  "hero-background": string;
  list: ListItem[];
  "main-image": string;
  "main-title": string;
  "main-description": string;
  list2: SubListItem[];
  "rocket-image"?: string; // Додали "?" для опціонального поля
  "rocket-title"?: string; // Додали "?" для опціонального поля
  "rocket-description"?: string; // Додали "?" для опціонального поля
}

// Оголошення типу даних для об'єкта підпослуги з "list2"
interface SubListItem {
  id: number;
  number: string;
  title: string;
  description: string;
}

// Оголошення типу даних для об'єкта послуги
interface ServicePageItem {
  id: number;
  title: string;
  description: string;
  background: string;
  link: string;
  list: ListItem[];
}

// Оголошення типу даних для об'єкта, що містить усі послуги
interface ServicesPageData {
  servicesPage: ServicePageItem[];
}

export const ServiceDescription: React.FC<Props> = () => {
  const { link, subLink } = useParams<{ link: string; subLink: string }>();

  const selectedServicePage = servicesData.servicesPage.find(
    (servicePage) => servicePage.link === link
  );

  if (!selectedServicePage) {
    return <div>Послуга не знайдена</div>;
  }

  const chousenSubService = selectedServicePage.list.find(
    (subService) => subService.link === subLink
  );

  // Якщо не знайдено підпослугу, повернемо підказку
  if (!chousenSubService) {
    return <div>Підпослуга не знайдена</div>;
  }

  const chousenSubServiceList = chousenSubService.list[0];
  console.log(chousenSubServiceList);
  const heroTitle = chousenSubServiceList["hero-title"];
  const heroDescription = chousenSubServiceList["hero-description"];
  const heroBackground = chousenSubServiceList["hero-background"];
console.log(heroBackground);
  return (
    <>
      <section className="hero-section">
        <div
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
        </div>
      </section>
      <div className="service-description">

      </div>
    </>
  );
};