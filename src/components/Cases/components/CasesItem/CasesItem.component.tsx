import { useCallback, useEffect, useState } from "react";
import { Description, Service } from "../../../../types/service.type";
import "../../Cases.component.css";
import classNames from "classnames";

type Props = {
  caseItem: Service;
  setDescriptions: (descriptions: Description[]) => void;
  activeCaseId: number;
  setActiveCaseId: (id: number) => void;
};

export const CasesItem: React.FC<Props> = ({
  caseItem: { id, icon, name, descriptions },
  setDescriptions,
  activeCaseId,
  setActiveCaseId,
}) => {
  useEffect(() => {
    if (activeCaseId === id) {
      setDescriptions(descriptions);
    }
  }, [id, activeCaseId]);

  const backgroundClass = classNames("cases__background", {"cases__background--active": id === activeCaseId});

  const handleClick = useCallback((currentId: number) => {
    setActiveCaseId(currentId);
  }, [])

  return (
    <div className={backgroundClass}>
      <div className="cases__card" onClick={() => handleClick(id)}>
        <img
          src={`./services-icons/${icon}`}
          alt="services-icon"
          className="cases__card_icon"
        />
        <div className="cases__card_text">{name}</div>
      </div>
    </div>
  );
};
