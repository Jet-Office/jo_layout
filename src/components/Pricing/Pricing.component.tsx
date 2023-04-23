import { PricingList } from "./components/PricingList";
import {pricing} from "../../data/pricing.json"
import "./Pricing.component.css";

export const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container">
        <h2 className="pricing__title h2">Pricing</h2>
        <PricingList priceList={pricing} />
      </div>
    </section>
  );
};
