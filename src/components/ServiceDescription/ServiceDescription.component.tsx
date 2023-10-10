import React from "react";
import { useParams } from "react-router-dom";
import serviceItem from "../../data/serviceItem.json";

import "./ServiceDescription.component.css";
import { Button } from "../Button";
import useHandleClick from "../../helpers/openModal";
import { ServiceListSection } from "./components/ServiceListSection/ServiceListSection";
import { MainSection } from "./components/MainSection";
import { ServiceList2Section } from "./components/ServiceList2Section";
import { RocketSection } from "./components/RocketSection";
import { useTranslation } from 'react-i18next';

type ListServiceItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

type ServiceItem = {
  id: number;
  subLink: string;
  heroTitle: string;
  heroDescription: string;
  heroBackground: string;
  list: ListServiceItem[];
  mainImage: string;
  mainTitle: string;
  mainDescription: string;
  list2: ListServiceItem[];
  rocketImage: string;
  rocketTitle: string;
  rocketDescription: string;
};

/* type ServiceItemData = {
  "serveceItemPage": ServiceItem[];
}; */

export const ServiceDescription: React.FC = () => {
  const { t } = useTranslation();

  const { subLink } = useParams<{ subLink: string }>();

  const serviceItemData = serviceItem["servece-item"].find(
    (item) => item.subLink === subLink
  );

  const newServiceItem = Object.values(t(`serveceItemPage`, { returnObjects: true })) as ServiceItem[];

  const newServiceItemData = newServiceItem.find(
    (item) => item.subLink === subLink
  );

  const handleClick = useHandleClick();

  if (!serviceItemData|| !newServiceItemData) {
    return <div>Розділ послуг не знайдено.</div>;
  }

  return (
    <>
      <section className="hero-section">
        <div 
          className="inner-container"
        >
          <div 
            style={{ backgroundImage: `url(${newServiceItemData["heroBackground"]})` }}
            className="inner-container__background-image"
          >
            <div className="hero-section__text-container">

              <h1 className="hero-section__title">{newServiceItemData["heroTitle"]}</h1>
              <p className="hero-section__description">{newServiceItemData["heroDescription"]}</p>


              <div className="buttons">
              <Button color="dark" text="Connect with us" onClick={handleClick} className="button--dark-service" />
              <Button color="pink" text="get a service" onClick={handleClick} className="button--pink-service" />
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-description">
        <ServiceListSection list={newServiceItemData.list} />
      </section>
      <section className="main-image-section">
        <MainSection
          mainImage={newServiceItemData["mainImage"]}
          mainTitle={newServiceItemData["mainTitle"]}
          mainDescription={newServiceItemData["mainDescription"]}
        />
      </section>
      <section className="service-list2">
        {serviceItemData.list2 && <ServiceList2Section list={newServiceItemData.list2} />}
      </section>
      <section className="rocket">
      <RocketSection
        rocketImage={newServiceItemData["rocketImage"]}
        rocketTitle={newServiceItemData["rocketTitle"]}
        rocketDescription={newServiceItemData["rocketDescription"].toString()}
      />
      </section>
    </>
  );
};