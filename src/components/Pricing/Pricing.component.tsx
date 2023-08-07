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
    <section className="container pricing" id="pricing" ref={activePageRef}>
         <div className="pricing__flex">
           <h2 className="pricing__title h2">Pricing</h2>
            <PricingSwitch setOptions={setOptions} />
         </div>
      <div className="pricing__container">
     
        <PricingList windowWidth={windowWidth} priceList={pricing} options={options} />
      </div>
    </section>
  );
};
