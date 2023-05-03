import "./Cases.component.css";
import { CasesList } from "./components/CasesList";
import { services } from "../../data/services.json"
import { useState } from "react";
import { Description } from "../../types/service.type";
import { CasesDescription } from "./components/CasesDescriptions/CasesDescriptions.component";

type Props = {
  windowWidth: number;
  casesPageRef: React.RefObject<HTMLElement>;
};

export const Cases: React.FC<Props> = ({ windowWidth, casesPageRef }) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeCaseId, setActiveCaseId] = useState(4);

  return (
    <section className="cases" id="cases" ref={casesPageRef}>
      <div className="cases__container">
        <h2 className="cases__title h2">Cases we can do</h2>
        <div className="cases__content">
            <CasesList windowWidth={windowWidth} cases={services} setActiveCaseId={setActiveCaseId} setDescriptions={setDescriptions} activeCaseId={activeCaseId} />
            {windowWidth > 641 && <CasesDescription descriptions={descriptions} />}
        </div>
      </div>
    </section>
  );
};
