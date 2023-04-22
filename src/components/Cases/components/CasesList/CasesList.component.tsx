import { Description, Service } from "../../../../types/service.type";
import "../../Cases.component.css";
import { CasesItem } from "../CasesItem";

type Props = {
  cases: Service[];
  setDescriptions: (descriptions: Description[]) => void;
  activeCaseId: number;
  setActiveCaseId: (id: number) => void;
};

export const CasesList: React.FC<Props> = ({ cases, setActiveCaseId, setDescriptions, activeCaseId }) => {
  return (
    <div className="cases__list">
      {cases.map((item) => (
        <CasesItem key={item.id} caseItem={item} setActiveCaseId={setActiveCaseId} setDescriptions={setDescriptions} activeCaseId={activeCaseId} />
      ))}
    </div>
  );
};
