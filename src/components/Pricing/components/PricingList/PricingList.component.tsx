import { Price } from "../../../../types/price.type";

import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

type Props = {
  priceList: Price[];
  windowWidth: number;
};

export const PricingList: React.FC<Props> = ({ priceList, windowWidth }) => {
  return (
    <>
      {windowWidth > 800 ? (
        <div className="pricing__list">
          {priceList.map((item) => (
            <PriceItem key={item.id} priceItem={item} />
          ))}
        </div>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          navigation={true}
          loop={true}
        >
          {priceList.map((item) => (
            <SwiperSlide key={item.id}>
              <PriceItem priceItem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
