import {crew} from "../../data/crew.json";
import "./Crew.component.css";
import { CrewList } from "./components/CrewList";

export const Crew = () => {
  return (
    <section className="crew">
      <div className="crew__container">
        <h2 className="crew__title h2">Crew</h2>
        <CrewList crewList={crew} />
      </div>
    </section>
  );
};
