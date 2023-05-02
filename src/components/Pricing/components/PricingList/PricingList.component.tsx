import { Price } from "../../../../types/price.type";

import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";

import { Swiper } from 'antd-mobile'

type Props = {
  priceList: Price[];
  windowWidth: number;
};

export const PricingList: React.FC<Props> = ({ priceList, windowWidth }) => {
  return (
    <>
      {windowWidth > 1050 ? (
        <div className="pricing__list">
          {priceList.map((item) => (
            <PriceItem key={item.id} priceItem={item} />
          ))}
        </div>
      ) : (
          <Swiper loop slideSize={25} trackOffset={15}>
            {priceList.map((item) => (
              <Swiper.Item key={item.id}>
                <PriceItem priceItem={item} />
              </Swiper.Item>
            ))}
          </Swiper>
      )}
    </>
  );
};
