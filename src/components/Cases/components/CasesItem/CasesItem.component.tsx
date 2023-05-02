import { useCallback, useEffect, useState } from "react";
import { Description, Service } from "../../../../types/service.type";
import "../../Cases.component.css";
import classNames from "classnames";
import { CasesDescription } from "../CasesDescriptions/CasesDescriptions.component";

type Props = {
  caseItem: Service;
  setDescriptions: (descriptions: Description[]) => void;
  activeCaseId: number;
  setActiveCaseId: (id: number) => void;
  windowWidth: number;
};

export const CasesItem: React.FC<Props> = ({
  caseItem: { id, icon, name, descriptions },
  setDescriptions,
  activeCaseId,
  setActiveCaseId,
  windowWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevronIconClassName = classNames("cases__chevron_icon", {
    "cases__chevron_icon--open": isOpen,
  });

  useEffect(() => {
    if (activeCaseId === id) {
      setDescriptions(descriptions);
    }
  }, [id, activeCaseId, setDescriptions, descriptions]);

  const backgroundClass = classNames("cases__background", {
    "cases__background--active": id === activeCaseId,
    opened: isOpen
  });

  const handleClick = useCallback(
    (currentId: number) => {
      setActiveCaseId(currentId);
      
      if (windowWidth <= 641) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setActiveCaseId, windowWidth]
  );

  return (
    <div className={backgroundClass}>
      <div className="cases__card_wrapper">
        <div className="cases__card" onClick={() => handleClick(id)}>
          <div className="cases__card_icon_wrapper">
            <img
              src={`./services-icons/${icon}`}
              alt="services-icon"
              className="cases__card_icon"
            />
          </div>
          <div className="cases__card_text">{name}</div>
          {windowWidth <= 641 && (
            <div className="cases__chevron_wrapper">
              <img
                src="./chevron-down.svg"
                alt=""
                className={chevronIconClassName}
              />
            </div>
          )}
        </div>
        {isOpen && <CasesDescription descriptions={descriptions} />}
      </div>
    </div>
  );
};
