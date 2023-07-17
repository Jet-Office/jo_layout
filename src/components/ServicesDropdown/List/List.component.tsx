import { Description, Service } from "../../../types/servicesDropdown.type";
import "../ServicesDropdown.component.css";
import { Item } from "../Item";

type Props = {
  cases: Service[];
  setDescriptions: (descriptions: Description[]) => void;
  activeId: number;
  setActiveId: (id: number) => void;
  windowWidth: number;
};

export const List: React.FC<Props> = ({
  cases,
  setActiveId,
  setDescriptions,
  activeId,
  windowWidth,
}) => {
  return (
    <div className="cases__list">
      {cases.map((item) => (
        <Item
          key={item.id}
          windowWidth={windowWidth}
          item={item}
          setActiveId={setActiveId}
          setDescriptions={setDescriptions}
          activeId={activeId}
        />
      ))}
    </div>
  );
};
