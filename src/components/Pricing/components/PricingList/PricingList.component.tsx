import { Price } from "../../../../types/price.type";
import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

type Props = {
  priceList: Price[];
};

export const PricingList: React.FC<Props> = ({ priceList }) => {
  return (
    <div className="pricing__list">
      {priceList.map((item) => (
        <PriceItem key={item.id} priceItem={item} />
      ))}
    </div>
  );
};
