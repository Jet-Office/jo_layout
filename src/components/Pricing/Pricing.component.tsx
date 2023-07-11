import { PricingList } from "./components/PricingList";
import {pricing} from "../../data/pricing.json"
import "./Pricing.component.css";
import { PricingSwitch } from "./components/PricingSwitch/PricingSwitch.component";
import { useState } from "react";


type Props = {
  windowWidth: number;
  activePageRef: React.RefObject<HTMLElement>;
};

export const Pricing: React.FC<Props> = ({ windowWidth, activePageRef }) => {
  const [options, setOptions] = useState('yearly');

  return (
    <section className="pricing ml_15" id="pricing" ref={activePageRef}>
         <div className="pricing__flex container">
           <h2 className="pricing__title h2">Pricing</h2>
            <PricingSwitch setOptions={setOptions} />
         </div>
      <div className="pricing__container container">
     
        <PricingList windowWidth={windowWidth} priceList={pricing} options={options} />
      </div>
    </section>
  );
};
