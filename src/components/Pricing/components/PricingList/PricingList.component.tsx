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
      {windowWidth > 1450 ? (
        <div className="pricing__list">
          {priceList.map((item) => (
            <PriceItem key={item.id} priceItem={item} options={options} />
          ))}
        </div>
      ) : (
        <div className="swiper-wrapper">
        <Swiper loop 
          
          slideSize={windowWidth <= 1087 ? 25 : windowWidth <= 1450 ? 20 : 35} 
          trackOffset={windowWidth <= 280 ? 4 : windowWidth <= 390 ? 9 : windowWidth <= 500 ? 14 : windowWidth <= 580 ? 20 : 26} 
          style={{ overflow: "visible", zIndex: 9, left: `${windowWidth > 641 && windowWidth <= 1087 ? "14%" : "0"}` }}
          >
          {priceList.map((item) => (
            <Swiper.Item 
              key={item.id}
              >
              <PriceItem priceItem={item} options={options}/>
            </Swiper.Item>
          ))}
        </Swiper>
      </div>
      )}
    </>
  );
};
