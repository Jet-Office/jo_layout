import React from "react";
import "./AboutPage.component.css";
import "../Crew/Crew.component.css";
import { AboutSection } from "./components/AboutSection";
import { CrewMember } from "./components/CrewItem";

import crewDataJson  from '../../data/crewAll.json';
import { motion } from "framer-motion";

import { useTranslation } from 'react-i18next';


export const animationBottom = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const animationTop = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const animationRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

export const animationLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

type CrewMemberData = {
  id: number;
  name: string;
  role: string;
  avatar: string;
};

type CrewCategoryData = {
  head: CrewMemberData[];
  management: CrewMemberData[];
  sales: CrewMemberData[];
  product: CrewMemberData[];
};

type Props = {
  windowWidth: number;
  aboutPageRef: React.RefObject<HTMLElement>;
};

export const AboutPage: React.FC<Props> = ({ windowWidth, aboutPageRef })=> {
  const crewData: CrewCategoryData = crewDataJson.crewAll[0];
  const { t } = useTranslation();

  const localCrew =  Object.values(t(`aboutPage.crewAll`, { returnObjects: true }))
  const finalCrew: CrewCategoryData = localCrew[0];

  return (
    <>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className="about-page">
        <div className="container">
          <motion.h1 variants={animationBottom} custom={1} className="about-page__title">
          {t(`aboutPage.title`)}
          </motion.h1>
        </div>

        <AboutSection windowWidth={windowWidth} aboutPageRef={aboutPageRef} />
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="history">
          <div className="history__container">
            <img
              className="history__image"
              src="./backgrounds/satellite.png" 
              alt="satellite"
            />
            <div className="history__text-container">
              <motion.h2 variants={animationRight} custom={1} className="history__title">
              {t(`aboutPage.heroTitle`)}
              </motion.h2>
              <motion.p variants={animationRight} custom={2} className="history__text">
              {t(`aboutPage.heroText`)}
              </motion.p>
            </div>
          </div>
        </motion.section>
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="customers-interviews">
          <div className="container">
            <motion.h2 variants={animationLeft} className="customers-interviews__title">
            {t(`aboutPage.customersInterviewsTitle`)}
            </motion.h2>
            <div className="customers-interviews__text-container">
              <div className="customers-interviews__wrapper">
                <motion.p variants={animationLeft} custom={1} className="customers-interviews__text">
                  ❝  {t(`aboutPage.customersInterviewsText1`)}
                </motion.p>
                <motion.p variants={animationRight} custom={2} className="customers-interviews__text">
                ❝ {t(`aboutPage.customersInterviewsText2`)}
                </motion.p>
              </div>
              <div className="customers-interviews__wrapper">
                <motion.p variants={animationLeft} custom={3} className="customers-interviews__text">
                ❝  {t(`aboutPage.customersInterviewsText3`)}
                </motion.p>
                <motion.p variants={animationRight} custom={4} className="customers-interviews__text">
                ❝  {t(`aboutPage.customersInterviewsText4`)}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="about-rocket">
          <div className="about-rocket-section__content">
            <div className="about-rocket-section__image-container">
              <motion.img variants={animationBottom} custom={3} className="about-rocket-section__image" src="backgrounds/about-rocket.png" alt="rocket" />
            </div>
            <div className="about-rocket-section__text-container">
              <motion.h2 variants={animationLeft} custom={1} className="about-rocket-section__title">
              {t(`aboutPage.titleRocket`)}
              </motion.h2>
              <motion.p variants={animationLeft} custom={2} className="about-rocket-section__description">
              {t(`aboutPage.textRocket`)}
              </motion.p>
            </div>
          </div>
        </motion.section>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="container">
          <section className="crew-section">
            <motion.div variants={animationLeft} custom={1} className="crew-section__title">
              <h2>Crew</h2>
            </motion.div>

            <div className="crew-section__list">
              <div className="crew-section__category">
                  <div className="crew-section__wrapper">
                    {finalCrew.head.map((member: CrewMemberData) => (
                      <CrewMember
                        key={member.id}
                        name={member.name}
                        role={member.role}
                        avatar={member.avatar}
                        id={member.id}
                      />
                    ))}
                  </div>
              </div>
            </div>
          </section>
        </motion.div>
        
      </motion.div>
    </>
  )
};