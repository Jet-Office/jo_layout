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
    SwitchOptions.OPTION2
  );

  const handleSwitchClick = (options: SwitchOptions) => {
    setActiveOption(options);
    setOptions(options)
  };

  return (
    <div className="switch-background">
      <div className="switch-container">
        <div
          className="switch-toggle_item first"
          style={{
            background:
              activeOption === SwitchOptions.OPTION1
                ? "#e961ff"
                : "transparent",
          }}
          onClick={() => handleSwitchClick(SwitchOptions.OPTION1)}
        >
          <div
            className="switch-text"
            style={{
              color:
                activeOption === SwitchOptions.OPTION1 ? "#14181c" : "#e961ff",
            }}
          >
            {SwitchOptions.OPTION1}
          </div>
        </div>
        <div
          className="switch-toggle_item second"
          style={{
            background:
              activeOption === SwitchOptions.OPTION2
                ? "#e961ff"
                : "transparent"
          }}
          onClick={() => handleSwitchClick(SwitchOptions.OPTION2)}
        >
          <div
            className="switch-text"
            style={{
              color:
                activeOption === SwitchOptions.OPTION2 ? "#14181c" : "#e961ff"
            }}
          >
            {SwitchOptions.OPTION2}
          </div>
        </div>
      </div>
    </div>
  );
}
