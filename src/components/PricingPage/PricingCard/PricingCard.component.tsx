import React, { useEffect, useState } from "react";
import "./PricingCard.component.css";
import { Price } from "../../../types/price.type";
import classNames from "classnames";
import useHandleClick from "../../../helpers/openModal";
import { Button } from "../../Button";
import parser from 'html-react-parser';
import { useTranslation } from 'react-i18next';

type Props = {
  pricingItem: Price;
  options: string;
  isActive: boolean;
  setActiveCard: () => void;
};

export const PricingCard: React.FC<Props> = ({
  pricingItem,
  options,
  isActive,
  setActiveCard,
}) => {
  const {
    name,
    titleColor,
    mostPopular,
    description,
    monthlyPrice,
    payment,
    monthlyHour,
    team,
    preferences,
    yearlyPrice,
  } = pricingItem;
  const { t } = useTranslation();

  const displayedPrice = options === "monthly" ? monthlyPrice : yearlyPrice;

  const handleClick = useHandleClick();

  const [price, setPrice] = useState(monthlyPrice);
  useEffect(() => {
    if (options === "monthly") {
      setPrice(monthlyPrice);
    } else {
      setPrice(yearlyPrice);
    }
  }, [monthlyPrice, options, yearlyPrice]);

  return (

    <div
      className={classNames("pricing-page__card", {
        "pricing-page__card--active": isActive,
      })}
      onClick={() => {
        setActiveCard();
      }}
    >
      <div className={classNames(`card card--${titleColor}`, {
        "card--active": isActive,
      })}>
        <div className="card__header">
          <h3 
            className={`card__title card__color--${titleColor}`}
          >
            {name}
          </h3>
          {mostPopular && <div className="card__popular">{t(`pricingPage.mostPopular`)}</div>}
        </div>
        <p className="card__description">{description}</p>
        <div className="card__price">
          <div className="card__price-value">
            {displayedPrice === "calculate" ? (
              <img
              src="/pricing-icons/calculator.svg"
              width={70}
              height={70}
              alt="calculator"
              className="pricing__calculator_icon"
            />
            ) : (
              <span
                className={`card__price-coast card__color--${titleColor}`}
              >
                <span className="card__price-dollar">$</span>
                {displayedPrice}
              </span>
            )}
          </div>
          <br />
          
          <div className="card__price-period">
            {options === "monthly" ? parser(payment) : (
              parser(payment) === "Per month" ? "per year" : parser(payment)
            )}
          </div>
        </div>
        <div className="card__button">
          {titleColor === "purple" ? (
            <Button
              color={"purple"}
              className="card__button"
              text={t(`pricingPage.contactButton`)}
              onClick={handleClick}
            />
          ) : (
            <Button
              color={titleColor !== "pink" ? titleColor : "pink_price"}
              className="card__button"
              text={t(`pricingPage.getStartedButton`)}
              onClick={handleClick}
            />
          )}
        </div>
        <div className="card__features">
          {monthlyHour && (
            <div className="card__feature">
              <div className="card__feature-icon">
                <i className="icon-hourglass" />
              </div>
              <div 
                className={`card__feature-text card__color card__color--${titleColor}`}
              >
                {monthlyHour} {t(`pricingPage.hoursMonth`)}
              </div>
            </div>
          )}
          {preferences && (
            <div className="card__feature">
              <div className="card__feature-icon">
                <i className="icon-settings" />
              </div>
              <div className="card__feature-text">
                {preferences.map((pref) => (
                  <div key={pref.id}>
                    <span>{pref.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {team && (
            <div className="card__feature">
              <div className="card__feature-icon">
                <i className="icon-users" />
              </div>
              <div className="card__feature-text">{team.join(" ")}</div>
            </div>
          )}
        </div>
      </div>
    </div>


  );
};