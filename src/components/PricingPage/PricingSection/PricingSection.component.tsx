import React from 'react';
import { PricingCard } from '../PricingCard';
import { PricingSwitch } from '../../Pricing/components/PricingSwitch';
import { Price } from '../../../types/price.type';

import "../PricingPage.component.css";
import "../PricingSection/PricingSection.component.css";

import { animationBottom } from "../../AboutPage/AboutPage.component"
import { animationRight } from "../../AboutPage/AboutPage.component"
import { animationLeft } from "../../AboutPage/AboutPage.component"
import { animationTop } from "../../AboutPage/AboutPage.component"

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { motion } from 'framer-motion';

interface Props {
  windowWidth: number;
  pricingItems: Price[];
  options: string;
  setOptions: (option: string) => void;
  activeCardId: number;
  setActiveCardId: (id: number) => void;
}

const swiperOptions = {
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 3,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  },
  modules: [EffectCoverflow],
  className: "mySwiper",
  initialSlide: 2
};

export const PricingSection: React.FC<Props> = ({
  windowWidth,
  pricingItems,
  options,
  setOptions,
  activeCardId,
  setActiveCardId,
}) => {
  
  return (
    <section className="pricing-page__price">
      <motion.div variants={animationTop} custom={3} className="pricing-page__switcher">
        <PricingSwitch setOptions={setOptions} />
      </motion.div>
      {windowWidth < 769 ? (
        <Swiper
          {...swiperOptions}
        >
          {pricingItems.map((pricingItem, index) => (
            <SwiperSlide
              key={pricingItem.id}
              className={`swiper-slide`}
            >
              <motion.div variants={animationBottom} custom={index + 4}>
                  <PricingCard
                    pricingItem={pricingItem}
                    options={options}
                    isActive={pricingItem.id === activeCardId}
                    setActiveCard={() => setActiveCardId(pricingItem.id)}
                  />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="pricing-page__list">
          {pricingItems.map((pricingItem, index) => (
            <motion.div variants={animationBottom} custom={index + 4}>
              <PricingCard
                key={pricingItem.id}
                pricingItem={pricingItem}
                options={options}
                isActive={pricingItem.id === activeCardId}
                setActiveCard={() => setActiveCardId(pricingItem.id)}
              />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};
