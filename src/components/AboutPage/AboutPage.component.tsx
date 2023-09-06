import React from "react";
import { Button } from "../Button/Button.component";
import useHandleClick from "../../helpers/openModal";

import "./AboutPage.component.css";
import { Link } from "react-router-dom";
import { AboutSection } from "./components/AboutSection";
import { CrewMember } from "./components/CrewItem";

import crewDataJson  from '../../data/crewAll.json';


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
/* 
type CrewData = {
  crewAll: CrewCategoryData[];
}; */

type Props = {
  windowWidth: number;
  aboutPageRef: React.RefObject<HTMLElement>;
};

export const AboutPage: React.FC<Props> = ({ windowWidth, aboutPageRef })=> {

  const handleClick = useHandleClick();

  const crewData: CrewCategoryData = crewDataJson.crewAll[0];


  return (
    <>

      <div className="about-page">
        <section className="hero-section">
            <div 
              className="inner-container"
            >
              <div 
                style={{backgroundImage: `url(/backgrounds/about-page-background.png)`}}
                className="inner-container__background-image"
              >
                <div className="hero-section__text-container">
                  <h1 className="hero-section__title">Some About title</h1>
                  <p className="hero-section__description">Some about subtitle</p>

                  <div className="buttons">
                  <Button color="dark" text="Get in touch" onClick={handleClick} />
                  <Button color="pink" text="get a service" onClick={handleClick} />
                </div>
                </div>
              </div>
            </div>
        </section>
        <div className="container">
          <div className="top-link-main">
            <Link className="top-link__home" to="/">Home</Link> &#62; <span>Services</span>
          </div>
        </div>
        <AboutSection windowWidth={windowWidth} aboutPageRef={aboutPageRef} />
        <section className="about-rocket">
          <div className="rocket-section__content">
            <div className="rocket-section__image-container">
              <img className="rocket-section__image" src="backgrounds/about-rocket.png" alt="rocket" />
            </div>
            <div className="rocket-section__text-container">
              <h2 className="rocket-section__title">
                Our mission and goals
              </h2>
              <p className="rocket-section__description">
                Our mission is to provide client-oriented virtual assistance, administrative support, and IT solutions through our network of partners. We strive to deliver exceptional service, build long-lasting relationships with our clients, and continuously improve our processes to exceed their expectations.
              </p>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="crew-section">
            <div className="crew-section__title">
              <h2>Crew</h2>
            </div>

            <div className="crew-section__list">
              <div className="crew-section__category">
              <h3 className="crew-section__category-title">Head</h3>
                <div className="crew-section__wrapper">
                {crewData.head.map((member) => (
                  <CrewMember
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    avatar={member.avatar}
                  />
                ))}
                </div>
                
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </>
  )
};