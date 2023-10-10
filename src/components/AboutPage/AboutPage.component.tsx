import React from "react";
import "./AboutPage.component.css";
import "../Crew/Crew.component.css";
import { AboutSection } from "./components/AboutSection";
import { CrewMember } from "./components/CrewItem";

import crewDataJson  from '../../data/crewAll.json';
import { motion } from "framer-motion";

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

  return (
    <>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        className="about-page">
        <div className="container">
          <motion.h1 variants={animationBottom} custom={1} className="about-page__title">
          Service from Ukraine for the Whole World
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
                Our History
              </motion.h2>
              <motion.p variants={animationRight} custom={2} className="history__text">
              It all began in a cafe in December 2022, in Fethiye, Turkey. Illia was working as a product designer in outsourced company and Oksana was the head of administrative support in a company with a headcount of 80 employees, and we were pondering: «how to scale the skill of solving problems and finding solutions for companies on an outsourcing basis». Here are the challenges we saw for companies that needed assistants, helpers, and administrative support:
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
              Customer Interviews
            </motion.h2>
            <div className="customers-interviews__text-container">
              <div className="customers-interviews__wrapper">
                <motion.p variants={animationLeft} custom={1} className="customers-interviews__text">
                  ❝  Navigating the administrative landscape is no small feat. Finding someone adept enough to support our team without distracting from core tasks is critical - especially when an executive's hour holds higher value than that of an assistant.
                </motion.p>
                <motion.p variants={animationRight} custom={2} className="customers-interviews__text">
                ❝ In our search for a business assistant, we don't just want anyone. We're looking for a self-starter – someone who grasps business intricacies, shows initiative, and is continuously eager to learn and adapt.
                </motion.p>
              </div>
              <div className="customers-interviews__wrapper">
                <motion.p variants={animationLeft} custom={3} className="customers-interviews__text">
                ❝  Seeking the perfect personal assistant is a quest in its own right. We need someone who not only understands our company's nuances but can carry out tasks with reliability and precision, ensuring that our top brass can operate without a hitch.
                </motion.p>
                <motion.p variants={animationRight} custom={4} className="customers-interviews__text">
                ❝  The ultimate challenge? Melding these talents into a cohesive team led by a single, insightful manager – someone who gets the intricacies of our operations, anticipates our client needs, delves into data, and thinks outside the box for those unpredictable tasks.
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
                Our mission and goals
              </motion.h2>
              <motion.p variants={animationLeft} custom={2} className="about-rocket-section__description">
                Our mission is to provide client-oriented virtual assistance, administrative support, and business solutions such as process automation and IT product development. We strive to deliver exceptional service, build long-lasting relationships with our clients, and continuously improve our processes to exceed their expectations. 
                <br />
                <br />
                One of our goals is to create a turnkey platform ecosystem for both businesses and private clients, where human assistants and AI together will be maximally effective and beneficial for clients.
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
                    {crewData.head.map((member) => (
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