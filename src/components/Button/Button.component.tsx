import { useContext} from "react";
import "./Button.component.css";
import { ModalContext } from "../../context/modalProvider";


type Props = {
  color: string;
  text: string;
};

export const Button: React.FC<Props> = ({ color, text }) => {
  const setIsViewModal = useContext(ModalContext)[1];

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsViewModal(true);
  };

  return (
    <button onClick={handleClick} className={`button button--${color}`}>
     {text}
    </button>
  );
};



