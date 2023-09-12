import "./Cases.component.css";
import { services } from "../../data/services.json"
import { useEffect, useRef, useState } from "react";
import { Description } from "../../types/service.type";
import { CasesItem } from "./components/CasesItem";
import { CasesDescription } from "./components/CasesDescriptions/CasesDescriptions.component";

type Props = {
  windowWidth: number;
  casesPageRef: React.RefObject<HTMLElement>;
};

export const Cases: React.FC<Props> = ({ windowWidth, casesPageRef }) => {
  const [descriptions, setDescriptions] = useState<Description[]>([]);
  const [activeCaseId, setActiveCaseId] = useState(4);

  const сasesListRef = useRef<HTMLDivElement>(null);
  const casesContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (сasesListRef.current && casesContent.current && windowWidth > 930) {
      console.log(сasesListRef.current.offsetHeight);
      casesContent.current.style.height = `${сasesListRef.current.offsetHeight}px`;
    }
  }, [windowWidth]);
  
  return (
    <section className="cases" id="cases" ref={casesPageRef}>
      <div className="cases__container container">
        <h2 className="cases__title h2">Cases we can do</h2>
        <div ref={casesContent} className="cases__content">
          <div ref={сasesListRef} className="cases__list">
            {services.map((item) => (
              <CasesItem key={item.id} windowWidth={windowWidth} caseItem={item} setActiveCaseId={setActiveCaseId} setDescriptions={setDescriptions} activeCaseId={activeCaseId} />
            ))}
          </div>
          <div className="cases-desc-container">
            {windowWidth > 930 && <CasesDescription descriptions={descriptions} />}
            </div>
        </div>
      </div>
    </section>
  );
};
