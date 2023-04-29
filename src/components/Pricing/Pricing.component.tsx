import { PricingList } from "./components/PricingList";
import {pricing} from "../../data/pricing.json"
import "./Pricing.component.css";

type Props = {
  windowWidth: number;
};

export const Pricing: React.FC<Props> = ({ windowWidth }) => {
  return (
    <section className="pricing ml_15" id="pricing">
      <div className="pricing__container">
        <h2 className="pricing__title h2">Pricing</h2>
        <PricingList windowWidth={windowWidth} priceList={pricing} />
      </div>
    </section>
  );
};
