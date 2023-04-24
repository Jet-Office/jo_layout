import classNames from "classnames";
import { Price } from "../../../../types/price.type";
import "../../Pricing.component.css";
import { Button } from "../../../Button";
import { InfoTooltip } from "../InfoTooltip";

type Props = {
  priceItem: Price;
};

export const PriceItem: React.FC<Props> = ({
  priceItem: {
    name,
    titleColor,
    mostPopular,
    description,
    price,
    payment,
    monthlyHour,
    preferences,
    frealancersPrice,
    team,
  },
}) => {
  const backgroundClass = classNames("pricing__card_background", {
    "pricing__card_background--popular": mostPopular,
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
  const monthlyClass = classNames(
    "pricing__card_monthly",
    `pricing--${titleColor}`
  );

  return (
    <div className={backgroundClass}>
      <div className="pricing__card">
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
              <img src="./calculator.svg" alt="calculator" />
            </div>
            <p className="pricing__card_payment">{payment}</p>
          </div>
        )}
        <Button
          color={titleColor !== "pink" ? titleColor : "pink_price"}
          text="Get started"
        />
        {monthlyHour !== 0 && (
          <p
            className={monthlyClass}
          >{`${monthlyHour} hours monthly for task execution`}</p>
        )}
        {preferences.length > 0 && (
          <div className="pricing__card_preferences">
            {preferences.length > 0 && (
              <>
                {preferences.map((preference) => (
                  <div
                    className="pricing__card_text_container"
                    key={preference.id}
                  >
                    <div className="pricing__card_preference">
                      {preference.name}
                    </div>
                    <InfoTooltip description={preference.description} />
                  </div>
                ))}
              </>
            )}
            {frealancersPrice > 0 && (
           
                <div className="pricing__card_text_container">
                  <div className="pricing__card_preference">Freelancers</div>
                  <InfoTooltip
                    description={
                      "Jet Talent Hub is a database of freelancers we tap into for fire drills. Freelancers' work hours beyond the package hours are billed separately (usually from a deposit)."
                    }
                  />
                  <p className="pricing__card_preference">{`$${frealancersPrice}/h`}</p>
                </div>
            )}
          </div>
        )}
        <div className="pricing__card_preferences">
          {team.length > 0 && (
            <>
              {team.map((preference) => (
                <div className="pricing__card_preference" key={preference}>
                  {preference}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
