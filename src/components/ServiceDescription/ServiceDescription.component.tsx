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

import { animationBottom } from "../AboutPage/AboutPage.component"
import { animationRight } from "../AboutPage/AboutPage.component"
import { animationLeft } from "../AboutPage/AboutPage.component"
import { motion } from "framer-motion";

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
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className="hero-section">
        <div 
          className="inner-container"
        >
          <div 
            style={{ backgroundImage: `url(${newServiceItemData["heroBackground"]})` }}
            className="inner-container__background-image"
          >
            <div className="hero-section__text-container">

              <motion.h1 custom={1} variants={animationLeft} className="hero-section__title">{newServiceItemData["heroTitle"]}</motion.h1>
              <motion.p custom={2} variants={animationLeft} className="hero-section__description">{newServiceItemData["heroDescription"]}</motion.p>



              <motion.div custom={3} variants={animationLeft} className="buttons">
              <div className="buttons">
                <Button color="dark" text={t(`servicesPage.conectButton`)} onClick={handleClick} className="button--dark-service" />
                <Button color="pink" text={t(`servicesPage.getButton`)} onClick={handleClick} className="button--pink-service" />
              </div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>
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