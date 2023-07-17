import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Description, Service } from "../../../types/servicesDropdown.type";
import { Descriptions } from "../Descriptions/Descriptions.component";
import "../ServicesDropdown.component.css";

type Props = {
  item: Service;
  setDescriptions: (descriptions: Description[]) => void;
  activeId: number;
  setActiveId: (id: number) => void;
  windowWidth: number;
  activeID: number;
};

export const Item: React.FC<Props> = ({
  item: { id, name, icon, descriptions },
  setDescriptions,
  activeId,
  setActiveId,
  windowWidth,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardClassName = classNames("sidebar__card", {
    active: id === activeId,
  });

  useEffect(() => {
    if (activeId === id) {
      setDescriptions(descriptions);
    }
  }, [id, activeId, setDescriptions, descriptions]);

  const backgroundClass = classNames("slidebar--active", {
    "slidebar__card--active": id === activeId,
    opened: isOpen,
  });

  const handleClick = useCallback(
    (currentId: number) => {
      setActiveId(currentId);

      if (windowWidth <= 641) {
        setIsOpen(!isOpen);
      }
    },
    [isOpen, setActiveId, windowWidth]
  );

  return (
    <div className={cardClassName} onClick={() => handleClick(id)}>
      <img src={`/services-icons/${icon}`} alt="dropdown-icons" />
      <span>{name}</span>

      {isOpen && <Descriptions descriptions={descriptions} />}
    </div>
  );
};
