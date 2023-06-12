import { Price } from "../../../../types/price.type";

import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";

import { Swiper } from 'antd-mobile'

type Props = {
  priceList: Price[];
  windowWidth: number;
  options: string;
};

export const PricingList: React.FC<Props> = ({ priceList, windowWidth, options }) => {
  return (
    <>
      {windowWidth > 1024 ? (
        <div className="pricing__list">
          {priceList.map((item) => (
            <PriceItem key={item.id} priceItem={item} options={options} />
          ))}
        </div>
      ) : (
          <Swiper loop slideSize={windowWidth > 641 ? 34 : 25} trackOffset={15}>
            {priceList.map((item) => (
              <Swiper.Item key={item.id}>
                <PriceItem priceItem={item} options={options} />
              </Swiper.Item>
            ))}
          </Swiper>
      )}
    </>
  );
};
