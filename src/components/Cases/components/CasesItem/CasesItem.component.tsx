import { useCallback, useEffect, useState } from "react";
import { Description, Service } from "../../../../types/service.type";
import "../../Cases.component.css";
import classNames from "classnames";
import { CasesDescription } from "../CasesDescriptions/CasesDescriptions.component";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

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
      
      if (windowWidth <= 930) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setActiveCaseId, windowWidth]
  );

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}>
      <motion.div custom={2} variants={animation} className={backgroundClass}>
        <div className="cases__card_wrapper">
          <div className={`cases__card`} onClick={() => handleClick(id)}>
            <div className="cases__card__wrapper">
              <img
                src={`/services-icons/${icon}`}
                alt="services-icon"
                className="cases__card_icon"
              />
              <div className="cases__card_text cases__card_header">{name}</div>
            </div>
            {windowWidth <= 930 && (
              <div className="cases__chevron_wrapper">
                <img
                  src="/helpers-icons/chevron-down.svg"
                  alt=""
                  className={chevronIconClassName}
                />
              </div>
            )}
          </div>
          {isOpen && <CasesDescription descriptions={descriptions} />}
        </div>
      </motion.div>
    </motion.div>
  );
};
