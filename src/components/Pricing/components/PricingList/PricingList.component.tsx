import { Price } from "../../../../types/price.type";

import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <Carousel
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          width={"400px"}
          centerMode
          centerSlidePercentage={60}
        >
          {priceList.map((item) => (
            <PriceItem key={item.id} priceItem={item} />
          ))}
        </Carousel>
      )}
    </>
  );
};
