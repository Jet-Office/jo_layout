import "./PricingPage.component.css";
import React, {  useState } from 'react';
import { Faq } from "../Faq";
import useHandleClick from "../../helpers/openModal";
import {Button} from "../Button";
import { faqPrice } from "../../data/faqPrice.json";
import {pricing} from "../../data/pricing.json"

import 'swiper/css';
import 'swiper/css/effect-cards';

import { PricingSection } from "./PricingSection/PricingSection.component";

import { animationBottom } from "../AboutPage/AboutPage.component"
import { motion } from "framer-motion";

type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
  options: string;
  setOptions: (option: string) => void;
  activeCardId: number;
  setActiveCardId: (id: number) => void;
};

type FAQItem = {
  id: number;
  question: string;
  text: string;
};

export const PricingPage: React.FC<Props> = ({ 
  windowWidth, 
  activePageRef,
  options,
  setOptions,
  activeCardId,
  setActiveCardId,

}) => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>(faqPrice);
  const handleClick = useHandleClick();

  return (
    <div className="">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        className="pricing-page">
        <div className="container">
          <motion.h1 variants={animationBottom} custom={1} className="price-page__title">
            We've got a plan that's perfect for you</motion.h1>
          <motion.p variants={animationBottom} custom={2} className="price-page__subtitle">
            We have several packages, from flexible hourly pay to packages tailored for large companies.
          </motion.p>
          <PricingSection
            windowWidth={windowWidth}
            pricingItems={pricing}
            options={options}
            setOptions={setOptions}
            activeCardId={activeCardId}
            setActiveCardId={setActiveCardId}
          />
        </div>
        {windowWidth < 769 ? (
          <div className="background" style={{ backgroundImage: 'url(backgrounds/pricing-page-rocket-mob.png)' }}>
          </div>
        )
          : (
            <div className="background" style={{ backgroundImage: 'url(backgrounds/pricing-page-rocket.png)' }}>
            </div>
          )}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="price-page__faq">
            <div className="container">
              <div className="faq-block">
                <motion.p variants={animationBottom} custom={1} className="faq-block__text">
                  Get started with 14 days free trial — no credit card required. Experience up to 30 $ in value and
                  discover how we can help your business boost.
                </motion.p>
                <motion.div variants={animationBottom} custom={2} className="button-container">
                  <Button color="pink" text="Start free trial" onClick={handleClick} />
                </motion.div>
              </div>
            </div>
            <div className="container">
              <div className="faq-block">
                <Faq faqItems={faqItems} />
              </div>
            </div>
          </motion.section>
      </motion.div>
    </div>
  );
};
