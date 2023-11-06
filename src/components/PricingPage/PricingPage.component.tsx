import "./PricingPage.component.css";
import React, {  useEffect, useState } from 'react';
import { Faq } from "../Faq";
import useHandleClick from "../../helpers/openModal";
import {Button} from "../Button";
import { faqPrice } from "../../data/faqPrice.json";
import {pricing} from "../../data/pricing.json"
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const newFaqPrice = Object.values(t(`pricingPage.faqPrice`, { returnObjects: true }));

  const handleClick = useHandleClick();

  const newPrising = Object.values(t(`pricingPage.pricing`, { returnObjects: true }));

  return (
    <div className="">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: true }}
        className="pricing-page">
        <div className="container">
          <motion.h1 variants={animationBottom} custom={1} className="price-page__title">
            {t(`pricingPage.title`)}
          </motion.h1>
          <motion.p variants={animationBottom} custom={2} className="price-page__subtitle">
            {t(`pricingPage.subtitle`)}
          </motion.p>
          <PricingSection
            windowWidth={windowWidth}
            pricingItems={newPrising}
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
                  {t(`pricingPage.text`)}
                </motion.p>
                <motion.div variants={animationBottom} custom={2} className="button-container">
                  <Button color="pink" text={t(`pricingPage.startFreeButton`)} onClick={handleClick} />
                </motion.div>
              </div>
            </div>
            <div className="container">
              <div className="faq-block">
                <Faq faqItems={newFaqPrice} />
              </div>
            </div>
          </motion.section>
      </motion.div>
    </div>
  );
};
