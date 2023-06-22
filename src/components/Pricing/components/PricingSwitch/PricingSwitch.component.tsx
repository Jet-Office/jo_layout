import React, { useState } from "react";
import "./PricingSwitch.css";

enum SwitchOptions {
  OPTION1 = "monthly",
  OPTION2 = "yearly"
}

type Props = {
  setOptions: (options: string) => void;
}

export const PricingSwitch: React.FC<Props> = ({ setOptions }) => {
  const [activeOption, setActiveOption] = useState<SwitchOptions>(
    SwitchOptions.OPTION1
  );

  const handleSwitchClick = (options: SwitchOptions) => {
    setActiveOption(options);
    setOptions(options)
  };

  return (
    <div className="switch-background">
      <div className="switch-container">
        <div
          className="switch-toggle_item"
          style={{
            background:
              activeOption === SwitchOptions.OPTION1
                ? "#E961FF"
                : "transparent",
          }}
          onClick={() => handleSwitchClick(SwitchOptions.OPTION1)}
        >
          <div
            className="switch-text"
            style={{
              color:
                activeOption === SwitchOptions.OPTION1 ? "#14181c" : "#fff",
            }}
          >
            {SwitchOptions.OPTION1}
          </div>
        </div>
        <div
          className="switch-toggle_item"
          style={{
            background:
              activeOption === SwitchOptions.OPTION2
                ? "#E961FF"
                : "transparent"
          }}
          onClick={() => handleSwitchClick(SwitchOptions.OPTION2)}
        >
          <div
            className="switch-text"
            style={{
              color:
                activeOption === SwitchOptions.OPTION2 ? "#14181c" : "#fff"
            }}
          >
            {SwitchOptions.OPTION2}
          </div>
        </div>
      </div>
    </div>
  );
}
