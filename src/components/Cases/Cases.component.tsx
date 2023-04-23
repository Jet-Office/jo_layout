import "./Cases.component.css";
import { CasesList } from "./components/CasesList";
import { services } from "../../data/services.json"
import { useState } from "react";
import { Description } from "../../types/service.type";
import { CasesDescription } from "./components/CasesDescriptions/CasesDescriptions.component";

export const Cases = () => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeCaseId, setActiveCaseId] = useState(4);

  return (
    <section className="cases" id="cases">
      <div className="cases__container">
        <h2 className="cases__title h2">Cases we can do</h2>
        <div className="cases__content">
            <CasesList cases={services} setActiveCaseId={setActiveCaseId} setDescriptions={setDescriptions} activeCaseId={activeCaseId} />
            <CasesDescription descriptions={descriptions} />
        </div>
      </div>
    </section>
  );
};
