import { Crew } from "../../../../types/crew.type";
import "../../Crew.component.css";

type Props = {
  crewItem: Crew;
};

export const CrewItem: React.FC<Props> = ({ crewItem: { avatar, name, role } }) => {
  return (
    <div className="crew__item">
      <div className="crew__img_container">
        <img
          src={`./crew-photos/${avatar}`}
          className="crew__img"
          alt=""
        />
      </div>
      <div className="crew__description">
        <p className="crew__name">{name}</p>
        <p className="crew__role">{role}</p>
      </div>
    </div>
  );
};
