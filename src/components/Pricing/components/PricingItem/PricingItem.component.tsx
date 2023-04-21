import classNames from "classnames";
import { Price } from "../../../../types/price.type";
import "../../Pricing.component.css";
import { Button } from "../../../Button";

type Props = {
  priceItem: Price;
};

export const PriceItem: React.FC<Props> = ({
  priceItem: { name, titleColor, mostPopular, description, price, payment },
}) => {
  const cardClass = classNames("pricing__card", {
    pricing__card_popular: mostPopular,
  });
  const titleClass = classNames(
    "pricing__card_title",
    `pricing--${titleColor}`
  );
  const priceClass = classNames(
    "pricing__card_price",
    `pricing--${titleColor}`,
    {
      "pricing__card--3560": +price === 3560,
      "pricing__card--1430": +price === 1430,
      "pricing__card--510": +price === 510,
      "pricing__card--calculator": price === "calculate",
      "pricing__card--startup": price === "30/h",
    }
  );

  return (
    <div className="pricing__card_background">
      <div className={cardClass}>
        <div className="pricing__card_head">
          <h3 className={titleClass}>{name}</h3>
          <p className="pricing__card_description">{description}</p>
        </div>
        {price !== "calculate" ? (
          <div className="pricing__card_info">
            <div className={priceClass}>{price}</div>
            <p className="pricing__card_payment">{payment}</p>
          </div>
        ) : (
          <div className="pricing__card_info">
            <div className={priceClass}>
              <img src="/calculator.svg" alt="calculator" />
            </div>
            <p className="pricing__card_payment">{payment}</p>
          </div>
        )}
        <Button color={titleColor !== "pink" ? titleColor : "pink_price"} text="Get started" />
      </div>
    </div>
  );
};
