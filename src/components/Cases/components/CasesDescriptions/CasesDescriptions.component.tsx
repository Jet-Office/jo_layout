import "../../Cases.component.css";
import { Description } from "../../../../types/service.type";

type Props = {
  descriptions: Description[];
};

export const CasesDescription: React.FC<Props> = ({ descriptions }) => {
  return (
    <div className="cases__descriptions">
      {descriptions.map(({ id, name, text }) => (
        <div key={id} className="cases__description_wrapper">
          <p className="cases__card_text">{`${id}. ${name}:`}</p>
          <ul className="cases__description_list">
            {text.map((item) => (
              <li key={id} className="cases__card_text">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
