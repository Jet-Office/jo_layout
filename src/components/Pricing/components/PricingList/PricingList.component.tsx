import { Price } from "../../../../types/price.type";
import "../../Pricing.component.css";
import { PriceItem } from "../PricingItem";

type Props = {
  priceList: Price[];
};

export const PricingList: React.FC<Props> = ({ priceList }) => {
  return (
    <div className="pricing__list">
      {priceList.map((item) => (
        <PriceItem priceItem={item} />
      ))}
    </div>
  );
};
