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

export const ServiceDescription: React.FC = () => {
  const { subLink } = useParams<{ subLink: string }>();

  const serviceItemData = serviceItem["servece-item"].find(
    (item) => item.subLink === subLink
  );

  const handleClick = useHandleClick();

  if (!serviceItemData) {
    return <div>Розділ послуг не знайдено.</div>;
  }

  return (
    <>
      <section className="hero-section">
        <div 
          className="inner-container"
        >
          <div 
            style={{ backgroundImage: `url(${serviceItemData["hero-background"]})` }}
            className="inner-container__background-image"
          >
            <div className="hero-section__text-container">
              <h1 className="hero-section__title">{serviceItemData["hero-title"]}</h1>
              <p className="hero-section__description">{serviceItemData["hero-description"]}</p>

              <div className="buttons">
              <Button color="dark" text="Get in touch" onClick={handleClick} />
              <Button color="pink" text="get a service" onClick={handleClick} />
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-description">
        <ServiceListSection list={serviceItemData.list} />
      </section>
      <section className="main-image-section">
        <MainSection
          mainImage={serviceItemData["main-image"]}
          mainTitle={serviceItemData["main-title"]}
          mainDescription={serviceItemData["main-description"]}
        />
      </section>
      <section className="service-list2">
        {serviceItemData.list2 && <ServiceList2Section list={serviceItemData.list2} />}
      </section>
      <section className="rocket">
      <RocketSection
        rocketImage={serviceItemData["rocket-image"]}
        rocketTitle={serviceItemData["rocket-title"]}
        rocketDescription={serviceItemData["rocket-description"].toString()}
      />
      </section>
    </>
  );
};