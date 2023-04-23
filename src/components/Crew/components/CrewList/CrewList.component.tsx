import { Crew } from "../../../../types/crew.type";
import "../../Crew.component.css";
import { CrewItem } from "../CrewItem/CrewItem.component";

type Props = {
  crewList: Crew[];
};

export const CrewList: React.FC<Props> = ({ crewList }) => {
  return (
    <div className="crew__list">
      {crewList.map((item) => (
        <CrewItem key={item.id} crewItem={item} />
      ))}
    </div>
  );
};
