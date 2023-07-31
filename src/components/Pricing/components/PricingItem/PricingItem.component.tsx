import classNames from "classnames";
import { Price } from "../../../../types/price.type";

import "../../Pricing.component.css";

import { Button } from "../../../Button";

import { Space } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import useHandleClick from "../../../../helpers/openModal";

type Props = {
  priceItem: Price;
  options: string;
};

export const PriceItem: React.FC<Props> = ({
  priceItem: {
    name,
    titleColor,
    mostPopular,
    description,
    monthlyPrice,
    payment,
    monthlyHour,
    preferences,
    frealancersPrice,
    team,
    yearlyPrice,
  },
  options,
}) => {
  const handleClick = useHandleClick();
  const [price, setPrice] = useState(monthlyPrice);
  useEffect(() => {
    if (options === "monthly") {
      setPrice(monthlyPrice);
    } else {
      setPrice(yearlyPrice);
    }
  }, [monthlyPrice, options, yearlyPrice]);

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
      "pricing__card--business": name === "Business",
      "pricing__card--startup": name === "Startup",
      "pricing__card--personal": name === "Personal",
      "pricing__card--calculator": price === "calculate",
      "pricing__card--hourly": name === "Hourly rate",
    }
  );
  const monthlyClass = classNames(
    "pricing__card_monthly",
    `pricing--${titleColor}`
  );

  return (
    <div className={backgroundClass}>
      <div className="pricing__card" style={{ fontFamily: "inherit" }}>
        <div className={`pricing__card_content ${titleColor}`}>
            <Space direction="vertical" size={30} align="center">
              <div className="pricing__card_head">
                <h3 className={titleClass}>{name}</h3>
                <p className="pricing__card_description">{description}</p>
              </div>
              {price !== "calculate" ? (
                <div className="pricing__card_info">
                  <div className={priceClass} translate="no">
                    {price}
                  </div>
                  <p className="pricing__card_payment">{payment}</p>
                </div>
              ) : (
                <div className="pricing__card_info">
                  <div className={priceClass}>
                    <img
                      src="/pricing-icons/calculator.svg"
                      width={70}
                      height={70}
                      alt="calculator"
                      className="pricing__calculator_icon"
                    />
                  </div>
                  <p className="pricing__card_payment">{payment}</p>
                </div>
              )}
            </Space>
            <Space direction="vertical" size={30} align="center">
              <div className="pricing__button">
                <Button
                  onClick={handleClick}
                  color={titleColor !== "pink" ? titleColor : "pink_price"}
                  text="Get started"
                />
              </div>

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
                          <Tooltip
                            placement="top"
                            title={preference.description}
                            color="#14181c"
                            style={{ fontFamily: "inherit" }}
                          >
                            {/* <InfoCircleOutlined
                              style={{
                                color: "#ccc",
                                marginLeft: "10px",
                                cursor: "pointer",
                              }}
                            /> */}
                          </Tooltip>
                        </div>
                      ))}
                    </>
                  )}
                  {frealancersPrice > 0 && (
                    <div className="pricing__card_text_container">
                      <div className="pricing__card_preference">Freelancers</div>
                      <Tooltip
                        placement="top"
                        title="Jet Talent Hub is a database of freelancers we tap into for fire drills. Freelancers' work hours beyond the package hours are billed separately (usually from a deposit)."
                        color="#14181c"
                        style={{ fontFamily: "inherit" }}
                      >
                        {/* <InfoCircleOutlined
                          style={{
                            color: "#ccc",
                            marginLeft: "5px",
                            marginRight: "5px",
                            cursor: "pointer",
                          }}
                        /> */}
                      </Tooltip>
                      <p
                        className="pricing__card_preference"
                        translate="no"
                      >{`$${frealancersPrice}/h`}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="pricing__card_preferences last">
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
            </Space>
        </div>
      </div>
    </div>
  );
};
